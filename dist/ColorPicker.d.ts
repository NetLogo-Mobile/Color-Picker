import '../color-picker.css';
export default class ColorPicker {
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
