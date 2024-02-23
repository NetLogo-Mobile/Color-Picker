import styleInject from '/Users/aceroliang/work/cp2/node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n\n/* cp-body: main body, everything in the color picker goes in here */\n.cp {\n    position: absolute;\n    border-radius: 0.625rem;\n    border: solid 1px #c0c0c0;\n    background-color: #eeeff0;\n    width: 38.4rem;\n    height: 27.6rem;\n    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: 'Lato', sans-serif;\n  }\n\n.cp-header {\n  background-color: #5a648d;\n  width: 100%;\n  height: 2.7876rem;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/* cp-title: title of the color picker and icon */\n.cp-title {\n  font-weight: bold;\n  color: white;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  margin-left: 3.1%;\n}\n\n.cp-title-text {\n  font-size: 0.8rem;\n  line-height: 2.7876rem;\n}\n\n.cp-icon {\n  width: 2.4rem;\n  margin-top: 8%;\n}\n\n.cp-close {\n  width: 1rem;\n  margin-right: 2.51%;\n  cursor:pointer;\n}\n\n.cp-body {\n  width: 100%;\n  box-sizing: border-box;\n  height: calc(100% - 2.7876rem); /* 100% - height of the header */\n  padding: 1.2rem 2rem 2rem 2rem; /* we can change this to lower the padding later according to David*/\n  display: flex;\n  flex-direction: row;\n}\n\n.cp-mode-btn-cont {\n  display: flex;\n  flex-direction: row;\n  gap: 0.384rem;\n  padding-bottom: 0.686rem;\n}\n\n.cp-mode-btn {\n  all: unset;\n  display: flex;\n  flex-direction: row;\n  gap: 0.3072rem;\n  border-radius: 0.1rem;\n  justify-content: center;\n  align-items: center;\n  height: 1.44rem;\n  width: 3.84rem;\n  border: #cecece 1px solid;\n  background-color: #e5e5e5;\n  font-size: 0.6504rem;\n  cursor: pointer;\n}\n\n.cp-mode-btn-img {\n  width: 0.8rem;\n  aspect-ratio: 1/1;\n}\n.cp-mode-btn-text { \n  font-size: 0.6504rem;\n}\n\n/** cp-body-btn-cont: container for the button modes of the color picker */\n.cp-body-btn-cont {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 0.686rem;\n}\n\n.cp-model-indicator {\n  width: 10.62rem;\n  margin: auto;\n  margin-bottom: 0.686rem;\n}\n\n/* cp-body-mode: styling for inner body that changes with the mode  */\n.cp-body-mode {\n  display: flex;\n  flex-direction: row;\n}\n/** cp-body-mode-main: the changing portion of the color picker (white section in the middle) */\n.cp-body-mode-main {\n  background-color: white;\n  width: 20.89rem;\n  height: 19.59rem;\n  border: solid 1.5px #cecece;\n  border-radius: 0.4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.97rem;\n}\n\n/** cp-body-mode-result: the result portion of the color picker (right section) */\n.cp-body-mode-result {\n  background-color: white;\n}\n\n/** cp-body-mode-left: styling for the left side of the body */\n.cp-body-left {\n  display: flex;\n  flex-direction: column;\n  padding-right: 1.52rem;\n}\n\n/** cp-body-mode-right: styling for the right side of the body */\n.cp-body-right {\n  display: flex;\n  flex-direction: column;\n}\n\n.cp-color-preview {\n  width: 10.948rem;\n  height: 10.948rem;\n  background-color: white;\n  border: solid 1px #cecece;\n  border-radius: 0.2rem;\n}\n\n.cp-alpha-text {\n  font-size: 0.7rem;\n}\n\n.cp-alpha-cont {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 1.83rem;\n  background-color: white;\n  margin-top: 0.53rem;\n  border: solid 1px #C0C0C0;\n  border-radius: 0.2rem;\n  gap: 0.5rem;\n\n}\n\n/* Base style for all sliders */\ninput[type='range'].cp-styled-slider {\n  background: transparent;\n  -webkit-appearance: none;\n  appearance: none;\n  outline: none;\n}\n\n/* Progress support for sliders */\ninput[type='range'].cp-styled-slider.slider-progress {\n  --range: calc(var(--max) - var(--min));\n  --ratio: calc((var(--value) - var(--min)) / var(--range));\n  --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));\n}\n\n/* Thumb styles for color and alpha sliders */\ninput[type='range'].cp-styled-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 50%;\n  background: white;\n  box-shadow: 0 0 0.125rem black;\n  cursor: pointer;\n}\n\ninput[type='range'].cp-styled-slider.cp-alpha-slider::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.2rem;\n}\n\n/* Unified track style */\ninput[type='range'].cp-styled-slider::-webkit-slider-runnable-track {\n  height: 0.8em;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.2em;\n  background: #efefef;\n}\n\n/* Hover effect for all thumbs */\ninput[type='range'].cp-styled-slider::-webkit-slider-thumb:hover {\n  background: white;\n}\n\n/* Specific style for alpha slider */\ninput[type='range'].cp-styled-slider.color-alpha {\n  height: 1rem;\n  width: 7.5rem;\n}\n\n/* Alpha slider track color with simplified repeating background */\ninput[type='range'].cp-styled-slider.color-alpha::-webkit-slider-runnable-track{\n  background: linear-gradient(45deg, #ccc 25%, transparent 25%),\n    linear-gradient(-45deg, #ccc 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, #ccc 75%),\n    linear-gradient(-45deg, transparent 75%, #ccc 75%),\n    linear-gradient(to right, rgba(0, 0, 0, 0) 0, #ccc 100%);\n  background-size: 0.625rem 0.625rem, 0.625rem 0.625rem, 0.625rem 0.625rem, 0.625rem 0.625rem, 100% 100%;\n  background-position: 0 0, 0 0.313rem, 0.313rem -0.313rem, -0.313rem 0rem, 0 0;\n  background-repeat: repeat, repeat, repeat, repeat, no-repeat;\n}\n.cp-color-param-txt {\n  font-weight: bold;\n  font-size: 0.7504rem;\n}\n\n.cp-values-display {\n  display: flex;\n  flex-direction: row;\n  background-color: white;\n  height: 1.7rem;\n  width: 100%;\n  border: 1px solid #c0c0c0;\n  border-radius: 0.1.5rem;\n  justify-content: center;\n  align-items: center;\n  color: #787878;\n  font-size: 0.8rem;\n}\n\n.cp-values-display-cont {\n  margin-top: 0.53rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.53rem;\n}\n\n/** grid stylings */\n.cp-grid-cont {\n  width: 20rem;\n  height: 14.01rem;\n  border: 1px solid #c0c0c0;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0.5rem;\n  user-select: none;\n}\n\n.cp-grid-cell {\n  cursor: pointer;\n}\n\n.cp-increment-cont {\n  padding: 0.4rem;\n  display: flex;\n  flex-direction: row;\n  border: 2px solid #C0C0C0;\n  border-radius: 0.3rem;\n  gap: 0.5rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.cp-grid-btn-cont {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 0.483rem;\n}\n\n.cp-numbers-btn {\n  all: unset;\n  height: 0.8rem;\n  width: 0.8rem;\n  border-radius: 0.1rem;\n  border: 1px solid #CECECE;\n  cursor: pointer;\n}\n\n.cp-numbers-clicked {\n  background-color: #C0C0C0;\n}\n\n.cp-increment-label {\n  font-size: 0.6504rem;\n}\n\n.cp-btn-label-cont {\n  display: flex;\n  flex-direction: row;\n  gap: 0.2rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.cp-grid-text {\n  pointer-events: none;\n}\n\n";
styleInject(css_248z);

declare class ColorPicker {
    private state;
    private parent;
    private onColorSelect;
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent: HTMLElement, initColor: number[], onColorSelect: (color: any) => void);
    /** setState: used to change the state of the color picker and call all update functions */
    private setState;
    /** init: initializes the ColorPicker */
    private init;
    /** updateColorParameters: updates the displayed color parameters to reflect the current Color */
    private updateColorParameters;
    /** updateModelDisplay: updates the color of the model/background  */
    private updateModelDisplay;
    /** attachEventListeners: Attaches the event listeners to the ColorPicker body */
    private attachEventListeners;
    /** initAlphaSlider: initializes the alpha slider */
    private initAlphaSlider;
    /** toDOM: creates and attaches the ColorPicker body to parent */
    private toDOM;
}

export { ColorPicker as default };
