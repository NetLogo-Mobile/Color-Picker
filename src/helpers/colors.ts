/** colors.ts: Supplies all the basic color functionalities used in the colorPicker. */

/** From colors.coffee, used in NetLogo color conversions. */
var colorTimesTen: number;
var baseIndex: number;
var r, g, b: number;
var step: number;

/** netlogoBaseColors: The array of NetLogo base colors in [r, g, b] form. */
const netlogoBaseColors: [number, number, number][] = [
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
var mappedColors: { [key: string]: number } = {
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
    } else {
      r += Math.floor((0xff - r) * step);
      g += Math.floor((0xff - g) * step);
      b += Math.floor((0xff - b) * step);
    }
    results.push([r, g, b]);
  }
  return results;
})();

/** componentToHex: Converts one component of a rgb color to its hex string. */
function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
/** hexToRgb: converts a hex value to rgb  */
function hexToRgb(hex: string): [number, number, number] {  
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
function colorToHex(r: number, g: number, b: number, a?: number): string {
  if (a !== undefined) {
    // Include alpha if provided
    let alpha = ((a | (1 << 8)).toString(16)).slice(1);
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${alpha}`.toUpperCase();
  } else {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toUpperCase();
  }
}

function rgbToHex(r: number, g: number, b: number): string {
  return colorToHex(r, g, b);
}

function rgbaToHex(r: number, g: number, b: number, a: number): string {
  return colorToHex(r, g, b, a);
}

function rgbToNetlogo([r, g, b]: number[]) {
  if (r == 0 && g == 0 && b == 0) {
    return 0;
  }
  // Calculate the Euclidean distance between current color and each NetLogo color
  let minDistance = Infinity;
  let closestNetlogoColor = 0;
  for (let i = 0; i < cachedNetlogoColors.length; i++) {
    const [netR, netG, netB] = cachedNetlogoColors[i];
    const distance = Math.sqrt(
      Math.pow(r - netR, 2) + Math.pow(g - netG, 2) + Math.pow(b - netB, 2)
    );
    if (distance < minDistance) {
      minDistance = distance;
      closestNetlogoColor = i;
    }
  }
  // Return the closest NetLogo color value
  return closestNetlogoColor / 10;
}

/** cached: 2d array of NetLogo colors in rgb form. */
let cached: number[][] = cachedNetlogoColors;


/** netlogoColorToHex: Converts NetLogo color to its hex string. */
function netlogoColorToHex(netlogoColor: number): string {
  let temp: number[] = cached[Math.floor(netlogoColor * 10)];
  return rgbToHex(temp[0], temp[1], temp[2]);
}

/**
 * arrToString: takes an rgb(a) array and returns a string rgb(a)**/
function arrToString(colorArray: number[]) {
  // Check if the array represents an RGBA color
  if (!Array.isArray(colorArray) || !colorArray.every(item => typeof item === 'number')) {
    console.error('Invalid colorArray input:', colorArray);
    return 'invalid'; // or any fallback string you prefer
  }
  if (colorArray.length === 4) {
      const [r, g, b, a] = colorArray;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  // If not RGBA, assume it's RGB
  const [r, g, b] = colorArray;
  return `rgb(${r}, ${g}, ${b})`;
}

/** RGBAToHSLA: Converts rgba color to hsla color array. */
function RGBAToHSLA(r: number, g: number, b: number, a: number): number[] {
  // turn into fractionss
  r /= 255;
  g /= 255;
  b /= 255;
  a /= 255;

  // find max and min
  let cmax = Math.max(r, g, b),
    cmin = Math.min(r, g, b),
    delta = cmax - cmin;
  let h,
    s,
    l = 0; // initialize
  // calculate hue
  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
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

/** HSLAToRGBA: Converts hsla color array to rgba color array. */
function HSLAToRGBA(h: number, s: number, l: number, alpha: number) {
  // divide h, s, and l by 360, 100, and 100 respectively
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
      // if saturation is 0, it's an achromatic color (gray)
      r = g = b = l;
  }
  else {
      const hueToRGB = (p: number, q: number, t: number) => {
          if (t < 0)
              t += 1;
          if (t > 1)
              t -= 1;
          if (t < 1 / 6)
              return p + (q - p) * 6 * t;
          if (t < 1 / 2)
              return q;
          if (t < 2 / 3)
              return p + (q - p) * (2 / 3 - t) * 6;
          return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hueToRGB(p, q, h + 1 / 3) * 255;
      g = hueToRGB(p, q, h) * 255;
      b = hueToRGB(p, q, h - 1 / 3) * 255;
  }
  return [Math.round(r), Math.round(g), Math.round(b), alpha];
}


/** netlogoColorToRGBA: Converts NetLogo color to rgba color array. */
function netlogoColorToRGBA(
  netlogoColor: number,
  alpha: number = 255
): number[] {
  let temp: number[] = cached[Math.floor(netlogoColor * 10)];
  return [temp[0], temp[1], temp[2], alpha];
}

export {
  netlogoColorToHex,
  netlogoColorToRGBA,
  mappedColors,
  cachedNetlogoColors,
  netlogoBaseColors,
  cached,
  RGBAToHSLA,
  rgbToHex,
  rgbaToHex,
  componentToHex,
  r,
  g,
  b,
  step,
  baseIndex,
  colorTimesTen,
  rgbToNetlogo,
  arrToString,
  hexToRgb,
  HSLAToRGBA
};
