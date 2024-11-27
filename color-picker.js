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
import cpDropdown from './assets/drop-down.svg';
import * as colors from './helpers/colors';
export class ColorPicker {
    /** constructor: creates a Color Picker instance. A color picker has a parent div and an initial color */
    constructor(config, openTo = 'g') {
        // color display states that only ColorPicker needs to know about
        this.displayParameter = 'RGBA'; // true if the color display is in RGB mode, false if it is in HSLA mode
        this.isNetLogoNum = false; // true if the color display is in NetLogo number, false if its a compound number like Red + 2
        this.isMinimized = false; // default value for minimize is false
        this.copyMessageTimeout = null; //Keeps track of "Copied" message timeouts, so they don't stack and are cancelled if we switch colors 
        this.operatingMode = config.mode || 'DEFAULT';
        this.state = {
            currentColor: config.initColor,
            colorType: config.initColorType,
            currentMode: 'grid',
            changeModelColor: true,
            increment: 1,
            showNumbers: false,
            savedColors: config.savedColors || [],
        };
        const mode = config.mode || 'DEFAULT';
        if (mode !== 'DEFAULT' && mode !== 'RGBA' && mode !== 'NETLOGO') {
            throw new Error(`Invalid mode: ${mode}. Must be one of DEFAULT, RGBA, NETLOGO.`);
        }
        this.parent = config.parent;
        this.onColorSelect = config.onColorSelect;
        if (this.parent.offsetWidth < 600) {
            this.isMinimized = true;
        }
        this.openTo = openTo;
        this.init();
        console.log(this.operatingMode);
    }
    updateLayout() {
        const cpElement = this.parent.querySelector('.cp');
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
    setState(newState) {
        // Directly update properties of the existing state object
        Object.keys(newState).forEach(key => {
            this.state[key] = newState[key];
        });
        // Call update functions to reflect changes
        this.updateColorParameters();
        this.updateModelDisplay();
        // remove the copy timeout, if its there
        this.clearCopyTimeout();
    }
    /** init: initializes the ColorPicker */
    init() {
        this.toDOM();
        this.updateLayout();
        this.updateColorParameters();
        this.attachEventListeners();
        this.initAlphaSlider();
        this.updateAlphaBlockVisibility();
        this.updateValuesDisplayVisibility();
        // click the correct button to start 
        switch (this.openTo) {
            case 'wheel':
                this.parent.querySelectorAll('.cp-mode-btn')[1].dispatchEvent(new Event('click'));
                break;
            case 'rgb': // Updated from 'slider' to 'rgb'
                this.parent.querySelectorAll('.cp-mode-btn')[2].dispatchEvent(new Event('click'));
                break;
            case 'hsb': // New case for HSB mode
                this.parent.querySelectorAll('.cp-mode-btn')[3].dispatchEvent(new Event('click'));
                break;
            case 'sliderHSB':
                this.parent.querySelectorAll('.cp-mode-btn')[2].dispatchEvent(new Event('click'));
                // click the hsb button 
                this.parent.querySelectorAll('.cp-slider-changer')[0].dispatchEvent(new Event('click'));
                break;
            default:
                this.parent.querySelectorAll('.cp-mode-btn')[0].dispatchEvent(new Event('click'));
        }
    }
    /** updateAlphaBlockVisibility: updates the visibility of the alpha block. Needed to hide or show the Alpha block based on the different operationModes */
    updateAlphaBlockVisibility() {
        if (this.operatingMode === 'NETLOGO') {
            const alphaContainer = this.parent.querySelector('.cp-alpha-cont');
            if (alphaContainer) {
                alphaContainer.style.visibility = 'hidden';
                alphaContainer.style.pointerEvents = 'none';
            }
        }
        // both NETLOGO and RGBA hide 'COLOR PARAMETERS'
        if (this.operatingMode === 'NETLOGO' || this.operatingMode === 'RGBA') {
            const parametersText = this.parent.querySelector('.cp-color-param-txt');
            if (parametersText) {
                parametersText.style.visibility = 'hidden';
                parametersText.style.pointerEvents = 'none';
            }
        }
    }
    /**
     * updateValuesDisplayVisibility:
     * Updates the visibility of color parameter displays based on the current operating mode.
     * - Hides NetLogo values when in 'RGBA' mode.
     * - Hides RGBA values when in 'NETLOGO' mode.
     * - Shows all values for other modes (e.g., 'DEFAULT').
     */
    updateValuesDisplayVisibility() {
        if (this.operatingMode == 'DEFAULT') {
            return; // return, because we don't need to hide anything 
        }
        // hide NetLogo display
        if (this.operatingMode == 'RGBA') {
            let netlogoDisplay = document.querySelector('#cp-values-display-netlogo');
            if (netlogoDisplay) {
                netlogoDisplay.style.display = 'none';
            }
        }
        else {
            let rgbaDisplay = document.querySelector('#cp-values-display-other');
            if (rgbaDisplay) {
                rgbaDisplay.style.display = 'none';
            }
        }
        // both methods add two buttons 'OKAY', 'CANCEL', my guess is you want to return the color both times? So destroy and call the callback function
        let colorDisplayCont = document.querySelector('.cp-values-display-cont');
        if (colorDisplayCont) {
            let buttonCont = document.createElement('div');
            buttonCont.style.display = 'flex';
            buttonCont.style.justifyContent = 'space-between';
            let okayButton = document.createElement('button');
            okayButton.textContent = Localized('Confirm');
            okayButton.classList.add('cp-values-display-btn');
            okayButton === null || okayButton === void 0 ? void 0 : okayButton.addEventListener('click', () => this.handleClose());
            let cancelButton = document.createElement('button');
            cancelButton.textContent = Localized('Cancel');
            cancelButton.classList.add('cp-values-display-btn');
            cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.addEventListener('click', () => this.handleClose());
            buttonCont.appendChild(okayButton);
            buttonCont.appendChild(cancelButton);
            colorDisplayCont.appendChild(buttonCont);
        }
    }
    /** updateColorParameters: updates the displayed color parameters to reflect the current Color. Also updates the alpha slider value because I don't know where else to put it  */
    updateColorParameters() {
        // update the color parameter type display
        const colorParamType = this.parent.querySelectorAll('.cp-values-type-text');
        colorParamType[0].innerHTML = this.displayParameter;
        colorParamType[1].innerHTML = 'NetLogo';
        let colorParamDisplay = this.parent.querySelectorAll('.cp-values-value');
        if (this.displayParameter == 'RGBA') {
            colorParamDisplay[0].innerHTML = `[${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3]}]`;
        }
        else if (this.displayParameter == 'HEX') {
            // hex display
            colorParamDisplay[0].innerHTML = `${colors.rgbaToHex(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3])}`;
        }
        else {
            // HSLA display
            const hsba = colors.RGBAToHSBA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]);
            colorParamDisplay[0].innerHTML = `[${hsba[0]}, ${hsba[1]}, ${hsba[2]}, ${hsba[3]}]`;
        }
        // netlogo color parameter update
        if (this.isNetLogoNum) {
            // netlogo number
            colorParamDisplay[1].innerHTML = `${colors.rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]])}`;
        }
        else {
            const compoundColor = `${colors.netlogoToCompound(colors.rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]]))}`;
            const formattedColor = compoundColor.charAt(0).toUpperCase() + compoundColor.slice(1);
            colorParamDisplay[1].innerHTML = formattedColor;
        }
        this.updateAlphaSlider();
    }
    /** updateAlphaSlider(): updates the appearance of the alpha slider to match the current alpha value */
    updateAlphaSlider() {
        const val = this.state.currentColor[3];
        const alphaSlider = this.parent.querySelector(".cp-alpha-slider");
        if (alphaSlider)
            alphaSlider.value = val.toString();
    }
    /** updateModelDisplay: updates the color of the model/background and the color widget next to the mode buttons  */
    updateModelDisplay() {
        var _a, _b;
        const colorString = colors.arrToString(this.state.currentColor);
        if (this.state.changeModelColor) {
            (_a = this.parent.querySelector('.cp-model-preview')) === null || _a === void 0 ? void 0 : _a.setAttribute('fill', colorString);
        }
        else {
            (_b = this.parent.querySelector('.cp-model-background')) === null || _b === void 0 ? void 0 : _b.setAttribute('fill', colorString);
        }
        const modeColorDisplay = this.parent.querySelector('.cp-mode-color-display');
        if (modeColorDisplay)
            modeColorDisplay.style.backgroundColor = colorString;
    }
    /** handleClose: Handles the closure of the color picker and triggers the onColorSelect callback */
    handleClose() {
        // Return the selected color, saved colors, and color type
        if (this.operatingMode == 'DEFAULT') {
            const selectedColorObj = {
                netlogo: colors.rgbToNetlogo(this.state.currentColor),
                rgba: this.state.currentColor,
                colorType: this.state.colorType
            };
            // Invoke the callback function with selected color data
            this.onColorSelect([selectedColorObj, this.state.savedColors]);
        }
        else if (this.operatingMode == 'RGBA') {
            // return just the RGBA number, as a string 
            this.onColorSelect(`[${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3]}]`);
        }
        else {
            // netlogo color 
            const compoundColor = `${colors.netlogoToCompound(colors.rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]]))}`;
            const formattedColor = compoundColor.charAt(0).toUpperCase() + compoundColor.slice(1);
            this.onColorSelect(formattedColor);
        }
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
                image.classList.toggle('cp-inverted', isPressed);
            }
        }
        // attach event listeners to the mode buttons 
        let modeButtons = this.parent.querySelectorAll('.cp-mode-btn');
        // Grid Button
        modeButtons[0].addEventListener('click', () => {
            this.setState({ currentMode: 'grid' });
            changeButtonColor(modeButtons[0], true);
            changeButtonColor(modeButtons[1], false);
            changeButtonColor(modeButtons[2], false);
            changeButtonColor(modeButtons[3], false);
            new GridMode(this.parent.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this));
        });
        // Wheel Button
        modeButtons[1].addEventListener('click', () => {
            this.setState({ currentMode: 'wheel' });
            changeButtonColor(modeButtons[1], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[2], false);
            changeButtonColor(modeButtons[3], false);
            new WheelMode(this.parent.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this));
        });
        modeButtons[2].addEventListener('click', () => {
            this.setState({ currentMode: 'rgb' });
            changeButtonColor(modeButtons[2], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[1], false);
            changeButtonColor(modeButtons[3], false);
            new SliderMode(this.parent.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this), this, 'rgb');
        });
        // HSB Button
        modeButtons[3].addEventListener('click', () => {
            this.setState({ currentMode: 'hsb' });
            changeButtonColor(modeButtons[3], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[1], false);
            changeButtonColor(modeButtons[2], false);
            new SliderMode(this.parent.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this), this, 'hsb');
        });
        // attach event listener to model indicator button
        let modelIndicatorButton = this.parent.querySelector('.cp-model-indicator');
        modelIndicatorButton === null || modelIndicatorButton === void 0 ? void 0 : modelIndicatorButton.addEventListener('click', () => {
            this.state.changeModelColor = !this.state.changeModelColor; // we don't want to call set state, because it updates the appearance as well 
            modelIndicatorButton.querySelector('.cp-mode-btn-text').innerHTML = this.state.changeModelColor ? Localized('Foreground Color') : Localized('Background Color');
            changeButtonColor(modelIndicatorButton, !this.state.changeModelColor);
        });
        //attach event listener to close button
        const closeButton = this.parent.querySelector('.cp-close');
        closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', () => this.handleClose());
        // attach switch color display parameters event listeners 
        const paramSwitchBtns = this.parent.querySelectorAll('.cp-values-type');
        // this is the RGBA / HSLA param button
        (_a = paramSwitchBtns[0]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            if (this.displayParameter == 'RGBA') {
                this.displayParameter = 'HEX';
            }
            else if (this.displayParameter == 'HEX') {
                this.displayParameter = "HSBA";
            }
            else if (this.displayParameter == 'HSBA') {
                this.displayParameter = 'RGBA';
            }
            this.updateColorParameters();
        });
        // NetLogo number --> doesn't have to switch text but does switch the display value 
        (_b = paramSwitchBtns[1]) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            this.isNetLogoNum = !this.isNetLogoNum;
            this.updateColorParameters();
        });
        // add event listeners to copy elements 
        const valueDisplayElements = this.parent.querySelectorAll(".cp-values-value");
        valueDisplayElements.forEach((display, index) => {
            const displayAsElement = display;
            displayAsElement.addEventListener('click', () => {
                this.copyToClipboard(displayAsElement);
            });
        });
    }
    /** clearCopyTimeout: Helper function to clear the copy timeout if necessary, and reset all values */
    clearCopyTimeout() {
        if (this.copyMessageTimeout) {
            clearTimeout(this.copyMessageTimeout);
            this.copyMessageTimeout = null;
            // also reset the state of all display elements
            const valueDisplayElements = document.querySelectorAll(".cp-values-value");
            valueDisplayElements.forEach((display, index) => {
                const displayAsElement = display;
                displayAsElement.style.pointerEvents = 'auto';
                displayAsElement.style.opacity = '1';
            });
        }
    }
    /** Copies innerText of displayElement to the clipboard */
    copyToClipboard(displayElement) {
        const originalText = displayElement.innerText;
        const textToCopy = originalText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Change to "Copied!"
            displayElement.innerText = 'Copied!';
            // Set a timeout to revert back to the original text
            // clear previous timeouts
            if (this.copyMessageTimeout) {
                clearTimeout(this.copyMessageTimeout);
            }
            // don't let user copy this 
            displayElement.style.pointerEvents = 'none';
            displayElement.style.opacity = "0.5";
            this.copyMessageTimeout = window.setTimeout(() => {
                displayElement.innerText = originalText;
                this.copyMessageTimeout = null;
                displayElement.style.opacity = "1";
                displayElement.style.pointerEvents = 'auto';
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
    /** initAlphaSlider: initializes the alpha slider */
    initAlphaSlider() {
        let alphaSlider = this.parent.querySelector('.cp-alpha-slider');
        (alphaSlider);
        alphaSlider.addEventListener('input', () => {
            this.setState({ currentColor: [this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], parseInt(alphaSlider.value)] });
            (this.state);
        });
    }
    /** toDOM: creates and attaches the ColorPicker body to parent */
    toDOM() {
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
                            <span class="cp-mode-btn-text">RGB</span> 
                        </button>
                        <button class="cp-mode-btn"> <!-- New HSB button -->
                            <img class="cp-mode-btn-img" src="${cpSlider}"/>
                            <span class="cp-mode-btn-text">HSB</span> 
                        </button>
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
                        <div id="cp-values-display-other" class="cp-values-display">
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
                        <div id="cp-values-display-netlogo" class="cp-values-display">
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
export function Localized(Source, ...Args) {
    var Localized = window.EditorLocalized;
    if (Localized) {
        return Localized.Get(Source, Args);
    }
    else {
        return Source;
    }
}
