# Introducing the Color Picker Feature for NetLogo Web

This is a guide to the Color Picker feature for NetLogo Web. The Color Picker is a user interface that allows a user to explore and experiment with different colors, and finally select one. The selected color can then be provided to the program using the Color Picker in the form of a callback function. The Color Picker is still in the experimental stage, all feedback is welcome.

## Demo Link
https://netlogo-mobile.github.io/Color-Picker/
- This should bring you to a page with just the standalone color picker. The callback function after selecting a color simply logs the color.

## Usage

To integrate the Color Picker into your NetLogo Web project, start by installing the Color Picker npm package:

```bash
npm i @netlogo/netlogo-color-picker
```

After importing it into your project, you can create a Color Picker by calling the constructor. The `ColorPicker` class constructor accepts a single `config` object that contains the necessary properties for initialization:

- `parent`: The HTML element that will host the Color Picker. This ensures the picker is embedded in the correct location in your UI.
- `initColor`: The initial color selected in the Color Picker, expressed as an RGB array (e.g., `[255, 0, 0]` for red).
- `onColorSelect`: A callback function that is invoked when a color is selected. This function should handle the selected color data. **The returned color data is an array, where the first element is an object representing the selected color in NetLogo color and RGBA, and the second element is an array of the saved colors.**. To access the NetLogo color, do `returnedArray[0]['netlogo']`, and to get the rgba array, do: `returnedArray[0]['rgba']`
- `savedColors`: An optional array of colors that the user can save for later use. Each color is also represented as an RGB array.

You can also pass in an optional `openTo` parameter, which indicates which mode of the color picker to open to:
- 'grid': opens to Grid
- 'wheel': opens to Wheel
- 'slider': opens to Slider's default RGB mode
- 'sliderHSB': opens to the Slider's HSB mode

Here is a basic example of how to instantiate the Color Picker:

```javascript
const colorPickerConfig = {
    parent: document.getElementById('color-picker-container'),
    initColor: [255, 255, 255], // Initial color as rgb (white)
    initColorType: string, //Initial color type ("netlogo", "rgb" or "hsb")
    onColorSelect: (colorData) => {
        console.log('Selected color:', colorData);
    },
    savedColors: [[255, 0, 0], [0, 255, 0]], // Optional saved colors
    openTo: string, //optional opening to which part of the color picker {'g', 'w', 's'}
};

const colorPicker = new ColorPicker(colorPickerConfig);
```

## TypeScript 
You can import import the ColorPickerConfig interface. 
```typescript
export interface ColorPickerConfig {
    parent: HTMLElement;
    initColor: number[];
    onColorSelect: (colorData: [number[], number[][]]) => void;
    savedColors?: number[][];
}
```

## Feature Overview

The Color Picker consists of three modes: Grid, Wheel, and Slider. Each mode provides a different way of selecting colors.

- `Grid`: Grid mode provides the standard NetLogo grid for selecting NetLogo colors. The grid contains cells of NetLogo colors from 0 - 139.9, moving up by a default of increment 1, which a user can change in the increment bar at the bottom of the feature.
<br></br>
- `Wheel`: Wheel mode provides another way to select NetLogo colors, but with an inner and outer wheel. The outer wheel selects the base color for the outer wheel, and the outer wheel allows you to change the brightness of the base color. This provides a more intuitive way to select colors, especially on touch screens and mobile.
<br></br>

- `Slider`: Slider mode comes in two sub-modes, RGB and HSL. This mode provides the traditional way of choosing a color by adjusting three sliders. You can choose an RGB color by specifying each individual value in the corresponding slider. Likewise, you can choose an HSL color in HSL mode in the same way. Additionally, you can access the saved colors tab in the Slider mode. The saved colors tab allows you to "save" a color by pressing the button with a `+` sign. This color is saved in one of the squares, and you can set the color back to this color by pressing on it.
<br></br>


## Limitations

There are many limitations as this project is still in the experimental stage. As such, all feedback and contributions are welcome.


