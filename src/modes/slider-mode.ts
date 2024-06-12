import { ColorMode } from "./color-mode";
import { ColorPickerState } from "./color-mode";
import { Slider } from "../helpers/slider";
import { arrToString } from "../helpers/colors";
import cpDropdown from '../assets/drop-down.svg';
import * as color from '../helpers/colors';
import ColorPicker from "../color-picker";
import { Localized } from "../color-picker";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class SliderMode extends ColorMode {
    private isRGB: boolean = true; // true if the current mode is RGB, false if it is HSL
    private HSL: number[] = [0, 0, 0];
    private cpInstance: ColorPicker;
    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void, colorPickerInstance: ColorPicker){
        super(parent, state, setState);
        this.parent.replaceChildren();
        this.cpInstance = colorPickerInstance;
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
        // add event handler to the add button
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
                    const colorIntArr: number[] = [];
                    colorsAsArr.forEach((color) => {
                        colorIntArr.push(Number(color));
                    })
                    this.setState({ currentColor: colorIntArr });
                    //this.state.currentColor = colorIntArr;
                    this.updateColorDisplay();
                } else return
            })
        }
    }

    /** attachEventListeners: attaches the event listeners to the Slider body */
    private attachEventListeners() {
        // add event listener to the rgb / hsl swapping 
        const sliderChanger = document.querySelector(".cp-slider-changer");
        const changerText = document.querySelector(".cp-dropdown-text") as HTMLElement;
        sliderChanger!.addEventListener('click', () => {
            if(this.isRGB) {
                // switch to HSL
                this.isRGB = false;
                changerText!.innerText = "HSL";
                this.createHSL();
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
        const parent = document.querySelector('.cp-sliders') as HTMLElement;
        parent.replaceChildren();
        let slider1 = new Slider(parent, this.state.currentColor[0], 0, 255, 'Red', '200px', Localized('Red'), true);
        let slider2 = new Slider(parent, this.state.currentColor[1], 0, 255, 'Green', '200px', Localized('Green'), true);
        let slider3 = new Slider(parent, this.state.currentColor[2], 0, 255, 'Blue', '200px', Localized('Blue'), true);

        /** add event listeners for every slider */
        slider1.inputElement.addEventListener('input', () => {
            this.setState({currentColor: [slider1.getValue(), this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]]});
            this.updateColorDisplay();
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

    /** createHSL: creates the HSL sliders */
    private createHSL(): void { 
        const parent = document.querySelector('.cp-sliders') as HTMLElement;
        parent.replaceChildren();
        const colorAsHSL = color.RGBAToHSLA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]);
        this.HSL = colorAsHSL;
        let slider1 = new Slider(parent, colorAsHSL[0], 0, 360, 'Hue', '200px', Localized('Hue'), true);
        let slider2 = new Slider(parent, colorAsHSL[1], 0, 100, 'Saturation', '200px', Localized('Saturation'), true);
        let slider3 = new Slider(parent, colorAsHSL[2], 0, 100, 'Luminance', '200px', Localized('Luminance'), true);
        /** add event listeners for every slider */
        slider1.inputElement.addEventListener('input', () => {
            this.HSL[0] = slider1.getValue();
            // update the rgb based on the HSL 
            const newRGB = color.HSLAToRGBA(this.HSL[0], this.HSL[1], this.HSL[2], this.state.currentColor[3]);
            this.state.currentColor = newRGB;
            this.setState({currentColor: newRGB});
            this.updateColorDisplay();
        });
        slider2.inputElement.addEventListener('input', () => {
            this.HSL[1] = slider2.getValue();
            const newRGB = color.HSLAToRGBA(this.HSL[0], this.HSL[1], this.HSL[2], this.state.currentColor[3]);
            this.state.currentColor = newRGB;
            this.setState({currentColor: newRGB});
            this.updateColorDisplay();
        });
        slider3.inputElement.addEventListener('input', () => {
            this.HSL[2] = slider3.getValue();
            const newRGB = color.HSLAToRGBA(this.HSL[0], this.HSL[1], this.HSL[2], this.state.currentColor[3]);
            this.setState({currentColor: newRGB});
            this.updateColorDisplay();
        });
    }


    /** init(): initializes the grid  */
    public init(): void {
        this.toDOM();
        this.updateColorDisplay();
        this.createRGB();
        this.setupSavedColors();
        this.attachEventListeners();
    }
}
