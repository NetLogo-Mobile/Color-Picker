import { ColorMode } from "./ColorMode";
import { ColorPickerState } from "./ColorMode";
import { Slider } from "../helpers/Slider";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
export class SliderMode extends ColorMode {
    
    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void){
        super(parent, state, setState);
        this.parent.replaceChildren();
        this.init();
    }

    /** toDOM: creates the body of the Grid */
    public toDOM() : void {
        this.parent.innerHTML= `
            <div class="cp-slider-cont">
                <div class="cp-slider-color-display"></div>
                <div class="cp-sliders">
                    <!-- part that switches from rgb to hsl -->
                    <div class="cp-slider-changer"></div>
                </div>
            </div>
        `
    }

    /** updateColorDisplay: updates the color display to be the current color  */
    private updateColorDisplay() : void {
        const colorDisplay = document.querySelector('.cp-slider-color-display') as HTMLElement;
        colorDisplay.style.backgroundColor = `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]})`;
    }

    /** createRGB: creates the RGB sliders */
    private createRGB() : void {
        const parent = document.querySelector('.cp-slider-changer') as HTMLElement;
        let slider1 = new Slider(parent, this.state.currentColor[0], 0, 255, 'Red', '200px', 'Red', true);
        let slider2 = new Slider(parent, this.state.currentColor[1], 0, 255, 'Green', '200px', 'Green', true);
        let slider3 = new Slider(parent, this.state.currentColor[2], 0, 255, 'Blue', '200px', 'Blue', true);

        /** add event listeners for every slider */
        slider1.inputElement.addEventListener('input', () => {
            this.state.currentColor[0] = slider1.getValue();
            this.updateColorDisplay();
            this.setState({currentColor: [slider1.getValue(), this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]]});
        });
        slider2.inputElement.addEventListener('input', () => {
            this.state.currentColor[1] = slider2.getValue();
            this.updateColorDisplay();
            this.setState({currentColor: this.state.currentColor});
        });
        slider3.inputElement.addEventListener('input', () => {
            this.state.currentColor[2] = slider3.getValue();
            this.updateColorDisplay();
            this.setState({currentColor: this.state.currentColor});
        });
    }


    /** init(): initializes the grid  */
    public init(): void {
        this.toDOM();
        this.updateColorDisplay();
        this.createRGB();
    }
}