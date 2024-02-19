import '../color-picker.css';
import icon from './assets/cp-icon.svg';
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
        <div class="cp-body">
            <div class="cp-header">
                <div class="cp-title">
                    <img src="${icon}">
                </div>
            </div>
        </div>
    `;
        this.parent.innerHTML = cpBody;
    }
}
