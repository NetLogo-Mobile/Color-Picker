/** dragHelpers.ts: defines helper functions useful for the dragging and clicking feature of the Wheel Mode */
/** getMousePosition: Gets the mouse position of an MouseEvent(evt) in an SVG element(svg) */
function getMousePosition(evt, svg) {
    evt = evt; // standardize evt as MouseEvent
    let CTM = svg.getScreenCTM();
    if (CTM != null) {
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d,
        };
    }
}
/** distance: Calculates the distance between two points with coordinates (x1, y1), and (x2, y2) */
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
/** findAngle: Calculates the angle between three points with coordinates (a, b), (c, d), and (e, f) */
function findAngle(a, b, c, d, e, f) {
    let AB = Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2));
    let BC = Math.sqrt(Math.pow(c - e, 2) + Math.pow(d - f, 2));
    let AC = Math.sqrt(Math.pow(e - a, 2) + Math.pow(f - b, 2));
    let outOf180Degrees = Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB)) *
        (180 / Math.PI);
    // if we are "positive" relative to the axis -- the center point to the top "zero" point, then we just return, else we return 360 - outOf180
    if (e < c) {
        return 360 - outOf180Degrees;
    }
    return outOf180Degrees;
}
export { getMousePosition, distance, findAngle };
