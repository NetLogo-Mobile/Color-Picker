import { ColorMode } from "./ColorMode";
import { ColorPickerState } from "./ColorMode";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class WheelMode extends ColorMode {
    /** increment: the increment in which cells in the grid are made */

    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void){
        super(parent, state, setState);
        this.parent.replaceChildren();
        this.toDOM();
    }

    /** toDOM: creates the body of the Grid */
    public toDOM() : void {
        this.parent.innerHTML= "this is the wheel"
    }
}