/** colors.ts: Supplies all the basic color functionalities used in the colorPicker. */
/** From colors.coffee, used in NetLogo color conversions. */
declare var colorTimesTen: number;
declare var baseIndex: number;
declare var r: any;
declare var g: any;
declare var b: number;
declare var step: number;
/** netlogoBaseColors: The array of NetLogo base colors in [r, g, b] form. */
declare const netlogoBaseColors: [number, number, number][];
declare const baseColorsToRGB: {
    [key: string]: string;
};
/** colorToNumberMapping: maps the NetLogo Base colors to their corresponding numeric value  */
declare const colorToNumberMapping: {
    [key: string]: number;
};
/** netlogoToRGB: converts netlogo colors to rgb string  */
declare function netlogoToRGB(netlogoColor: number): string;
declare function compoundToRGB(content: string): string;
/** netlogoArrToRGB: returns the rgb string from a netlogo color array */
declare function netlogoArrToRGB(inputString: string): string;
/** mappedColors: Maps the name of the base colors to their corresponding NetLogo representation*/
declare var mappedColors: {
    [key: string]: number;
};
/** cachedNetlogoColors: Returns [r, g, b] form of Netlogo colors in a 2d array. */
declare let cachedNetlogoColors: number[][];
/** componentToHex: Converts one component of a rgb color to its hex string. */
declare function componentToHex(c: number): string;
/** hexToRgb: converts a hex value to rgb  */
declare function hexToRgb(hex: string): [number, number, number];
declare function colorToHex(r: number, g: number, b: number, a?: number): string;
declare function rgbToHex(r: number, g: number, b: number): string;
declare function rgbaToHex(r: number, g: number, b: number, a: number): string;
declare function rgbToNetlogo([r, g, b]: number[]): number;
/** cached: 2d array of NetLogo colors in rgb form. */
declare let cached: number[][];
/** netlogoColorToHex: Converts NetLogo color to its hex string. */
declare function netlogoColorToHex(netlogoColor: number): string;
/**
 * arrToString: takes an rgb(a) array and returns a string rgb(a)**/
declare function arrToString(colorArray: number[]): string;
/** RGBAToHSBA: Converts rgba color to hsba color array. */
declare function RGBAToHSBA(r: number, g: number, b: number, a: number): [number, number, number, number];
/** HSBAToRGBA: Converts hsba color values to rgba color array. */
declare function HSBAToRGBA(h: number, s: number, b: number, alpha: number): [number, number, number, number];
/** netlogoColorToRGBA: Converts NetLogo color to rgba color array. */
declare function netlogoColorToRGBA(netlogoColor: number, alpha?: number): number[];
/** netlogoToCompound: Converts a numeric NetLogo Color to a compound color string */
declare function netlogoToCompound(netlogoColor: number): string;

export { HSBAToRGBA, RGBAToHSBA, arrToString, b, baseColorsToRGB, baseIndex, cached, cachedNetlogoColors, colorTimesTen, colorToHex, colorToNumberMapping, componentToHex, compoundToRGB, g, hexToRgb, mappedColors, netlogoArrToRGB, netlogoBaseColors, netlogoColorToHex, netlogoColorToRGBA, netlogoToCompound, netlogoToRGB, r, rgbToHex, rgbToNetlogo, rgbaToHex, step };
