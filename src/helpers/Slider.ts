type SliderColor = 'Red' | 'Green' | 'Blue' | 'alpha' | 'Hue' | 'Saturation' | 'Luminance';

export class Slider {
    private valueDisplayElement: HTMLInputElement | null = null;
    private valueBubble: HTMLOutputElement | null = null;

    public inputElement: HTMLInputElement;
    private parent: HTMLElement;

    constructor(
        parent: HTMLElement,
        startValue: number,
        min: number,
        max: number,
        sliderColor: SliderColor,
        sliderWidth: string,
        text: string,
        hasDisplay: boolean = true
    ) {
        let r = document.querySelector(':root') as HTMLElement;
        r.style.setProperty('--slider', sliderColor);

        this.parent = parent;

        // Create the slider
        this.inputElement = document.createElement('input');
        this.inputElement.type = 'range';
        this.inputElement.style.width = sliderWidth;
        this.inputElement.value = startValue.toString();
        
        this.inputElement.min = min.toString();
        this.inputElement.max = max.toString();
        this.inputElement.classList.add('cp-styled-slider');
        this.inputElement.value = startValue + '';

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
            this.valueDisplayElement = document.createElement('input');
            this.valueDisplayElement.classList.add('cp-slider-value-display-cont');
            this.valueDisplayElement.type = 'number';
            this.valueDisplayElement.value = startValue.toString();
            sliderDisplayContainer.appendChild(this.valueDisplayElement);
        } else {
            let valueBubble = document.createElement('output');
            valueBubble.classList.add('cp-Popover', 'cp-AlphaMsg');
            sliderContainer.appendChild(valueBubble);
            this.valueBubble = valueBubble;
        }

        this.parent.appendChild(sliderDisplayContainer);
        this.finalize();
    }

    private rangeSlide(event: Event): void {
        const target = event.target as HTMLInputElement;
        let val = target.value;

        if (this.valueDisplayElement !== null) {
            this.valueDisplayElement.value = val;
        } else if (this.valueBubble !== null) {
            this.valueBubble.innerHTML = val;
            let min = Number(target.min);
            let max = Number(target.max);
            let newVal = Number(((Number(val) - min) * 100) / (max - min));
            this.valueBubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.25}px))`;
        }
    }

    private finalize(): void {
        let e = this.inputElement;
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min === '' ? '0' : e.min);
        e.style.setProperty('--max', e.max === '' ? '255' : e.max);
        e.addEventListener('input', this.sliderChangedValue.bind(this));
    }

    private sliderChangedValue = (): string => {
        this.inputElement.style.setProperty('--value', this.inputElement.value);
        return this.inputElement.value;
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
    }

    public getValue(): number {
        return parseFloat(this.inputElement.value);
    }
}
