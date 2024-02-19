function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* cp-body: main body, everything in the color picker goes in here */\n.cp-body {\n    position: absolute;\n    border-radius: 0.625rem;\n    border: solid 1px #c0c0c0;\n    background-color: #eeeff0;\n    width: 38.4rem;\n    height: 27.6rem;\n    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n.cp-header {\n  background-color: #5a648d;\n  width: 100%;\n  height: 10.1%;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.cp-title {\n  \n}";
styleInject(css_248z);

class ColorPicker {
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent, initColor) {
        this.currentColor = initColor;
        this.currentMode = 'grid';
        this.parent = parent;
        this.init();
    }
    /** init: initializes the ColorPicker */
    init() {
        this.toDOM();
    }
    /** toDOM: creates and attaches the ColorPicker body to parent */
    toDOM() {
        var cpBody = (`
            <div class="cp-body">
                <div class="cp-header">
                    <div class="cp-title"> 
                        <img src="./assets/cp-icon.svg"/>
                    </div> 
                </div>
            </div>
        `);
        this.parent.innerHTML = cpBody;
    }
}

export { ColorPicker as default };
