/** ColorMode: Base class for each of the ColorPicker Modes */
class ColorMode {
    /** constructor: sets the parent, state, and setState */
    constructor(parent, state, setState) {
        this.parent = parent;
        this.parent.innerHTML = '';
        this.state = state;
        this.setState = setState;
    }
    /** showNumbers: will show numbers in the mode */
    showNumbers() { }
    ;
    /** hideNumbers: nhide the numbers in the ColorPicker preview */
    hideNumbers() { }
    ;
}
export { ColorMode };
