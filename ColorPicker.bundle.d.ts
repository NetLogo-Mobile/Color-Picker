import styleInject from '/home/runner/work/Color-Picker/Color-Picker/node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n:root {\n  /* gradient-colors: for hue color changing gradient */\n  --gradient-colors: linear-gradient(to right,\n    hsla(0, 100%, 50%, 1),\n    hsla(10, 100%, 50%, 1),\n    hsla(20, 100%, 50%, 1),\n    hsla(30, 100%, 50%, 1),\n    hsla(40, 100%, 50%, 1),\n    hsla(50, 100%, 50%, 1),\n    hsla(60, 100%, 50%, 1),\n    hsla(70, 100%, 50%, 1),\n    hsla(80, 100%, 50%, 1),\n    hsla(90, 100%, 50%, 1),\n    hsla(100, 100%, 50%, 1),\n    hsla(110, 100%, 50%, 1),\n    hsla(120, 100%, 50%, 1),\n    hsla(130, 100%, 50%, 1),\n    hsla(140, 100%, 50%, 1),\n    hsla(150, 100%, 50%, 1),\n    hsla(160, 100%, 50%, 1),\n    hsla(170, 100%, 50%, 1),\n    hsla(180, 100%, 50%, 1),\n    hsla(190, 100%, 50%, 1),\n    hsla(200, 100%, 50%, 1),\n    hsla(210, 100%, 50%, 1),\n    hsla(220, 100%, 50%, 1),\n    hsla(230, 100%, 50%, 1),\n    hsla(240, 100%, 50%, 1),\n    hsla(250, 100%, 50%, 1),\n    hsla(260, 100%, 50%, 1),\n    hsla(270, 100%, 50%, 1),\n    hsla(280, 100%, 50%, 1),\n    hsla(290, 100%, 50%, 1),\n    hsla(300, 100%, 50%, 1),\n    hsla(310, 100%, 50%, 1),\n    hsla(320, 100%, 50%, 1),\n    hsla(330, 100%, 50%, 1),\n    hsla(340, 100%, 50%, 1),\n    hsla(350, 100%, 50%, 1),\n    hsla(360, 100%, 50%, 1)\n  );\n  /* gradietn colors for saturation and brightness */\n  --saturation-gradient: linear-gradient(to right, #fff, #f00);\n  --saturation-thumb: white;\n  --brightness-gradient: linear-gradient(to right, #000, #f00);\n  --brightness-thumb: white;\n}\n\n/* helper classes */\n.cp-invisible {\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    padding: 0;\n    margin: 0;\n    border: none;\n    overflow: hidden;\n}\n\n.cp-no-padding {\n    padding: 0\n}\n\n.no-select {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none; \n  -khtml-user-select: none;\n  -moz-user-select: none; \n  -ms-user-select: none; \n  user-select: none;\n}\n\n/* cp-body: main body, everything in the color picker goes in here */\n.cp {\n  border-radius: 0.625rem;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  background-color: #eeeff0;\n  width: fit-content;\n  height: 27.6rem;\n  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);\n  font-family: 'Lato', sans-serif;\n}\n\n.cp-header {\n  background-color: #5a648d;\n  width: 100%;\n  height: 2.75rem;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  display: flex;\n  flex-grow: 0;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* cp-title: title of the color picker and icon */\n.cp-title {\n  font-weight: bold;\n  color: white;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  margin-left: 3.1%;\n  gap: 0.75rem;\n}\n/* inverted class for inverting image color for pressing buttons */\n.cp-inverted {\n  filter: invert(100%);\n}\n\n.cp-icon {\n  width: 1.8rem;\n}\n\n.cp-close {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 2.51%;\n  cursor:pointer;\n}\n\n.cp-body {\n  width: 100%;\n  box-sizing: border-box;\n  height: calc(100% - 2.75rem); /* 100% - height of the header */\n  padding: 1.2rem;\n  display: flex;\n  flex-direction: row;\n}\n\n.cp-mode-btn-cont {\n  display: flex;\n  flex-direction: row;\n  width: calc(21rem + 1.5px);\n  justify-content: space-between; \n  padding-bottom: 0.7rem;\n}\n\n.cp-mode-btn {\n  all: unset;\n  display: flex;\n  flex-direction: row;\n  gap: 0.3rem;\n  border: #cecece 1px solid;\n  border-radius: 0.15rem;\n  justify-content: center;\n  align-items: center;\n  height: 1.8rem;\n  width: 4.875rem;\n  box-sizing: border-box;\n  background-color: #e5e5e5;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n\n.cp-mode-color-display {\n  height: 1.8rem;\n  box-sizing: border-box;\n  width: 4.875rem;\n  border: #cecece 1px solid;\n  visibility: hidden;\n}\n\n.cp-mode-btn-img {\n  width: 0.9rem;\n  aspect-ratio: 1/1;\n}\n\n.cp-model-indicator {\n  width: 100%;\n  margin: 0 0 0.7rem;\n}\n\n/* cp-body-mode: styling for inner body that changes with the mode  */\n.cp-body-mode {\n  display: flex;\n  flex-direction: row;\n}\n/** cp-body-mode-main: the changing portion of the color picker (white section in the middle) */\n.cp-body-mode-main {\n  user-select: none;\n  background-color: white;\n  width: 21rem;\n  height: 20rem;\n  user-select: none;\n  border: solid 1.5px #cecece;\n  border-radius: 0.2rem;\n}\n\n/** cp-body-mode-result: the result portion of the color picker (right section) */\n.cp-body-mode-result {\n  background-color: white;\n}\n\n/** cp-body-mode-left: styling for the left side of the body */\n.cp-body-left {\n  display: flex;\n  flex-direction: column;\n}\n\n/** cp-body-mode-right: styling for the right side of the body */\n.cp-body-right {\n  display: flex;\n  padding-left: 1.5rem;\n  flex-direction: column;\n}\n\n/* When the screen is too small, hide the right part */\n@media (max-width: 37.5rem) {\n  .cp-body-right {\n    display: none;\n  }\n  \n  .cp-mode-color-display {\n    visibility: visible;\n  }\n}\n\n/* additional classes for invisible */ \n.cp-compact .cp-body-right {\n  display: none;\n}\n\n.cp-compact .cp-mode-color-display {\n  visibility: visible;\n}\n\n.cp-color-preview {\n  width: 11rem;\n  height: 11rem;\n  background-color: white;\n  border: solid 1px #cecece;\n  border-radius: 0.2rem;\n}\n\n.cp-alpha-text {\n  font-size: 0.8rem;\n}\n\n.cp-alpha-cont {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 1.83rem;\n  background-color: white;\n  margin-top: 0.53rem;\n  border: solid 1px #C0C0C0;\n  border-radius: 0.2rem;\n  gap: 0.5rem;\n\n}\n\n/* Base style for all sliders */\ninput[type='range'].cp-styled-slider {\n  background: transparent;\n  -webkit-appearance: none;\n  appearance: none;\n  outline: none;\n}\n\n/* Progress support for sliders */\ninput[type='range'].cp-styled-slider.slider-progress {\n  --range: calc(var(--max) - var(--min));\n  --ratio: calc((var(--value) - var(--min)) / var(--range));\n  --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));\n}\n\n/* Thumb styles for color and alpha sliders */\ninput[type='range'].cp-styled-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 50%;\n  background: white;\n  box-shadow: 0 0 0.125rem black;\n  cursor: pointer;\n}\n\ninput[type='range'].cp-styled-slider.cp-alpha-slider::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.2rem;\n}\n\n/* Unified track style */\ninput[type='range'].cp-styled-slider::-webkit-slider-runnable-track {\n  height: 0.8rem;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.2rem;\n  background: #efefef;\n}\n\n/* Hover effect for all thumbs */\ninput[type='range'].cp-styled-slider::-webkit-slider-thumb:hover {\n  background: white;\n}\n\n/* Specific style for alpha slider */\ninput[type='range'].cp-styled-slider.color-alpha {\n  height: 1rem;\n  width: 7.5rem;\n}\n\n/* Red slider */\ninput[type='range'].cp-styled-slider.color-red.slider-progress::-webkit-slider-runnable-track {\n  background: linear-gradient(#fb4d46, #fb4d46) 0 / var(--sx) 100% no-repeat,\n    #efefef;\n}\n\ninput[type='range'].cp-styled-slider.color-red.slider-progress:hover::-webkit-slider-runnable-track {\n  background: linear-gradient(red, red) 0 / var(--sx) 100% no-repeat, #e5e5e5;\n}\n\n\n/* Alpha slider track color with simplified repeating background */\ninput[type='range'].cp-styled-slider.color-alpha::-webkit-slider-runnable-track{\n  background: linear-gradient(45deg, #ccc 25%, transparent 25%),\n    linear-gradient(-45deg, #ccc 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, #ccc 75%),\n    linear-gradient(-45deg, transparent 75%, #ccc 75%),\n    linear-gradient(to right, rgba(0, 0, 0, 0) 0, #ccc 100%);\n  background-size: 0.625rem 0.625rem, 0.625rem 0.625rem, 0.625rem 0.625rem, 0.625rem 0.625rem, 100% 100%;\n  background-position: 0 0, 0 0.313rem, 0.313rem -0.313rem, -0.313rem 0rem, 0 0;\n  background-repeat: repeat, repeat, repeat, repeat, no-repeat;\n}\n\n.cp-color-param-txt {\n  font-weight: bold;\n  font-size: 0.8rem;\n}\n\n/* Green slider */\ninput[type='range'].cp-styled-slider.color-green.slider-progress::-webkit-slider-runnable-track {\n  background: linear-gradient(#50c878, #50c878) 0 / var(--sx) 100% no-repeat,\n    #efefef;\n}\n\ninput[type='range'].cp-styled-slider.color-green.slider-progress:hover::-webkit-slider-runnable-track {\n  background: linear-gradient(green, green) 0 / var(--sx) 100% no-repeat,\n    #e5e5e5;\n}\n\n/* Blue slider */\ninput[type='range'].cp-styled-slider.color-blue.slider-progress::-webkit-slider-runnable-track {\n  background: linear-gradient(#2a52be, #2a52be) 0 / var(--sx) 100% no-repeat,\n    #efefef;\n}\n\ninput[type='range'].cp-styled-slider.color-blue.slider-progress:hover::-webkit-slider-runnable-track {\n  background: linear-gradient(blue, blue) 0 / var(--sx) 100% no-repeat, #e5e5e5;\n}\n\n.cp-values-display {\n  display: flex;\n  flex-direction: row;\n  background-color: white;\n  height: 1.77rem;\n  width: 100%;\n  border: 1px solid #c0c0c0;\n  border-radius: 0.15rem;\n  align-items: center;\n}\n\n.cp-values-cont {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.cp-values-type-text {\n  font-weight: 500;\n  padding-left: 10%;\n}\n\n.cp-values-value-cont {\n  display: flex;\n  width: 65%;\n  justify-content: center;\n}\n/* the first value cont should have a greater width*/\n.cp-values-value-cont-1 {\n  width: 75%;\n}\n\n.cp-values-type {\n  color: #9E9E9E;\n  font-size: 0.8rem;\n  display: flex;\n  flex-direction: row;\n  width: 35%;\n  height: 100%;\n  cursor: pointer;\n}\n/* the first cp-values-type should have a smaller width */\n.cp-values-type-1 {\n  width: 25%;\n}\n\n.cp-values-value {\n  color: #787878;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.cp-values-img {\n  width: 0.7rem;\n  aspect-ratio: 1/1;\n}\n\n.cp-values-display-cont {\n  margin-top: 0.53rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.53rem;\n  user-select: none;\n}\n\n/** grid stylings */\n.cp-grid-cont {\n  width: 100%;\n  height: 16.5rem;\n  margin: 0 0 0.7rem 0;\n  overflow: hidden;\n  user-select: none;\n}\n\n.cp-grid-cell {\n  cursor: pointer;\n}\n\n.cp-increment-cont {\n  padding: 0.4rem;\n  display: flex;\n  flex-direction: row;\n  background: #EEEEEE;\n  border-radius: 0.3rem;\n  gap: 0.5rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.cp-grid-btn-cont {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.cp-numbers-btn {\n  all: unset;\n  height: 0.8rem;\n  width: 0.8rem;\n  border-radius: 0.15rem;\n  border: 1px solid #CECECE;\n  cursor: pointer;\n}\n\n.cp-numbers-clicked {\n  background-color: #C0C0C0;\n}\n\n.cp-increment-label {\n  font-size: 0.8rem;\n}\n\n.cp-btn-label-cont {\n  display: flex;\n  flex-direction: row;\n  gap: 0.2rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.cp-grid-text {\n  pointer-events: none;\n}\n\n.cp-wheel-cont {\n  width: 20rem;\n  height: 15rem;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0.5rem;\n  user-select: none;\n}\n\n.cp-wheel-spacing-cont {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  padding-top: 1.1rem;\n}\n\n.cp-inner-wheel {\n  width: 100%;\n  height: 100%;\n}\n\n.cp-outer-wheel {\n  width: 100%;\n  height: 100%;\n}\n\n.cp-wheel-numbers {\n  font-size: 0.8rem;\n  color: white;\n}\n\n/** Slider Mode */\n.cp-slider-cont {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.97rem;\n  width: 100%;\n  height: 100%;\n}\n\n.cp-slider-color-display {\n  width: 18rem;\n  height: 4.57rem;\n  box-shadow: 0 0.188rem 0.625rem rgb(0 0 0 / 0.5);\n  border-radius: 0.2rem;\n}\n\n.cp-slider-changer {\n  display: flex;\n  flex-direction: column;\n}\n\n.cp-slider-display-container {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n}\n\ninput[type='range'].cp-styled-slider.color-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background: white;\n  border: none;\n  box-shadow: 0 0 0.125rem black;\n  margin-top: calc(max((1em - 1px - 1px) * 0.5, 0px) - 2em * 0.5);\n  cursor: pointer;\n}\n\ninput[type='number'].cp-slider-value-display-cont {\n  text-align: center;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #d8d8d8;\n  outline: none;\n  position: relative;\n  margin-top: 1rem;\n  font-size: 0.8rem;\n  padding: 0.125rem 0.125rem 0.25rem;\n  margin-bottom: 0.25rem;\n  width: 2.5rem;\n  background: #fcfcfc;\n}\n\n.cp-slider-text {\n  font-size: 0.9rem;\n  padding-left: 0.3rem;\n  padding-bottom: 0.1rem;\n}\n\n.cp-slider-changer {\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-left: 60%;\n  margin-bottom: -1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n}\n\n.cp-dropdown-text {\n  color: gray;\n  font-size: 0.8rem;\n}\n\n/** Wheel mode */\n.cp-saved-colors-cont {\n  display: flex;\n  flex-direction: row;\n  gap: 0.8rem;\n}\n\n.cp-saved-colors {\n  background-color: #f1f1f1;\n  box-shadow: 0 0.313rem 0.313rem rgba(0, 0, 0, 0.3);\n  border-radius: 0.2rem;\n  width: 2.8rem;\n  height: 2.8rem;\n  cursor: pointer;\n}\n\n.cp-saved-color-add {\n  background-color: white;\n  border: 2px solid #808080;\n  border-radius: 0.2rem;\n  width: 2.8rem;\n  height: 2.8rem;\n  cursor: pointer;\n  background: linear-gradient(#808080 0 0), linear-gradient(#808080 0 0);\n  background-position: center;\n  background-size: 50% 0.125rem, 0.125rem 50%; \n  background-repeat: no-repeat;\n}\n\n/* Hue slider */\ninput[type='range'].cp-styled-slider.color-hue::-webkit-slider-runnable-track {\n  height: 1em;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.5em;\n  background: var(--gradient-colors);\n  box-shadow: none;\n}\n\ninput[type='range'].cp-styled-slider.color-hue::-webkit-slider-thumb:hover {\n  background: hsl(var(--value), 100%, 60%);\n}\n\ninput[type='range'].cp-styled-slider.color-hue.slider-progress:hover::-webkit-slider-runnable-track {\n  background: var(--gradient-colors);\n}\n\n/* Saturation slider */\ninput[type='range'].cp-styled-slider.color-saturation::-webkit-slider-runnable-track {\n  height: 1em;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.5em;\n  background: var(--saturation-gradient);\n  box-shadow: none;\n}\n\ninput[type='range'].cp-styled-slider.color-saturation::-webkit-slider-thumb:hover {\n  background: var(--saturation-thumb);\n}\n\n/** brightness slider */\ninput[type='range'].cp-styled-slider.color-brightness::-webkit-slider-runnable-track {\n  height: 1em;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.5em;\n  background: var(--brightness-gradient);\n  box-shadow: none;\n}\n\ninput[type='range'].cp-styled-slider.color-brightness::-webkit-slider-thumb:hover {\n  background: var(--brightness-thumb);\n}\n\n.cp-draggable {\n  cursor: pointer;\n}\n\n.cp-wheel-numbers {\n  fill: white;\n  font-family: 'Lato', sans-serif;\n  font-size: 0.25rem;\n  pointer-events: none;\n  user-select: none;\n}";
styleInject(css_248z);

