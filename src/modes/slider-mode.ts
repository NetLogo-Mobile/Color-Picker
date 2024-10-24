import { ColorMode } from "./color-mode";
import { ColorPickerState } from "./color-mode";
import { Slider } from "../helpers/slider";
import { arrToString } from "../helpers/colors";
import cpDropdown from '../assets/drop-down.svg';
import * as colors from '../helpers/colors';
import { ColorPicker } from "../color-picker";
import { Localized } from "../color-picker";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class SliderMode extends ColorMode {
    private isRGB: boolean = true; // true if the current mode is RGB, false if it is HSL
    private HSBA: number[] = [0, 0, 0, 0];
    private sliders: Slider[] = [];
    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void, colorPickerInstance: ColorPicker){
        super(parent, state, setState);
        this.init();
    }

    /** toDOM: creates the body of the Grid */
    public toDOM() : void {
        this.parent.innerHTML= `
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
        `
    }

    /** updateColorDisplay: updates the color display to be the current color  */
    private updateColorDisplay() : void {
        const colorDisplay = document.querySelector('.cp-slider-color-display') as HTMLElement;
        colorDisplay.style.backgroundColor = `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]})`;
    }

    /** setupSavedColors: sets up saved colors by adding event handlers */
    private setupSavedColors() {
        const addButton = document.querySelector(".cp-saved-color-add");
        addButton?.addEventListener("click", () => {
            const savedColors = this.state.savedColors;
            const colorCopy = [...this.state.currentColor];
            savedColors.unshift(colorCopy);
            // if saved colors is length 5, remove the last element
            if( savedColors.length == 5 ) savedColors.pop();
            this.setState({savedColors})
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
                    const colorIntArr: number[] = colorsAsArr.map(Number);
                    this.setState({ currentColor: colorIntArr });
                    this.updateColorDisplay();
                    this.updateSliders(colorIntArr);
                } else return
            })
        }
    }

    /** updateSliders: updates the sliders based on the current color */
    private updateSliders(color: number[]) {
        if (this.isRGB) {
            this.sliders.forEach((slider, index: number) => {
                slider.setValue(color[index]);
            });
        } else {
            const hsbColor = colors.RGBAToHSBA(color[0], color[1], color[2], color[3]);
            this.HSBA = hsbColor;
            this.sliders.forEach((slider, index:number ) => {
                slider.setValue(hsbColor[index]);
            });
            this.updateSlideGradients(hsbColor[0], hsbColor[1], hsbColor[2]);
        }
    }

    /** attachEventListeners: attaches the event listeners to the Slider body */
    private attachEventListeners() {
        // add event listener to the rgb / hsl swapping 
        const sliderChanger = document.querySelector(".cp-slider-changer");
        const changerText = document.querySelector(".cp-dropdown-text") as HTMLElement;
        sliderChanger!.addEventListener('click', () => {
            if(this.isRGB) {
                // switch to HSB
                this.isRGB = false;
                changerText!.innerText = "HSB";
                this.createHSB();
            } else {
                this.isRGB = true;
                changerText!.innerText = "RGB";
                this.createRGB();
            }
        })
    }

    /** updatedSavedColors: updates the appearance of the saved colors based on the current state of the saved colors array */
    private updateSavedColors() {
        const savedColors = this.state.savedColors;
        const savedSquares = document.querySelectorAll(".cp-saved-colors");
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
        // callback function for slider to change currentColor 
        const updateRGBColor = (colorIndex: number, sliderValue: number) => {
            const newColor = [...this.state.currentColor];
            newColor[colorIndex] = sliderValue;
            this.setState({ currentColor: newColor, colorType:"rgb" });
            this.updateColorDisplay();
        }

        const parent = document.querySelector('.cp-sliders') as HTMLElement;
        parent.innerHTML = '';
        this.sliders = [
            new Slider(parent, this.state.currentColor[0], 0, 255, 'Red', '200px', Localized('Red'), (value: number) => updateRGBColor(0, value), true),
            new Slider(parent, this.state.currentColor[1], 0, 255, 'Green', '200px', Localized('Green'), (value: number) => updateRGBColor(1, value), true),
            new Slider(parent, this.state.currentColor[2], 0, 255, 'Blue', '200px', Localized('Blue'), (value: number) => updateRGBColor(2, value), true)
        ];
    }

    /** updateSliderGradients: Updates the gradients for the slider background if it is saturation and brightness slider */
    private updateSlideGradients(hue: number, saturation: number, brightness: number) {
        // Saturation: gradient from white to full color (hue)
        const saturationGradient = `linear-gradient(to right, hsl(${hue}, 0%, 100%), hsl(${hue}, 100%, 50%))`;

        const brightnessGradient = `linear-gradient(to right, #000, hsl(${hue}, ${saturation}%, 50%))`;

        const saturationThumbColor = `hsl(${hue}, ${saturation}%, ${100 - saturation/2}%)`;
        const brightnessThumbColor = `hsl(${hue}, ${saturation}%, ${brightness}%)`;

        // Set the CSS custom properties
        document.documentElement.style.setProperty('--saturation-gradient', saturationGradient);
        document.documentElement.style.setProperty('--brightness-gradient', brightnessGradient);
        document.documentElement.style.setProperty('--saturation-thumb', saturationThumbColor);
        document.documentElement.style.setProperty('--brightness-thumb', brightnessThumbColor);
    }

    /** createHSB: creates the HSB sliders *//** createHSL: creates the HSL sliders */
    private createHSB(): void { 
        const parent = document.querySelector('.cp-sliders') as HTMLElement;
        parent.innerHTML = '';
        const colorAsHSB = colors.RGBAToHSBA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]);
        this.HSBA = colorAsHSB;
        this.updateSlideGradients(this.HSBA[0], this.HSBA[1], this.HSBA[2]);

        // callback function for slider to change HSL and update currentColor
        const updateHSBColor = (hsbIndex: number, sliderValue: number) => {
            this.HSBA[hsbIndex] = sliderValue;
            const newRGB = colors.HSBAToRGBA(this.HSBA[0], this.HSBA[1], this.HSBA[2], this.HSBA[3]);
            this.setState({currentColor: newRGB, colorType: "hsb"});
            this.updateColorDisplay();
            this.updateSlideGradients(this.HSBA[0], this.HSBA[1], this.HSBA[2]);
        }

        this.sliders = [
            new Slider(parent, colorAsHSB[0], 0, 360, 'Hue', '200px', Localized('Hue'), (value: number) => updateHSBColor(0, value), true),
            new Slider(parent, colorAsHSB[1], 0, 100, 'Saturation', '200px', Localized('Saturation'), (value: number) => updateHSBColor(1, value), true),
            new Slider(parent, colorAsHSB[2], 0, 100, 'Brightness', '200px', Localized('Brightness'), (value: number) => updateHSBColor(2, value), true)
        ];
    }
    /** init(): initializes the slider  */
    public init(): void {
        this.toDOM();
        this.updateColorDisplay();
        this.createRGB();
        this.setupSavedColors();
        this.attachEventListeners();
    }
}
