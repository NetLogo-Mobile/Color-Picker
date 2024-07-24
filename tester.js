import ColorPicker from "./dist/ColorPicker.bundle.js";

const savedColors = [
    [228, 202, 152, 255],
    [228, 110, 72, 255],
    [157, 110, 72, 255]
];

function init(parent) {
    const colorPickerConfig = {
        parent: parent,
        initColor: [165, 234, 251, 255],
        onColorSelect: (selectedColor) => {
            console.log("Color selected:", selectedColor);
        },
        savedColors: savedColors
    };

    let colorPicker = new ColorPicker(colorPickerConfig);
}
var ce = document.querySelector(".code-editor");
ce.style.width = '100%';
ce.style.height ='20px';
ce.style.bordeer = '1px solid red';
var editor = init(ce);