type ColorPickerState = {
    currentColor: number[];
    colorType: string;
    currentMode: string;
    changeModelColor: boolean;
    increment: number;
    showNumbers: boolean;
    savedColors: number[][];
    [key: string]: any;
};

interface ColorPickerConfig {
    parent: HTMLElement;
    initColor: number[];
    onColorSelect: (colorData: [SelectedColor, number[][]]) => void;
    savedColors?: number[][];
}
interface SelectedColor {
    netlogo: number;
    rgba: number[];
    colorType: string;
}
declare class ColorPicker {
    state: ColorPickerState;
    private parent;
    private onColorSelect;
    private displayParameter;
    private isNetLogoNum;
    private isMinimized;
    private openTo;
    private copyMessageTimeout;
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(config: {
        parent: HTMLElement;
        initColor: number[];
        initColorType: string;
        onColorSelect: (colorData: [SelectedColor, number[][]]) => void;
        savedColors?: number[][];
    }, openTo?: string);
    private updateLayout;
    /** setState: used to change the state of the color picker and call all update functions */
    private setState;
    /** init: initializes the ColorPicker */
    private init;
    /** updateColorParameters: updates the displayed color parameters to reflect the current Color. Also updates the alpha slider value because I don't know where else to put it  */
    private updateColorParameters;
    /** updateAlphaSlider(): updates the appearance of the alpha slider to match the current alpha value */
    private updateAlphaSlider;
    /** updateModelDisplay: updates the color of the model/background and the color widget next to the mode buttons  */
    private updateModelDisplay;
    /** attachEventListeners: Attaches the event listeners to the ColorPicker body */
    private attachEventListeners;
    /** clearCopyTimeout: Helper function to clear the copy timeout if necessary, and reset all values */
    private clearCopyTimeout;
    /** Copies innerText of displayElement to the clipboard */
    private copyToClipboard;
    /** initAlphaSlider: initializes the alpha slider */
    private initAlphaSlider;
    /** toDOM: creates and attaches the ColorPicker body to parent */
    private toDOM;
}
/** Localized: a helper function to get localized strings from the editor. */
declare function Localized(Source: string, ...Args: string[]): string;

export { type ColorPickerConfig, Localized, ColorPicker as default };
