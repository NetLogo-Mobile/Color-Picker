import { netlogoColorToHex, netlogoColorToRGBA } from "../helpers/colors";
import { ColorMode } from "./ColorMode";
import { ColorPickerState } from "./ColorMode";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class GridMode extends ColorMode {
    /** colorArray: an array of netlogo colors in the grid */
    private colorArray: number[] = [];
    /** textElements: Array of SVGTextElements that are the "numbers" of each cell in the grid. */
    private textElements: SVGTextElement[] = [];
    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void){
        super(parent, state, setState);
        this.init();
    }
    /** createGrid: creates the grid of colors */
    public createGrid() : SVGSVGElement {
        function hover(e: Event) {
          if (e.target instanceof SVGRectElement) {
            let rect = e.target;
            let hoverColor;
            if (
              Number(rect.dataset.value) % colorsPerRow <
              (colorsPerRow + 1) / 3
            ) {
              hoverColor = 'white'; // the color should be white
            } else {
              hoverColor = 'black';
            }
            rect.setAttribute('stroke-width', '0.08');
            rect.setAttribute('stroke', hoverColor);
          }
        }

        function hoverOut(e: Event) {
          if (e.target instanceof SVGRectElement) {
            let rect = e.target;
            rect.setAttribute('stroke-width', '');
            rect.setAttribute('stroke', '');
          }
        }

        function handleChangeColor(this: GridMode, e: Event) {
          if (e.target instanceof SVGRectElement) {
            let rect = e.target;
            let colorIndex = Number(rect.dataset.value);
            // Convert the selected color to RGBA format
            let newColor = netlogoColorToRGBA(this.colorArray[colorIndex]);
            // Use setState to update the currentColor in the component's state
            this.setState({ currentColor: newColor });
            console.log("clicked");
          }
        }
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        // the height of the svg is 14.01 rem, and the width is 20rem, we set the viewbox to be equal to that so its a 1:1 ratio
        svg.setAttribute('viewBox', '0 0 20 14.01');
        // create the cells 
        let numRows: number = 14;
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
              let rect = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'rect'
              );
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
              if(this.state.increment > 0.1) {
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
    public toDOM() : void {
      this.parent.replaceChildren();
      let gridContainer = document.createElement('div');
      gridContainer.classList.add('cp-grid-cont');
      gridContainer.appendChild(this.createGrid());
      let spaceContainer = document.createElement('div');
      spaceContainer.classList.add("cp-space-container");
      spaceContainer.appendChild(gridContainer);
      let incrementBtns = `
      <div class="cp-grid-btn-cont"><div class="cp-increment-cont"><button class="cp-numbers-btn"></button><span class="cp-increment-label">Numbers</span></div><div class="cp-increment-cont"><div class="cp-btn-label-cont"><button data-increment="1" class="cp-numbers-btn cp-numbers-clicked"></button><span class="cp-increment-label">1</span></div><div class="cp-btn-label-cont"><button data-increment="0.5" class="cp-numbers-btn"></button><span class="cp-increment-label">0.5</span></div><div class="cp-btn-label-cont"><button data-increment="0.1" class="cp-numbers-btn"></button><span class="cp-increment-label">0.1</span></div><span class="cp-increment-label">Increment</span></div></div>
      `;
      spaceContainer.insertAdjacentHTML('beforeend', incrementBtns);
      this.parent.appendChild(spaceContainer);
  }

  /** updateIncrementApperance: updates the increment button apperance based on which increment is on */
  public updateIncrementAppearance(): void {
    const incrementBtns = document.querySelectorAll('.cp-numbers-btn');
    incrementBtns[0].classList.toggle('cp-numbers-clicked', this.state.showNumbers);
    for(let i = 1; i < incrementBtns.length; i++) {
      const btn = incrementBtns[i];
      // Retrieve the data-increment value
      const incrementValue = parseFloat(btn.getAttribute('data-increment') ?? "0");
      const isSelected = incrementValue === this.state.increment;
      btn.classList.toggle('cp-numbers-clicked', isSelected);
    };
  }

  /** attachEventListeners: Attaches the event listeners to the GridMode body */
  private attachEventListeners() {
    const gridBtns = document.querySelectorAll('.cp-numbers-btn');
    // event listener of the numbers button 
    gridBtns[0].addEventListener('click', () => {
      this.setState({showNumbers: !this.state.showNumbers});
      this.state.showNumbers = !this.state.showNumbers;
      this.toggleTextVisibility();
      this.updateIncrementAppearance();
    });
    // the increment buttons 
    for(let i = 1; i < gridBtns.length; i++) {
      gridBtns[i].addEventListener('click', () => {
        let increment = parseFloat(gridBtns[i].getAttribute('data-increment') ?? "0");
        this.setState({increment: increment});
        this.state.increment = increment;// weird bug, did we create a copy of the state?
        this.init();
      });
    }
  }
  /** toggleTextVisibility: toggles the text visibility based on state of numbers */
  private toggleTextVisibility() {
    this.state.showNumbers ? this.textElements.forEach((text) => text.setAttribute('visibility', 'visible')) : this.textElements.forEach((text) => text.setAttribute('visibility', 'hidden'));
  }

  /** init: initializes a grid mode  */
  private init() {
    this.toDOM();
    this.updateIncrementAppearance();
    this.attachEventListeners();
  }
}