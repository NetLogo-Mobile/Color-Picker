import ColorPicker from "./dist/ColorPicker.bundle.js";

const savedColors = [
    [228, 202, 152, 255],
    [228, 110, 72, 255],
    [157, 110, 72, 255]
];

function init() {
    let codeEditor = document.createElement("editor");
    const colorPickerConfig = {
        parent: codeEditor,
        initColor: [165, 234, 251, 255],
        onColorSelect: (selectedColor) => {
            console.log("Color selected:", selectedColor);
        },
        savedColors: savedColors
    };

    let colorPicker = new ColorPicker(colorPickerConfig);

    return codeEditor;
}

var editor = init();

function attach(editor) {
    var ce = document.querySelector(".code-editor");
    ce.appendChild(editor);
}

attach(editor);
