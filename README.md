# Introducing the Color Picker Feature for NetLogo Web

This is a guide to the Color Picker feature for NetLogo Web. The Color Picker is a user interface that allows a user to explore and experiment with different colors, and finally select one. The selected color can then be provided to the program using the Color Picker in the form of a callback function. The Color Picker is still in the experimental stage, all feedback is welcome.

### Demo Link
https://netlogo-mobile.github.io/Color-Picker/
- This should bring you to a page with just the standalone color picker. The callback function after selecting a color simply logs the color.

### Installation
```bash
npm i @netlogo/netlogo-color-picker
npm install 
```

### Usage Examples

This repository provides two usage examples for the NetLogo Color Picker:

1. **ES Module Example**:
   - Import the `ColorPicker` as an ES module within your JavaScript.
   - Example usage:
     ```javascript
     import { ColorPicker } from "./dist/ColorPicker.bundle.js";

     const colorPickerConfig = {
         parent: parentElement,
         initColor: [165, 234, 251, 255],
         initColorType: 'rgba', // 'rgba', 'netlogo', or 'hsb'
         onColorSelect: (selectedColor) => {
             console.log("Color selected:", selectedColor);
         },
         savedColors: savedColorsArray,
         mode: 'DEFAULT', // 'DEFAULT', 'RGBA', or 'NETLOGO'
         openTo: 'grid' // 'grid', 'wheel', 'slider', or 'sliderHSB'
     };
     let colorPicker = new ColorPicker(colorPickerConfig);
     ```

2. **Standalone UMD Example**:
   - Use the standalone UMD bundle with a `<script>` tag in your HTML.
   - Example usage:
     ```html
     <script src="../dist/ColorPicker.standalone.js"></script>
     <script>
         const colorPicker = new ColorPicker.ColorPicker(colorPickerConfig);
     </script>
     ```

Check the `examples/` folder for the full HTML implementations of each example: `module.html` for ES module usage and `standalone.html` for UMD bundle usage.
To integrate the Color Picker into your NetLogo Web project, start by installing the Color Picker npm package:

### Configuration Options
After importing it into your project, you can create a Color Picker by calling the constructor. The `ColorPicker` class constructor accepts a single `config` object that contains the necessary properties for initialization:

- `parent`: The HTML element that will host the Color Picker. This ensures the picker is embedded in the correct location in your UI.
- `initColor`: The initial color selected in the Color Picker, expressed as an RGBA array (e.g., `[255, 0, 0, 255]` for red).
- `initColorType`: The initial color type, expressed as a string. Supported values are `'rgba'`, `'netlogo'`, or `'hsb'`.
- `onColorSelect`: A callback function that is invoked when a color is selected. This function should handle the selected color data. 
  - If `mode` is `'DEFAULT'`, the returned color data is an array, where the first element is an object representing the selected color in NetLogo color and RGBA, and the second element is an array of the saved colors. 
    - To access the NetLogo color: `returnedArray[0].netlogo`
    - To access the RGBA array: `returnedArray[0].rgba`
  - If `mode` is `'RGBA'`, the returned color is the RGBA array as a string (e.g., `"[255, 255, 255, 255]"`).
  - If `mode` is `'NETLOGO'`, the returned color is the NetLogo color name.
- `savedColors`: An optional array of colors that the user can save for later use. Each color is also represented as an RGBA array.
- `mode`: Specifies the operating mode of the color picker. Supported values are:
  - `'DEFAULT'`: Shows all color types.
  - `'RGBA'`: Shows only RGBA values.
  - `'NETLOGO'`: Shows only NetLogo color values.
- `openTo`: An optional parameter that indicates which mode of the color picker to open to:
  - `'grid'`: Opens to Grid.
  - `'wheel'`: Opens to Wheel.
  - `'slider'`: Opens to Slider's default RGB mode.

Here is a basic example of how to instantiate the Color Picker:

```javascript
const colorPickerConfig = {
    parent: document.getElementById('color-picker-container'),
    initColor: [255, 255, 255, 255], // Initial color as rgba (white)
    initColorType: 'rgba', // Initial color type ('rgba', 'netlogo', or 'hsb')
    onColorSelect: (colorData) => {
        console.log('Selected color:', colorData);
    },
    savedColors: [[255, 0, 0, 255], [0, 255, 0, 255]], // Optional saved colors
    mode: 'DEFAULT',
    openTo: 'grid'
};

const colorPicker = new ColorPicker(colorPickerConfig);
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


