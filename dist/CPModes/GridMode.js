import { netlogoColorToHex } from "../helpers/colors";
import { ColorMode } from "./ColorMode";
/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class GridMode extends ColorMode {
    constructor(currentColor, parent, setState) {
        super(currentColor, parent, setState);
        this.increment = 1;
        this.toDOM();
    }
    createGrid() {
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
                console.log(number);
                if (i == colorsPerRow - 1) {
                    number -= 0.1;
                }
                // draw an svg rect at each location
                let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.classList.add('cp-grid-cell');
                rect.setAttribute('x', `${cellWidth * i}`);
                rect.setAttribute('y', `${cellHeight * j}`);
                rect.setAttribute('width', `${cellWidth}`);
                rect.setAttribute('height', `${cellHeight}`);
                console.log(netlogoColorToHex(number));
                rect.setAttribute('fill', netlogoColorToHex(number));
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
    }
}
