import ColorPicker  from "./dist/ColorPicker.bundle.js";

const savedColors = [
  [228, 202, 152, 255],
  [228, 110, 72, 255],
  [157, 110, 72, 255]
]
let codeEditor = document.querySelector('.code-editor');
let colorPicker = new ColorPicker(codeEditor, [165, 234, 251, 255], (selectedColor) => {
    console.log("Color selected:", selectedColor);
  }, savedColors );
