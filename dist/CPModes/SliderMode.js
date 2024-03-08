import { ColorMode } from "./ColorMode";
import { Slider } from "../helpers/Slider";
import { arrToString } from "../helpers/colors";
/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class SliderMode extends ColorMode {
    constructor(parent, state, setState) {
        super(parent, state, setState);
        this.parent.replaceChildren();
        this.init();
    }
    /** toDOM: creates the body of the Grid */
    toDOM() {
        this.parent.innerHTML = `
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
        `;
    }
    /** updateColorDisplay: updates the color display to be the current color  */
    updateColorDisplay() {
        const colorDisplay = document.querySelector('.cp-slider-color-display');
        colorDisplay.style.backgroundColor = `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]})`;
    }
    /** setupSavedColors: sets up saved colors by adding event handlers */
    setupSavedColors() {
        // add event handler to the add button
        const addButton = document.querySelector(".cp-saved-color-add");
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
            const savedColors = this.state.savedColors;
            // Create a shallow copy of the current color
            const colorCopy = [...this.state.currentColor];
            savedColors.push(colorCopy);
            if (savedColors.length > 4)
                savedColors.shift();
            this.state.savedColors = savedColors;
            console.log(this.state.savedColors);
            this.updateSavedColors();
        });
        // update the appearance of each color grid based on the queue 
        this.updateSavedColors();
    }
    /** updatedSavedColors: updates the appearance of the saved colors based on the current state of the saved colors array */
    updateSavedColors() {
        const savedColors = this.state.savedColors;
        const savedSquares = document.querySelectorAll(".cp-saved-colors");
        console.log(savedColors);
        savedSquares.forEach(square => {
            square.style.backgroundColor = '#f1f1f1';
        });
        for (let i = 0; i < savedColors.length; i++) {
            const squareIndex = savedSquares.length - 1 - i;
            if (savedSquares[squareIndex]) {
                const square = savedSquares[squareIndex];
                square.style.backgroundColor = arrToString(savedColors[i]);
            }
        }
    }
    /** createRGB: creates the RGB sliders */
    createRGB() {
        const parent = document.querySelector('.cp-slider-changer');
        let slider1 = new Slider(parent, this.state.currentColor[0], 0, 255, 'Red', '200px', 'Red', true);
        let slider2 = new Slider(parent, this.state.currentColor[1], 0, 255, 'Green', '200px', 'Green', true);
        let slider3 = new Slider(parent, this.state.currentColor[2], 0, 255, 'Blue', '200px', 'Blue', true);
        /** add event listeners for every slider */
        slider1.inputElement.addEventListener('input', () => {
            this.state.currentColor[0] = slider1.getValue();
            this.updateColorDisplay();
            this.setState({ currentColor: [slider1.getValue(), this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]] });
        });
        slider2.inputElement.addEventListener('input', () => {
            this.state.currentColor[1] = slider2.getValue();
            this.updateColorDisplay();
            this.setState({ currentColor: this.state.currentColor });
        });
        slider3.inputElement.addEventListener('input', () => {
            this.state.currentColor[2] = slider3.getValue();
            this.updateColorDisplay();
            this.setState({ currentColor: this.state.currentColor });
        });
    }
    /** init(): initializes the grid  */
    init() {
        this.toDOM();
        this.updateColorDisplay();
        this.createRGB();
        this.setupSavedColors();
    }
}
