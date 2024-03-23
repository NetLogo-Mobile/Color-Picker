import { ColorMode } from './ColorMode.js';
import * as color from '../Supplementary/colors.js';
import * as dragHelpers from '../Supplementary/dragHelpers.js';
export class WheelMode extends ColorMode {
    constructor(parent = document.querySelector('.cp-displayContainer'), rgba = [255, 255, 255, 255], netlogoColor = 139.9, background = document.querySelector('.cp-backgroundPreview'), turtle = document.querySelector('.cp-turtlePreview'), changeTurtleColor = true, alpha = 255, colorParameterType = 'string', netlogoParameterType = 'string', increment = 1) {
        super(parent, rgba, netlogoColor, background, turtle, alpha, changeTurtleColor, colorParameterType, netlogoParameterType);
        /** outerWheelColors: the current set of RGBA numbers on the outer wheel */
        this.outerWheelColors = [];
        /** outerWheelNetlogo: the current set of NetLogo colors on the outer wheel */
        this.outerWheelNetlogo = [];
        /** innerNumbers: the text elements for the inner wheel */
        this.innerNumbers = [];
        /** outerNumbers: the text elements for the outer wheel */
        this.outerNumbers = [];
        /** center: the center of the wheel (SVG coordinates) */
        this.center = [50, 50];
        this.getParent().replaceChildren();
        this.increment = increment;
        //remove saved colors section
        document.querySelector('.cp-savedColorsContainer').replaceChildren();
        // remove increment section 
        document
            .querySelector('.cp-incrementAndNumbersContainer')
            .classList.remove('color-picker-invisibleElement');
        // Create interactable SVG HTML portion
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.setAttribute('width', '300');
        svg.setAttribute('height', '300');
        let clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        clipPath.setAttribute('id', 'cp-outerWheelclipPath');
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M 50 2 a 48 48 0 0 1 0 96 48 48 0 0 1 0 -96 v 4 a 44 44 0 0 0 0 88 44 44 0 0 0 0 -88');
        clipPath.appendChild(path);
        let foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        foreignObject.setAttribute('x', '0');
        foreignObject.setAttribute('y', '0');
        foreignObject.setAttribute('width', '100');
        foreignObject.setAttribute('height', '100');
        foreignObject.setAttribute('clip-path', 'url(#cp-outerWheelclipPath)');
        let div = document.createElement('div');
        div.classList.add('color-picker-wheelStyling');
        this.outerWheel = div;
        foreignObject.appendChild(div);
        svg.appendChild(clipPath);
        svg.appendChild(foreignObject);
        this.getParent().appendChild(svg);
        clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        clipPath.setAttribute('id', 'cp-innerWheelClipPath');
        path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z M 50 30 A 20 20 0 1 1 50 70 A 20 20 0 1 1 50 30 Z');
        clipPath.appendChild(path);
        this.SVG = svg;
        foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        foreignObject.setAttribute('x', '0');
        foreignObject.setAttribute('y', '0');
        foreignObject.setAttribute('width', '100');
        foreignObject.setAttribute('height', '100');
        foreignObject.setAttribute('clip-path', 'url(#cp-innerWheelClipPath)');
        div = document.createElement('div');
        div.classList.add('color-picker-wheelStyling');
        this.innerWheel = div;
        svg.appendChild(clipPath);
        svg.appendChild(foreignObject);
        foreignObject.appendChild(div);
        // set up colors based on current netlogo color
        this.innerWheelSetup();
        this.numbersSetup();
        let thumbs = this.setThumbs();
        this.innerThumb = thumbs[0];
        this.outerThumb = thumbs[1];
        this.SVG.appendChild(this.innerThumb);
        this.SVG.appendChild(this.outerThumb);
        this.updateInnerWheel();
        this.updateOuterWheel();
        this.makeDraggable(this);
        this.makeClickable();
    }
    /** svgMousePosition: get (SVG) coordinates of the cursor */
    svgMousePosition(evt) {
        var CTM = this.SVG.getScreenCTM();
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d,
        };
    }
    /** innerWheelSetup: Sets up the inner wheel  */
    innerWheelSetup() {
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
        this.innerWheel
            .setAttribute('style', cssFormat + `);`);
    }
    /** outerWheelSetup: Update the outerwheel based on the increment and current netlogo color  */
    outerWheelSetup(baseColor) {
        // find the "base color" based on the current netlogo color, ex 90 the base color would be 95
        let numColors = 10 / this.increment + 1;
        this.outerWheelNetlogo = [];
        this.outerWheelColors = [];
        for (let i = 0; i < numColors - 1; i++) {
            ``;
            this.outerWheelColors.push(color.netlogoColorToRGBA(baseColor + i * this.increment));
            this.outerWheelNetlogo.push(baseColor + i * this.increment);
        }
        this.outerWheelColors.push(color.netlogoColorToRGBA(baseColor + 9.9));
        this.outerWheelNetlogo.push(baseColor + 9.9);
        let degreesPerSV = 360 / numColors; // the arc length each color takes up in the color wheel
        let cssFormat = `background-image: conic-gradient(`;
        let degreeTracker = 0;
        for (let i = 0; i < numColors - 1; i++) {
            cssFormat +=
                this.rgbaArrToString(this.outerWheelColors[i]) +
                    ` ${degreeTracker}deg ${degreeTracker + degreesPerSV}deg, `;
            degreeTracker += degreesPerSV;
        }
        cssFormat +=
            this.rgbaArrToString(this.outerWheelColors[numColors - 1]) +
                ` ${degreeTracker}deg 0deg`;
        this.outerWheel
            .setAttribute('style', cssFormat + `);`);
        // update textElement values for the outer wheel
        for (let i = 0; i < numColors; i++) {
            this.outerNumbers[i].textContent = this.outerWheelNetlogo[i].toString();
        }
    }
    /** numbersSetup: sets up & updates the appropriate numbers for the wheel */
    numbersSetup() {
        let radius = 35;
        let degreesPerIncrement = 360 / 14;
        let angle = 1.5 * degreesPerIncrement;
        let center = [48, 52];
        let angleInRadians = (angle * Math.PI) / 180;
        for (let i = 0; i < 14; i++) {
            angle = i * degreesPerIncrement + degreesPerIncrement / 2;
            angleInRadians = (angle * Math.PI) / 180;
            let x = center[0] + radius * Math.sin(angleInRadians);
            let y = center[1] - radius * Math.cos(angleInRadians);
            let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', x.toString());
            text.setAttribute('y', y.toString());
            text.classList.add('cp-wheelNumbers');
            text.classList.add('color-picker-invisibleElement');
            text.textContent = (i * 10 + 5).toString();
            this.SVG.appendChild(text);
            this.innerNumbers.push(text);
        }
        // creat textElements for the outer wheel --> only need to create once because changing increment creates a new instance of wheelMode
        let numberOfIncrements = 10 / this.increment + 1;
        degreesPerIncrement = 360 / numberOfIncrements;
        radius = 47;
        let arcOffsetFactor = (this.increment == 1) ? 1.75 : 1.6;
        for (let i = 0; i < numberOfIncrements + 1; i++) {
            angle = i * degreesPerIncrement + degreesPerIncrement / arcOffsetFactor;
            angleInRadians = (angle * Math.PI) / 180;
            let x = center[0] + radius * Math.sin(angleInRadians);
            let y = center[1] - radius * Math.cos(angleInRadians);
            let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            // if increment is sufficiently big, we should change the color to black
            text.setAttribute('x', x.toString());
            text.setAttribute('y', y.toString());
            text.setAttribute('text-anchor', 'middle');
            let textOffsetX = x + 2;
            let textOffsetY = y - 2;
            // add rotation to text so it fits the circle
            text.setAttribute('transform', `rotate(${angle}, ${textOffsetX}, ${textOffsetY})`);
            text.classList.add('cp-wheelNumbers');
            if (i > (numberOfIncrements) / 3) {
                text.style.fill = "black";
            }
            text.classList.add('cp-outerWheelNumbers');
            text.classList.add('color-picker-invisibleElement');
            this.SVG.appendChild(text);
            this.outerNumbers.push(text);
        }
    }
    /** setThunbsOnNetlogo: takes the current Netlogo color, and places the two draggable thumbs in the approximate location they should be in the color wheel, based on the netlogo color  */
    setThumbsOnNetlogo(isInner) {
        // we are setting the coordinates of the inner thumb
        let radius, degreesPerIncrement, baseColorIndex, angle;
        let center = [50, 50];
        if (isInner) {
            radius = 30; // the inner thumb is going to be here.
            degreesPerIncrement = 360 / 14;
            baseColorIndex = Math.floor(this.getNetlogoColor() / 10);
            angle = baseColorIndex * degreesPerIncrement + degreesPerIncrement / 2;
        }
        else {
            radius = 50 - 4.1; // the outer thumb is restricted to this circle (radius from center)
            let value = this.getNetlogoColor() % 10;
            if (Math.abs(value - 9.9) < 0.00001)
                value = 10;
            let index = Math.floor(value / this.increment);
            let degreesPerIncrement = 360 / (10 / this.increment + 1);
            angle = index * degreesPerIncrement + degreesPerIncrement / 2;
        }
        // find location of the thumb
        let angleInRadians = (angle * Math.PI) / 180;
        let x = center[0] + radius * Math.sin(angleInRadians);
        let y = center[1] - radius * Math.cos(angleInRadians);
        return [x, y];
    }
    /** setThumbs: sets the thumbs to the current netlogo color (by approximating location)
     */
    setThumbs() {
        // create inner thumb
        let innerThumb = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let innerThumbCor = this.setThumbsOnNetlogo(true);
        innerThumb.setAttribute('cx', innerThumbCor[0].toString());
        innerThumb.setAttribute('cy', innerThumbCor[1].toString());
        innerThumb.setAttribute('r', '2');
        innerThumb.setAttribute('fill', 'black');
        innerThumb.setAttribute('stroke', 'white');
        innerThumb.style.cursor = 'pointer';
        innerThumb.setAttribute('stroke-width', '1.2');
        // create outer thumb
        let outerThumb = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let outerThumbCor = this.setThumbsOnNetlogo(false);
        outerThumb.setAttribute('cx', outerThumbCor[0].toString());
        outerThumb.setAttribute('cy', outerThumbCor[1].toString());
        outerThumb.setAttribute('r', '2');
        outerThumb.setAttribute('fill', 'white');
        outerThumb.setAttribute('stroke', '#D3D3D3');
        outerThumb.style.cursor = 'pointer';
        outerThumb.setAttribute('stroke-width', '0.5');
        return [innerThumb, outerThumb];
    }
    //** updateInnerWheel: updates the color of the wheel based on location of the inner thumb*/
    updateInnerWheel() {
        let innerX = Number(this.innerThumb.getAttribute('cx')); // get coordinates of the inner thumb
        let innerY = Number(this.innerThumb.getAttribute('cy'));
        let angle = dragHelpers.findAngle(50, 20, 50, 50, innerX, innerY);
        let degreesPerIndex = 360 / 14;
        let innerColor = color.netlogoBaseColors[Math.floor(angle / degreesPerIndex)];
        this.innerThumb.setAttribute('fill', `rgba(${innerColor[0]}, ${innerColor[1]}, ${innerColor[2]}, 255)`);
        // change outerwheel colors
        this.outerWheelSetup(Math.floor(angle / degreesPerIndex) * 10);
    }
    /** updateOuterWheel: updates the color of the wheel based on location of the outer thumb */
    updateOuterWheel() {
        // calculate outer thumb angle
        let outerX = Number(Number(this.outerThumb.getAttribute('cx')).toFixed(4));
        let outerY = Math.round(Number(this.outerThumb.getAttribute('cy')));
        let angle = dragHelpers.findAngle(50, 20, 50, 50, outerX, outerY);
        let degreesPerIndex = 360 / (10 / this.increment + 1);
        let index = Math.floor(angle / degreesPerIndex);
        let color = this.outerWheelColors[index];
        let alpha = this.getAlpha();
        color[3] = alpha;
        // set rgba to current color
        this.setRgba(color);
        if (this.getChangeTurtleColor()) {
            this.getTurtleElement().style.fill = this.getRgbaString();
        }
        else {
            this.getBackgroundElement().style.fill = this.getRgbaString();
        }
        // set netlogo color to current color
        this.setNetlogoColor(this.outerWheelNetlogo[index]);
        this.updateDisplayValues();
    }
    changeColor(alpha = 255) {
        this.setAlpha(alpha);
        this.updateOuterWheel();
    }
    makeDraggable(wheel) {
        this.innerThumb.classList.add('cp-wheelMode-draggable');
        this.innerThumb.classList.add('cp-innerWheelThumb');
        this.outerThumb.classList.add('cp-wheelMode-draggable');
        this.outerThumb.classList.add('cp-outerWheelThumb');
        let center = [50, 50];
        function makeDraggable(svg, colorPickerWindow) {
            function confinement(x, y, thumb) {
                let xRestrict = x;
                let yRestrict = y;
                let angle = dragHelpers.findAngle(50, 20, 50, 50, x, y);
                let angleInRadians = (angle * Math.PI) / 180;
                // outer thumb confinement
                if (thumb == 'outer') {
                    let outerThumbRadius = 50 - 4.1;
                    xRestrict = center[0] + outerThumbRadius * Math.sin(angleInRadians);
                    yRestrict = center[1] - outerThumbRadius * Math.cos(angleInRadians);
                }
                else {
                    // inner thumb confinement
                    let innerLowerBound = 20; // lowerbound of where the inner thumb can be (radius from center)
                    let innerUpperBound = 40;
                    let dist = dragHelpers.distance(x, y, center[0], center[1]);
                    if (dist > 40) {
                        // we are too far from the center
                        xRestrict = center[0] + innerUpperBound * Math.sin(angleInRadians);
                        yRestrict = center[1] - innerUpperBound * Math.cos(angleInRadians);
                    }
                    else if (dist < 20) {
                        // we are too close to the center
                        xRestrict = center[0] + innerLowerBound * Math.sin(angleInRadians);
                        yRestrict = center[1] - innerLowerBound * Math.cos(angleInRadians);
                    }
                }
                return { x: xRestrict, y: yRestrict };
            }
            // event listeners
            colorPickerWindow.addEventListener('mousedown', startDrag);
            colorPickerWindow.addEventListener('mousemove', drag);
            colorPickerWindow.addEventListener('mouseup', endDrag);
            colorPickerWindow.addEventListener('mouseleave', endDrag);
            // event listeners for touch events
            colorPickerWindow.addEventListener('touchstart', startDrag);
            colorPickerWindow.addEventListener('touchmove', drag);
            colorPickerWindow.addEventListener('touchend', endDrag);
            colorPickerWindow.addEventListener('touchcancel', endDrag);
            let selectedElement = null;
            /** startDrag: start drag event for draggable elements */
            function startDrag(evt) {
                let element = evt.target;
                // select the element, and make sure it is a dragable element
                if (element.classList.contains('cp-wheelMode-draggable')) {
                    selectedElement = element;
                }
            }
            /** drag: drag event for draggable elements */
            function drag(evt) {
                if (selectedElement != null) {
                    // we have selected a draggable elemenet, and can start the drag
                    evt.preventDefault();
                    let mousePosition = dragHelpers.getMousePosition(evt, wheel.SVG);
                    if (mousePosition != null) {
                        let x = mousePosition.x;
                        let y = mousePosition.y;
                        // find confiment for outer thumb
                        if (selectedElement.classList.contains('cp-outerWheelThumb')) {
                            let restrict = confinement(x, y, 'outer');
                            x = restrict.x;
                            y = restrict.y;
                        }
                        else {
                            // we are moving the inner thumb
                            let restrict = confinement(x, y, 'inner');
                            x = restrict.x;
                            y = restrict.y;
                        }
                        selectedElement.setAttribute('cx', x.toString());
                        selectedElement.setAttribute('cy', y.toString());
                        if (selectedElement.classList.contains('cp-innerWheelThumb')) {
                            wheel.updateInnerWheel();
                        }
                        wheel.updateOuterWheel();
                    }
                }
            }
            /** endDrag: end drag event for draggable elements */
            function endDrag(evt) {
                selectedElement = null;
            }
        }
        let display = document.querySelector('.color-picker-body');
        makeDraggable(this.SVG, display);
        this.innerWheel.addEventListener('click', (e) => {
            let mousePosition = this.svgMousePosition(e);
            this.innerThumb.setAttribute('cx', mousePosition.x.toString());
            this.innerThumb.setAttribute('cy', mousePosition.y.toString());
            this.updateInnerWheel();
            this.updateOuterWheel();
        });
        this.outerWheel.addEventListener('click', (e) => {
            let mousePosition = this.svgMousePosition(e);
            this.outerThumb.setAttribute('cx', mousePosition.x.toString());
            this.outerThumb.setAttribute('cy', mousePosition.y.toString());
            this.updateOuterWheel();
        });
    }
    /** showNumbers: make the netlogo color element visible*/
    showNumbers() {
        if (this.increment == 0.1)
            return; // do nothing, no numbers for increment 0.1
        this.innerNumbers.forEach((element) => {
            element.classList.remove('color-picker-invisibleElement');
        });
        this.outerNumbers.forEach((element) => {
            element.classList.remove('color-picker-invisibleElement');
        });
    }
    /** hideNumbers: hide the netlogo color element */
    hideNumbers() {
        this.innerNumbers.forEach((element) => {
            element.classList.add('color-picker-invisibleElement');
        });
        this.outerNumbers.forEach((element) => {
            element.classList.add('color-picker-invisibleElement');
        });
    }
    /** makeClickable: Allow clicking of parts of the wheel to move the thumbs & change color */
    makeClickable() {
        this.SVG.addEventListener('click', (e) => {
            let evtCords = dragHelpers.getMousePosition(e, this.SVG); // get the coordinates of the event
            if (evtCords == null) {
                return;
            }
            let evtDist = dragHelpers.distance(evtCords.x, evtCords.y, 50, 50);
            // check if we are clicking on the inner wheel or outer wheel
            if (evtDist > 20 && evtDist < 40) {
                // inner wheel clicked because within the inner wheel valid radii
                this.innerThumb.setAttribute('cx', evtCords.x.toString());
                this.innerThumb.setAttribute('cy', evtCords.y.toString());
                this.updateInnerWheel();
                this.updateOuterWheel();
            }
            else if (evtDist > 43.5 && evtDist < 49) { /** arbitrarily set bounds for the outerWheel */
                // outer wheel clicked because outside of the inner wheel valid radii
                // get the angle of the click
                let angle = dragHelpers.findAngle(50, 20, 50, 50, evtCords.x, evtCords.y);
                let angleInRadians = (angle * Math.PI) / 180;
                let radius = 50 - 4.1;
                this.outerThumb.setAttribute('cx', String(this.center[0] + radius * Math.sin(angleInRadians)));
                this.outerThumb.setAttribute('cy', String(this.center[1] - radius * Math.cos(angleInRadians)));
                this.updateOuterWheel();
            }
        });
    }
}
