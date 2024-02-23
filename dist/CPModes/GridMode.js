import { netlogoColorToHex, netlogoColorToRGBA } from "../helpers/colors";
import { ColorMode } from "./ColorMode";
/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class GridMode extends ColorMode {
    constructor(currentColor, parent, setState) {
        super(currentColor, parent, setState);
        /** colorArray: an array of netlogo colors in the grid */
        this.colorArray = [];
        this.increment = 1;
        this.parent.replaceChildren();
        this.toDOM();
    }
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
        let colorsPerRow = 10 / this.increment + 1;
        let cellWidth = 20 / colorsPerRow;
        let cellHeight = 14.01 / numRows;
        for (let j = 0; j < numRows; j++) {
            // generate the row
            for (let i = 0; i < colorsPerRow; i++) {
                let number = j * 10 + i * this.increment;
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
            }
        }
        return svg;
    }
    /** toDOM: creates the body of the Grid */
    toDOM() {
        let gridContainer = document.createElement('div');
        gridContainer.classList.add('cp-grid-cont');
        gridContainer.appendChild(this.createGrid());
        this.parent.appendChild(gridContainer);
        // create the container for grid buttons
        let gridBtnCont = document.createElement('div');
        gridBtnCont.classList.add('cp-grid-btn-cont');
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
        this.parent.appendChild(gridBtnCont);
    }
}
