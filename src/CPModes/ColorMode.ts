type ColorPickerState = {
    currentColor: number[];
    currentMode: string;
    changeModelColor: boolean;
};

/** ColorMode: Base class for each of the ColorPicker Modes */
class ColorMode {
    // A ColorMode needs to know the ColorPicker state for initial values 
    public currentColor: number[];
    // parent: the HTML element in which the ColorMode will add its body to
    public parent: HTMLElement;
    // setState: a function to change the state of the ColorPicker, passed from the ColorPicker
    public setState: (newState: Partial<ColorPickerState>) => void;
    constructor(currentColor: number[], parent: HTMLElement, setState: (newState: Partial<ColorPickerState>) => void){
        this.currentColor = currentColor;
        this.parent = parent;
        this.setState = setState;
    }

    /** toDOM: A mode of the colorPicker will change the body of the color picker*/
    public toDOM() : void{
        throw new Error("Method not implemented.");
    }

    /** showNumbers: will show numbers in the mode */
    public showNumbers() : void {
        throw new Error("Method not implemented.");
    }

    /** hideNumbers: nhide the numbers in the ColorPicker preview */
    public hideNumbers() : void {
        throw new Error("Method not implemented.");
    }
}

export { ColorMode, ColorPickerState };