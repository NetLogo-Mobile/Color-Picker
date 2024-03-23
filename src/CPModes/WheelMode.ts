import { ColorMode } from "./ColorMode";
import { ColorPickerState } from "./ColorMode";
import * as colors from '../helpers/colors';
import * as dragHelper from '../helpers/dragHelpers';

/** GridMode: A mode for the ColorPicker that shows a wheel of colors */
export class WheelMode extends ColorMode {
    /** textElements: Array of SVGTextElements that are the "numbers" of each cell in the grid. */
    private textElements: SVGTextElement[] = [];
    private outerWheelColors: string[] = []; // hex colors of the outer wheel

    constructor(parent: HTMLElement, state: ColorPickerState, setState: (newState: Partial<ColorPickerState>) => void){
        super(parent, state, setState);
        this.parent.replaceChildren();
        this.init();
    }

    /** toDOM: creates the body of the Wheel */
    public toDOM() : void {
        this.parent.replaceChildren();
        this.parent.innerHTML = `
        <div class="cp-wheel-spacing-cont"><div class="cp-wheel-cont"><svg class="cp-wheel-svg" viewBox="0 0 110 110" width="100%" height="100%">
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
        `
        this.innerWheelSetup();
        this.outerWheelSetup(Math.floor(colors.rgbToNetlogo(this.state.currentColor) / 10) * 10);
        this.numbersSetup();
    }

