import { netlogoColorToHex, netlogoColorToRGBA } from "../helpers/colors";
import { ColorMode } from "./color-mode";
import { Localized } from "../color-picker";
/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class GridMode extends ColorMode {
    constructor(parent, state, setState) {
        super(parent, state, setState);
        /** colorArray: an array of netlogo colors in the grid */
        this.colorArray = [];
        /** textElements: Array of SVGTextElements that are the "numbers" of each cell in the grid. */
        this.textElements = [];
        this.init();
    }
    /** createGrid: creates the grid of colors */
    createGrid() {
        function hover(e) {
            if (e.target instanceof SVGRectElement) {
                let rect = e.target;
                let hoverColor;
                if (Number(rect.dataset.value) % colorsPerRow <
                    (colorsPerRow + 1) / 3) {
                    hoverColor = 'white'; // the color should be white
                }
                else {
                    hoverColor = 'black';
                }
                rect.setAttribute('stroke-width', '0.08');
                rect.setAttribute('stroke', hoverColor);
            }
        }
        function hoverOut(e) {
            if (e.target instanceof SVGRectElement) {
                let rect = e.target;
                rect.setAttribute('stroke-width', '');
                rect.setAttribute('stroke', '');
            }
        }
        function handleChangeColor(e) {
            if (e.target instanceof SVGRectElement) {
                let rect = e.target;
                let colorIndex = Number(rect.dataset.value);
                // Convert the selected color to RGBA format
                let newColor = netlogoColorToRGBA(this.colorArray[colorIndex]);
                // netlogoColor defaults to 255 for the alpha value
                newColor[3] = this.state.currentColor[3];
                // Use setState to update the currentColor in the component's state
                this.setState({ currentColor: newColor, colorType: "netlogo" });
            }
        }
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        // the height of the svg is 16.5 rem, and the width is 21rem, we set the viewbox to be equal to that so its a 1:1 ratio
        svg.setAttribute('viewBox', '0 0 21 16.5');
        // create the cells 
        let numRows = 14;
        let colorsPerRow = 10 / this.state.increment + 1;
        let cellWidth = 21 / colorsPerRow;
        let cellHeight = 16.5 / numRows;
        let textFontSize = this.state.increment == 1 ? 0.6 : 0.4;
        for (let j = 0; j < numRows; j++) {
            // generate the row
            for (let i = 0; i < colorsPerRow; i++) {
                let number = j * 10 + i * this.state.increment;
                if (i == colorsPerRow - 1) {
                    number -= 0.1;
                }
                this.colorArray.push(number);
                let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.classList.add('cp-grid-cell');
                rect.setAttribute('x', `${cellWidth * i}`);
                rect.setAttribute('y', `${cellHeight * j}`);
                rect.setAttribute('width', `${cellWidth}`);
                rect.setAttribute('height', `${cellHeight}`);
                rect.setAttribute('fill', netlogoColorToHex(number));
                rect.setAttribute('data-value', '' + (j * colorsPerRow + i)); //we are storing the index (row major order) of the cell's color in the corresponding colorArray
                rect.addEventListener('mouseover', hover);
                rect.addEventListener('mouseout', hoverOut);
                rect.addEventListener('click', handleChangeColor.bind(this));
                svg.appendChild(rect);
                // Create and append text element for each rect
                if (this.state.increment > 0.1) {
                    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', `${cellWidth * i + cellWidth / 2}`);
                    text.setAttribute('y', `${cellHeight * j + cellHeight / 2}`);
                    if (i < (colorsPerRow + 1) / 3) {
                        text.setAttribute('fill', 'white');
                    }
                    text.setAttribute('dominant-baseline', 'middle');
                    text.setAttribute('text-anchor', 'middle');
                    text.classList.add('cp-grid-text');
                    text.textContent = `${number}`;
                    text.setAttribute('visibility', this.state.showNumbers ? 'visible' : 'hidden');
                    text.setAttribute('font-size', textFontSize.toString());
                    this.textElements.push(text); // pushed to the list to allow toggling visibility 
                    svg.appendChild(text);
                }
            }
        }
        return svg;
    }
    /** toDOM: creates the body of the Grid */
    toDOM() {
        this.parent.innerHTML = '';
        let gridContainer = document.createElement('div');
        gridContainer.classList.add('cp-grid-cont');
        gridContainer.appendChild(this.createGrid());
        let spaceContainer = document.createElement('div');
        spaceContainer.classList.add("cp-space-container");
        spaceContainer.appendChild(gridContainer);
        let incrementBtns = `
      <div class="cp-grid-btn-cont"><div class="cp-increment-cont"><button class="cp-numbers-btn"></button><span class="cp-increment-label">${Localized('Numbers')}</span></div><div class="cp-increment-cont"><div class="cp-btn-label-cont"><button data-increment="1" class="cp-numbers-btn cp-numbers-clicked"></button><span class="cp-increment-label">1</span></div><div class="cp-btn-label-cont"><button data-increment="0.5" class="cp-numbers-btn"></button><span class="cp-increment-label">0.5</span></div><div class="cp-btn-label-cont"><button data-increment="0.1" class="cp-numbers-btn"></button><span class="cp-increment-label">0.1</span></div><span class="cp-increment-label">${Localized('Increment')}</span></div></div>
      `;
        spaceContainer.insertAdjacentHTML('beforeend', incrementBtns);
        this.parent.appendChild(spaceContainer);
    }
    /** updateIncrementApperance: updates the increment button apperance based on which increment is on */
    updateIncrementAppearance() {
        var _a;
        const incrementBtns = this.parent.querySelectorAll('.cp-numbers-btn');
        incrementBtns[0].classList.toggle('cp-numbers-clicked', this.state.showNumbers);
        for (let i = 1; i < incrementBtns.length; i++) {
            const btn = incrementBtns[i];
            // Retrieve the data-increment value
            const incrementValue = parseFloat((_a = btn.getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
            const isSelected = incrementValue === this.state.increment;
            btn.classList.toggle('cp-numbers-clicked', isSelected);
        }
        ;
    }
    /** attachEventListeners: Attaches the event listeners to the GridMode body */
    attachEventListeners() {
        const gridBtns = this.parent.querySelectorAll('.cp-numbers-btn');
        // event listener of the numbers button 
        gridBtns[0].addEventListener('click', () => {
            this.setState({ showNumbers: !this.state.showNumbers });
            this.toggleTextVisibility();
            this.updateIncrementAppearance();
        });
        // the increment buttons 
        for (let i = 1; i < gridBtns.length; i++) {
            gridBtns[i].addEventListener('click', () => {
                var _a;
                let increment = parseFloat((_a = gridBtns[i].getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
                this.setState({ increment: increment });
                this.state.increment = increment; // weird bug, did we create a copy of the state?
                // reset the colorArray
                this.colorArray = [];
                this.init();
            });
        }
    }
    /** toggleTextVisibility: toggles the text visibility based on state of numbers */
    toggleTextVisibility() {
        this.state.showNumbers ? this.textElements.forEach((text) => text.setAttribute('visibility', 'visible')) : this.textElements.forEach((text) => text.setAttribute('visibility', 'hidden'));
    }
    /** init: initializes a grid mode  */
    init() {
        this.toDOM();
        this.updateIncrementAppearance();
        this.attachEventListeners();
    }
}
