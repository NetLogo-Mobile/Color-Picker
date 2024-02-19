import '../color-picker.css';
import icon from './assets/cp-icon.svg';

export default class ColorPicker {
    // currentColor: The current color of the color picker
    private currentColor: number[];
    //currentMode: The current mode of the color picker. One of 'grid', 'wheel', 'slider'
    private currentMode: string; 
    //parent: the parent element of the ColorPicker
    private parent: HTMLElement;
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent: HTMLElement, initColor: number[]) {
        this.currentColor = initColor;
        this.currentMode = 'grid'
        this.parent = parent;
        this.init();
    }

    /** init: initializes the ColorPicker */
    private init() {
        this.toDOM();
    }

    /** toDOM: creates and attaches the ColorPicker body to parent */
    public toDOM() {
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