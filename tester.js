import ColorPicker  from "./dist/ColorPicker.bundle.js";

let codeEditor = document.querySelector('.code-editor');
let colorPicker = new ColorPicker(codeEditor, [165, 234, 251, 255], (selectedColor) => {
    console.log("Color selected:", selectedColor);
  });