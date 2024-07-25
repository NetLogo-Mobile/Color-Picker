import { ColorMode } from "./color-mode";
import { Slider } from "../helpers/slider";
import { arrToString } from "../helpers/colors";
import cpDropdown from '../assets/drop-down.svg';
import * as color from '../helpers/colors';
import { Localized } from "../color-picker";
/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class SliderMode extends ColorMode {
    constructor(parent, state, setState, colorPickerInstance) {
        super(parent, state, setState);
        this.isRGB = true; // true if the current mode is RGB, false if it is HSL
        this.HSL = [0, 0, 0];
        this.cpInstance = colorPickerInstance;
        this.init();
    }
    /** toDOM: creates the body of the Grid */
    toDOM() {
        this.parent.innerHTML = `
            <div class="cp-slider-cont">
                <div class="cp-slider-color-display"></div>
                <div class="cp-slider-changer">
                    <img src="${cpDropdown}"></img>
                    <span class="cp-dropdown-text">RGB</span>
                </div>
                <div class="cp-sliders">
                    <div class="cp-slider-change-mode"></div>
                    <!-- part that switches from rgb to hsl -->
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
        const addButton = document.querySelector(".cp-saved-color-add");
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
            const savedColors = this.state.savedColors;
            const colorCopy = [...this.state.currentColor];
            savedColors.unshift(colorCopy);
            // if saved colors is length 5, remove the last element
            if (savedColors.length == 5)
                savedColors.pop();
            this.setState({ savedColors });
            this.updateSavedColors();
        });
        // update the appearance of each color grid based on the queue 
        this.updateSavedColors();
        // add event handler to each color button
        const savedButtons = document.querySelectorAll(".cp-saved-colors");
        for (let i = 0; i < savedButtons.length; i++) {
            const button = savedButtons[i];
            button.addEventListener("click", () => {
                if (button.dataset.value) {
                    // has a color so return it 
                    const colorsAsArr = button.dataset.value.split(",");
                    const colorIntArr = [];
                    colorsAsArr.forEach((color) => {
                        colorIntArr.push(Number(color));
                    });
                    this.setState({ currentColor: colorIntArr });
                    //this.state.currentColor = colorIntArr;
                    this.updateColorDisplay();
                }
                else
                    return;
            });
        }
    }
    /** attachEventListeners: attaches the event listeners to the Slider body */
    attachEventListeners() {
        // add event listener to the rgb / hsl swapping 
        const sliderChanger = document.querySelector(".cp-slider-changer");
        const changerText = document.querySelector(".cp-dropdown-text");
        sliderChanger.addEventListener('click', () => {
            if (this.isRGB) {
                // switch to HSL
                this.isRGB = false;
                changerText.innerText = "HSL";
                this.createHSL();
            }
            else {
                this.isRGB = true;
                changerText.innerText = "RGB";
                this.createRGB();
            }
        });
    }
    /** updatedSavedColors: updates the appearance of the saved colors based on the current state of the saved colors array */
    updateSavedColors() {
        const savedColors = this.state.savedColors;
        const savedSquares = document.querySelectorAll(".cp-saved-colors");
        savedSquares.forEach(square => {
            square.style.backgroundColor = '#f1f1f1';
        });
        for (let i = 0; i < savedColors.length; i++) {
            const squareIndex = savedSquares.length - 1 - i;
            if (savedSquares[squareIndex]) {
                const square = savedSquares[squareIndex];
                square.style.backgroundColor = arrToString(savedColors[i]);
                square.setAttribute('data-value', savedColors[i] + "");
            }
        }
    }
    /** createRGB: creates the RGB sliders */
    createRGB() {
        // callback function for slider to change currentColor 
        const updateRGBColor = (colorIndex, sliderValue) => {
            const newColor = [...this.state.currentColor];
            // update the specific index with the new slider value
            newColor[colorIndex] = sliderValue;
            // set the state with the updated color array
            this.setState({ currentColor: newColor });
            this.updateColorDisplay();
        };
        const parent = document.querySelector('.cp-sliders');
        parent.innerHTML = '';
        let slider1 = new Slider(parent, this.state.currentColor[0], 0, 255, 'Red', '200px', Localized('Red'), (value) => updateRGBColor(0, value), true);
        let slider2 = new Slider(parent, this.state.currentColor[1], 0, 255, 'Green', '200px', Localized('Green'), (value) => updateRGBColor(1, value), true);
        let slider3 = new Slider(parent, this.state.currentColor[2], 0, 255, 'Blue', '200px', Localized('Blue'), (value) => updateRGBColor(2, value), true);
    }
    /** createHSL: creates the HSL sliders */ /** createHSL: creates the HSL sliders */
    createHSL() {
        const parent = document.querySelector('.cp-sliders');
        parent.innerHTML = '';
        const colorAsHSL = color.RGBAToHSLA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]);
        this.HSL = colorAsHSL;
        // callback function for slider to change HSL and update currentColor
        const updateHSLColor = (hslIndex, sliderValue) => {
            // update the HSL value
            this.HSL[hslIndex] = sliderValue;
            // convert HSL to RGB
            const newRGB = color.HSLAToRGBA(this.HSL[0], this.HSL[1], this.HSL[2], this.state.currentColor[3]);
            this.setState({ currentColor: newRGB });
            this.updateColorDisplay();
        };
        let slider1 = new Slider(parent, colorAsHSL[0], 0, 360, 'Hue', '200px', Localized('Hue'), (value) => updateHSLColor(0, value), true);
        let slider2 = new Slider(parent, colorAsHSL[1], 0, 100, 'Saturation', '200px', Localized('Saturation'), (value) => updateHSLColor(1, value), true);
        let slider3 = new Slider(parent, colorAsHSL[2], 0, 100, 'Luminance', '200px', Localized('Luminance'), (value) => updateHSLColor(2, value), true);
    }
    /** init(): initializes the slider  */
    init() {
        this.toDOM();
        this.updateColorDisplay();
        this.createRGB();
        this.setupSavedColors();
        this.attachEventListeners();
    }
}
