import { ColorMode } from "./ColorMode";
import * as color from '../helpers/colors';
/** GridMode: A mode for the ColorPicker that shows a wheel of colors */
export class WheelMode extends ColorMode {
    constructor(parent, state, setState) {
        super(parent, state, setState);
        this.textElements = [];
        this.outerWheelColors = []; // hex colors of the outer wheel
        this.parent.replaceChildren();
        this.init();
    }
    /** toDOM: creates the body of the Wheel */
    toDOM() {
        this.parent.replaceChildren();
        this.parent.innerHTML = `
        <div class="cp-wheel-spacing-cont"><div class="cp-wheel-cont"><svg viewBox="0 0 110 110" width="100%" height="100%">
        <clipPath id="cp-inner-wheel-clip">
        <path d="M 55 35 
                 a 20 20 0 0 1 0 40 
                 a 20 20 0 0 1 0 -40 
                 M 55 10 
                 a 45 45 0 0 0 0 90 
                 a 45 45 0 0 0 0 -90"></path>
    </clipPath>

        <clipPath id="cp-outer-wheel-clip">
            <path d="M 55 0 
                        a 55 55 0 0 1 0 110 
                        a 55 55 0 0 1 0 -110 
                        M 55 5 
                        a 50 50 0 0 0 0 100 
                        a 50 50 0 0 0 0 -100"></path>
        </clipPath>
    

        <foreignObject width="110" height="110" clip-path="url(#cp-inner-wheel-clip)" >
            <div xmlns="http://www.w3.org/1999/xhtml" class="cp-inner-wheel"></div>
        </foreignObject>

        <foreignObject width="110" height="110" clip-path="url(#cp-outer-wheel-clip)">
            <div xmlns="http://www.w3.org/1999/xhtml" class="cp-outer-wheel"></div>
        </foreignObject>

    </svg></div><div class="cp-grid-btn-cont"><div class="cp-increment-cont"><button class="cp-numbers-btn"></button><span class="cp-increment-label">Numbers</span></div><div class="cp-increment-cont"><div class="cp-btn-label-cont"><button data-increment="1" class="cp-numbers-btn cp-numbers-clicked"></button><span class="cp-increment-label">1</span></div><div class="cp-btn-label-cont"><button data-increment="0.5" class="cp-numbers-btn"></button><span class="cp-increment-label">0.5</span></div><div class="cp-btn-label-cont"><button data-increment="0.1" class="cp-numbers-btn"></button><span class="cp-increment-label">0.1</span></div><span class="cp-increment-label">Increment</span></div></div></div>
        `;
        this.innerWheelSetup();
        this.outerWheelSetup();
    }
    /** innerWheelSetup() : sets up the color of the inner wheel  */
    innerWheelSetup() {
        // get the inner wheel 
        console.log('inner wheel setup');
        const innerWheel = document.querySelector('.cp-inner-wheel');
        let netlogoColors = Object.keys(color.mappedColors);
        let hexColors = [];
        for (let i = 0; i < netlogoColors.length; i++) {
            hexColors.push(color.netlogoColorToHex(Number(color.mappedColors[netlogoColors[i]])));
        }
        let degreesPerSV = 360 / netlogoColors.length;
        let cssFormat = `background-image: conic-gradient(`;
        let degreeTracker = 0;
        for (let i = 0; i < netlogoColors.length - 1; i++) {
            cssFormat +=
                hexColors[i] +
                    ` ${degreeTracker}deg ${degreeTracker + degreesPerSV}deg, `;
            degreeTracker += degreesPerSV;
        }
        cssFormat +=
            hexColors[netlogoColors.length - 1] + ` ${degreeTracker}deg 0deg`;
        innerWheel.setAttribute('style', cssFormat + `);`);
    }
    /** outerWheelSetup(): sets up the color of the outer wheel */
    outerWheelSetup() {
        // solve base color based on current color
        const baseColor = Math.floor(color.rgbToNetlogo(this.state.currentColor) / 10) * 10;
        const numColors = 10 / this.state.increment + 1;
        this.outerWheelColors = [];
        for (let i = 0; i < numColors - 1; i++) {
            this.outerWheelColors.push(color.netlogoColorToHex(baseColor + i * this.state.increment));
        }
        this.outerWheelColors.push(color.netlogoColorToHex(baseColor + 9.9));
        const degreesPerSV = 360 / numColors;
        let cssFormat = `background-image: conic-gradient(`;
        let degreeTracker = 0;
        for (let i = 0; i < numColors - 1; i++) {
            cssFormat +=
                this.outerWheelColors[i] +
                    ` ${degreeTracker}deg ${degreeTracker + degreesPerSV}deg, `;
            degreeTracker += degreesPerSV;
        }
        cssFormat +=
            this.outerWheelColors[numColors - 1] + ` ${degreeTracker}deg 0deg`;
        const outerWheel = document.querySelector('.cp-outer-wheel');
        outerWheel.setAttribute('style', cssFormat + `);`);
    }
    /** updateIncrementApperance: updates the increment button apperance based on which increment is on */
    updateIncrementAppearance() {
        var _a;
        const incrementBtns = document.querySelectorAll('.cp-numbers-btn');
        incrementBtns[0].classList.toggle('cp-numbers-clicked', this.state.showNumbers);
        for (let i = 1; i < incrementBtns.length; i++) {
            const btn = incrementBtns[i];
            // Retrieve the data-increment value
            const incrementValue = parseFloat((_a = btn.getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
            const isSelected = incrementValue === this.state.increment;
            btn.classList.toggle('cp-numbers-clicked', isSelected);
        }
        ;
    }
    /** attachEventListeners: Attaches the event listeners to the GridMode body */
    attachEventListeners() {
        const gridBtns = document.querySelectorAll('.cp-numbers-btn');
        // event listener of the numbers button 
        gridBtns[0].addEventListener('click', () => {
            this.setState({ showNumbers: !this.state.showNumbers });
            this.state.showNumbers = !this.state.showNumbers;
            this.toggleTextVisibility();
            this.updateIncrementAppearance();
        });
        // the increment buttons 
        for (let i = 1; i < gridBtns.length; i++) {
            gridBtns[i].addEventListener('click', () => {
                var _a;
                let increment = parseFloat((_a = gridBtns[i].getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
                this.setState({ increment: increment });
                this.state.increment = increment; // weird bug, did we create a copy of the state?
                this.init();
            });
        }
    }
    /** toggleTextVisibility: toggles the text visibility based on state of numbers */
    toggleTextVisibility() {
        this.state.showNumbers ? this.textElements.forEach((text) => text.setAttribute('visibility', 'visible')) : this.textElements.forEach((text) => text.setAttribute('visibility', 'hidden'));
    }
    /** init: initializes a wheel mode  */
    init() {
        this.toDOM();
        this.updateIncrementAppearance();
        this.attachEventListeners();
    }
}
