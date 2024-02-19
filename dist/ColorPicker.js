import '../color-picker.css';
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
        var cpBody = (`
            <div class="cp-body">
                <div class="cp-header">
                    <div class="cp-title"> 
                        <img src="./dist/assets/cp-icon.svg"/>
                    </div> 
                </div>
            </div>
        `);
        this.parent.innerHTML = cpBody;
    }
}
