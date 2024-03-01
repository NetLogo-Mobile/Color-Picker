import { ColorMode } from "./ColorMode";
import { ColorPickerState } from "./ColorMode";
import * as color from '../helpers/colors'

/** GridMode: A mode for the ColorPicker that shows a wheel of colors */
export class WheelMode extends ColorMode {
    private textElements: SVGTextElement[] = [];
    private innerWheel: SVGSVGElement|null = null;

    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void){
        super(parent, state, setState);
        this.parent.replaceChildren();
        this.init();
    }

    /** createWheel: creates the wheel with inner and outer arcs */
    public createWheel(): string {
        let wheel = `<svg viewBox="0 0 110 110" width="100%" height="100%">
        <clipPath id="clip">
            <path d="M 55 5 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 26 a 24 24 0 0 0 0 48 24 24 0 0 0 0 -48" />
        </clipPath>
        <rect x="0" y="0" width="110" height="110" clip-path="url(#clip)" />
    </svg>`;
    
        return wheel;
    }


    /** toDOM: creates the body of the Wheel */
    public toDOM() : void {
        this.parent.replaceChildren();
        let wheelContainer = document.createElement('div');
        wheelContainer.classList.add('cp-wheel-cont');
        wheelContainer.innerHTML = this.createWheel();
        this.parent.appendChild(wheelContainer);
    
        // create the container for grid buttons
        let wheelBtnCont = document.createElement('div');
        wheelBtnCont.classList.add('cp-grid-btn-cont');
    
        // Container for increment buttons
        let incrementBtnCont = document.createElement('div');
        incrementBtnCont.classList.add('cp-increment-cont');
    
        // Container for numbers button
        let numbersBtnCont = document.createElement('div');
        numbersBtnCont.classList.add('cp-increment-cont');
    
        // create numbers button
        let numbersBtn = document.createElement('button');
        numbersBtn.classList.add('cp-numbers-btn');
        let numbersLabel = document.createElement('span');
        numbersLabel.textContent = "Numbers";
        numbersLabel.classList.add('cp-increment-label');
        numbersBtnCont.appendChild(numbersBtn);
        numbersBtnCont.appendChild(numbersLabel);
        const increments = ["1", "0.5", "0.1"]; // Array of increment values
        increments.forEach((inc) => {
            let btnLabelCont = document.createElement('div');
            btnLabelCont.classList.add('cp-btn-label-cont');
            let btn = document.createElement('button');
            btn.setAttribute('data-increment', inc);
            btn.classList.add('cp-numbers-btn');
            let label = document.createElement('span');
            label.textContent = inc; 
            label.classList.add('cp-increment-label');
            btnLabelCont.appendChild(btn);
            btnLabelCont.appendChild(label);
            incrementBtnCont.appendChild(btnLabelCont);
        });
        let incrementLabel = document.createElement('span');
        incrementLabel.textContent = "Increment";
        incrementLabel.classList.add('cp-increment-label');
        incrementBtnCont.appendChild(incrementLabel);
    
        wheelBtnCont.appendChild(numbersBtnCont);
        wheelBtnCont.appendChild(incrementBtnCont);
        this.parent.appendChild(wheelBtnCont);
    }
     
    /** updateIncrementApperance: updates the increment button apperance based on which increment is on */
    public updateIncrementAppearance(): void {
        const incrementBtns = document.querySelectorAll('.cp-numbers-btn');
        incrementBtns[0].classList.toggle('cp-numbers-clicked', this.state.showNumbers);
        for(let i = 1; i < incrementBtns.length; i++) {
            const btn = incrementBtns[i];
            // Retrieve the data-increment value
            const incrementValue = parseFloat(btn.getAttribute('data-increment') ?? "0");
            const isSelected = incrementValue === this.state.increment;
            btn.classList.toggle('cp-numbers-clicked', isSelected);
        };
    }

    /** attachEventListeners: Attaches the event listeners to the GridMode body */
    private attachEventListeners() {
        const gridBtns = document.querySelectorAll('.cp-numbers-btn');
        // event listener of the numbers button 
        gridBtns[0].addEventListener('click', () => {
        this.setState({showNumbers: !this.state.showNumbers});
        this.state.showNumbers = !this.state.showNumbers;
        this.toggleTextVisibility();
        this.updateIncrementAppearance();
        });
        // the increment buttons 
        for(let i = 1; i < gridBtns.length; i++) {
        gridBtns[i].addEventListener('click', () => {
            let increment = parseFloat(gridBtns[i].getAttribute('data-increment') ?? "0");
            this.setState({increment: increment});
            this.state.increment = increment;// weird bug, did we create a copy of the state?
            this.init();
        });
        }
    }
    /** toggleTextVisibility: toggles the text visibility based on state of numbers */
    private toggleTextVisibility() {
        this.state.showNumbers ? this.textElements.forEach((text) => text.setAttribute('visibility', 'visible')) : this.textElements.forEach((text) => text.setAttribute('visibility', 'hidden'));
    }

    /** init: initializes a wheel mode  */
    private init() { 
        this.toDOM();
        this.updateIncrementAppearance();
        this.attachEventListeners();
    }
    
}