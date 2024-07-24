import { start } from "repl";

type SliderColor = 'Red' | 'Green' | 'Blue' | 'alpha' | 'Hue' | 'Saturation' | 'Luminance';

export class Slider {
    private valueDisplayElement: HTMLInputElement | null = null; // the input Element defining the value indicator

    public inputElement: HTMLInputElement; // the slider 
    private parent: HTMLElement;
    private onValueChange: Function; // callback function to be called when slider value changes 
    

    constructor(
        parent: HTMLElement,
        startValue: number,
        min: number,
        max: number,
        sliderColor: SliderColor,
        sliderWidth: string,
        text: string,
        onValueChange: Function, // callback function to be called after slider / inputbox value change 
        hasDisplay: boolean = true
    ) {
        let r = document.querySelector(':root') as HTMLElement;
        r.style.setProperty('--slider', sliderColor);

        this.parent = parent;
        this.onValueChange = onValueChange;

        // Create the slider
        this.inputElement = document.createElement('input');
        this.inputElement.type = 'range';
        this.inputElement.style.width = sliderWidth;
        this.inputElement.value = startValue.toString();
        
        this.inputElement.min = min.toString();
        this.inputElement.max = max.toString();
        this.inputElement.classList.add('cp-styled-slider');
        this.inputElement.value = startValue.toString()

        if (sliderColor === 'alpha') {
            this.inputElement.classList.add('alpha-slider');
        } else {
            this.inputElement.classList.add('color-slider');
        }

        // Add color to slider TRACK
        this.inputElement.classList.add(`color-${sliderColor.toLowerCase()}`, 'slider-progress');
        this.inputElement.addEventListener('input', this.rangeSlide.bind(this));

        // Create a div to hold the slider
        let sliderContainer = document.createElement('div');
        sliderContainer.classList.add('cp-slider-container');

        // Create the text element
        if (text !== '') {
            let textElement = document.createElement('div');
            textElement.innerHTML = text;
            textElement.classList.add('cp-slider-text');
            sliderContainer.appendChild(textElement);
        }

        sliderContainer.appendChild(this.inputElement);

        // Create a div to hold slider and display
        let sliderDisplayContainer = document.createElement('div');
        sliderDisplayContainer.classList.add('cp-slider-display-container');
        sliderDisplayContainer.appendChild(sliderContainer);

        if (hasDisplay) {
            // create value-display: the input element that shows the value of the slider. 
            this.valueDisplayElement = document.createElement('input');
            this.valueDisplayElement.classList.add('cp-slider-value-display-cont');
            this.valueDisplayElement.type = 'number';
            this.valueDisplayElement.min = '0';
            this.valueDisplayElement.max = max.toString();
            this.valueDisplayElement.value = startValue.toString();
            sliderDisplayContainer.appendChild(this.valueDisplayElement);
            // add event listener for this input element as well to change the color 
            this.valueDisplayElement.addEventListener('input', (event) => {
                const input = event.target as HTMLInputElement;
                const value = input.value;
                // Allow empty input (will be treated as 0)
                if (value === '') {
                    this.setValue(0);
                    // color value has changed so call onValueChange
                    this.onValueChange(0);
                    return;
                }
                let numValue = parseInt(value);
                // If the input is not a number, reset to the previous valid value
                if (isNaN(numValue)) {
                    input.value = this.inputElement.value.toString();
                    return;
                }
                numValue = Math.max(0, Math.min(max, numValue));
                // Update the input value and the slider
                input.value = numValue.toString();
                this.setValue(numValue);
                // color value has changed so call onValueChange
                this.onValueChange(numValue);
            });
        }

        this.parent.appendChild(sliderDisplayContainer);
        this.finalize();
    }

    private rangeSlide(event: Event): void {
        const target = event.target as HTMLInputElement;
        let val = target.value;

        if (this.valueDisplayElement !== null) {
            this.valueDisplayElement.value = val;
        }
        // color value has changed so call onValueChange
        this.onValueChange(val);
    }

    private finalize(): void {
        let e = this.inputElement;
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min === '' ? '0' : e.min);
        e.style.setProperty('--max', e.max === '' ? '255' : e.max);
        e.addEventListener('input', this.sliderChangedValue.bind(this));
    }

    private sliderChangedValue = (): string => {
        const value = parseInt(this.inputElement.value);
        this.inputElement.style.setProperty('--value', value.toString());

        // color value has changed so call onValueChange
        this.onValueChange(value);

        return value.toString();
    };

    public setValue(value: number): void {
        const min = parseFloat(this.inputElement.min);
        const max = parseFloat(this.inputElement.max);
        value = Math.min(Math.max(value, min), max);

        this.inputElement.value = value.toString();
        if (this.valueDisplayElement !== null) {
            this.valueDisplayElement.value = value.toString();
        }
        this.inputElement.style.setProperty('--value', value.toString());
        // color value has changed so call onValueChange
        this.onValueChange(value);
    }

    public getValue(): number {
        return parseFloat(this.inputElement.value);
    }
}
