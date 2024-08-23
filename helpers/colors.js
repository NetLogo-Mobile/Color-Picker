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
const baseColorsToRGB = {
    gray: 'rgb(141, 141, 141)',
    red: 'rgb(215, 50, 41)',
    orange: 'rgb(241, 106, 21)',
    brown: 'rgb(157, 110, 72)',
    yellow: 'rgb(237, 237, 49)',
    green: 'rgb(89, 176, 60)',
    lime: 'rgb(44, 209, 59)',
    turquoise: 'rgb(29, 159, 120)',
    cyan: 'rgb(84, 196, 196)',
    sky: 'rgb(45, 141, 190)',
    blue: 'rgb(52, 93, 169)',
    violet: 'rgb(124, 80, 164)',
    magenta: 'rgb(167, 27, 106)',
    pink: 'rgb(224, 127, 150)',
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
};
/** colorToNumberMapping: maps the NetLogo Base colors to their corresponding numeric value  */
const colorToNumberMapping = {
    black: 0,
    gray: 5,
    white: 9.9,
    red: 15,
    orange: 25,
    brown: 35,
    yellow: 45,
    green: 55,
    lime: 65,
    turquoise: 75,
    cyan: 85,
    sky: 95,
    blue: 105,
    violet: 115,
    magenta: 125,
    pink: 135,
};
/** netlogoToRGB: converts netlogo colors to rgb string  */
function netlogoToRGB(netlogoColor) {
    let temp = cached[Math.floor(netlogoColor * 10)];
    return `rgb(${temp[0]}, ${temp[1]}, ${temp[2]})`;
}
/* compoundToRGB: return the compound string (red + 5) to a regular number */
function compoundToRGB(content) {
    let stringSplit = content.split(' ');
    try {
        if (stringSplit[1] == '+') {
            return netlogoToRGB(colorToNumberMapping[stringSplit[0]] + Number(stringSplit[2]));
        }
        else if (stringSplit[1] == '-') {
            return netlogoToRGB(colorToNumberMapping[stringSplit[0]] - Number(stringSplit[2]));
        }
    }
    catch (_a) {
        return '';
    }
    return '';
}
/** netlogoArrToRGB: returns the rgb string from a netlogo color array */
function netlogoArrToRGB(inputString) {
    // Check for valid opening and closing brackets
    if (!inputString.startsWith('[') || !inputString.endsWith(']')) {
        return '';
    }
    const numbers = inputString
        .slice(1, -1)
        .split(/\s+/)
        .filter((n) => n);
    if (numbers.length === 3 || numbers.length === 4) {
        const validNumbers = numbers.map(Number).every((num) => !isNaN(num) && num >= 0 && num <= 255);
        if (validNumbers) {
            if (numbers.length === 3) {
                return `rgb(${numbers.join(', ')})`;
            }
            else {
                return `rgba(${numbers.join(', ')})`;
            }
        }
    }
    return '';
}
/** mappedColors: Maps the name of the base colors to their corresponding NetLogo representation*/
var mappedColors = {
    gray: 5,
    red: 15,
    orange: 25,
    brown: 35,
    yellow: 45,
    green: 55,
    lime: 65,
    turquoise: 75,
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
/** hexToRgb: converts a hex value to rgb  */
function hexToRgb(hex) {
    let sanitizedHex = hex.replace(/^#/, '');
    // If it's a three-character hex code, convert to six-character
    if (sanitizedHex.length === 3) {
        sanitizedHex = sanitizedHex[0] + sanitizedHex[0] + sanitizedHex[1] + sanitizedHex[1] + sanitizedHex[2] + sanitizedHex[2];
    }
    const bigint = parseInt(sanitizedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
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
/**
 * arrToString: takes an rgb(a) array and returns a string rgb(a)**/
function arrToString(colorArray) {
    // Check if the array represents an RGBA color
    if (!Array.isArray(colorArray) || !colorArray.every(item => typeof item === 'number')) {
        console.error('Invalid colorArray input:', colorArray);
        return 'invalid'; // or any fallback string you prefer
    }
    if (colorArray.length === 4) {
        const [r, g, b, a] = colorArray;
        return `rgba(${r}, ${g}, ${b}, ${a / 255})`; //alpha defaults to values between 0 and 1 in css
    }
    // If not RGBA, assume it's RGB
    const [r, g, b] = colorArray;
    return `rgb(${r}, ${g}, ${b})`;
}
/** RGBAToHSBA: Converts rgba color to hsba color array. */
function RGBAToHSBA(r, g, b, a) {
    // Normalize RGB values to [0, 1]
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let h = 0;
    let s = 0;
    const v = max;
    // calculate hue
    if (delta !== 0) {
        if (max === r) {
            h = ((g - b) / delta) % 6;
        }
        else if (max === g) {
            h = (b - r) / delta + 2;
        }
        else {
            h = (r - g) / delta + 4;
        }
        h = Math.round(h * 60);
        if (h < 0)
            h += 360;
    }
    s = max === 0 ? 0 : (delta / max) * 100;
    const b_percent = v * 100;
    // round values
    h = Math.round(h);
    s = Math.round(s);
    const v_percent = Math.round(b_percent);
    // Keep alpha in [0, 255] range
    a = Math.round(Math.max(0, Math.min(255, a)));
    return [h, s, v_percent, a];
}
/** HSBAToRGBA: Converts hsba color values to rgba color array. */
function HSBAToRGBA(h, s, b, alpha) {
    // ensure h, s, and b are in the correct range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s)) / 100;
    b = Math.max(0, Math.min(100, b)) / 100;
    const c = b * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = b - c;
    let r, g, bl;
    if (h >= 0 && h < 60) {
        [r, g, bl] = [c, x, 0];
    }
    else if (h >= 60 && h < 120) {
        [r, g, bl] = [x, c, 0];
    }
    else if (h >= 120 && h < 180) {
        [r, g, bl] = [0, c, x];
    }
    else if (h >= 180 && h < 240) {
        [r, g, bl] = [0, x, c];
    }
    else if (h >= 240 && h < 300) {
        [r, g, bl] = [x, 0, c];
    }
    else {
        [r, g, bl] = [c, 0, x];
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    bl = Math.round((bl + m) * 255);
    return [r, g, bl, alpha];
}
/** netlogoColorToRGBA: Converts NetLogo color to rgba color array. */
function netlogoColorToRGBA(netlogoColor, alpha = 255) {
    let temp = cached[Math.floor(netlogoColor * 10)];
    return [temp[0], temp[1], temp[2], alpha];
}
/** netlogoToCompound: Converts a numeric NetLogo Color to a compound color string */
function netlogoToCompound(netlogoColor) {
    let baseColorIndex = Math.floor(netlogoColor / 10);
    let baseColorName = Object.keys(mappedColors)[baseColorIndex];
    // Calculate offset and immediately round to one decimal point
    let offset = Number(((netlogoColor % 10) - 5).toFixed(1));
    // if white return white
    if (netlogoColor == 9.9) {
        return 'white';
    }
    if (netlogoColor == 0) {
        return 'black';
    }
    if (offset === 0) {
        // If the color is a base color, return only the base color name
        return baseColorName;
    }
    else if (offset > 0) {
        return `${baseColorName} + ${offset}`;
    }
    else {
        return `${baseColorName} - ${Math.abs(offset)}`;
    }
}
export { netlogoColorToHex, netlogoColorToRGBA, mappedColors, cachedNetlogoColors, netlogoBaseColors, cached, RGBAToHSBA, rgbToHex, rgbaToHex, componentToHex, r, g, b, step, baseIndex, colorTimesTen, rgbToNetlogo, arrToString, hexToRgb, HSBAToRGBA, netlogoToCompound, netlogoArrToRGB, compoundToRGB, colorToNumberMapping, baseColorsToRGB, colorToHex, netlogoToRGB, };
