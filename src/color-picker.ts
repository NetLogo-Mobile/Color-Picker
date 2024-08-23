import '../color-picker.css';
import icon from './assets/cp-icon.png';
import closeIcon from './assets/cp-close.png';
import cpGrid from './assets/cp-grid.png';
import cpWheel from './assets/cp-wheel.png';
import cpSlider from './assets/cp-slider.png';
import modelIndicator from './assets/cp-model-indicator.png';
import { GridMode } from './modes/grid-mode';
import { WheelMode } from './modes/wheel-mode';
import { SliderMode } from './modes/slider-mode';
import { ColorPickerState } from './modes/color-mode';
import cpDropdown from './assets/drop-down.svg';
import * as colors from './helpers/colors'

export interface ColorPickerConfig {
    parent: HTMLElement;
    initColor: number[];
    onColorSelect: (colorData: [SelectedColor, number[][]]) => void;
    savedColors?: number[][];
}

// Object type for returned color (the object passed to the callback fn)
interface SelectedColor {
    netlogo: number; 
    rgba: number[]; 
}

export default class ColorPicker {
    // state: the state of the ColorPicker
    public state: ColorPickerState;
    //parent: the parent element of the ColorPicker
    private parent: HTMLElement;
    // onColorSelect: a callback function that is called when a color is selected
    private onColorSelect: (colorData: [SelectedColor, number[][]]) => void;
    // color display states that only ColorPicker needs to know about
    private displayParameter: string = 'RGBA'; // true if the color display is in RGB mode, false if it is in HSLA mode
    private isNetLogoNum: boolean = true; // true if the color display is in NetLogo number, false if its a compound number like Red + 2
    private isMinimized: boolean = false; // default value for minimize is false
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(config: {
        parent: HTMLElement,
        initColor: number[],
        onColorSelect: (colorData: [SelectedColor, number[][]]) => void,
        savedColors?: number[][],
    }) {
        this.state = {
            currentColor: config.initColor,
            currentMode: 'grid',
            changeModelColor: true,
            increment : 1,
            showNumbers: false,
            savedColors: config.savedColors || [],  // Use an empty array as default if savedColors is not provided
        }
        this.parent = config.parent;
        // we should resize hide if the size of the parent container is smaller than the full size of the color picker 37.5rem or 600px
        if (this.parent.offsetWidth < 600) {
            
        }
        this.onColorSelect = config.onColorSelect;
        if (this.parent.offsetWidth < 600) {
            this.isMinimized = true;
        }
        this.init();
    }

    private updateLayout() {
        const cpElement = this.parent.querySelector('.cp') as HTMLElement;
        if (cpElement) {
            if (this.isMinimized) {
                cpElement.classList.add('cp-compact');
            }
            else {
                cpElement.classList.remove('cp-compact');
            }
        }
    }
    /** setState: used to change the state of the color picker and call all update functions */
    private setState(newState: Partial<typeof this.state>) {
        // Directly update properties of the existing state object
        Object.keys(newState).forEach(key => {
            this.state[key] = newState[key];
        });

        // Call update functions to reflect changes
        this.updateColorParameters();
        this.updateModelDisplay();
    }

    /** init: initializes the ColorPicker */
    private init() {
        this.toDOM();
        this.updateLayout();
        this.updateColorParameters();
        this.attachEventListeners();
        this.initAlphaSlider();
        // click the grid button to start
        this.parent.querySelectorAll('.cp-mode-btn')[0].dispatchEvent(new Event('click'));
    }
    

