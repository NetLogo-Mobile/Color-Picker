import '../color-picker.css';
import icon from './assets/cp-icon.svg';
import closeIcon from './assets/cp-close.svg';
import cpGrid from './assets/cp-grid.svg';
import cpWheel from './assets/cp-wheel.svg';
import cpSlider from './assets/cp-slider.svg';
import modelIndicator from './assets/cp-model-indicator.svg';
import { rgbToNetlogo } from './helpers/colors';
import { GridMode } from './CPModes/GridMode';
import { WheelMode } from './CPModes/WheelMode';
import { SliderMode } from './CPModes/SliderMode';
import { ColorPickerState } from './CPModes/ColorMode';
import cpDropdown from './assets/drop-down.svg';
import * as colors from './helpers/colors'

export default class ColorPicker {
    // state: the state of the ColorPicker
    public state: ColorPickerState;
    //parent: the parent element of the ColorPicker
    private parent: HTMLElement;
    // onColorSelect: a callback function that is called when a color is selected
    private onColorSelect: (color: number[]) => void;
    // color display states that only ColorPicker needs to know about
    private displayParameter: string = 'RGBA'; // true if the color display is in RGB mode, false if it is in HSLA mode
    private isNetLogoNum: boolean = true; // true if the color display is in NetLogo number, false if its a compound number like Red + 2
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent: HTMLElement, initColor: number[], onColorSelect: (color: any) => void) {
        this.state = {
            currentColor: initColor,
            currentMode: 'grid',
            changeModelColor: true,
            increment : 1,
            showNumbers: false,
            savedColors: [],  // queue of saved colors 
        }
        this.parent = parent;
        this.onColorSelect = onColorSelect;
        this.init();
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
        this.updateColorParameters();
        this.attachEventListeners();
        this.initAlphaSlider();
        // click the grid button to start
        document.querySelectorAll('.cp-mode-btn')[0].dispatchEvent(new Event('click'));
    }

    /** updateColorParameters: updates the displayed color parameters to reflect the current Color. Also updates the alpha slider value because I don't know where else to put it  */
    private updateColorParameters() {
        // update the color parameter type display
        const colorParamType = document.querySelectorAll('.cp-values-type-text');
        colorParamType[0].innerHTML = this.displayParameter;
        colorParamType[1].innerHTML = 'NetLogo';
        let colorParamDisplay = document.querySelectorAll('.cp-values-value');
        if(this.displayParameter == 'RGBA') {
            colorParamDisplay[0].innerHTML = `(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3]})`;
        } else if (this.displayParameter == 'HEX') {
            // hex display
            colorParamDisplay[0].innerHTML = `${colors.rgbaToHex(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3])}`;
        } else {
            // HSLA display
            const hsla = colors.RGBAToHSLA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]);
            colorParamDisplay[0].innerHTML = `(${hsla[0]}, ${hsla[1]}, ${hsla[2]}, ${hsla[3]})`;
        }
        // netlogo color parameter update
        if(this.isNetLogoNum) {
            // netlogo number
            colorParamDisplay[1].innerHTML = `${rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]])}`;
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
        const alphaSlider = document.querySelector(".cp-alpha-slider") as HTMLInputElement;
        if(alphaSlider) alphaSlider.value = val.toString();
    }

    /** updateModelDisplay: updates the color of the model/background  */
    private updateModelDisplay() {
        if(this.state.changeModelColor) document.querySelector('.cp-model-preview')?.setAttribute('fill', `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3] / 255})`);
        else document.querySelector('.cp-model-background')?.setAttribute('fill', `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, 1)`);
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
                image.style.filter = `invert(${isPressed ? '100%' : '0%'})`;
            }
        }

        // attach event listeners to the mode buttons 
        let modeButtons = document.querySelectorAll('.cp-mode-btn');
        modeButtons[0].addEventListener('click', () => {
            // grid button
            this.setState({ currentMode: 'grid' });
            changeButtonColor(modeButtons[0] as HTMLElement, true);
            changeButtonColor(modeButtons[1] as HTMLElement, false);
            changeButtonColor(modeButtons[2] as HTMLElement, false);
            new GridMode(document.querySelector('.cp-body-mode-main') as HTMLElement, this.state, this.setState.bind(this));
        });
        modeButtons[1].addEventListener('click', () => {
            // wheel button
            this.setState({ currentMode: 'wheel' });
            changeButtonColor(modeButtons[1] as HTMLElement, true);
            changeButtonColor(modeButtons[0] as HTMLElement, false);
            changeButtonColor(modeButtons[2] as HTMLElement, false);
            new WheelMode(document.querySelector('.cp-body-mode-main') as HTMLElement, this.state, this.setState.bind(this));
        });
        modeButtons[2].addEventListener('click', () => {
            // slider button
            this.setState({ currentMode: 'slider' });
            changeButtonColor(modeButtons[2] as HTMLElement, true);
            changeButtonColor(modeButtons[0] as HTMLElement, false);
            changeButtonColor(modeButtons[1] as HTMLElement, false);
            new SliderMode(document.querySelector('.cp-body-mode-main') as HTMLElement, this.state, this.setState.bind(this), this);
        });

        // attach event listener to model indicator button
        let modelIndicatorButton = document.querySelector('.cp-model-indicator');
        modelIndicatorButton?.addEventListener('click', () => {
            this.state.changeModelColor = !this.state.changeModelColor; // we don't want to call set state, because it updates the appearance as well 
            modelIndicatorButton!.querySelector('.cp-mode-btn-text')!.innerHTML = this.state.changeModelColor ? ' Model Color Selected ' : ' Background Color Selected ';
            changeButtonColor(modelIndicatorButton as HTMLElement, !this.state.changeModelColor);
        });

        //attach event listener to close button
        const closeButton = document.querySelector('.cp-close');
        closeButton?.addEventListener('click', () => {
            this.parent.replaceChildren();
            this.onColorSelect(this.state.currentColor);
        });

        // attach switch color display parameters event listeners 
        const paramSwitchBtns = document.querySelectorAll('.cp-values-type');
        // this is the RGBA / HSLA param button
        paramSwitchBtns[0]?.addEventListener('click', () => {
            if(this.displayParameter == 'RGBA') {
                this.displayParameter = 'HEX'
            } else if (this.displayParameter == 'HEX') {
                this.displayParameter = "HSLA"
            } else if (this.displayParameter == 'HSLA') {
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
        let alphaSlider = document.querySelector('.cp-alpha-slider') as HTMLInputElement;
        (alphaSlider);
        alphaSlider.addEventListener('input', () => {
            this.setState({ currentColor: [this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], parseInt(alphaSlider.value)] });
            (this.state);
        });
    }

    /** toDOM: creates and attaches the ColorPicker body to parent */
    private toDOM() {
        const cpBody = `
        <div class="cp">
            <div class="cp-header">
                <div class="cp-title">
                    <img class="cp-icon" src="${icon}">
                    <span class="cp-title-text"> Color Swatches </span>
                </div>
                <img class="cp-close" src="${closeIcon}"/>
            </div>

            <div class="cp-body">
                <div class="cp-body-left">
                    <div class="cp-mode-btn-cont">
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${cpGrid}"/>
                            <span class="cp-mode-btn-text"> Grid </span> 
                        </button>
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${cpWheel}"/>
                            <span class="cp-mode-btn-text"> Wheel </span> 
                        </button>
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${cpSlider}"/>
                            <span class="cp-mode-btn-text"> Slider </span> 
                        </button>
                    </div>
                    <div class="cp-body-mode-main"></div>
                </div>
                <div class="cp-body-mode-right">
                    <button class="cp-mode-btn cp-model-indicator"> 
                        <img class="cp-mode-btn-img" src="${modelIndicator}"/>
                        <span class="cp-mode-btn-text"> Model Color Selected </span>
                    </button>
                    <div class="cp-color-preview">
                        <svg viewBox="0 0 100 100">
                            <rect x="0" y="0" width="100" height="100" fill="white" class="cp-model-background"/>
                            <path xmlns="http://www.w3.org/2000/svg" class="cp-model-preview" fill="white" d="M 50.069 9.889 L 14.945 89.069 L 50.71 65.458 L 86.458 89.73 L 50.069 9.889 Z"/>
                        </svg>
                    </div>
                    <div class="cp-alpha-cont">
                        <span class="cp-alpha-text"> Alpha </span>
                        <input type="range" min="0" max="255" value="${this.state.currentColor[3]}" class="cp-styled-slider cp-alpha-slider color-alpha slider-progress">
                    </div>
                    <div class="cp-values-display-cont">
                        <span class="cp-color-param-txt"> Color Parameters </span>
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

