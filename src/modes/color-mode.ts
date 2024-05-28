type ColorPickerState = {
    currentColor: number[];
    currentMode: string;
    changeModelColor: boolean;
    increment: number;
    showNumbers: boolean;
    savedColors: number[][];
    [key: string]: any;
};

/** ColorMode: Base class for each of the ColorPicker Modes */
abstract class ColorMode {
    // A ColorMode needs to know the ColorPicker state for initial values 
    public state: ColorPickerState;
    // parent: the HTML element in which the ColorMode will add its body to
    public parent: HTMLElement;
    // setState: a function to change the state of the ColorPicker, passed from the ColorPicker
    public setState: (newState: Partial<ColorPickerState>) => void;

    /** constructor: sets the parent, state, and setState */
    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void){
        this.parent = parent;
        this.state = state;
        this.setState = setState;
    }

    /** toDOM: A mode of the colorPicker will change the body of the color picker*/
    public abstract toDOM() : void;
    /** showNumbers: will show numbers in the mode */
    public abstract showNumbers() : void;
    /** hideNumbers: nhide the numbers in the ColorPicker preview */
    public abstract hideNumbers() : void;
}

export { ColorMode, ColorPickerState };