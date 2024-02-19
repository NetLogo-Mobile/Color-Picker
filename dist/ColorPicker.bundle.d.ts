import styleInject from '/Users/aceroliang/work/cp2/node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "/* cp-body: main body, everything in the color picker goes in here */\n.cp-body {\n    position: absolute;\n    border-radius: 0.625rem;\n    border: solid 1px #c0c0c0;\n    background-color: #eeeff0;\n    width: 38.4rem;\n    height: 27.6rem;\n    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n.cp-header {\n  background-color: #5a648d;\n  width: 100%;\n  height: 10.1%;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.cp-title {\n  \n}";
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