    /** innerWheelSetup() : sets up the color of the inner wheel  */
    private innerWheelSetup() {
        // get the inner wheel 
        const innerWheel = document.querySelector('.cp-inner-wheel');
        let netlogoColors = Object.keys(colors.mappedColors);
        let hexColors = [];
        for (let i = 0; i < netlogoColors.length; i++) {
            hexColors.push(colors.netlogoColorToHex(Number(colors.mappedColors[netlogoColors[i]])));
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
        innerWheel!.setAttribute('style', cssFormat + `);`);
    }

    /** setInner: takes the current NetLogo color and places the draggable thumbs in the approximate location they should be  */
    private setInner() {
        let radius, degreesPerIncrement, baseColorIndex, angle: number;
        let center = [55, 55];
        radius = 30 // inner thumb is going to be here
        degreesPerIncrement = 360/ 14;
        const netlogoColor = colors.rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]]);
        baseColorIndex = Math.floor(netlogoColor / 10);
        angle = baseColorIndex * degreesPerIncrement + degreesPerIncrement / 2;
        let angleInRadians = (angle * Math.PI) / 180;
        let x = center[0] + radius * Math.sin(angleInRadians);
        let y = center[1] - radius * Math.cos(angleInRadians);
        return [x, y];
    }

    /** setOuter: takes the current NetLogo color and places the draggable thumb in the approximate lcoaiton */
    private setOuter() {
        let radius, degreesPerIncrement, baseColorIndex, angle: number;
        let center = [55, 55];
        radius = 52.5; 
        degreesPerIncrement = 360/ (10 / this.state.increment + 1);
        const netLogoColor = colors.rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]]);
        let value = netLogoColor % 10;
        if(Math.abs(value - 9.9) < 0.00001) value = 10;
        let index = Math.floor(value / this.state.increment);
        angle = index * degreesPerIncrement + degreesPerIncrement / 2;
        let angleInRadians = (angle * Math.PI) / 180;
        let x = center[0] + radius * Math.sin(angleInRadians);
        let y = center[1] - radius * Math.cos(angleInRadians);
        return [x, y];
    }
    /** toRadians: Coverts degress to radians  */   
    private toRadians(degrees: number) {
        return degrees * Math.PI / 180;
    }

    /** numbersSetup: sets up & updates the appropriate numbers for the wheel */
    private numbersSetup() {
        const radius = 38;
        const degreesPerIncrement = 360 / 14; // divide by 14 because the wheel has 14 inner colors 
        const center = [55, 55];
        const svg = document.querySelector(".cp-wheel-svg");
        if (svg === null) {
            return;
        }
        /** calculate the correct x and y coords in the svg viewbox for each text element  */
        for(let i = 0; i < 14; i++) {
            let angle = this.toRadians(i * degreesPerIncrement + degreesPerIncrement / 2) - 0.01;  // give it a small offset for appearance
            const x = center[0] + radius * Math.sin(angle); // Use sin for x
            const y = center[1] - radius * Math.cos(angle); // Use -cos for y
            let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', `${x}`);
            text.setAttribute('y', `${y}`);
            text.setAttribute('fill', 'white');
            text.setAttribute('font-size', '0.4rem');
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("text-anchor", "middle");
            text.setAttribute('visibility', this.state.showNumbers ? 'visible' : 'hidden');
            text.textContent = `${i * 10 + 5}`;
            this.textElements.push(text);
            svg.appendChild(text);
        }
        
        // create text elements for the outer wheel 
        // if(this.state.increment == 0.01) return;
        // const outerRadius = 51;
        // const numIncrements = 10 / this.state.increment;
        // const outerDegreesPerIncrement = 360 / numIncrements;
        
        // for(let i = 0; i <= numIncrements; i++) {
        //     let angle = outerDegreesPerIncrement * i - 90; // Adjusting starting angle to -90 degrees for correct orientation
        //     let angleInRadians = this.toRadians(angle);
        //     const x = center[0] + outerRadius * Math.sin(angleInRadians);
        //     const y = center[1] + outerRadius * Math.cos(angleInRadians);
        //     let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        //     text.setAttribute('x', `${x}`);
        //     text.setAttribute('y', `${y}`);
        //     text.setAttribute('fill', 'white');
        //     text.setAttribute('font-size', '0.2rem');
        //     text.setAttribute('text-anchor', 'middle');
        //     text.setAttribute('dominant-baseline', 'central'); // Ensuring vertical alignment is centered
        //     // Apply rotation directly at the text's position without offset
        //     text.setAttribute('transform', `rotate(${angle + 90}, ${x}, ${y})`); // Correcting rotation to make text upright
        //     text.classList.add('cp-wheel-text');
        //     text.setAttribute('visibility', this.state.showNumbers ? 'visible' : 'hidden');
        //     text.textContent = `${(i * this.state.increment).toFixed(2)}`; // Adjust text content as needed
        //     this.textElements.push(text);
        //     svg.appendChild(text);
        // }
        
    }

    /** updateInnerWheel: Updates the color of the wheel based on the location of the inner thumb */
    public updateInnerWheel(inner: SVGSVGElement) {
        let innerX = Number(inner.getAttribute('cx'));
        let innerY = Number(inner.getAttribute('cy'));
        const angle = dragHelper.findAngle(55, 20, 55, 55, innerX, innerY);
        let degreesPerIndex = 360 / 14; // the number of degrees per slice of the inner wheel
        let innerColor = colors.netlogoBaseColors[Math.floor(angle / degreesPerIndex)];
        inner.setAttribute('fill', `rgba(${innerColor[0]}, ${innerColor[1]}, ${innerColor[2]}, 255)`);
        this.outerWheelSetup(Math.floor(angle / degreesPerIndex) * 10);
    }

    /** setThumbs: creates the thumbs and sets them in the right spot  */
    private setThumbs() {
        let innerThumb = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let innerThumbCor = this.setInner();
        innerThumb.setAttribute('cx', `${innerThumbCor[0]}`);
        innerThumb.setAttribute('cy', `${innerThumbCor[1]}`);
        innerThumb.setAttribute('r', '2');
        innerThumb.setAttribute('fill', 'black');
        innerThumb.setAttribute('stroke', 'white');
        innerThumb.setAttribute('stroke-width', '1.2');
        innerThumb.classList.add("cp-inner-thumb");
        innerThumb.classList.add("cp-draggable");

        let outerThumbCor = this.setOuter();
        let outerThumb = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        outerThumb.setAttribute('cx', `${outerThumbCor[0]}`);
        outerThumb.setAttribute('cy', `${outerThumbCor[1]}`);
        outerThumb.setAttribute('r', '2');
        outerThumb.setAttribute('fill', 'orange');
        outerThumb.setAttribute("stroke", "white");
        outerThumb.setAttribute('stroke-width', '1.2');
        outerThumb.classList.add("cp-outer-thumb");
        outerThumb.classList.add("cp-draggable");

        const svg = document.querySelector('.cp-wheel-svg');
        svg!.appendChild(innerThumb);
        svg!.appendChild(outerThumb);
        const innerAsSVG = innerThumb as unknown as SVGSVGElement;
        this.updateInnerWheel(innerAsSVG);
        this.changeColor(); // update the outer wheel 
    }
    /** changeColor: changes the color based on the position of the outerwheel */
    private changeColor() {
        // calculate the outer thumb angle
        const outerThumb = document.querySelector(".cp-outer-thumb");
        if(outerThumb) {
            const outerX = Number(Number(outerThumb.getAttribute('cx'))!.toFixed(4));
            const outerY = Math.round(Number(outerThumb.getAttribute('cy')));
            const angle = dragHelper.findAngle(50, 20, 50, 50, outerX, outerY);
            const degreesPerIndex = 360 / ( 10 / this.state.increment + 1 );
            const index = Math.floor(angle / degreesPerIndex);
            const color = this.outerWheelColors[index];
            outerThumb.setAttribute('fill', color);
            // set the color to the current color 
            const colorAsRGB = colors.hexToRgb(color);
            const colorAsRGBA = [colorAsRGB[0], colorAsRGB[1], colorAsRGB[2], this.state.currentColor[3]];
            this.setState({currentColor: colorAsRGBA});
        }
    }

    /** outerWheelSetup(): sets up the color of the outer wheel */
    private outerWheelSetup(baseColor: number) {
        // solve base color based on current color

        const numColors = 10 / this.state.increment + 1;
        this.outerWheelColors = [];
        for (let i = 0; i< numColors - 1; i++) {
            this.outerWheelColors.push(colors.netlogoColorToHex(baseColor + i * this.state.increment));
        }
        this.outerWheelColors.push(colors.netlogoColorToHex(baseColor + 9.9));
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
        outerWheel!.setAttribute('style', cssFormat + `);`);
        // also update the color based on the changed outer wheel since the color will be different 
        this.changeColor();
    }

    /** makeDraggable(): makes the thumbs of the color wheel draggable */
    public makeDraggable(wheel: WheelMode) {
        const innerThumb = document.querySelector(".cp-inner-thumb") as HTMLElement;
        const cpWindow = document.querySelector(".cp") as HTMLElement;
        const center = [55, 55];

        /** throttle function to reduce number of event listener calls */
        function throttle(func: Function, limit: number) {
            let inThrottle: boolean;
            return function(this: any) {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            }
        }

        function makeDraggable(cpWindow: HTMLElement) {
            // confinement code should go here
            cpWindow.addEventListener("mousedown", startDrag);
            cpWindow.addEventListener("mousemove", throttle(drag, 5));
            cpWindow.addEventListener("mouseup", endDrag);
            cpWindow.addEventListener("mouseleave", endDrag);
            let svg = document.querySelector(".cp-wheel-svg") as SVGSVGElement;
            let selectedElement: SVGSVGElement | null;

            /** startDrag: start drag event for draggable elements */
            function startDrag(evt: MouseEvent | TouchEvent) {
                let element = evt.target as SVGSVGElement;
                // select the element, and make sure it is a dragable element
                if (element.classList.contains('cp-draggable')) {
                    selectedElement = element;
                }
            }

            function confinementInner(x: number, y: number) {
                let xRestrict = x;
                let yRestrict = y;
                let angle = dragHelper.findAngle(55, 20, 55, 55, x, y); // Given the reference point [55, 20] (straight up), and [55, 55] the center
                const angleInRadians = wheel.toRadians(angle);
                const innerLowerBound = 20;
                const innerUpperBound = 42;
                const dist = dragHelper.distance(x, y, center[0], center[1]);
                if(dist > innerUpperBound) {
                    xRestrict = center[0] + innerUpperBound * Math.sin(angleInRadians);
                    yRestrict = center[1] - innerUpperBound * Math.cos(angleInRadians);
                }
                else if (dist < innerLowerBound) {
                    xRestrict = center[0] + innerLowerBound * Math.sin(angleInRadians);
                    yRestrict = center[1] - innerLowerBound * Math.cos(angleInRadians);
                }
                return {x: xRestrict, y: yRestrict};
            };

            function confinementOuter(x: number, y: number) {
                let xRestrict = x;
                let yRestrict = y;
                const dist = dragHelper.distance(x, y, center[0], center[1]);
                const angle = dragHelper.findAngle(55, 20, 55, 55, x, y); 
                const angleInRadians = wheel.toRadians(angle);
                const outerLowerBound = 52.5;
                xRestrict = center[0] + outerLowerBound * Math.sin(angleInRadians);
                yRestrict = center[1] - outerLowerBound * Math.cos(angleInRadians);
                return {x: xRestrict, y: yRestrict};
            }

            /** drag: dragEvent for draggable elements */
            function drag(evt: MouseEvent | TouchEvent) {
                if(selectedElement != null) {
                    evt.preventDefault();
                    let mousePosition = dragHelper.getMousePosition(evt, svg);
                    if(mousePosition != null) {
                        let x;
                        let y;
                        if(selectedElement.classList.contains('cp-inner-thumb')) {
                            let restrict = confinementInner(mousePosition.x, mousePosition.y);
                            x = restrict.x;
                            y = restrict.y;
                            selectedElement?.setAttribute('cx', x.toString());
                            selectedElement?.setAttribute('cy', y.toString());
                            wheel.updateInnerWheel(selectedElement as SVGSVGElement);
                        } else {
                            x = mousePosition.x;
                            y = mousePosition.y;
                            let restrict = confinementOuter(x, y);
                            x = restrict.x;
                            y = restrict.y;
                            selectedElement?.setAttribute('cx', x.toString());
                            selectedElement?.setAttribute('cy', y.toString());
                            wheel.changeColor();
                        }                       
                    }
                }
            }

            /** endDrag: ends the drag event for draggable elements */
            function endDrag(evt: MouseEvent | TouchEvent) {
                selectedElement = null;
            }

        }
        if(cpWindow) {
            makeDraggable(cpWindow)
        }
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
        this.setThumbs();
        this.makeDraggable(this);
    }
    
}