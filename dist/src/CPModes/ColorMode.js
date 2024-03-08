/** ColorMode: Base class for each of the ColorPicker Modes */
class ColorMode {
    constructor(parent, state, setState) {
        this.parent = parent;
        this.state = state;
        this.setState = setState;
    }
    /** toDOM: A mode of the colorPicker will change the body of the color picker*/
    toDOM() {
        throw new Error("Method not implemented.");
    }
    /** showNumbers: will show numbers in the mode */
    showNumbers() {
        throw new Error("Method not implemented.");
    }
    /** hideNumbers: nhide the numbers in the ColorPicker preview */
    hideNumbers() {
        throw new Error("Method not implemented.");
    }
}
export { ColorMode };