    /** updateColorParameters: updates the displayed color parameters to reflect the current Color. Also updates the alpha slider value because I don't know where else to put it  */
    private updateColorParameters() {
        // update the color parameter type display
        const colorParamType = this.parent.querySelectorAll('.cp-values-type-text');
        colorParamType[0].innerHTML = this.displayParameter;
        colorParamType[1].innerHTML = 'NetLogo';
        let colorParamDisplay = this.parent.querySelectorAll('.cp-values-value');
        if(this.displayParameter == 'RGBA') {
            colorParamDisplay[0].innerHTML = `(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3]})`;
        } else if (this.displayParameter == 'HEX') {
            // hex display
            colorParamDisplay[0].innerHTML = `${colors.rgbaToHex(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3])}`;
        } else {
            // HSLA display
            const hsba = colors.RGBAToHSBA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]);
            colorParamDisplay[0].innerHTML = `(${hsba[0]}, ${hsba[1]}, ${hsba[2]}, ${hsba[3]})`;
        }
        // netlogo color parameter update
        if(this.isNetLogoNum) {
            // netlogo number
            colorParamDisplay[1].innerHTML = `${colors.rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]])}`;
        } else {
            const compoundColor = `${colors.netlogoToCompound(colors.rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]]))}`;
            const formattedColor = compoundColor.charAt(0).toUpperCase() + compoundColor.slice(1);
            colorParamDisplay[1].innerHTML = formattedColor;
        }
        this.updateAlphaSlider();
    }


    /** updateAlphaSlider(): updates the appearance of the alpha slider to match the current alpha value */
    private updateAlphaSlider() {
        const val = this.state.currentColor[3];
        const alphaSlider = this.parent.querySelector(".cp-alpha-slider") as HTMLInputElement;
        if(alphaSlider) alphaSlider.value = val.toString();
    }

    /** updateModelDisplay: updates the color of the model/background and the color widget next to the mode buttons  */
    private updateModelDisplay() {
        const colorString = colors.arrToString(this.state.currentColor);
        if (this.state.changeModelColor) {
            this.parent.querySelector('.cp-model-preview')?.setAttribute('fill', colorString);
        } else {
            this.parent.querySelector('.cp-model-background')?.setAttribute('fill', colorString);
        }

        const modeColorDisplay = this.parent.querySelector('.cp-mode-color-display') as HTMLElement;
        if (modeColorDisplay) modeColorDisplay.style.backgroundColor = colorString;
    }

    /** attachEventListeners: Attaches the event listeners to the ColorPicker body */
    private attachEventListeners() {
        /** changeButtonColor: Helper function to toggle button color */
        function changeButtonColor(button: HTMLElement, isPressed: boolean): void {
            // Set styles based on isPressed
            button.style.backgroundColor = isPressed ? '#5A648D' : '#E5E5E5';
            button.style.color = isPressed ? 'white' : 'black';
            let image = button.querySelector('.cp-mode-btn-img') as HTMLElement;
            if (image) {
                image.classList.toggle('cp-inverted', isPressed);
              }
        }

        // attach event listeners to the mode buttons 
        let modeButtons = this.parent.querySelectorAll('.cp-mode-btn');
        modeButtons[0].addEventListener('click', () => {
            // grid button
            this.setState({ currentMode: 'grid' });
            changeButtonColor(modeButtons[0] as HTMLElement, true);
            changeButtonColor(modeButtons[1] as HTMLElement, false);
            changeButtonColor(modeButtons[2] as HTMLElement, false);
            new GridMode(this.parent.querySelector('.cp-body-mode-main') as HTMLElement, this.state, this.setState.bind(this));
        });
        modeButtons[1].addEventListener('click', () => {
            // wheel button
            this.setState({ currentMode: 'wheel' });
            changeButtonColor(modeButtons[1] as HTMLElement, true);
            changeButtonColor(modeButtons[0] as HTMLElement, false);
            changeButtonColor(modeButtons[2] as HTMLElement, false);
            new WheelMode(this.parent.querySelector('.cp-body-mode-main') as HTMLElement, this.state, this.setState.bind(this));
        });
        modeButtons[2].addEventListener('click', () => {
            // slider button
            this.setState({ currentMode: 'slider' });
            changeButtonColor(modeButtons[2] as HTMLElement, true);
            changeButtonColor(modeButtons[0] as HTMLElement, false);
            changeButtonColor(modeButtons[1] as HTMLElement, false);
            new SliderMode(this.parent.querySelector('.cp-body-mode-main') as HTMLElement, this.state, this.setState.bind(this), this);
        });

        // attach event listener to model indicator button
        let modelIndicatorButton = this.parent.querySelector('.cp-model-indicator');
        modelIndicatorButton?.addEventListener('click', () => {
            this.state.changeModelColor = !this.state.changeModelColor; // we don't want to call set state, because it updates the appearance as well 
            modelIndicatorButton!.querySelector('.cp-mode-btn-text')!.innerHTML = this.state.changeModelColor ? Localized('Foreground Color') : Localized('Background Color');
            changeButtonColor(modelIndicatorButton as HTMLElement, !this.state.changeModelColor);
        });

        //attach event listener to close button
        const closeButton = this.parent.querySelector('.cp-close');
        closeButton?.addEventListener('click', () => {
            // return the selected color, as well as the saved colors for "memory"
    		const selectedColorObj: SelectedColor = {
        		netlogo: colors.rgbToNetlogo(this.state.currentColor),
        		rgba: this.state.currentColor,
    		};
            // the first element will be the different representations of selected color as an Object
			this.onColorSelect([selectedColorObj, this.state.savedColors]);
        });

        // attach switch color display parameters event listeners 
        const paramSwitchBtns = this.parent.querySelectorAll('.cp-values-type');
        // this is the RGBA / HSLA param button
        paramSwitchBtns[0]?.addEventListener('click', () => {
            if(this.displayParameter == 'RGBA') {
                this.displayParameter = 'HEX'
            } else if (this.displayParameter == 'HEX') {
                this.displayParameter = "HSBA"
            } else if (this.displayParameter == 'HSBA') {
                this.displayParameter = 'RGBA'
            }
            this.updateColorParameters();
        });
        // NetLogo number --> doesn't have to switch text but does switch the display value 

        paramSwitchBtns[1]?.addEventListener('click', () => {
            this.isNetLogoNum = !this.isNetLogoNum;
            this.updateColorParameters();
        });
    }

    /** initAlphaSlider: initializes the alpha slider */
    private initAlphaSlider() {
        let alphaSlider = this.parent.querySelector('.cp-alpha-slider') as HTMLInputElement;
        (alphaSlider);
        alphaSlider.addEventListener('input', () => {
            this.setState({ currentColor: [this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], parseInt(alphaSlider.value)] });
            (this.state);
        });
    }

    /** toDOM: creates and attaches the ColorPicker body to parent */
    private toDOM() {
        // localize strings before adding to dom

        const cpBody = `
        <div class="cp">
            <div class="cp-header">
                <div class="cp-title">
                    <img class="cp-icon" src="${icon}">
                    <span class="cp-title-text"> ${Localized('Color Swatches')} </span>
                </div>
                <img class="cp-close" src="${closeIcon}"/>
            </div>

            <div class="cp-body">
                <div class="cp-body-left">
                    <div class="cp-mode-btn-cont">
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${cpGrid}"/>
                            <span class="cp-mode-btn-text">${Localized('Grid')}</span> 
                        </button>
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${cpWheel}"/>
                            <span class="cp-mode-btn-text">${Localized('Wheel')}</span> 
                        </button>
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${cpSlider}"/>
                            <span class="cp-mode-btn-text">${Localized('Slider')}</span> 
                        </button>
                        <div class="cp-mode-color-display" style="background-color:${colors.arrToString(this.state.currentColor)}">
                        </div>
                    </div>
                    <div class="cp-body-mode-main no-select"></div>
                </div>
                <div class="cp-body-right">
                    <button class="cp-mode-btn cp-model-indicator"> 
                        <img class="cp-mode-btn-img" src="${modelIndicator}"/>
                        <span class="cp-mode-btn-text">${Localized('Foreground Color')}</span>
                    </button>
                    <div class="cp-color-preview">
                        <svg viewBox="0 0 100 100">
                            <rect x="0" y="0" width="100" height="100" fill="white" class="cp-model-background"/>
                            <path xmlns="http://www.w3.org/2000/svg" class="cp-model-preview" fill="white" d="M 50.069 9.889 L 14.945 89.069 L 50.71 65.458 L 86.458 89.73 L 50.069 9.889 Z"/>
                        </svg>
                    </div>
                    <div class="cp-alpha-cont">
                        <span class="cp-alpha-text">${Localized('Alpha')}</span>
                        <input type="range" min="0" max="255" value="${this.state.currentColor[3]}" class="cp-styled-slider cp-alpha-slider color-alpha slider-progress">
                    </div>
                    <div class="cp-values-display-cont">
                        <span class="cp-color-param-txt">${Localized('Color Parameters')}</span>
                        <div class="cp-values-display">
                            <div class="cp-values-type cp-values-type-1">
                                <div class="cp-values-cont">
                                    <span class="cp-values-type-text"></span>
                                    <img class="cp-values-img" src="${cpDropdown}">
                                </div>
                            </div>
                            <div class="cp-values-value-cont cp-values-value-cont-1">
                                <span class="cp-values-value"></span>
                            </div>
                            
                        </div>
                        <div class="cp-values-display">
                            <div class="cp-values-type">
                                <div class="cp-values-cont">
                                    <span class="cp-values-type-text"></span>
                                    <img class="cp-values-img" src="${cpDropdown}">
                                </div>
                            </div>
                            <div class="cp-values-value-cont">
                                <span class="cp-values-value"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    this.parent.innerHTML = cpBody;
    }
}

/** Localized: a helper function to get localized strings from the editor. */
// If the EditorLocalized object is available, use it to get the localized string
// Otherwise, return the source string
export function Localized(Source: string, ...Args: string[]): string {
    var Localized = (window as any).EditorLocalized;
    if (Localized) {
        return Localized.Get(Source, Args);
    } else {
        return Source;
    }
}

