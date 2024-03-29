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
/** RGBAToHSLA: Converts rgba color to hsla color array. */
declare function RGBAToHSLA(r: number, g: number, b: number, a: number): number[];
/** HSLAToRGBA: Converts hsla color array to rgba color array. */
declare function HSLAToRGBA(h: number, s: number, l: number, alpha: number): number[];
/** netlogoColorToRGBA: Converts NetLogo color to rgba color array. */
declare function netlogoColorToRGBA(netlogoColor: number, alpha?: number): number[];
/** netlogoToCompound: Converts a numeric NetLogo Color to a compound color string */
declare function netlogoToCompound(netlogoColor: number): string;

export { HSLAToRGBA, RGBAToHSLA, arrToString, b, baseIndex, cached, cachedNetlogoColors, colorTimesTen, componentToHex, g, hexToRgb, mappedColors, netlogoBaseColors, netlogoColorToHex, netlogoColorToRGBA, netlogoToCompound, r, rgbToHex, rgbToNetlogo, rgbaToHex, step };
