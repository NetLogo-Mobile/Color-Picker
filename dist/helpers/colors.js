/** colors.ts: Supplies all the basic color functionalities used in the colorPicker. */
/** From colors.coffee, used in NetLogo color conversions. */
var colorTimesTen;
var baseIndex;
var r, g, b;
var step;
/** netlogoBaseColors: The array of NetLogo base colors in [r, g, b] form. */
const netlogoBaseColors = [
    [140, 140, 140], // gray       (5)
    [215, 48, 39], // red       (15)
    [241, 105, 19], // orange    (25)
    [156, 109, 70], // brown     (35)
    [237, 237, 47], // yellow    (45)
    [87, 176, 58], // green     (55)
    [42, 209, 57], // lime      (65)
    [27, 158, 119], // turquoise (75)
    [82, 196, 196], // cyan      (85)
    [43, 140, 190], // sky       (95)
    [50, 92, 168], // blue     (105)
    [123, 78, 163], // violet   (115)
    [166, 25, 105], // magenta  (125)
    [224, 126, 149], // pink     (135)
    [0, 0, 0], // black
    [255, 255, 255], // white
];
/** mappedColors: Maps the name of the base colors to their corresponding NetLogo representation*/
var mappedColors = {
    gray: 5,
    red: 15,
    orange: 25,
    brown: 35,
    yellow: 45,
    green: 55,
    lime: 65,
    turqoise: 75,
    cyan: 85,
    sky: 95,
    blue: 105,
    violet: 115,
    magenta: 125,
    pink: 135,
};
/** cachedNetlogoColors: Returns [r, g, b] form of Netlogo colors in a 2d array. */
let cachedNetlogoColors = (function () {
    var k, results;
    results = [];
    for (colorTimesTen = k = 0; k <= 1400; colorTimesTen = ++k) {
        baseIndex = Math.floor(colorTimesTen / 100);
        [r, g, b] = netlogoBaseColors[baseIndex];
        step = ((colorTimesTen % 100) - 50) / 50.48 + 0.012;
        if (step < 0) {
            r += Math.floor(r * step);
            g += Math.floor(g * step);
            b += Math.floor(b * step);
        }
        else {
            r += Math.floor((0xff - r) * step);
            g += Math.floor((0xff - g) * step);
            b += Math.floor((0xff - b) * step);
        }
        results.push([r, g, b]);
    }
    return results;
})();
/** componentToHex: Converts one component of a rgb color to its hex string. */
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
// Consolidate RGB(A) to Hex conversion
function colorToHex(r, g, b, a) {
    if (a !== undefined) {
        // Include alpha if provided
        let alpha = ((a | (1 << 8)).toString(16)).slice(1);
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${alpha}`.toUpperCase();
    }
    else {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toUpperCase();
    }
}
function rgbToHex(r, g, b) {
    return colorToHex(r, g, b);
}
function rgbaToHex(r, g, b, a) {
    return colorToHex(r, g, b, a);
}
function rgbToNetlogo([r, g, b]) {
    if (r == 0 && g == 0 && b == 0) {
        return 0;
    }
    // Calculate the Euclidean distance between current color and each NetLogo color
    let minDistance = Infinity;
    let closestNetlogoColor = 0;
    for (let i = 0; i < cachedNetlogoColors.length; i++) {
        const [netR, netG, netB] = cachedNetlogoColors[i];
        const distance = Math.sqrt(Math.pow(r - netR, 2) + Math.pow(g - netG, 2) + Math.pow(b - netB, 2));
        if (distance < minDistance) {
            minDistance = distance;
            closestNetlogoColor = i;
        }
    }
    // Return the closest NetLogo color value
    return closestNetlogoColor / 10;
}
/** cached: 2d array of NetLogo colors in rgb form. */
let cached = cachedNetlogoColors;
/** netlogoColorToHex: Converts NetLogo color to its hex string. */
function netlogoColorToHex(netlogoColor) {
    let temp = cached[Math.floor(netlogoColor * 10)];
    return rgbToHex(temp[0], temp[1], temp[2]);
}
/** RGBAToHSLA: Converts rgba color to hsla color array. */
function RGBAToHSLA(r, g, b, a) {
    // turn into fractionss
    r /= 255;
    g /= 255;
    b /= 255;
    a /= 255;
    // find max and min
    let cmax = Math.max(r, g, b), cmin = Math.min(r, g, b), delta = cmax - cmin;
    let h, s, l = 0; // initialize
    // calculate hue
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    // calculate lightness
    l = (cmax + cmin) / 2;
    // calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    // multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    // multiply a by 100
    a = +(a * 100).toFixed(1);
    return [h, s, l, a];
}
/** netlogoColorToRGBA: Converts NetLogo color to rgba color array. */
function netlogoColorToRGBA(netlogoColor, alpha = 255) {
    let temp = cached[Math.floor(netlogoColor * 10)];
    return [temp[0], temp[1], temp[2], alpha];
}
export { netlogoColorToHex, netlogoColorToRGBA, mappedColors, cachedNetlogoColors, netlogoBaseColors, cached, RGBAToHSLA, rgbToHex, rgbaToHex, componentToHex, r, g, b, step, baseIndex, colorTimesTen, rgbToNetlogo, };
