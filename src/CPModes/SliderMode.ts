import { ColorMode } from "./ColorMode";
import { ColorPickerState } from "./ColorMode";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class SliderMode extends ColorMode {
    /** increment: the increment in which cells in the grid are made */

    constructor(currentColor: number[], parent: HTMLElement, setState: (newState: Partial<ColorPickerState>) => void){
        super(currentColor, parent, setState);
        this.parent.replaceChildren();
        this.toDOM();
    }

    /** toDOM: creates the body of the Grid */
    public toDOM() : void {
        this.parent.innerHTML= "this is the slider"
    }
}