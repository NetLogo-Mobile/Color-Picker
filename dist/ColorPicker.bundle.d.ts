import styleInject from '/Users/aceroliang/work/cp2/node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n\n/* cp-body: main body, everything in the color picker goes in here */\n.cp {\n    position: absolute;\n    border-radius: 0.625rem;\n    border: solid 1px #c0c0c0;\n    background-color: #eeeff0;\n    width: 38.4rem;\n    height: 27.6rem;\n    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: 'Lato', sans-serif;\n  }\n\n.cp-header {\n  background-color: #5a648d;\n  width: 100%;\n  height: 2.7876rem;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/* cp-title: title of the color picker and icon */\n.cp-title {\n  font-weight: bold;\n  color: white;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  margin-left: 3.1%;\n}\n\n.cp-title-text {\n  font-size: 0.8rem;\n  line-height: 2.7876rem;\n}\n\n.cp-icon {\n  width: 2.4rem;\n  margin-top: 8%;\n}\n\n.cp-close {\n  width: 1rem;\n  margin-right: 2.51%;\n}\n\n.cp-body {\n  width: 100%;\n  box-sizing: border-box;\n  height: calc(100% - 2.7876rem); /* 100% - height of the header */\n  padding: 1.2rem 2rem 2rem 2rem; /* we can change this to lower the padding later according to David*/\n}\n\n.cp-mode-btn-cont {\n  display: flex;\n  flex-direction: row;\n  gap: 0.384rem;\n  padding-right: 10.06rem;\n}\n\n.cp-mode-btn {\n  all: unset;\n  display: flex;\n  flex-direction: row;\n  gap: 0.3072rem;\n  border-radius: 0.1rem;\n  justify-content: center;\n  align-items: center;\n  height: 1.44rem;\n  width: 3.84rem;\n  border: #cecece 1px solid;\n  background-color: #e5e5e5;\n  font-size: 0.6504rem;\n  cursor: pointer;\n}\n\n.cp-mode-btn-img {\n  width: 0.8rem;\n  aspect-ratio: 1/1;\n}\n.cp-mode-btn-text { \n  font-size: 0.6504rem;\n}\n\n.cp-body-btn-cont {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 0.686rem;\n}\n\n.cp-model-indicator {\n  width: 10.62rem;\n}\n\n/* cp-body-mode: styling for inner body that changes with the mode  */\n.cp-body-mode {\n  display: flex;\n  flex-direction: row;\n}\n/** cp-body-mode-main: the changing portion of the color picker (white section in the middle) */\n.cp-body-mode-main {\n  background-color: white;\n  width: 20.89rem;\n  height: 19.59rem;\n  border: solid 1.5px #cecece;\n  border-radius: 0.4rem;\n}\n\n/** cp-body-mode-result: the result portion of the color picker (right section) */\n.cp-body-mode-result {\n  background-color: white;\n}";
styleInject(css_248z);

declare class ColorPicker {
    private currentColor;
    private currentMode;
    private parent;
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent: HTMLElement, initColor: number[]);
    /** init: initializes the ColorPicker */
    private init;
    /** toDOM: creates and attaches the ColorPicker body to parent */
    toDOM(): void;
}

export { ColorPicker as default };
