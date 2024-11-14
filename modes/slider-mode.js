import { ColorMode } from "./color-mode";
import { Slider } from "../helpers/slider";
import { arrToString } from "../helpers/colors";
import * as colors from '../helpers/colors';
import { Localized } from "../color-picker";
/** SliderMode: A mode for the ColorPicker that shows sliders for color adjustment */
export class SliderMode extends ColorMode {
    /**
     * Constructor for SliderMode
     * @param parent - The parent HTML element
     * @param state - The current state of the color picker
     * @param setState - Function to update the state
     * @param colorPickerInstance - Instance of the ColorPicker
     * @param mode - Initial mode, either 'rgb' or 'hsb' (optional, defaults to 'rgb')
     */
    constructor(parent, state, setState, colorPickerInstance, mode = 'rgb' // New parameter with default value
    ) {
        super(parent, state, setState);
        this.HSBA = [0, 0, 0, 0];
        this.sliders = [];
        this.isRGB = mode === 'rgb'; // Set initial mode based on the parameter
        this.init();
    }
    /** toDOM: creates the body of the SliderMode */
    toDOM() {
        this.parent.innerHTML = `
            <div class="cp-slider-cont">
                <div class="cp-slider-color-display"></div>
                <div class="cp-sliders">
                    <div class="cp-slider-change-mode"></div>
                    <!-- part that switches from rgb to hsb -->
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
        colorDisplay.style.backgroundColor = `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3] / 255})`;
    }
    /** setupSavedColors: sets up saved colors by adding event handlers */
    setupSavedColors() {
        const addButton = document.querySelector(".cp-saved-color-add");
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
            const savedColors = [...this.state.savedColors]; // Clone to avoid direct mutation
            const colorCopy = [...this.state.currentColor];
            savedColors.unshift(colorCopy);
            // if saved colors is length 5, remove the last element
            if (savedColors.length > 5)
                savedColors.pop();
            this.setState({ savedColors });
            this.updateSavedColors();
        });
        // Update the appearance of each color grid based on the queue 
        this.updateSavedColors();
        // Add event handler to each color button
        const savedButtons = document.querySelectorAll(".cp-saved-colors");
        savedButtons.forEach(button => {
            button.addEventListener("click", () => {
                const btn = button;
                if (btn.dataset.value) {
                    // has a color so return it 
                    const colorsAsArr = btn.dataset.value.split(",").map(Number);
                    this.setState({ currentColor: colorsAsArr });
                    this.updateColorDisplay();
                    this.updateSliders(colorsAsArr);
                }
            });
        });
    }
    /** updateSliders: updates the sliders based on the current color */
    updateSliders(color) {
        if (this.isRGB) {
            this.sliders.forEach((slider, index) => {
                slider.setValue(color[index]);
            });
        }
        else {
            const hsbColor = colors.RGBAToHSBA(color[0], color[1], color[2], color[3]);
            this.HSBA = hsbColor;
            this.sliders.forEach((slider, index) => {
                slider.setValue(hsbColor[index]);
            });
            this.updateSlideGradients(hsbColor[0], hsbColor[1], hsbColor[2]);
        }
    }
    /** updateSavedColors: updates the appearance of the saved colors based on the current state of the saved colors array */
    updateSavedColors() {
        const savedColors = this.state.savedColors;
        const savedSquares = document.querySelectorAll(".cp-saved-colors");
        // Reset all squares to default background
        savedSquares.forEach(square => {
            square.style.backgroundColor = '#f1f1f1';
            square.removeAttribute('data-value');
        });
        // Assign colors to squares
        for (let i = 0; i < savedColors.length; i++) {
            const squareIndex = savedSquares.length - 1 - i;
            if (savedSquares[squareIndex]) {
                const square = savedSquares[squareIndex];
                square.style.backgroundColor = arrToString(savedColors[i]);
                square.setAttribute('data-value', savedColors[i].join(","));
            }
        }
    }
    /** createRGB: creates the RGB sliders */
    createRGB() {
        // Callback function for slider to change currentColor 
        const updateRGBColor = (colorIndex, sliderValue) => {
            const newColor = [...this.state.currentColor];
            newColor[colorIndex] = sliderValue;
            this.setState({ currentColor: newColor, colorType: "rgb" });
            this.updateColorDisplay();
        };
        const parent = document.querySelector('.cp-sliders');
        parent.innerHTML = '';
        this.sliders = [
            new Slider(parent, this.state.currentColor[0], 0, 255, 'Red', '200px', Localized('Red'), (value) => updateRGBColor(0, value), true),
            new Slider(parent, this.state.currentColor[1], 0, 255, 'Green', '200px', Localized('Green'), (value) => updateRGBColor(1, value), true),
            new Slider(parent, this.state.currentColor[2], 0, 255, 'Blue', '200px', Localized('Blue'), (value) => updateRGBColor(2, value), true)
        ];
    }
    /** updateSlideGradients: Updates the gradients for the slider background if it is saturation and brightness slider */
    updateSlideGradients(hue, saturation, brightness) {
        // Saturation: gradient from white to full color (hue)
        const saturationGradient = `linear-gradient(to right, hsl(${hue}, 0%, 100%), hsl(${hue}, 100%, 50%))`;
        // Brightness: gradient from black to the hue-saturation color
        const brightnessGradient = `linear-gradient(to right, #000, hsl(${hue}, ${saturation}%, 50%))`;
        const saturationThumbColor = `hsl(${hue}, ${saturation}%, ${100 - saturation / 2}%)`;
        const brightnessThumbColor = `hsl(${hue}, ${saturation}%, ${brightness}%)`;
        // Set the CSS custom properties
        document.documentElement.style.setProperty('--saturation-gradient', saturationGradient);
        document.documentElement.style.setProperty('--brightness-gradient', brightnessGradient);
        document.documentElement.style.setProperty('--saturation-thumb', saturationThumbColor);
        document.documentElement.style.setProperty('--brightness-thumb', brightnessThumbColor);
    }
    /** createHSB: creates the HSB sliders */
    createHSB() {
        const parent = document.querySelector('.cp-sliders');
        parent.innerHTML = '';
        const colorAsHSB = colors.RGBAToHSBA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]);
        this.HSBA = colorAsHSB;
        this.updateSlideGradients(this.HSBA[0], this.HSBA[1], this.HSBA[2]);
        // Callback function for slider to change HSB and update currentColor
        const updateHSBColor = (hsbIndex, sliderValue) => {
            this.HSBA[hsbIndex] = sliderValue;
            const newRGB = colors.HSBAToRGBA(this.HSBA[0], this.HSBA[1], this.HSBA[2], this.HSBA[3]);
            this.setState({ currentColor: newRGB, colorType: "hsb" });
            this.updateColorDisplay();
            this.updateSlideGradients(this.HSBA[0], this.HSBA[1], this.HSBA[2]);
        };
        this.sliders = [
            new Slider(parent, colorAsHSB[0], 0, 360, 'Hue', '200px', Localized('Hue'), (value) => updateHSBColor(0, value), true),
            new Slider(parent, colorAsHSB[1], 0, 100, 'Saturation', '200px', Localized('Saturation'), (value) => updateHSBColor(1, value), true),
            new Slider(parent, colorAsHSB[2], 0, 100, 'Brightness', '200px', Localized('Brightness'), (value) => updateHSBColor(2, value), true)
        ];
    }
    /** init(): initializes the slider */
    init() {
        this.toDOM();
        this.updateColorDisplay();
        if (this.isRGB) {
            this.createRGB();
        }
        else {
            this.createHSB();
        }
        this.setupSavedColors();
    }
}
