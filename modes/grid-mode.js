import { netlogoColorToHex, netlogoColorToRGBA, rgbToNetlogo } from "../helpers/colors";
import { ColorMode } from "./color-mode";
import { Localized } from "../color-picker";
export class GridMode extends ColorMode {
    constructor(parent, state, setState) {
        super(parent, state, setState);
        /** colorArray: an array of netlogo colors in the grid */
        this.colorArray = [];
        /** rectArray: a 2D array of grid rects */
        this.rectArray = [];
        /** textElements: Array of SVGTextElements that are the "numbers" of each cell in the grid. */
        this.textElements = [];
        /** selectedRect: The currently selected SVGRectElement */
        this.selectedRect = null;
        this.init();
    }
    /** createGrid: creates the grid of colors */
    createGrid() {
        const colorsPerRow = 10 / this.state.increment + 1;
        const numRows = 14;
        const cellWidth = 21 / colorsPerRow;
        const cellHeight = 16.5 / numRows;
        const textFontSize = this.state.increment == 1 ? 0.6 : 0.4;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 21 16.5');
        this.rectArray = []; // Initialize 2D rectArray
        // Event Handlers
        const hover = (e) => {
            if (e.target instanceof SVGRectElement && e.target !== this.selectedRect) {
                const rect = e.target;
                const value = Number(rect.dataset.value);
                const hoverColor = (value % colorsPerRow < (colorsPerRow + 1) / 3) ? 'white' : 'black';
                rect.setAttribute('stroke-width', '0.08');
                rect.setAttribute('stroke', hoverColor);
            }
        };
        const hoverOut = (e) => {
            if (e.target instanceof SVGRectElement && e.target !== this.selectedRect) {
                const rect = e.target;
                rect.setAttribute('stroke-width', '');
                rect.setAttribute('stroke', '');
            }
        };
        const handleChangeColor = (e) => {
            if (e.target instanceof SVGRectElement) {
                const rect = e.target;
                const colorIndex = Number(rect.dataset.value);
                const newColor = netlogoColorToRGBA(this.colorArray[colorIndex]);
                newColor[3] = this.state.currentColor[3];
                this.setState({ currentColor: newColor, colorType: "netlogo" });
                // Update selectedRect
                if (this.selectedRect) {
                    // Remove gold border from previously selected rect
                    this.selectedRect.setAttribute('stroke-width', '');
                    this.selectedRect.setAttribute('stroke', '');
                    this.selectedRect.style.filter = 'none';
                }
                rect.style.filter = 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))';
                this.selectedRect = rect;
            }
        };
        // Create grid cells
        for (let j = 0; j < numRows; j++) {
            const row = []; // Create a new row
            for (let i = 0; i < colorsPerRow; i++) {
                let number = j * 10 + i * this.state.increment;
                if (i == colorsPerRow - 1) {
                    number -= 0.1;
                }
                this.colorArray.push(number);
                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.classList.add('cp-grid-cell');
                rect.setAttribute('x', `${cellWidth * i}`);
                rect.setAttribute('y', `${cellHeight * j}`);
                rect.setAttribute('width', `${cellWidth}`);
                rect.setAttribute('height', `${cellHeight}`);
                rect.setAttribute('fill', netlogoColorToHex(number));
                rect.setAttribute('data-value', `${j * colorsPerRow + i}`);
                rect.addEventListener('mouseover', hover);
                rect.addEventListener('mouseout', hoverOut);
                rect.addEventListener('click', handleChangeColor);
                svg.appendChild(rect);
                row.push(rect); // Add the rect to the current row
                // Create and append text element for each rect
                if (this.state.increment > 0.1) {
                    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', `${cellWidth * i + cellWidth / 2}`);
                    text.setAttribute('y', `${cellHeight * j + cellHeight / 2}`);
                    text.setAttribute('fill', (i < (colorsPerRow + 1) / 3) ? 'white' : 'black');
                    text.setAttribute('dominant-baseline', 'middle');
                    text.setAttribute('text-anchor', 'middle');
                    text.classList.add('cp-grid-text');
                    text.textContent = `${number}`;
                    text.setAttribute('visibility', this.state.showNumbers ? 'visible' : 'hidden');
                    text.setAttribute('font-size', textFontSize.toString());
                    this.textElements.push(text);
                    svg.appendChild(text);
                }
            }
            this.rectArray.push(row); // Add the row to the 2D rectArray
        }
        return svg;
    }
    /** toDOM: creates the body of the Grid */
    toDOM() {
        this.parent.innerHTML = '';
        const gridContainer = document.createElement('div');
        gridContainer.classList.add('cp-grid-cont');
        gridContainer.appendChild(this.createGrid());
        const spaceContainer = document.createElement('div');
        spaceContainer.classList.add("cp-space-container");
        spaceContainer.appendChild(gridContainer);
        const incrementBtns = `
        <div class="cp-grid-btn-cont">
            <div class="cp-increment-cont">
                <button class="cp-numbers-btn"></button>
                <span class="cp-increment-label">${Localized('Numbers')}</span>
            </div>
            <div class="cp-increment-cont">
                <div class="cp-btn-label-cont">
                    <button data-increment="1" class="cp-numbers-btn cp-numbers-clicked"></button>
                    <span class="cp-increment-label">1</span>
                </div>
                <div class="cp-btn-label-cont">
                    <button data-increment="0.5" class="cp-numbers-btn"></button>
                    <span class="cp-increment-label">0.5</span>
                </div>
                <div class="cp-btn-label-cont">
                    <button data-increment="0.1" class="cp-numbers-btn"></button>
                    <span class="cp-increment-label">0.1</span>
                </div>
                <span class="cp-increment-label">${Localized('Increment')}</span>
            </div>
        </div>
        `;
        spaceContainer.insertAdjacentHTML('beforeend', incrementBtns);
        this.parent.appendChild(spaceContainer);
    }
    /** updateIncrementAppearance: updates the increment button appearance based on which increment is on */
    updateIncrementAppearance() {
        var _a;
        const incrementBtns = this.parent.querySelectorAll('.cp-numbers-btn');
        incrementBtns[0].classList.toggle('cp-numbers-clicked', this.state.showNumbers);
        for (let i = 1; i < incrementBtns.length; i++) {
            const btn = incrementBtns[i];
            const incrementValue = parseFloat((_a = btn.getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
            const isSelected = incrementValue === this.state.increment;
            btn.classList.toggle('cp-numbers-clicked', isSelected);
        }
    }
    /** attachEventListeners: Attaches the event listeners to the GridMode body */
    attachEventListeners() {
        const gridBtns = this.parent.querySelectorAll('.cp-numbers-btn');
        // Event listener for the numbers button 
        gridBtns[0].addEventListener('click', () => {
            this.setState({ showNumbers: !this.state.showNumbers });
            this.toggleTextVisibility();
            this.updateIncrementAppearance();
        });
        // Event listeners for the increment buttons 
        for (let i = 1; i < gridBtns.length; i++) {
            gridBtns[i].addEventListener('click', () => {
                var _a;
                const increment = parseFloat((_a = gridBtns[i].getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
                this.setState({ increment: increment });
                // Reset the colorArray and reinitialize the grid
                this.colorArray = [];
                this.init();
            });
        }
    }
    /** toggleTextVisibility: toggles the text visibility based on state of numbers */
    toggleTextVisibility() {
        const visibility = this.state.showNumbers ? 'visible' : 'hidden';
        this.textElements.forEach((text) => text.setAttribute('visibility', visibility));
    }
    /** init: initializes a grid mode  */
    init() {
        this.toDOM();
        this.setSelectedRect();
        this.updateIncrementAppearance();
        this.attachEventListeners();
    }
    /** setSelectedRect: sets the selectedRect at the beginning, based on the closest netlogo color */
    setSelectedRect() {
        if (this.rectArray.length > 0) {
            const colorsPerRow = this.rectArray[0].length;
            const netlogoColor = rgbToNetlogo(this.state.currentColor.slice(0, 3));
            console.log(`Calculated NetLogo color: ${netlogoColor}`);
            let closestColorIndex = 0;
            let smallestDifference = Infinity;
            this.colorArray.forEach((color, index) => {
                const difference = Math.abs(color - netlogoColor);
                if (difference < smallestDifference) {
                    smallestDifference = difference;
                    closestColorIndex = index;
                }
            });
            const rowIndex = Math.floor(closestColorIndex / colorsPerRow);
            const colIndex = closestColorIndex % colorsPerRow;
            const closestRect = this.rectArray[rowIndex][colIndex];
            if (this.selectedRect) {
                this.selectedRect.setAttribute('stroke-width', '');
                this.selectedRect.setAttribute('stroke', '');
                this.selectedRect.style.filter = 'none';
            }
            const value = Number(closestRect.dataset.value);
            const strokeColor = (value % colorsPerRow < (colorsPerRow + 1) / 3) ? 'white' : 'black';
            closestRect.style.filter = 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))';
            closestRect.setAttribute('stroke-width', '0.08');
            closestRect.setAttribute('stroke', strokeColor);
            this.selectedRect = closestRect;
        }
    }
}
