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
import cpDropdown from './assets/drop-down.svg';
import * as colors from './helpers/colors';
export default class ColorPicker {
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent, initColor, onColorSelect) {
        // color display states that only ColorPicker needs to know about
        this.isRGBDisplay = true; // true if the color display is in RGB mode, false if it is in HSLA mode
        this.isNetLogoNum = true; // true if the color display is in NetLogo number, false if its a compound number like Red + 2
        this.state = {
            currentColor: initColor,
            currentMode: 'grid',
            changeModelColor: true,
            increment: 1,
            showNumbers: false,
            savedColors: [], // queue of saved colors 
        };
        this.parent = parent;
        this.onColorSelect = onColorSelect;
        this.init();
    }
    /** setState: used to change the state of the color picker and call all update functions */
    setState(newState) {
        // Directly update properties of the existing state object
        Object.keys(newState).forEach(key => {
            this.state[key] = newState[key];
        });
        // Call update functions to reflect changes
        this.updateColorParameters();
        this.updateModelDisplay();
    }
    /** init: initializes the ColorPicker */
    init() {
        this.toDOM();
        this.updateColorParameters();
        this.attachEventListeners();
        this.initAlphaSlider();
        // click the grid button to start
        document.querySelectorAll('.cp-mode-btn')[0].dispatchEvent(new Event('click'));
    }
    /** updateColorParameters: updates the displayed color parameters to reflect the current Color. Also updates the alpha slider value because I don't know where else to put it  */
    updateColorParameters() {
        // update the color parameter type display
        const colorParamType = document.querySelectorAll('.cp-values-type-text');
        colorParamType[0].innerHTML = this.isRGBDisplay ? 'RGBA' : 'HSLA';
        colorParamType[1].innerHTML = 'NetLogo';
        let colorParamDisplay = document.querySelectorAll('.cp-values-value');
        console.log(colorParamDisplay);
        if (this.isRGBDisplay) {
            colorParamDisplay[0].innerHTML = `(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3]})`;
        }
        else {
            // hsla display
            console.log(colors.RGBAToHSLA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]));
        }
        colorParamDisplay[1].innerHTML = `${rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]])}`;
        this.updateAlphaSlider();
    }
    /** updateAlphaSlider(): updates the appearance of the alpha slider to match the current alpha value */
    updateAlphaSlider() {
        const val = this.state.currentColor[3];
        const alphaSlider = document.querySelector(".cp-alpha-slider");
        if (alphaSlider)
            alphaSlider.value = val.toString();
    }
    /** updateModelDisplay: updates the color of the model/background  */
    updateModelDisplay() {
        var _a, _b;
        if (this.state.changeModelColor)
            (_a = document.querySelector('.cp-model-preview')) === null || _a === void 0 ? void 0 : _a.setAttribute('fill', `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3] / 255})`);
        else
            (_b = document.querySelector('.cp-model-background')) === null || _b === void 0 ? void 0 : _b.setAttribute('fill', `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, 1)`);
    }
    /** attachEventListeners: Attaches the event listeners to the ColorPicker body */
    attachEventListeners() {
        var _a, _b;
        /** changeButtonColor: Helper function to toggle button color */
        function changeButtonColor(button, isPressed) {
            // Set styles based on isPressed
            button.style.backgroundColor = isPressed ? '#5A648D' : '#E5E5E5';
            button.style.color = isPressed ? 'white' : 'black';
            let image = button.querySelector('.cp-mode-btn-img');
            if (image) {
                image.style.filter = `invert(${isPressed ? '100%' : '0%'})`;
            }
        }
        // attach event listeners to the mode buttons 
        let modeButtons = document.querySelectorAll('.cp-mode-btn');
        modeButtons[0].addEventListener('click', () => {
            // grid button
            this.setState({ currentMode: 'grid' });
            changeButtonColor(modeButtons[0], true);
            changeButtonColor(modeButtons[1], false);
            changeButtonColor(modeButtons[2], false);
            new GridMode(document.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this));
        });
        modeButtons[1].addEventListener('click', () => {
            // wheel button
            this.setState({ currentMode: 'wheel' });
            changeButtonColor(modeButtons[1], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[2], false);
            new WheelMode(document.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this));
        });
        modeButtons[2].addEventListener('click', () => {
            // slider button
            this.setState({ currentMode: 'slider' });
            changeButtonColor(modeButtons[2], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[1], false);
            new SliderMode(document.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this), this);
        });
        // attach event listener to model indicator button
        let modelIndicatorButton = document.querySelector('.cp-model-indicator');
        modelIndicatorButton === null || modelIndicatorButton === void 0 ? void 0 : modelIndicatorButton.addEventListener('click', () => {
            this.state.changeModelColor = !this.state.changeModelColor; // we don't want to call set state, because it updates the appearance as well 
            modelIndicatorButton.querySelector('.cp-mode-btn-text').innerHTML = this.state.changeModelColor ? ' Model Color Selected ' : ' Background Color Selected ';
            changeButtonColor(modelIndicatorButton, !this.state.changeModelColor);
        });
        //attach event listener to close button
        const closeButton = document.querySelector('.cp-close');
        closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', () => {
            this.parent.replaceChildren();
            this.onColorSelect(this.state.currentColor);
        });
        // attach switch color display parameters event listeners 
        const paramSwitchBtns = document.querySelectorAll('.cp-values-type');
        // this is the RGBA / HSLA param button
        (_a = paramSwitchBtns[0]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.isRGBDisplay = !this.isRGBDisplay;
            this.updateColorParameters();
        });
        // NetLogo number --> doesn't have to switch text but does switch the display value 
        (_b = paramSwitchBtns[1]) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            this.isNetLogoNum = !this.isNetLogoNum;
            this.updateColorParameters();
        });
    }
    /** initAlphaSlider: initializes the alpha slider */
    initAlphaSlider() {
        let alphaSlider = document.querySelector('.cp-alpha-slider');
        (alphaSlider);
        alphaSlider.addEventListener('input', () => {
            this.setState({ currentColor: [this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], parseInt(alphaSlider.value)] });
            (this.state);
        });
    }
    /** toDOM: creates and attaches the ColorPicker body to parent */
    toDOM() {
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
