import { netlogoColorToHex, netlogoColorToRGBA } from "../helpers/colors";
import { ColorMode } from "./color-mode";
import { ColorPickerState } from "./color-mode";
import { Localized } from "../color-picker";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class GridMode extends ColorMode {
    /** colorArray: an array of netlogo colors in the grid */
    private colorArray: number[] = [];
    /** textElements: Array of SVGTextElements that are the "numbers" of each cell in the grid. */
    private textElements: SVGTextElement[] = [];
    /** selectedRect: The currently selected SVGRectElement */
    private selectedRect: SVGRectElement | null = null;

    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void){
        super(parent, state, setState);
        this.init();
    }

    /** createGrid: creates the grid of colors */
    public createGrid() : SVGSVGElement {
        const colorsPerRow = 10 / this.state.increment + 1;
        const numRows: number = 14;
        const cellWidth = 21 / colorsPerRow;
        const cellHeight = 16.5 / numRows;
        const textFontSize = this.state.increment == 1 ? 0.6 : 0.4;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 21 16.5');

        // Event Handlers
        const hover = (e: Event) => {
            if (e.target instanceof SVGRectElement && e.target !== this.selectedRect) {
                const rect = e.target;
                const value = Number(rect.dataset.value);
                const hoverColor = (value % colorsPerRow < (colorsPerRow + 1) / 3) ? 'white' : 'black';
                rect.setAttribute('stroke-width', '0.08');
                rect.setAttribute('stroke', hoverColor);
            }
        };

        const hoverOut = (e: Event) => {
            if (e.target instanceof SVGRectElement && e.target !== this.selectedRect) {
                const rect = e.target;
                rect.setAttribute('stroke-width', '');
                rect.setAttribute('stroke', '');
            }
        };

        const handleChangeColor = (e: Event) => {
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
                    this.selectedRect.style.filter = 'none'
                }

                rect.style.filter = 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))';
                this.selectedRect = rect;
            }
        };

        // Create grid cells
        for (let j = 0; j < numRows; j++) {
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

                // Create and append text element for each rect
                if(this.state.increment > 0.1) {
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
        }

        return svg;
    }

    /** toDOM: creates the body of the Grid */
    public toDOM() : void {
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
    public updateIncrementAppearance(): void {
        const incrementBtns = this.parent.querySelectorAll('.cp-numbers-btn');
        incrementBtns[0].classList.toggle('cp-numbers-clicked', this.state.showNumbers);
        for(let i = 1; i < incrementBtns.length; i++) {
            const btn = incrementBtns[i];
            const incrementValue = parseFloat(btn.getAttribute('data-increment') ?? "0");
            const isSelected = incrementValue === this.state.increment;
            btn.classList.toggle('cp-numbers-clicked', isSelected);
        }
    }

    /** attachEventListeners: Attaches the event listeners to the GridMode body */
    private attachEventListeners() {
        const gridBtns = this.parent.querySelectorAll('.cp-numbers-btn');
        // Event listener for the numbers button 
        gridBtns[0].addEventListener('click', () => {
            this.setState({showNumbers: !this.state.showNumbers});
            this.toggleTextVisibility();
            this.updateIncrementAppearance();
        });
        // Event listeners for the increment buttons 
        for(let i = 1; i < gridBtns.length; i++) {
            gridBtns[i].addEventListener('click', () => {
                const increment = parseFloat(gridBtns[i].getAttribute('data-increment') ?? "0");
                this.setState({increment: increment});
                // Reset the colorArray and reinitialize the grid
                this.colorArray = [];
                this.init();
            });
        }
    }

    /** toggleTextVisibility: toggles the text visibility based on state of numbers */
    private toggleTextVisibility() {
        const visibility = this.state.showNumbers ? 'visible' : 'hidden';
        this.textElements.forEach((text) => text.setAttribute('visibility', visibility));
    }

    /** init: initializes a grid mode  */
    private init() {
        this.toDOM();
        this.updateIncrementAppearance();
        this.attachEventListeners();
    }
}