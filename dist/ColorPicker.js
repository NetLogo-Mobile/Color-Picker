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
export default class ColorPicker {
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent, initColor, onColorSelect) {
        this.state = {
            currentColor: initColor,
            currentMode: 'grid',
            changeModelColor: true
        };
        this.parent = parent;
        this.onColorSelect = onColorSelect;
        this.init();
    }
    /** setState: used to change the state of the color picker and call all update functions */
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.updateColorParameters();
    }
    /** init: initializes the ColorPicker */
    init() {
        this.toDOM();
        this.updateColorParameters();
        this.attachEventListeners();
    }
    /** updateColorParameters: updates the displayed color parameters to reflect the current Color */
    updateColorParameters() {
        let colorParamDisplay = document.querySelectorAll('.cp-values-display');
        colorParamDisplay[0].innerHTML = `(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3]})`;
        colorParamDisplay[1].innerHTML = `${rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]])}`;
    }
    /** attachEventListeners: Attaches the event listeners to the ColorPicker body */
    attachEventListeners() {
        /** changeButtonColor: Helper function to toggle button color */
        function changeButtonColor(button, isPressed) {
            if (isPressed) {
                button.style.backgroundColor = '#5A648D';
                button.style.color = 'white';
                let image = button.querySelector('.cp-mode-btn-img');
                if (image != null) {
                    image.style.filter = 'invert(100%)';
                }
            }
            else {
                button.style.backgroundColor = '#E5E5E5';
                button.style.color = 'black';
                let image = button.querySelector('.cp-mode-btn-img');
                if (image != null) {
                    image.style.filter = 'invert(0%)';
                }
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
            new GridMode(this.state.currentColor, document.querySelector('.cp-body-mode-main'), this.setState.bind(this));
        });
        modeButtons[1].addEventListener('click', () => {
            // wheel button
            this.setState({ currentMode: 'wheel' });
            changeButtonColor(modeButtons[1], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[2], false);
            new WheelMode(this.state.currentColor, document.querySelector('.cp-body-mode-main'), this.setState.bind(this));
        });
        modeButtons[2].addEventListener('click', () => {
            // slider button
            this.setState({ currentMode: 'slider' });
            changeButtonColor(modeButtons[2], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[1], false);
            new SliderMode(this.state.currentColor, document.querySelector('.cp-body-mode-main'), this.setState.bind(this));
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
                        <path xmlns="http://www.w3.org/2000/svg" class="cp-turtlePreview" fill="orange" d="M 50.069 9.889 L 14.945 89.069 L 50.71 65.458 L 86.458 89.73 L 50.069 9.889 Z"/>
                        </svg>
                    </div>
                    <div class="cp-alpha-cont">
                        <span class="cp-alpha-text"> Alpha </span>
                        <input type="range" min="0" max="255" class="cp-styled-slider alphaSlider color-alpha slider-progress cp-alphaSlider"">
                    </div>
                    <div class="cp-values-display-cont">
                        <span class="cp-color-param-txt"> Color Parameters </span>
                        <div class="cp-values-display"></div>
                        <div class="cp-values-display"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
        this.parent.innerHTML = cpBody;
    }
}
