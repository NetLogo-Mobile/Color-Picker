import { ColorMode } from "./ColorMode";
import { ColorPickerState } from "./ColorMode";
import { Slider } from "../helpers/Slider";
import { arrToString } from "../helpers/colors";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class SliderMode extends ColorMode {
    
    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void){
        super(parent, state, setState);
        this.parent.replaceChildren();
        this.init();
    }

    /** toDOM: creates the body of the Grid */
    public toDOM() : void {
        this.parent.innerHTML= `
            <div class="cp-slider-cont">
                <div class="cp-slider-color-display"></div>
                <div class="cp-sliders">
                    <!-- part that switches from rgb to hsl -->
                    <div class="cp-slider-changer"></div>
                </div>
                <div class="cp-saved-colors-cont">
                    <div class="cp-saved-colors"></div>
                    <div class="cp-saved-colors"></div>
                    <div class="cp-saved-colors"></div>
                    <div class="cp-saved-colors"></div>
                    <div class="cp-saved-color-add"></div>
                </div>
            </div>
        `
    }

    /** updateColorDisplay: updates the color display to be the current color  */
    private updateColorDisplay() : void {
        const colorDisplay = document.querySelector('.cp-slider-color-display') as HTMLElement;
        console.log("update Color display called");
        colorDisplay.style.backgroundColor = `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]})`;
    }

    /** setupSavedColors: sets up saved colors by adding event handlers */
    private setupSavedColors() {
        // add event handler to the add button
        const addButton = document.querySelector(".cp-saved-color-add");
        addButton?.addEventListener("click", () => {
            const savedColors = this.state.savedColors;
            const colorCopy = [...this.state.currentColor];
            savedColors.unshift(colorCopy);
            // if saved colors is length 5, remove the last element
            if( savedColors.length == 5 ) savedColors.pop();
            this.state.savedColors = savedColors;
            this.updateSavedColors();
        });
        // update the appearance of each color grid based on the queue 
        this.updateSavedColors();
        // add event handler to each color button
        const savedButtons = document.querySelectorAll(".cp-saved-colors");
        for(let i = 0; i < savedButtons.length; i++) {
            const button = savedButtons[i] as HTMLElement;
            button.addEventListener("click", () => {
                if(button.dataset.value) {
                    // has a color so return it 
                    const colorsAsArr = button.dataset.value.split(",");
                    const colorIntArr: number[] = [];
                    colorsAsArr.forEach((color) => {
                        colorIntArr.push(Number(color));
                    })
                    this.setState({ currentColor: colorIntArr });
                    this.state.currentColor = colorIntArr;
                    this.updateColorDisplay();
                } else return
            })
        }
    }

    /** updatedSavedColors: updates the appearance of the saved colors based on the current state of the saved colors array */
    private updateSavedColors() {
        const savedColors = this.state.savedColors;
        console.log(savedColors);
        const savedSquares = document.querySelectorAll(".cp-saved-colors");
        console.log(savedColors);
        savedSquares.forEach(square => {
            (square as HTMLElement).style.backgroundColor = '#f1f1f1'; 
        });
    
        for (let i = 0; i < savedColors.length; i++) {
            const squareIndex = savedSquares.length - 1 - i;
            if (savedSquares[squareIndex]) { 
                const square = savedSquares[squareIndex] as HTMLElement;
                square.style.backgroundColor = arrToString(savedColors[i]);
                square.setAttribute('data-value', savedColors[i] + "" );
            }
        }
    }
    /** createRGB: creates the RGB sliders */
    private createRGB() : void {
        const parent = document.querySelector('.cp-slider-changer') as HTMLElement;
        let slider1 = new Slider(parent, this.state.currentColor[0], 0, 255, 'Red', '200px', 'Red', true);
        let slider2 = new Slider(parent, this.state.currentColor[1], 0, 255, 'Green', '200px', 'Green', true);
        let slider3 = new Slider(parent, this.state.currentColor[2], 0, 255, 'Blue', '200px', 'Blue', true);

        /** add event listeners for every slider */
        slider1.inputElement.addEventListener('input', () => {
            this.state.currentColor[0] = slider1.getValue();
            this.updateColorDisplay();
            this.setState({currentColor: [slider1.getValue(), this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]]});
        });
        slider2.inputElement.addEventListener('input', () => {
            this.state.currentColor[1] = slider2.getValue();
            this.updateColorDisplay();
            this.setState({currentColor: this.state.currentColor});
        });
        slider3.inputElement.addEventListener('input', () => {
            this.state.currentColor[2] = slider3.getValue();
            this.updateColorDisplay();
            this.setState({currentColor: this.state.currentColor});
        });
    }


    /** init(): initializes the grid  */
    public init(): void {
        this.toDOM();
        this.updateColorDisplay();
        this.createRGB();
        this.setupSavedColors();
    }
}