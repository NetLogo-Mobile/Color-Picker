import { netlogoColorToHex, netlogoColorToRGBA } from "../helpers/colors";
import { ColorMode } from "./ColorMode";
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
                // Use setState to update the currentColor in the component's state
                this.setState({ currentColor: newColor });
            }
        }
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        // the height of the svg is 14.01 rem, and the width is 20rem, we set the viewbox to be equal to that so its a 1:1 ratio
        svg.setAttribute('viewBox', '0 0 20 14.01');
        // create the cells 
        let numRows = 14;
        let colorsPerRow = 10 / this.state.increment + 1;
        let cellWidth = 20 / colorsPerRow;
        let cellHeight = 14.01 / numRows;
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
        this.parent.replaceChildren();
        let gridContainer = document.createElement('div');
        gridContainer.classList.add('cp-grid-cont');
        gridContainer.appendChild(this.createGrid());
        let spaceContainer = document.createElement('div');
        spaceContainer.classList.add("cp-space-container");
        // create the container for grid buttons
        let gridBtnCont = document.createElement('div');
        gridBtnCont.classList.add('cp-grid-btn-cont');
        spaceContainer.appendChild(gridContainer);
        this.parent.appendChild(spaceContainer);
        // Container for increment buttons
        let incrementBtnCont = document.createElement('div');
        incrementBtnCont.classList.add('cp-increment-cont');
        // Container for numbers button
        let numbersBtnCont = document.createElement('div');
        numbersBtnCont.classList.add('cp-increment-cont');
        // create numbers button
        let numbersBtn = document.createElement('button');
        numbersBtn.classList.add('cp-numbers-btn');
        let numbersLabel = document.createElement('span');
        numbersLabel.textContent = "Numbers";
        numbersLabel.classList.add('cp-increment-label');
        numbersBtnCont.appendChild(numbersBtn);
        numbersBtnCont.appendChild(numbersLabel);
        const increments = ["1", "0.5", "0.1"]; // Array of increment values
        increments.forEach((inc) => {
            let btnLabelCont = document.createElement('div');
            btnLabelCont.classList.add('cp-btn-label-cont');
            let btn = document.createElement('button');
            btn.setAttribute('data-increment', inc);
            btn.classList.add('cp-numbers-btn');
            let label = document.createElement('span');
            label.textContent = inc;
            label.classList.add('cp-increment-label');
            btnLabelCont.appendChild(btn);
            btnLabelCont.appendChild(label);
            incrementBtnCont.appendChild(btnLabelCont);
        });
        let incrementLabel = document.createElement('span');
        incrementLabel.textContent = "Increment";
        incrementLabel.classList.add('cp-increment-label');
        incrementBtnCont.appendChild(incrementLabel);
        gridBtnCont.appendChild(numbersBtnCont);
        gridBtnCont.appendChild(incrementBtnCont);
        spaceContainer.appendChild(gridBtnCont);
    }
    /** updateIncrementApperance: updates the increment button apperance based on which increment is on */
    updateIncrementAppearance() {
        var _a;
        const incrementBtns = document.querySelectorAll('.cp-numbers-btn');
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
        const gridBtns = document.querySelectorAll('.cp-numbers-btn');
        // event listener of the numbers button 
        gridBtns[0].addEventListener('click', () => {
            this.setState({ showNumbers: !this.state.showNumbers });
            this.state.showNumbers = !this.state.showNumbers;
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
