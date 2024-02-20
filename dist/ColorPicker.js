import '../color-picker.css';
import icon from './assets/cp-icon.svg';
import closeIcon from './assets/cp-close.svg';
import cpGrid from './assets/cp-grid.svg';
import cpWheel from './assets/cp-wheel.svg';
import cpSlider from './assets/cp-slider.svg';
import modelIndicator from './assets/cp-model-indicator.svg';
export default class ColorPicker {
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent, initColor) {
        this.currentColor = initColor;
        this.currentMode = 'grid';
        this.parent = parent;
        this.init();
    }
    /** init: initializes the ColorPicker */
    init() {
        this.toDOM();
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
                <div class="cp-body-btn-cont">
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
                    <button class="cp-mode-btn cp-model-indicator"> 
                        <img class="cp-mode-btn-img" src="${modelIndicator}"/>
                        <span class="cp-mode-btn-text"> Model Color Selected </span>
                    </button>
                </div>
                <div class="cp-body-mode">
                    <div class="cp-body-mode-main"></div>
                    <div class="cp-body-mode-result"></div> 
                </div>
            </div>
        </div>
    `;
        this.parent.innerHTML = cpBody;
    }
}
