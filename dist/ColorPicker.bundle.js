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

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n:root {\n  /* gradient-colors: for hue color changing gradient */\n  --gradient-colors: linear-gradient(to right,\n    hsla(0, 100%, 50%, 1),\n    hsla(10, 100%, 50%, 1),\n    hsla(20, 100%, 50%, 1),\n    hsla(30, 100%, 50%, 1),\n    hsla(40, 100%, 50%, 1),\n    hsla(50, 100%, 50%, 1),\n    hsla(60, 100%, 50%, 1),\n    hsla(70, 100%, 50%, 1),\n    hsla(80, 100%, 50%, 1),\n    hsla(90, 100%, 50%, 1),\n    hsla(100, 100%, 50%, 1),\n    hsla(110, 100%, 50%, 1),\n    hsla(120, 100%, 50%, 1),\n    hsla(130, 100%, 50%, 1),\n    hsla(140, 100%, 50%, 1),\n    hsla(150, 100%, 50%, 1),\n    hsla(160, 100%, 50%, 1),\n    hsla(170, 100%, 50%, 1),\n    hsla(180, 100%, 50%, 1),\n    hsla(190, 100%, 50%, 1),\n    hsla(200, 100%, 50%, 1),\n    hsla(210, 100%, 50%, 1),\n    hsla(220, 100%, 50%, 1),\n    hsla(230, 100%, 50%, 1),\n    hsla(240, 100%, 50%, 1),\n    hsla(250, 100%, 50%, 1),\n    hsla(260, 100%, 50%, 1),\n    hsla(270, 100%, 50%, 1),\n    hsla(280, 100%, 50%, 1),\n    hsla(290, 100%, 50%, 1),\n    hsla(300, 100%, 50%, 1),\n    hsla(310, 100%, 50%, 1),\n    hsla(320, 100%, 50%, 1),\n    hsla(330, 100%, 50%, 1),\n    hsla(340, 100%, 50%, 1),\n    hsla(350, 100%, 50%, 1),\n    hsla(360, 100%, 50%, 1)\n  );\n}\n\n/* cp-body: main body, everything in the color picker goes in here */\n.cp {\n    position: absolute;\n    border-radius: 0.625rem;\n    border: solid 1px #c0c0c0;\n    background-color: #eeeff0;\n    width: 38.4rem;\n    height: 27.6rem;\n    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: 'Lato', sans-serif;\n  }\n\n.cp-header {\n  background-color: #5a648d;\n  width: 100%;\n  height: 2.7876rem;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/* cp-title: title of the color picker and icon */\n.cp-title {\n  font-weight: bold;\n  color: white;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  margin-left: 3.1%;\n}\n\n.cp-title-text {\n  font-size: 0.8rem;\n  line-height: 2.7876rem;\n}\n\n.cp-icon {\n  width: 2.4rem;\n  margin-top: 8%;\n}\n\n.cp-close {\n  width: 1rem;\n  margin-right: 2.51%;\n  cursor:pointer;\n}\n\n.cp-body {\n  width: 100%;\n  box-sizing: border-box;\n  height: calc(100% - 2.7876rem); /* 100% - height of the header */\n  padding: 1.2rem 2rem 2rem 2rem; /* we can change this to lower the padding later according to David*/\n  display: flex;\n  flex-direction: row;\n}\n\n.cp-mode-btn-cont {\n  display: flex;\n  flex-direction: row;\n  gap: 0.384rem;\n  padding-bottom: 0.686rem;\n}\n\n.cp-mode-btn {\n  all: unset;\n  display: flex;\n  flex-direction: row;\n  gap: 0.3072rem;\n  border-radius: 0.1rem;\n  justify-content: center;\n  align-items: center;\n  height: 1.44rem;\n  width: 3.84rem;\n  border: #cecece 1px solid;\n  background-color: #e5e5e5;\n  font-size: 0.6504rem;\n  cursor: pointer;\n}\n\n.cp-mode-btn-img {\n  width: 0.8rem;\n  aspect-ratio: 1/1;\n}\n.cp-mode-btn-text { \n  font-size: 0.6504rem;\n}\n\n/** cp-body-btn-cont: container for the button modes of the color picker */\n.cp-body-btn-cont {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 0.686rem;\n}\n\n.cp-model-indicator {\n  width: 10.62rem;\n  margin: auto;\n  margin-bottom: 0.686rem;\n}\n\n/* cp-body-mode: styling for inner body that changes with the mode  */\n.cp-body-mode {\n  display: flex;\n  flex-direction: row;\n}\n/** cp-body-mode-main: the changing portion of the color picker (white section in the middle) */\n.cp-body-mode-main {\n  background-color: white;\n  width: 20.89rem;\n  height: 19.59rem;\n  user-select: none;\n}\n\n.cp-space-container {\n  border: solid 1.5px #cecece;\n  border-radius: 0.4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.97rem;\n  width: 100%;\n  height: 100%;\n}\n\n/** cp-body-mode-result: the result portion of the color picker (right section) */\n.cp-body-mode-result {\n  background-color: white;\n}\n\n/** cp-body-mode-left: styling for the left side of the body */\n.cp-body-left {\n  display: flex;\n  flex-direction: column;\n  padding-right: 1.52rem;\n}\n\n/** cp-body-mode-right: styling for the right side of the body */\n.cp-body-right {\n  display: flex;\n  flex-direction: column;\n}\n\n.cp-color-preview {\n  width: 10.948rem;\n  height: 10.948rem;\n  background-color: white;\n  border: solid 1px #cecece;\n  border-radius: 0.2rem;\n}\n\n.cp-alpha-text {\n  font-size: 0.7rem;\n}\n\n.cp-alpha-cont {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 1.83rem;\n  background-color: white;\n  margin-top: 0.53rem;\n  border: solid 1px #C0C0C0;\n  border-radius: 0.2rem;\n  gap: 0.5rem;\n\n}\n\n/* Base style for all sliders */\ninput[type='range'].cp-styled-slider {\n  background: transparent;\n  -webkit-appearance: none;\n  appearance: none;\n  outline: none;\n}\n\n/* Progress support for sliders */\ninput[type='range'].cp-styled-slider.slider-progress {\n  --range: calc(var(--max) - var(--min));\n  --ratio: calc((var(--value) - var(--min)) / var(--range));\n  --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));\n}\n\n/* Thumb styles for color and alpha sliders */\ninput[type='range'].cp-styled-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border-radius: 50%;\n  background: white;\n  box-shadow: 0 0 0.125rem black;\n  cursor: pointer;\n}\n\ninput[type='range'].cp-styled-slider.cp-alpha-slider::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.2rem;\n}\n\n/* Unified track style */\ninput[type='range'].cp-styled-slider::-webkit-slider-runnable-track {\n  height: 0.8em;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.2em;\n  background: #efefef;\n}\n\n/* Hover effect for all thumbs */\ninput[type='range'].cp-styled-slider::-webkit-slider-thumb:hover {\n  background: white;\n}\n\n/* Specific style for alpha slider */\ninput[type='range'].cp-styled-slider.color-alpha {\n  height: 1rem;\n  width: 7.5rem;\n}\n\n/* Red slider */\ninput[type='range'].cp-styled-slider.color-red.slider-progress::-webkit-slider-runnable-track {\n  background: linear-gradient(#fb4d46, #fb4d46) 0 / var(--sx) 100% no-repeat,\n    #efefef;\n}\n\ninput[type='range'].cp-styled-slider.color-red.slider-progress:hover::-webkit-slider-runnable-track {\n  background: linear-gradient(red, red) 0 / var(--sx) 100% no-repeat, #e5e5e5;\n}\n\n\n/* Alpha slider track color with simplified repeating background */\ninput[type='range'].cp-styled-slider.color-alpha::-webkit-slider-runnable-track{\n  background: linear-gradient(45deg, #ccc 25%, transparent 25%),\n    linear-gradient(-45deg, #ccc 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, #ccc 75%),\n    linear-gradient(-45deg, transparent 75%, #ccc 75%),\n    linear-gradient(to right, rgba(0, 0, 0, 0) 0, #ccc 100%);\n  background-size: 0.625rem 0.625rem, 0.625rem 0.625rem, 0.625rem 0.625rem, 0.625rem 0.625rem, 100% 100%;\n  background-position: 0 0, 0 0.313rem, 0.313rem -0.313rem, -0.313rem 0rem, 0 0;\n  background-repeat: repeat, repeat, repeat, repeat, no-repeat;\n}\n\n.cp-color-param-txt {\n  font-weight: bold;\n  font-size: 0.7504rem;\n}\n\n/* Green slider */\ninput[type='range'].cp-styled-slider.color-green.slider-progress::-webkit-slider-runnable-track {\n  background: linear-gradient(#50c878, #50c878) 0 / var(--sx) 100% no-repeat,\n    #efefef;\n}\n\ninput[type='range'].cp-styled-slider.color-green.slider-progress:hover::-webkit-slider-runnable-track {\n  background: linear-gradient(green, green) 0 / var(--sx) 100% no-repeat,\n    #e5e5e5;\n}\n\n/* Blue slider */\ninput[type='range'].cp-styled-slider.color-blue.slider-progress::-webkit-slider-runnable-track {\n  background: linear-gradient(#2a52be, #2a52be) 0 / var(--sx) 100% no-repeat,\n    #efefef;\n}\n\ninput[type='range'].cp-styled-slider.color-blue.slider-progress:hover::-webkit-slider-runnable-track {\n  background: linear-gradient(blue, blue) 0 / var(--sx) 100% no-repeat, #e5e5e5;\n}\n\n.cp-values-display {\n  display: flex;\n  flex-direction: row;\n  background-color: white;\n  height: 1.7rem;\n  width: 100%;\n  border: 1px solid #c0c0c0;\n  border-radius: 0.1.5rem;\n  justify-content: center;\n  align-items: center;\n  color: #787878;\n  font-size: 0.8rem;\n}\n\n.cp-values-display-cont {\n  margin-top: 0.53rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.53rem;\n}\n\n/** grid stylings */\n.cp-grid-cont {\n  width: 20rem;\n  height: 14.01rem;\n  border: 1px solid #c0c0c0;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0.5rem;\n  user-select: none;\n}\n\n.cp-grid-cell {\n  cursor: pointer;\n}\n\n.cp-increment-cont {\n  padding: 0.4rem;\n  display: flex;\n  flex-direction: row;\n  border: 2px solid #C0C0C0;\n  border-radius: 0.3rem;\n  gap: 0.5rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.cp-grid-btn-cont {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 0.483rem;\n}\n\n.cp-numbers-btn {\n  all: unset;\n  height: 0.8rem;\n  width: 0.8rem;\n  border-radius: 0.1rem;\n  border: 1px solid #CECECE;\n  cursor: pointer;\n}\n\n.cp-numbers-clicked {\n  background-color: #C0C0C0;\n}\n\n.cp-increment-label {\n  font-size: 0.6504rem;\n}\n\n.cp-btn-label-cont {\n  display: flex;\n  flex-direction: row;\n  gap: 0.2rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.cp-grid-text {\n  pointer-events: none;\n}\n\n.cp-wheel-cont {\n  width: 20rem;\n  height: 14.01rem;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0.5rem;\n  user-select: none;\n}\n\n.cp-wheel-spacing-cont {\n  display: flex;\n  flex-direction: column;\n  gap: 0.97rem;\n  padding-top: 0.97rem;\n}\n\n.cp-inner-wheel {\n  width: 100%;\n  height: 100%;\n}\n\n.cp-outer-wheel {\n  width: 100%;\n  height: 100%;\n}\n\n.cp-wheel-numbers {\n  font-size: 0.6rem;\n  color: white;\n}\n\n/** Slider Mode */\n.cp-slider-cont {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.97rem;\n  width: 100%;\n  height: 100%;\n}\n\n.cp-slider-color-display {\n  width: 18rem;\n  height: 4.57rem;\n  box-shadow: 0 0.188rem 0.625rem rgb(0 0 0 / 0.5);\n  border-radius: 0.2rem;\n}\n\n.cp-slider-changer {\n  display: flex;\n  flex-direction: column;\n}\n\n.cp-slider-display-container {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n}\n\ninput[type='range'].cp-styled-slider.color-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background: white;\n  border: none;\n  box-shadow: 0 0 0.125rem black;\n  margin-top: calc(max((1em - 1px - 1px) * 0.5, 0px) - 2em * 0.5);\n  cursor: pointer;\n}\n\ninput[type='number'].cp-slider-value-display-cont {\n  user-select: none;\n  pointer-events: none;\n  text-align: center;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #d8d8d8;\n  outline: none;\n  position: relative;\n  margin-top: 1rem;\n  font-size: 0.688rem;\n  letter-spacing: 0.031rem;\n  padding: 0.125rem 0.125rem 0.25rem;\n  margin-bottom: 0.25rem;\n  width: 2.5rem;\n  background: #fcfcfc;\n}\n\n.cp-slider-text {\n  font-size: 0.8rem;\n  padding-left: 0.3rem;\n  padding-bottom: 0.2rem;\n}\n\n.cp-slider-changer {\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-left: 60%;\n  margin-bottom: -1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n}\n\n.cp-dropdown-text {\n  color: gray;\n  font-size: 0.7rem;\n}\n\n/** Wheel mode */\n.cp-saved-colors-cont {\n  display: flex;\n  flex-direction: row;\n  gap: 0.8rem;\n}\n\n.cp-saved-colors {\n  background-color: #f1f1f1;\n  box-shadow: 0 0.313rem 0.313rem rgba(0, 0, 0, 0.3);\n  border-radius: 0.2rem;\n  width: 2.8rem;\n  height: 2.8rem;\n  cursor: pointer;\n}\n\n.cp-saved-color-add {\n  background-color: white;\n  border: 2px solid #808080;\n  border-radius: 0.2rem;\n  width: 2.8rem;\n  height: 2.8rem;\n  cursor: pointer;\n  background: linear-gradient(#808080 0 0), linear-gradient(#808080 0 0);\n  background-position: center;\n  background-size: 50% 0.125rem, 0.125rem 50%; \n  background-repeat: no-repeat;\n}\n\n/* Hue slider */\ninput[type='range'].cp-styled-slider.color-hue::-webkit-slider-runnable-track {\n  height: 1em;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.5em;\n  background: var(--gradient-colors);\n  box-shadow: none;\n}\n\ninput[type='range'].cp-styled-slider.color-hue::-webkit-slider-thumb:hover {\n  background: hsl(var(--value), 100%, 60%);\n}\n\ninput[type='range'].cp-styled-slider.color-hue.slider-progress:hover::-webkit-slider-runnable-track {\n  background: var(--gradient-colors);\n}\n\n/* Saturation slider */\ninput[type='range'].cp-styled-slider.color-saturation::-webkit-slider-runnable-track {\n  height: 1em;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.5em;\n  background: linear-gradient(to right, #808080 0%, #003348 100%);\n  box-shadow: none;\n}\n\ninput[type='range'].cp-styled-slider.color-saturation.slider-progress:hover::-webkit-slider-runnable-track {\n  background: linear-gradient(to right, #808080 0%, #003348 100%);\n}\n\n/** Luminance slider */\ninput[type='range'].cp-styled-slider.color-luminance::-webkit-slider-runnable-track {\n  height: 1em;\n  border: 1px solid #b2b2b2;\n  border-radius: 0.5em;\n  background: linear-gradient(to right, #000 0%, #fff 100%);\n  box-shadow: none;\n}\n\ninput[type='range'].cp-styled-slider.color-luminance::-webkit-slider-thumb:hover {\n  background: #666;\n}\n\ninput[type='range'].cp-styled-slider.color-luminance.slider-progress:hover::-webkit-slider-runnable-track {\n  background: linear-gradient(to right, #000 0%, #fff 100%);\n}\n\n.cp-draggable {\n  cursor: pointer;\n}";
styleInject(css_248z);

var img$6 = "data:image/svg+xml,%3csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg filter='url(%23filter0_d_48_975)'%3e%3crect x='4' width='20' height='20' fill='url(%23pattern0)' shape-rendering='crispEdges'/%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d_48_975' x='0' y='0' width='28' height='28' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset dy='4'/%3e%3cfeGaussianBlur stdDeviation='2'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_48_975'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_48_975' result='shape'/%3e%3c/filter%3e%3cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3e%3cuse xlink:href='%23image0_48_975' transform='scale(0.00195312)'/%3e%3c/pattern%3e%3cimage id='image0_48_975' width='512' height='512' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeJzs3Xd4VNXWwOHfmZ5J740kpJPQCT0oiCgqYAUEEQQB9XpteL32a8eGvQuiH2LHdkUEVFAREJCO9B4gCem9TWbm%2b%2bOEa6Mkc87U7Pd58kSRrLPAZM6affZeS0IQBE%2bnByJbPmKBECC45fMf/zkQMAEBLV8TAmhb/vsJGiAIkP5yDTtQBdj%2b8GuVQHPLZwtQAzS0/L7Klo%2bKv3wUAsUtHxaFf25BEJzory8CgiC4joR8Q08A4lo%2bdwDiW/45EogCwtyVoEJlQBFyMZAHHGv5ONLy%2bSiQ77bsBKGdEwWAIDiXFkgGMoEUILXlI6Xlw%2bS%2b1DxCA3AA2N/yceKf9wAHAav7UhME3yYKAEFQhw7oBHQGslo%2bOiHf%2bI1uzMubNQK7gN3ADmAnsL3l35vdmJcg%2bARRAAhC2wUBPYDuLR89gC6IG72rNCAXApuBLX/4XOXOpATB24gCQBBOT4f8Lj4HyAUGIb%2bz17gzKeGkCoCVwCpgA7AeuVgQBOEkRAEgCH8WiXyjPxsYCPQEDG7NSHBUI7AJWA2sQC4MStyakSB4EFEACO1dPHAucBbyjT/LvekITmRH3lOwEvgZWIY4hSC0Y6IAENqbAKA/MKzloxfi56A9OwB83/KxDPnooiC0C%2bKFT/B1GqAPcBFwIfINX%2bvWjARPZUXeO7AY%2bAZ5D4HttF8hCF5MFACCLwpDXtYfBoxEbrIjCG1VAvwAfA0sBMrdm44gqEsUAIKvSEB%2bhz8KGI7cClcQ1GIF1gALgM%2bQuxgKglcTBYDgzbKAy1o%2bchDfz4Jr2JEfD3zR8rHLvekIgmPEC6bgbRKRb/hjkHftC4K77UBeGXgf2OvmXASh1UQBIHiDeGAsMA7o6%2bZcBOFU7MBa4GPgE8QRQ8HDiQJA8FR%2bwOXAJOQNfe16576fUUNUuJ7YCAORoXpCgnSEBGoJCdS1fGgJCpA/G/Qa/P00mE1a3lhQwEvvFzh0zdzRSfS/JAFLg5WmBivNFhsNNc001DbTUGOhvub3z/U1FmorLFSVNFBbYcHS2O5n%2bFiB74B3gS%2bBevemIwh/p3N3AoLwBxJyq91rkJf4g9ybjmtEhelJjDXSIdpIYqyBhGgjHWKMJEQbiAzTExdpIMDsWP0TGuT4j7hfoI6oJH%2bHvraxrpnq0kZqKixUFtVTWdxIRVED5YX1VBY3UFnUQE15k8O5eQEtcEHLRyXyI4J5yN0I7W7MSxD%2bRxQAgieIBCYD04F0N%2bfiFJGhejqnmUlLMJGaYCIt0Y%2b0BBNpiSaHb%2b6ezGjWYTTriEgACDnp72msa6b0WB0lR%2bsoy6%2bn5GgdpcfqOH6ohtoKnyoOgoFpLR97gDnA/yHaEgtuJgoAwV0kYAhwPfKmPp/otx8SqKNnlj9ZyWa6pJvJSvajS7qZiBBxKvGvjGYdcelBxKX/faGntrKJ4wdqKDpcS%2bHBGo4fqqFgbxX1NV4/BTgDmAU8hnyCYDbwI2JVQHADUQAIrhYMXAvcgPxi6LViIw30yvKnZ6cAenbyp2eWP8nxJnen5RP8gw2k9AwjpWfYn369LL%2beY3uryN9bRf6eao7tqaK6rNFNWSpiRN7UOg55VeB14B3kxwWC4BKiABBcJR24CfnmH%2bDmXNpMr5PoluFPbs9AcrIDyMkOoHOq2d1ptTthcX6ExfnRdXD0/36tqqSRY7urOLqnksPbKji0rcLbNiFmAM8DjwIfAC8Dv7k1I6FdEAWA4EwaYARwM3JbXq85dRIapGNQzyAG9w7irJxgenbyR6/zmvTblaAII0ERkWTlRgJgbbZzbE8Vh7aWc2BzGYe2lnvLo4MA4DrkvTDfAS8hzyUQ8wgEpxAFgOAMRuTje/8CMt2cS6sEmLUM6x/COX2CGdw7iK7p/mg07s5KcIRWJ5GYHUxidjBnj%2buI3WanYH8NB7aUsX9DGfs2ltJU79ErBBJwfsvHTuBZ4D3AK591CJ5LFACCmoKAKcC/kZv3eLSUDiZGDg5l1OAwzuoVhNEg7vi%2bSNJIxKUHEpceyKDRSdisdvK2V7Dzl2L2ri8lf08Vds/dgpcFvAU8jrxP4CXEyGJBJaIAENQQh3zTn4YHP98PCtBybr8QLhwUygW5ISTEGN2dkuAGGq1Ex26hdOwWyoXXQ8XxBnavLWb32hL2bSijsc4jHxdEAQ8CtyMfI3wGcKzDkyC0EAWAoEQScCcwFXnZ3%2bN0TTdz4aBQLhwUSm7PIPEcX/ibkGgT/S5OoN/FCVgtNg79VsHuNSXsWlPM8YM17k7vrwKRi4AbkVcGngaOuDUjwWuJAkBwREdgBvKGJY8795adambM%2beFcOTySrBQ/d6cjeBGtXkNqzzBSe4Zx0T8yKCuoZ%2bvyQjYuzef4IY8qBkzIp2quBz5CPkEgBhEJbSIKAKEtkpCXISfiYd87mR39GDs8grHDI%2biSJo7nCeoIi/VjyIRkhkxIpvBANVuWF7J1eSElR%2bvcndoJeuSfx/HI3QUfBfLcmpHgNTzqRVzwWJHIO/pvxYPe8SfFGbnknDDGnB/BoJ7tYmyA4EYxKYHEpAQyfFo6xw/WsPXHQjZ/V%2bApxYAOeQ/OJORC4CHEHgHhDEQBIJxOGHAX8lKjR7ytjo00MGFEJFcOj6B3Z4/dbyj4uOjkAM5LTuO8KWkc2VnJluWFbPo23xMGHBmQH81NQD4xMAsod2tGgscSBYBwMgbgH8jvIk4%2bycWFNBoY2jeE60ZHc%2bnQcLGRT/AoCVnBJGQFc9E/Mti/sYx1C4/y24rj2KxuPVvoD9yD3HL7KeBFoMGdCQmeRxQAwh9JwGjkF4xkN%2bdCXKSBiaOiuH5MtOixL3g8jUYivXc46b3DqSxuYNO3Baz57xHKC%2bvdmVYo8CTyKt6jwFzAo7sgCa4jCgDhhHORlwt7ujOJP77bv%2bzccHRa8W5f8D7BkSaGTEhm8PiO7GtZFdj%2b83GszW5bFegAvIn8eOBOYLm7EhE8hygAhGxgPtDLnUkkx5uYenk0Uy6NIi7SJyYDCwLSX1YF1i8%2bxq9fH3PnqkAOsAxYj3x6YJe7EhHcTxQA7ZcZeBe4HDcO6cnJDuCWCbFMGBGJViPe7Qu%2bKzjSxLmTUhl6dQq7filh1WeH2bu%2b1F3p9EaeM7AEGAtUuysRwX1EAdD%2bnHjO/xZy736X02jgorPCuPvaeHLF8T2hnZE0Elm58vTCY7urWPnpYTZ/X%2bCuTYMXAMeQ9wjMBzx3KoKgOjH9pH3pAqwAPsENN39/Py03jY9lz8IcFr6cJW7%2bQrsXnxnElfd15Y73BjHgskT0Jq070ggE5gE/Ap3dkYDgHmIFoH0wI2/8uQf5iJ9LRYXp%2bceVMdw8Po7wEPEtJwh/FR5v5tIZWVxwXTrrFx9jxYeHqCx2%2bam9s4HNwGvAfYBH9T4W1CdejX3fxcgNQZJcfeGsFD/%2bNSmeq0dGilG7gtAKJn8dg0Yn0f/iBDYuzWfFx4cozqt1ZQo64Bbk142bga9deXHBtUQB4LvigVeAS1194fREPx78RwLjL4xEI%2b77gtBmOoOGvqM60HtEPJu%2bLeD7/ztAWb5LC4GOwELgc%2bT9AaKtsA8SBYBvGgO8gdzK12USY43cN70D114WLc7vC4IKNBqJnAvi6DEsls3fF/Dt/x2iIt%2blG/YvR%2b4RcicwB7FJ0KeIAsC3dARmA%2be58qIdog3cMTmeG8bEiKV%2bQXACre73QmDdN4V8%2b38HqCtx2SP6YOQmQhOQBw6JscM%2bQhQAvkGD/LxuJnIPcJeIiTBw99R4rh8dg8kobvyC4GxancSAi2PpPTyK5Z9XsOqDXTRWuqwQOBvYiLxB8BXA5qoLC84hXrW9XxJyZ68XcNHNXyPB3VPj2bOwF7dOiBM3f0FwMb1Ry/Dx4dz9yVnkXHsOkuSyR24ByIOFfgbSXHVRwTnEK7d3mw5sA4a48qI2OzRZ7AT6u%2bXMsiAILcx%2bNsy1B7HbXf5ofiCwAZjq6gsL6hEFgHeKBv6L/Lw/0B0JvPxBAbsPuXXKmSC0e6XH6vjl8zx3XT4IuaPoYiDOXUkIjhMFgPe5AtiOfE7XbSzNdv71zEF3piAI7d5XL%2b6i2eL2R/EXAFtww5FjQRlRAHgPP%2bRnb58C4W7OBYBFK8pZvLLc3WkIQru0d30pu9YUuzuNEyKAL5AHjLlsI7KgjCgAvENnYC1yhy6Pcvusg1jcN%2bNcENolm9XOwpc9cpLvROBXoLu7ExHOTBQAnk1CvumvB7q6OZeT2nWwnlc/Ek3CBMGVVn2Wx/GDHtuqPwtYA9yIG0eNC2cmCgDPFQp8ibzsb3JzLqf18OtHKC63uDsNQWgX6qosLH93v7vTOBMT8CryI8tgN%2bcinIIoADxTL%2bRlNKdu9JMkmHhOPEO7KdtSUFHdzAOvum0nsiC0K0tm76WuSlnBbU7vQsig4fKLgHNdjrxBsK%2bzLyS0nSgAPM8kYCWQ6syLpMSY%2bfaRvrw7ozuvXN8ZvcLe/XM%2bPc6W3S4dViII7c7xgzX8uuioohiSVkv0ldcRM%2bFGEmfMxBDl9BN8ScAK4FZnX0hoG1EAeI4A4ENgHvKOf6fQaSXuvDyF3145i2HdIwDISgjghguVTQu22uzMmCWOBQqCMy18eRc2q7JNt4kXnU1852AkwJzemY73vUDYsEtx8uhOI3K3UnFKwIOIAsAzpAG/AOOceZFuHQNZ/fRAnprcCT/Dn7v4PXxVOhFBBkXxf1hXyWfflyqKIQjCyW378Th71yv7%2bdIH%2bpM%2b7iIC/WuJiSxGq7GhMRiJumIKyfc8hynJ6d19JwKrgRRnX0g4M1EAuN8FwDqgi7Mu4GfQ8uD4dH59Lpc%2b6SffjxMaoOeh8emKr3X7rIPUNbi9MYkg%2bJTmJhvfvL5bcZyMCaPQB8pvwE2GJuKiijAa5P0Exg7JJN35NNFjpqExOnXfcTfkPU7nO/MiwpmJAsB9JOBu4GvkHf9O0TcjhC0vDeKh8ekYdKf/333DhYl0TVLWWTivoJHn5%2bcriiEIwp/99NFBygqUtd4OSIglYfigP/2aTmslNqIEs6kBAEmjJXToKDo6fzUgDPgG%2bDfiqKDbiALAPfyBj4EnAKdM1NFqJO4dk8rKpwaQHte6R25ajcQL07MVX/vxOUc4UtioOI4gCFBZ3MCP7yvfX5M1bTSS9u8v%2bZJkIyq8lCD/3/sKGKLjSfr304QPv8KZJwW0wNPAB4DZWRcRTk0UAK4XB/wEjHHWBRIj/Vj2WD9mTsxs8%2b7%2bod3CubR/tKLr1zXYuP9lcSxQENSwZPZemuqtimJED%2bhBRM%2bsU/53CQgPqSQ8uOJ/b8clrZbISyeRdMeT6CNiFF3/DMYh7wtIdOZFhL8TBYBr9UDukJXjrAuMzo1h0wuDGNwlzOEYz16bhcmg7Ftj/tdFrNxUpSiGILR3edsr2PStskdqGp2OzGtaN6cnKKCWqLAyJOn3kwZ%2bKZ1Ivvd5gvoOVpTHGXRHfm3s48yLCH8mCgDXGQ2sAhKcETzIrOPNf3ZhwV29CAvUK4qVEmPm1lHJimLY7XDbUwexif2AguAQu10%2b9mdXOGqj46Xn4h8X1erfb/arJzayBK3m9x9ejZ%2bZuCm3Ez/9TrR%2bTjvFF4vcL2C8sy4g/JkoAJxPAu4HPsFJz7kGdgpl84uDuG64eito941NJTbUqCjGhh01vLeoSKWMBKF92bg0n7wdlYpiGEOCSB09vO1fp28iLqoYvfbPjx4Ce%2bXS8Z7n8EvOVJTXaZiA94F7nHUB4XeiAHAuPfA28ChO2Omq00o8ND6dn57oT3K0urVFoJ%2bOmROV/5Df%2bdwhqmqUPb8UhPamqd7Kktl7FMfJvOZSdGbHjvTptM3ERhVh0P257bA%2bMobEO54g4qIrndU8SAIeB94CdM64gCATBYDzBCAP85nsjOARQQYWP9SHB8eno1PYxvdUrjk3nr4ZIYpiHC%2b18PQ7ylqXCkJ788N7B6gqUXaSJig1gbih/RTF0GpsxEYWYzQ0/enXJY2WiFFXkXjbo%2biClL1GnMZU5KOCQc66QHsnCgDniAF%2bBC5yRvCctGDWP5f7v1a%2bzqKRJF6YlqX4FNAz8/LZl9egTlKC4OPKCupZ8fEhZUEkiezpY5FUOMKn0diJjSjBZPx7QWJO70LHu5/DLzlD8XVO4TzgZyDeWRdoz0QBoL405G9Yp%2bz0n3hOPD8/2Z%2bkKKeNC/iTAZ1CGX%2b2smEhjU027n5B4QuaILQTi17dTXOTst2zcYP7EJqt3jwxSbITE16K2fT3ZkS60HASb3%2bckEFOa%2bzXDfk1tZOzLtBeiQJAXX2Rj7Ko3kLLZNAw95ZuvDuj%2b9/6%2bDvb05M74W9Sds3Pvi/lu18qVMpIEHzT/k1l/LbiuKIYWoOejInqTxKXJDvRYeUEmP9eBEg6PTET/knMhBuRdMpOIZ1CMnIR0NsZwdsrUQCoZwjwHRCuduAOESZ%2bfLw/1w7roHboVokPN3Hn5cpnd8x4%2biDNCieZCYKvstnsLHxpl%2bI4KWOG4xfpeB%2bQ05LsRISWEWCuO%2bl/Dhk0nKR/P4U%2bvPXHDtsgAvnR6nnOCN4eiQJAHRcDi3HCZpXBXcJY/1wu/RRuxlPq35en0FHhY4ft%2b%2bt46zNl724EwVet%2b%2booBfurFcUwRYSSfOkwlTI6OQmICC0/ZRFgSkyl493P4p/VwxmX9wcWAlc4I3h7IwoA5SYCnyGfX1WNJMEtozry/aP9iA5Rdh5fDX4GLU9NVv4I7r6XD1Na0axCRoLgO%2bqrLXw7d5/iOFlTr0BrVDbWuzXOVARoA4JIuOlBws93yiwBI/IslalqB25vRAGgzAxgHiqfVTXqNXxwRw9enJ7ttCN%2bjhg7KFZRi2GAsspmHpt9RKWMBME3fP/Ofmorm878G08jNCuVmIE9VcrozM5UBKDREHnZJOImz3DGvgAtMAe4Re3A7YkoABz3b%2bA5VG7wExao59tH%2bjLuLGU7753lhWnZaDXK/sivfFjAb/tO8aIhCO1M0eFafvlS2fAsSZLImj7amZP7Tn5dzlAEAEF9B5M44zG0Aao/IZWAF5E7rQoOEAWAY%2b5CHmOpqpQYM6ueGsDZnZ20gUcFPVKCFG9GbLbamfG08vGmguALvn5lF9ZmZZtjO5yfS3BakkoZtc2JIsDf7%2b%2bnA07wS%2blE0p1PY4hyyhubR4EHnRHY14kCoO3uAp5UO2j/zBB%2bmTWQTh0C1A6tuscmZhLir2xJ7/s1FSxaUa5SRoLgnXauLmb32hJFMXRmE%2blXjVQpI8dIQFRYGX6mU3cvNETGknTn0/ilZTsjhYdwwuuyrxMFQNs8ghO%2bya4YGMPymf2ICnb%2b5h01RAUbuP9K5a0Obnv6AI0KG54IgreyWmwsem234jhp40ZgDPWMbrlRYaUYjafey6D1DyTx1kcI6n2WMy7vlJVZXyYKgNZ7DPiP2kFvGdWRT%2b7q6fLmPkrdMqojmfHKxoLuy2vglQ8LVMpIELzLqs/yKM6rVRTDHBtJ0ojBKmWknEayExNegkFvOeXvkXR64q79FxEjxjkjhX8DzzgjsC8SBUDrPALcp2ZArUbi1Rs68%2bL0bDQu3rijBr1W4plrsxTHefiNIxSWKNv9LAjepqa8iWXz9iuOkz19DBq9Zw3M07S0DdbrTnPcV5KIGDmemKtvQtKo/ubnX8iPBIQzEAXAmd2Pyu/8/U1aFv6nNzde5J5NO2oZ2SeKC3MiFcWorrXywKvKdkALgrdZOmcvDbXK%2bmGEd%2b9EZO8uKmWkLq3WSmxECTrt6UeBh%2bSeR/w/7kVjUL3XyYOo/KbNF4kC4PRuR95hqppgs45vH%2bmr%2bMbpKZ6bmoVeYa%2bCuV8cZ/32GpUyEgTPlr%2b3mvXfHFMUQ9JqyJ4%2bRqWMnEOrtRITXopGc/oTDgFdepNw80NoTGa1U3gMuEftoL5EFACnNgN4Vs2AEUEGls/sx8BOoWqGdatOHQL45whlKxk2G9z29EHsYkyA0A4sfHkXNpuyb/akkUMISIxVKSPn0estxISVIEmn//P6pWWTeNsjaP1VPwX1OKJZ0CmJAuDkJqHyzT86xMjymf3olRqsZliP8OD4dCKClJ1gWLWpigXfKjsOJQiebsvyQg5sLlMUQx/oT9rYC1XKyPmMxiYiQ8985NeUlE7SHU%2bhC1a9D8oLiLbBJyUKgL%2b7BJiLih3%2bEiP9%2bPnJ/nRNClQrpEcJ8dfzyIQMxXHuePYQdQ3iWKDgmyyNVha/sUdxnIyrL0YfqOwEjqv5%2b9UTGlh1xt9niOlA4oyZ6EMj1Ly8BLwJjFYzqC8QBcCfDQU%2bQsXe/snRZn6Y2Y/0OO/6gW2r64Yn0D1Z2VnkI4WNPDtP2bNRQfBUP314iPLCU3fLa42AxFgSzs9VKSPXCgmqPm3L4BMM0XEk3vEkhkhVH3FogfeB89UM6u1EAfC7vsCXqDjVLyshgJ%2bf7E9KjOqbWzyOViPx/DTlxwKfeOsoeQWn7iYmCN6osriBnz5Q3v46a9poJK33vmxHhpZjMp7551sfFkniHU9gjFf1pJQB%2bBwYqGZQb%2ba930nq6gR8A6i2Rt8rNZgVT/QnPlzVKcEe7Zyu4VwxMEZRjPpGG/e%2bdFiljATBM3zz%2bh6aGk5/JO5MYnJ7EtFDeZHtbtFhZRh0p24UdIIuKJTE2x7FlJCi5uX9gf8Cyp9Z%2bgBRAEAM8s0/XK2A/TNDWPZYX8Ub47zRrCmdMBmUfVt98E0xP2888/NCQfAGh7dXsGWZso6XGr2OzEmXqpSRe2k0NqIiznw8EEAbEEzCjMfwS1b1fh0BLAai1Qzqjdp7ARAILAKS1QrYPTmIbx7so3hYjrdKjjZz%2byXK/jrtdrjtqYPYxH5AwcvZbXYWvrRL8RHX5MuGYY71jd4hAHqtleiwUjjD8UAArZ8/CTc/jCkxVc0UUpBf%2bz1/%2bpoTtecCQA8sAHqpFTAz3p%2blD/chNKB93vxPuGdMGnFhyh59bNxZw7sLi1TKSBDcY8OSfI7srFQUwxgaRMrlvrd3zWRsJKwVJwMANH5mEm5%2bCGNsgpop5ACfoOKmb2/TXguAE8dChqsVMC3WzPKZ/YgOUb2lpdcJMGl5YlKm4jh3v3CIqhplz00FwV0a65pZMmev4jiZky9DZ/bNvUTBgTUEmFs3EEkbEETCrY%2bgj1S2z%2bgvLgTeUDOgN2mvBcD9wBS1gnWIMPHdo/0Uv%2bv1JRPPiadfRoiiGMdLLTwx96hKGQmCay2ff4DqUmUnWoLTEokb0leljDxTREglxtNMD/wjXXCY3CcgLErNFKYCd6sZ0Fu0xwLgClScFBUVbOC7R/rSMcpPrZA%2bQZLg1Rs6K550%2bNy7x9ibp%2bzstCC4Wll%2bPSs/UXiaRZLIvmEckhdOC20LSbITFV6K9gyDg07Qh0aQcOvD6IJVban%2bOHClmgG9QXsrAHoB81Dpzy339u9Ppw7teh/JKeWkBTNhSJyiGE0WO3c%2bJ44FCt5l4Su7aLYo28Uaf05fQjI6qpSRZ9NprUSGlre6/aohKo6Emx9G66/ayW0JeAe5H0y70Z4KgDjk85%2bqtOQLMutY/FAfOieKm//pPD25E0FmZXtsvlxeyrerK1TKSBCca//GMnasVLaBVWsy%2bsyxv9byMzYS3MpNgQDG%2bCQSbnsUrZ9qXVb9kJvBdVAroKdrLwWAP/A1Kv2P9TdpWfxQH3qn%2bd5gH7XFhBq583LljTxmzDpIs1WMCxQ8m81m56uXdimOkzpmOMaw9vf6EhJUjZ%2bpodW/39Qhmfgb70djUG3zdSxyEeD77VtpHwXAiaWdnmoE02klFtzVy6dG%2bjrbHZelkBar7Odpx/463lxQqFJGguAca748QuGBakUx/KLDSb7kXJUy8i4Scrvg1u4HADCnZRM39d%2bgUe12loM8EM7ntYcC4B5gjFrBXpiWzYU5vtOQwxWMeg1PXtNJcZz/vJJHaUWzChkJgvrqqy18/85%2bxXGyrr0CjaH99hLRamxEtWE/AEBAtz7EjL9BzTTGAXeoGdAT%2bXoBcB7wiFrB7roilX%2bOUHU4RbtxxcAYzuuhbMRneVUzD7%2bRp1JGgqCub%2bfuo7aySVGM8K4ZRA/ooVJG3stkbCQkqG3twEMGDSfs3IvVTOMp5D4BPsuXC4B05C5PWjWCjcmN5fFJYn6EEs9Py0anVXak6bWPCtm298wjRQXBlYoO17L2qyOKYkgaDVnTxMj6E4ID27YfACDqimsJ7DlArRQ0wHuAqj2IPYmvFgABwBeAsk40LQZ2CuXdGd0Vn2lv7zonBjDtfGWtPK02OzOePqBSRoKgjoUv78LarGyTasLwQQQmt5sN6Gf0v/0AmjYcp5QkYifPUHN4UBjwGT66KdBXC4DXgM5qBEqJMfPFfTmKJ9wJsplXZxIeqGxK4rK1lXz1Y5lKGQmCMjtWFrFnXYmiGPoAM%2bkTRqqUke/QamxEhJW36Ws0BiMdbvwPhshYtdLoDrylVjBP4ot3tRuBiWoECg808M2DfYgKbn9jfZ0lLFDP/VcqX1G7fdZBGpvEuEDBvawWG4te36M4Ttr4ERiCRE%2bRkzEbGwj0b928gBO0AUF0uPF%2btP6q/Z2OB6apFcxT%2bFoB0B14Ro1ABp2GBXf3JDNetSYTQoubRnRU3EBp/5EGXnxf2Yx1QVDq508OU3KkbTenv/LvEEPSRWerlJFvCg%2buQq9r2wkgQ0wH4m%2b4D0mn2omKl1Fxeqwn8KUCIBT5ub/ipvySBPNmdOOcruHKsxL%2bRqeVeGF6tuI4j80%2bQkGxsl3XguComvImfnhP%2bX6UrKlXIGlV2avssyTJ1qZWwSeY07KJnXiT/KKunAn4GPCZDk2%2bUgBIwP8ByWoEu%2buKVMadpayHvXB6w7pHMKK3sole1bVW/vOqOBYouMeS2XtoqFXWlyKqT1cic1TZruTzjIYmgoPa3mQpqO8Qws69RK000oC3oc21iEfylQLgFkCVA6Dndg8dfBrOAAAgAElEQVTnsavFcT9XeGF6Nka9sm/Bd748zq%2b/1aiUkSC0Tv7eKtYvzlcUQ6PT0enay1XKqH0IDajGaGjd6OA/irrsGvyzVGkGC3A58A%2b1grmTLxQAXYAn1AiUGOnHh3f0RKvxieLO46XFmhU3VrLZ4NanDmAXYwIEF7Hb4asXd2G3KfumSxo5BP/4aJWyaickOxEhZUhSG//uNRripv4LfbiyVcc/eBZ5z5lX8/YCwAR8gArP/U0GDZ/d04tIsePfpR4cl05MqLJBHr9sqeajJcUqZSQIp7dlWQEHt7btaNpfGYIDSb3Sp5vMOY1B30xIYNsfBWj9A4mfdqdamwJVu/e4k7cXAC8BXdUI9Mr1ncV0PzcIMut4%2bKp0xXHufO4QtfWtHyAiCI6wNFpZMnuv4jgZV1%2bM3t%2br7x1uFRJQg0Hf9g3Apo7pRI%2bdrlYa2ah06sxdvHnr6RXIvZoVu/6CRB4Yp/wmJDimZ2oQ36wvJr%2bs0eEYVbVW9HqJIX3adxHXbLVTXN7M4YJGdh2sZ/HP5Wzf71jr5IAwI4FhRprqrWADnUGD1M4fjy2ff4AdK4sUxQhK6UDnG8cjic6ijpPApLdQXdf2Y9qmpDQsZcU0Hj2oRiZ9gC2A8hnQbuCt34GxwDZA8Tm9fhkh/PREf8Wb0QRlVu0s56y7f1H0LN/PqGHnf3uRFKfabHCPUl1r5VB%2bIwePNXDoWMvn/EYKipsorbRQXGahssa5qyAmfx3%2bIQb8QwwEhhkIjfEjLNaPsFgzobEmwmLNGPy8%2bX3FqVUWN/DMhJU0NSj7O%2b73%2bAzCuog3HGooqwqmsrrtPUXsliYOP3svDYeVr%2bYAJcgr0V43r9xbC4CvgRFKg0QFG9jw/CA6RJhUSElQauxTm1iwSllzn3EXRPDh05kqZeQepRXNbNlTy7a9tWzbW8fWPbUcONrgNaOQ/YMNhMX5EZMSSGxqADGpgcSmBmIO8u4Rtx88tIUty5W9xscOyqHHnVNVykiw2SWOFUXR3Kxr89dayoo59MS/sNZUqpHKQlQ6ieZK3lgATAdmKw2i00p890hfhohmPx7jSEkDnf7xE3WNyt5h/fROV87OCVIpK%2bc6Xmrhly1V/LKlmi275Rt%2bvo82NwqONBGTEkBsWiCJ2SEkdQkhINQ7Nt0e/q2C1/%2b5VtEKldag56zXHsAvSrzmqKmh0UhBiWOjxmt3bubIKw/Lx4mUm4rcI8BreFsBkIz8vCVQaaCHxqfz4HixDOdpHnh/D49%2bvE9RjJ6d/Fn/UQ80HvhU58DRBlZuqmLVpmpWbqpi54G6dn2EMTDcSHK3UJK6hpDcNZS49ECP22dgt9l55YY1HN3Vtvn0f5U27iLSrxIDf5yhpCKU6lrHBvYV//c9SpcsUCONGqAHsF%2bNYK7gWT9pp6cBlgODlQbKzQrlx8f7K55NL6ivvslKp3%2bsIK%2b4XlGctx5KY%2brl7j9jnV/cxJKV5SxZVcGytRWUVXrHMr67mIP0pOWEk9kvgsx%2bEQSGu38/x7qvj/LZ09sVxTCFh3D26w%2bhNXnHioe3sdkkjh6PwWpre9Vvt1nJe%2bYe6g/uViOVlcj3KK%2bYVOZNd8BbgReUBgky69j84iCSo31yvLNPeP/HfK5%2bbrOiGFFhevZ8nUNwgGs3pFltdjbvqmXhT2V8/VM5G3fWtOt3%2bEqFxfmRNTCKrIGRpHQPRevizbqNdc3MmrCS6lLHT6gAdP/XFOIG91EpK%2bFkqmv9KakIcehrm4oLODTzNmyNDWqkcgvy4CCP5y3bdTsCnwKKy%2be3bu7K4C7iGZwn65oUyLKtJeQVO/7DWFtvw2q1c94Ax14Q2qLJYmfxynIenX2EqQ/s4%2bUPCvhpfZUYVKSC%2bupmjuyoZOPSfFZ/nsfxw7XodBpCY/zQuGAFb%2bmcvez9tVRRjJBOKWRPG63WQBrhFAwGC/UNJqy2tt/WtP6B6IJCqdm6To1UBgMfAcq6RbmAN3xHSsBS4DylgUbnxrDgLp%2ba5uizNu6vpM/tq7EpePts0Ets%2b7wnGUnqN1yx2uz8sqWaBd%2bW8OE3JRSXt70/ueA4vwAdWblRdBsSQ0a/CLQ69V/KSo/V8dykVTRbHF/NlSSJAbP%2bTXBGRxUzE06lsUlPQXEUjr5q5M%2bdRdX6lWqkshwYBg6n4hLesAIwHbhNaZAOESa%2bebAPfgZv%2bCMLsWEmDhXVs/mg4xuvrDY4nN/I%2bIsiVctrzdZqHn3zKNc%2bsJdXPypk7bYa6hq84nGfT2luslGwv5rNywpY8%2bURSvPrCQg1EByp3pHeTx7fRtHhWkUxOgwbQOJFirctCa2k09potulosjh25NSc1YPqX1dgq3esedYfJAOHAWXPMp3M01cA4oDfgFAlQTSSxLLHxJE/b3O8opGMG36iqk7ZxrnFr2dzQa7j30KVNVY%2bXlLM658UsnmXshuC4FxRSf7kXBBP31EdFPUd2LehlDkz1ivKRedn4uw3HsQY2r67U7qakg2BAHV7t5P3wv1qHA2sBDoDx5QGchZPfzv8LqB4huO9Y9O49rwEFdIRXCnApEMClm1R9gx2484arhsd0%2bYpjxt21PDw60eYfP9ePl9WSmGJWOb3dLWVFvZtKGXVgsMUHqjBL1BPWKy5TY/fbVY77967iZoKZXs40ieMJLJXZ0UxhLaTJJA0duobHFsN0odHYW9qpH7/TqWpmIAk4BOlgZzFkwuAC4FHlQbJSQtm/u09xIhfL9U3I4SPfy6grNrxm29JeTMRIXr6dTtz%2b4jGJhvzFxYz6d49PDb7KBt21GBp9ujHeMJJ2Gx2jh%2bqYePSfH5bUYTeqCG6Y0CrNg6u%2bjyPjUvzFV3fHBNB99snI2k9sBlFO2AwWKhr8HNoQyCAOaMrtTs20lxRpjSVbGAjsEdpIGfw1ALAH/gGULSF28%2bg5ftH%2b4oRv15Mq5HoEG7i45XKWgSv3VbN1MujMZtO/i1fVWPljQWFjLtzN/O/LqaoTLzb9xU15U3sWFnE2oVHaWqwEpsaiN548u%2bDuioL7/1nM5ZGZcu/XW%2bZSGBSnKIYguMkQK9rpqbOsePekkaDOS2bitXfg03xfI3%2bwBzA415UPLUAmAlcpDjIxEwu7uv%2bZjCCMlkJAfyyq5z9hY5vzGlotFFbZ2PE2X/eC3DwWAMPvZ7H1ffsZeGPZVTVipHCvqqpwcqBzeX88kUeFcfriUzwx/yXNwdfv7qbg1uUnd4K75ZJ5qRLFMUQlNPrrDRajA7NCQDQBgQhIVG3e6vSVEKRG9ktUxpIbZ64Lt4Z2AQomhzSPTmIX5/LRS%2b6/fmEHUdq6H7LzzRbHV%2bO12okNn7SnW4Z/uw/0sAjbxzh/UXFWG2%2btcQfEBBAREQEkZGRhIeHExgYiNFoxGyW3w3p9Xry8/OprJSHoAQHBxMXF4fFIr9Bqauro7GxkerqakpKSiguLqa0tJSamhq3/ZmcQaOV6HleLMOmpBEW68fxQzW8MGU1NgXfY5JGQ%2b6L94p3/x6iqVlP/nHHjwXabVYOP3kHDUcOKE2lGcgBFFcTavK0u6ME/AzkKgmi00qsfWYgvVLF7ltfctOb23l10WFFMQb2CCQ7xcy8r4q88tl%2bcHAwycnJdOzYkY4dO5KcnExycjJJSUlEREQQHh6O0eic9rmNjY2UlpZSUlLC4cOHOXjwIAcPHuTQoUP/%2b3yiqPAmWp1E74viKTpcq/jdf9KIIWRfP1alzAQ1lJSHUu3gowCAhsN7OfT0nWqcClgBDMGDegN4WgEwEXnnvyJ3XZHKk9d490hY4e/KayykX/8TpdW%2b32FPr9eTnp5OTk4OnTt3Jjs7m969exMbG%2bvu1E6rvLyc7du3s2HDBnbs2MH27dvZtGkTdXWKz1V7PH2AmbPfeAhDUNvn0wvOY7VqOXI8Crvd8Q2ZRZ/OpWzZV2qkcxXwoRqB1OBJBUAAUNDy2WHJ0Wa2vXwW/qfY7CV4t5cWHuLWOTvcnYaqJEkiMzOTgQMHMmjQIPr160dGRgY6nWPPLj1Nc3Mze/bsYe3ataxcuZLVq1eza9cud6eluuzrxpI0coi70xBOorwqiIpqx4fI2poaOfjYLViKC5WmUg3EAh7RUMSTCoAvgEuVBJAk%2bPaRvgzr7thsaMHzNVvt9LptJdsOV7s7FYdpNBp69%2b7NOeecQ25uLgMGDCAion19z5aUlLB69WpWrVrFDz/8wIYNG7CpM5PdLQISYhj00n1IWvHGwxPZ7BJHCx1vDgRQt3sreS8%2bgArTvb4ELlMaRA2eUgBkAdtRmM%2b08xOYc1NXdTISPNayLaUM%2b89ad6fRJuHh4QwdOpRhw4YxcuRI4uLEJrE/Kikp4YcffuD7779n4cKFFBQoO/bpan0euomIXtnuTkM4jaqaAEorle0LK5j3ApVrflCaih3ohtzl1q08pQDYACie0jOkazivXN%2bZzoniGZyvu%2bSxDXy17ri70zitzMxMxowZw6hRo%2bjduzcajWgK0xpWq5X169ezcOFCFixYwJ49HtlD5X%2bi%2b3Wj1303uDsN4Qzsdomjx6Nptjq2StNYkMfxj2ZTt2ebGumsA/qpEUgJTygAzkGenKQKnVbihgsSefiqDMICFZ0kFDzY/sI6Ov9zBY0KJrU5Q1JSEpdccgljxoxh0KBB7k7HJ2zfvp0FCxbw4YcfelwxoNHpGPTy/fjHR7k7FaEVqmr9Ka1oW385a20NJV9/QMWKJdiVNwX6o2G4uTeAuwsADbAeFfr9/1VogJ4Hx6fzz4uS0IleAD7pzv/bxazPFZ/PVSwqKoqJEycybtw4evfu7e50fNqvv/7KRx99xPz58ykuLnZ3OqRcfh6Zkz3ica7QCnbgaGFM61YB7HYq1/5I0WfvYK1xyvHW9UBf3Hgs0N13xknAPGdeoEtSIM9PyxIbA32MxWrniQX7eOiDvW756dFoNAwdOpSJEycyZswY/Pz83JBF%2b9XU1MTSpUuZP38%2bn3/%2bOVarezo4drx4KJnXXIpG7xsnNtqD6lozJRWnnw5au2sLRQvm0pivrO9IK7j1WKA7CwATsBtIdMXFLu0fzTPXZpEa43hDCMEzrNpZztSXtrL7mOtP0sTGxnLttdcydepUkpOTXX594e8OHDjA3Llzeeedd9yyeTAgIYYuN19NaKcUl19bcMzR49FYTtIi2FJcSNFn71C9ZY2rUjkEdAIaXXXBP3JnAXA38IQrL6jXSvzjoiQenZBBkFlU7N6m2WrnsU/28djH%2b1zevrd79%2b7ceOONTJo0CZPJsTGjgnNZLBa%2b/PJLnnnmGdatW%2bfSa0saDcmXDSPj6lHiKKAXqKnzp7j8970AtsYGyr77gtJvP8ducXmjsTuAZ119UXBfARAG7EfhtD9HRQQZuP/KNG4akSTGBHuJQ0X1XP3sZlbtVNaqta1yc3O56667GDlyJFJbhsoLbrVy5UqeevJxFn2zBLvyc9utFpzRke63T8Y/TmwK9GgtJwIszRoq1/5I8RfzaK5y7WvLH5QDqS2fXcpdr2hPAXe66dr/0zstmBevy2Zgp9M/DxLc6%2b3vj3Lr7O3UNLjmOa9Wq%2bXqq6/mjjvuoEuXLi65puAc27ZuYdaTD/DBJ19jtbrmxIjOz0T29VcSP9Ttp7yE0zi2KZ89b39Ew%2bF97k4F4HHgPldf1B0FQCywD/CIh/GSBOPPjuOpazrRIUIs7XqSsmoL1726jc9WK26/2SoajYYrr7ySBx98kMxMMUvCl%2bzatoKHHnqIBV/%2biM1Fj49iz8qh841XofcXG0Q9SUNJBbvnfUH%2bivVqdPVTSy3yKoBLm5u442HVkyic9qe2bYereXNJHjY79M0IRq8VDVvcbfOBKoY9sI7VLlryHzZsGAsWLOCmm25qd21524OI6CRGXzGK0RdlU1xSzs7deU6/Zk1eAYWrNxHeNQNjSJDTryecnrXJwoFPl7J51lyq9h9xdzp/ZQB0wFJXXtTVKwBJyDv/nTOvVAUdIkzMvDqTiefEIx75use7y49xw2u/Ud/k/CX/YcOG8dRTT9Grl%2bJGlII3sNVB7TbWb9jEXQ/OZvmKTU6/pNZkoMs/JxA3uI/TryWcXNG6beyY8wn1x0vdncrpNAAZgMuqE1ff4t4Gprj4mg7pmxHCi9Oz6Z/pln2K7VKz1c797%2b3hqc/2O/1a/v7%2bvPbaa0yaNMnp1xI8jL0Z6rZCcyVffbOKCdMfp6a23umXTRg%2biOzrx6LxkSmP3qDqwBF2zllA2XaPeM7fGrOB6111MVcWAKnALuRlDodoJAmbC5/ZaCSJCUPimDWlE9EhHrto4RPyyxoY8%2bQmVu9y7pK/VqvlsssuY/78%2beI4X7tmg7odYCmmqcnCdbc9y/sfL6PZyQ2FQrNT6XnXNIyhyobSCKdnqa5l70ffkLfoJ%2byunDIpSUr3FViAdMDpHYjAtXsAZgGK%2bqQ%2bOqIbZ6VFsuZQiUvOgduBrYeqeWNxHk3NdgZ0ChVthZ1g/b5Kzrl3LTuP1jjtGpIkMWnSJJYuXcqUKVPQiXdh7ZwE%2bkiwN6GljktHDOK6ySMpPF7KbzsPOe2qDcXl5K9YT3jXTIxhoghQm91q5fCin9g4803Kt%2b913SY/jQ5t77FoU/pjy9uoJJIW%2bRH5InUSOz1X3c0SkHf%2bGxwNEBNkYv8DF2M2aNlbXM19X29lwSbnb%2bT5o/Q4f2ZOzGBMbqxLr%2bvLlmwsZuxTm6iub3baNVJTU5k9ezZDhw512jUEL9ZwABp/f8O1cs02pt/yLLv2OO/1RWsy0OOOqUT1FePL1VK6ZRc75iygJs%2b13SA1yX3RnX8HUmQKWOppeuUS7LVlSkI2Iq%2bYH1Mnw1Nz1QrAk0B/JQFmjuzOoNRIAML9jYzpmchZqVFsPFJGUY1ruiiWVVtYsKqQlTvK6JUaTJR4LKDI7KV5XP3cFhqanLNEp9PpuOmmm/j000/FsT7h1HShIGmhWX78lNghmmkTL0Kn0/LLuu1O6R9gb7ZSuHIj%2bkAzIRkdVY/fntQeK2LrC/PY%2b/5Cmiqdt4r4V1JYIvqLH0I35EYk/5ZeMlo9SBK2A4paCeuQ781LlGd5eq5YAYhF7vrn8GHYuGA/9j0wCj/93%2buVZpudt9fs576FWympdV07ZZ1W4tphCcycmEFEkMMLG%2b2S3Q4Pf7SXhz/c67Rr9OjRg7feeoucnBynXUPwMY150PDnDahbtx9g%2bi3PsG7DLqddNmnUOWRNGy06TbaRpbaeA58u5dB/l2Nrdt4K4t%2bYAtENnIy231XyDf%2bvmptoevVS7NVFSq7SAKQATl3OcMUKwKPAWUoCPH1JTwYkn/xstkaSyEkIY9rAVBosVjYcKcMVfT5sdtiwv5K53x3BZNDSOy0YjWgrfEZ1jVaufHoTby5xzvKqXq/nkUce4d133yU%2bPt4p1xB8lC74TysBANFRoUyZcAF6nY6ff9nmlCZClXsOUZNXQFTfbmjEHIEzstvt5P%2bwjg2PvU7Jpp2u2%2bQnadB2vRD9lc%2bjSR0AmlP8v9JoQavHtn%2bVkqvpABvwnZIgZ%2bLsO1YokAcEOBogKcyfPf8ZiaGVzXl2Ha9ixucbWbLTtc%2bBOnUI4PlpWVzQK9Kl1/UmNQ1WLnlsPcu3OucsbseOHXnvvffIzfWoPlOCt2k8BA0H//bLv27czYTpM9m7/6hTLhvWOY2cB25E5ydOp5xK2bY97HjrU6oPOuf/waloknLQnf8vpOiM1n2B1ULT61dgr8hXctlq5Gm5FUqCnI6zy81/ARcoCfD8Zb3onRjW6t8fEWDk6j4dyUkIY%2b2hUsrrXTPZqaSqifd/zGfDvkr6Z4YQGnCSpaF2rKLWwvAH1/HzDucc85s4cSKLFi0iLS3NKfGFdkQXAtjAWvmnX46PjWDyhOGUllWxYfMe1S9bX1xG6eZdxAzsidYoHiv%2bUUNJOTve/ISdcz%2bjqaLKZdeVgqLRDb8T3fm3IwWEt/4LNVrQGbHt/VnJ5Y1AGbBaSZDTceYKgBE4iLwHwCFpkYHsvG8EOgeX1pusNl7/eS8PfLONqgaLo2m0mUGn4YYLE8XY4RZFlU2c/8A6thxU/wc3LCyMOXPmcPnll6seW2jn6ndB08lXEj/54kdumPE85RXVql82KCWBPg/fjCHY4YVTn2FtbOLA599x4LNvsTW57jUcvQntgEnoBk4GnYPFmK1ZXgUoV7SZ/xjyXgCnvJN15grAVGC8kgAvjc6hR7zjk/q0Gon%2bHSOY3C%2bZ6oZmNh0txxWnQq02O2v3VDBv2VECzTp6pga12w0%2bheWNDPvPOrYdUv%2bFskePHixbtoyBAweqHlsQ0IeDtRpsf%2b8S2DmrI%2bNHn8vKX7aRX6juI63G8iqKft1GdL/u6Mzt9HGA3U7h6k1sfOwNitZuxe6iSY5IEtreI9BfNgtt5uBTP%2bdvVSwNGAOw7flJSUZBwAFgs5Igp%2bKsAkADzAccnqqSFR3Ea2P7oFHhxhlo1DOqSzwjOsexo7CKI%2bV1imO2Rk2Dla9/LWLR%2bmI6JwaSGNm%2bpoIdKqpn8L1r2H2sVvXYkyZN4osvviAyUuy5EJylpVlQcwXY/37CKDjIn6uvPI%2b8o0Vs3X5A1StbqmooWruV6H7d2900wcp9h9n81Fsc/O8ymuuc36L5BE1ydwz/fAPdhTeA3QgW5V0hNdHp2LYvhfrKM//mU0sD3lCczEk4qwAYCdysJMCTF3cnpw3P/lsjLtiPKf1S6BwbzNrDpVS66LFAQVkj7yw7yva8GvpmhBDi7/v7A46VNnDOfWs5UKhusaXT6Xj88cd55pln0Ot9/%2b9RcDNJAn0EWIrlGQJ/odfruHzUWcTFhPPt8l9V7RlgqamjaN02YnN7tYuNgY1llex6%2b3N2vP4R9SWumQIKIIVEox//AIZrnkAK7yD/okaCmgYVgkvyiQBlewGigDXIzfRU5awC4FXk5xYOiQ408fZV/dA5YSyvJEHn2GCuz01Hr5VYe7iUZhfNB99xpIbZS49gsdrpn%2bm7bYWLKpsYet9a9uar%2b84/NjaWxYsXM368oidLgtA2khb0YWA5jnwy6%2b9yemRwzlk9WPzdOlUHC1lq6ijesIPYQTloTb65MdDW3MzhRT%2bx6YnZVOxSdyXltHR6dOdOwXjLHDTpffjj%2bFdJr8VeWadKK2FNVCq2zV9Ck6Lvi3DgfcXJ/IUzCoAs4BkUbDC89/xszsmIVi%2bjk9BrNQxJj%2baavsmU1DayrcBpJy3%2bxGK189NvZcxbfpSIQAPdOgb51NjhiloL5z/wK9sOq/vMv0uXLvzwww906dJF1biC0CqSHrSBYDl1c5fEDtGMHz2U5Ss2UVikqBXsnzRV1VCyqaUI8LHTAUXrtrHh0dcpWLHepc18tD2GYbz9XbQDLgP9STq6SpLc7EWNU2QaLTTVYzu8QUmUNOBjoER5Qr9zRgHwCODw4GuzQcv7kwZiNrhm93ywn57LuicwOC2azcfKOV6twrJPK1TVNfPlmuP8%2bFspPVOCiAn1/rbCVXXNnP/gr6zfp%2bh5198MGzaMJUuWEB3t3KJQEE5L4ydv7Go%2b9fJ0UKCZCWPPZfO2few7oF4r96aKasp%2b20vsWTlo9N5/sqjmSCFbnv8/9n%2b8GEuNa/ZkAUhx6Riufxn9JTOQ/E8/6l3S67BXqrOKqYlKx7r%2bE7A5XORIyPPpFquSUAu1C4AQ4P9QMPTnhtx0ruiRoF5GrdQx3J/rctNIjQhg9cESaptcU40eLqpn9tIj7C%2bsY2BWKAEm7/zhrmu0MuKR9aqP8506dSoffvghZrNZ1biC4BBdsLwh0HrqnvNGg56xlw3haH4xm7ep99i2obSCyt0HiTkrx2s7Blqqa9n97n/Z9uJ86vIVtcptE8k/BP3YezBMfx5NTCufTms12OuaoFmFEdF6I1QXYS/YoSRKNvAa8rAgVaj9XXQjMMrRL9ZqJN6bNJAws3uWuSRJont8KNMHpgIS6/NKXTp2%2bK1vjyJJ0Cc9xKv2B9jsdq58ehNLN6m3OiVJEjNnzmTWrFlovfTFTvBR%2bjBoLgX7qZeHtVoNl4zIRavR8OPKLapdur6olNpjx4nJ7eVVR4vtVitHv1vNxsdnU7Ztj%2bvG9Gp16AZfheHWuWizc%2bUVnDaQkLDXqrMqLEUky6sAjh9GNwKFwFpVEkLdAkBCfvffhnZJfza6RyLX57q/k5tJr2VYZgxjeyZxqKyWPUXqn2E/mQaLje%2b3lPLJqgKSo81kxPu75LpKzXhrJ/OWq7fcqdFomDNnDrfeeqtqMQVBPRLowsBSyKk2BZ4wOLc7cbERLPp2jWr3vJojhVibLET0yFInoJOVbtnFxsdnc/S71VgbXdOZFUCTPQjDrXPRDR6PZHTwKKVeB5W1Cu7Zv5P8grAf34O99JCSMMnIm%2bxVoWYBMBS4XUmAuVf1pUOI5yz1hvsbuSoniUEpkWw8Wk6xi8YOl1Zb%2bHBFPqt2lJOTFkxUsOdu/HlzSR7/eV%2b9tqharZa3336bKVOmqBZTEFQn6eU9AZbiM/7WnB4ZZKYl8NXi1dhUGlxTsfMAhqAAjx4lXJtfxPbXPmT3vC9pqnTNmygAKToZw%2bSn0F95H1KQw61oWoJJ8iOARnWOjEtB0di2fKUkRASwHDisRj5qFgBPAA5v0R6UEskDF3jmDu%2bUiACmD0wl3N/IL4dKaGx2TVeqA8frmLM0j5JqCwM6hWAyeNZS%2bKL1RUx8botq72wMBgMff/yxOOYneAetv/wYwHrmm1uX7GR6dkvji69X0qzGM2WgZNNOglI64B/vWZtjrQ2N7F%2bwlC3PvkP1IfVWBs/I5I9u5M0Yb3wNTYJ6qyOSRoO9Sp2jnVJwDPYDa7BXHVcSxgB8rkY%2bat1RIoDZyCMMHfLiFTl0ig5SKR31nWgrPH1gKg3NVtYfKXPJYyybHdbuqWDOt/LY4T7pwap0R1Rqw75KRjyynkaLOsWQ2Wzmyy%2b/ZNQoh7eQCGsLD8IAACAASURBVILrtWI/wAkZaQnk9uvCZ1%2btoMmiwiZju52idduIzOmMMTRYeTzF6bSM6X30dYrX/%2bbaMb25V2CcMQ9tj2HK2veejE6LvboBVPrzSKZAbDsUTfnNBN4EFB%2bfUOtv6p/AhY5%2bcXJ4AK%2bO7e0Vm1rMBh0XZsdxcdd4dhZWcbhc/Ta3J1PfZGPJxmIWrCokLdZMWqz79gfklzVwzr1rKatRZ1nMbDazaNEihg0bpko8QXAdCXShLUODzvyOIDkphgF9O/PJFz%2bqshJgb7ZS/OtvxA3pg87kvqPEZb/tZdMTb5K3%2bGesDa55VAqgSe2J4aY56M6bgmRy0muiBFht6vQEAKTwJGzbFkGDw49FdMibAX9RmosaBYAEvIOCzX93nNuJwWlRKqTiOjFBfkzpn0JOQhhrDpVS4cKxw%2b%2b1jB0e0Mn1Y4ctVjsXP7aB7XmnPgbVFgaDgU8//ZTzzz9flXiC4HKS/oz9Af4oOSmGvjlZfPLlj6q0Dm6ub6Bi5wHizumLpFG/e%2brpNJRUsOPNj9n59mc0lrtwTG9YLIaJM9Ff/ShSmMMDZ1t/PV1LZ0BVgknQWIvt8HolUZJQYTOgGgXAWcAdjn6xTiMx7%2boBBJq8s697ZlQQ1%2bWmEWjSsfZQGU0umlq1J7%2bW1xfnUVLVxKDsUIx61/zg3zJ7B5%2btLlQlllar5YMPPuDSSy9VJZ4guI0uCKwVYGvdkbHU5Di6ZCfz2VcrsKlw1LihpBxrfSORvbIVx2oNa2MT%2bxcsYcusuVTuz3PJNQEw%2bKG74HqM/3wDTUoPXNZGVauRZwOo9PouhXXAuu5DFBwviACWAkeV5KFGAfAA0MvRLx7VpUPLuXvvpddqGJQSyTX9kqlpdMPY4eXHCPTTOn3s8Ps/5nPPu7tViaXRaJg/fz7jxo1TJZ4guJcEuhCwtO5RAECnjERSkmL57zerVNlPVLH7IOboCIKSOygPdionxvTOdMOY3r4jMd76Dto%2bI0DnhpNRdjvUqfQYwOiPvWAH9jJFxVMzsEhJAKUFgB8wF3B4VNWzl/UkIypQYRqeIdAkjx2%2bqHMs2wsqOVLhmhaX1fXNfP1rEYs3FNM5KZCECPXHh246UMWlMzfQbFX%2bSiVJErNnz%2baaa65RITNB8BCSHiSdvCmwlbp1SSU2OpxFS9eokkLJ5p1E9e2GMUT919TKfXlsnjWXg18uo1nFgUdnounY7X9jeiWz%2bzaKywOC1NvzJRnM8qhgx6UDLyIXAg5RWgBcCVzl6Bd3CDHzypjeHrGrXU3xwWau7Z9K59hg1hwupcpFY4fzyxp553t57HC/zBCCVRo7XFZtYdh/1lFcpU71O3PmTNHkR/BN2iB5L4C99RvhcnpkoNFo%2bOHnzYovb2%2b2UrplF/FD%2b6FRaVx2Y/mJMb0fUl%2bs3pCjM5FCon4f0xvh%2bvbwf6NRsTUwIIV2wLb5K2hyuKgwAVuB7Y4GUFoAPAs4vH4/45xMhjp56p%2b7nBg7fF1uGnqtxuVjh%2bd8e4SmZnXGDk95aSsrd6jT4//aa6/lmWeeUSWW4JjKykoWLVrE0qVLWbNmDQUFBcTFxWEy%2bf7MeZfQBkFTfpu%2bZHBudw7nHVdldoClupa6gmJiB%2bUoimO3Wt0zplerQzdsCsZb3moZ0%2bvajY2nZbVDnUqnHCQN9oZK7HmblETxBz5wOAUFF45H7kbkUBGh1UgcePBiEkM9p/OfMx0pr%2bO%2br7cw/1dFbSDbLCHCxGNXZzJpaLxDXz/3uyNMe3mbKrkMGTKEpUuXYjB4bmdDX1ZaWsq9997LvHnzaGz884uY0Whk8uTJzJw5k/Bwhw/0CCc07IfGtj3ftViaGTH2Hr77QdHY2P/pfvtk4ob0dehr/5%2b9Mw%2bPqjz78H3OzGTfE5YECEvYIQiIAqIIIgoIAoKAqOBa8fNzb23totX2q7baWpeqrYpFFAEFEaQioCiLsgjIvkMgQEIWSMg%2b2/n%2biFDUBCbv%2b56ZzMy5r6tXr8K8z3lKJuc859l%2bBeu3sevND6nMv/CmQ5XYel6N4%2ban0Zq29ut1fcbtwZtToGQ1MIBRchznP8aAIdxL4QZaUTsW2GBkAoBHAeFXuRFdM1g87UqJywcnK/ad4KF5m9h6vMSv1x2cncrf7%2b5Kjza%2b1wYP5FfS68HVlFXJLy3p2rUra9asISnp/BKcFuawZ88ehg4dSm5u7nk/l56ezrJly%2bjWrZufPAtRDA%2bUr/d5KuAMp8squWLYA2zdIf/GbYuKZMDfHyc2w/cR64qj%2bex6ax6FG4WzykJo6e1xTH4SW4%2br/HpdEYwjRRiKVgMDuGbdh/eglL7PA8DLIgdlAoD1wCWihz%2b66wrG9DCxW7UR4zUM3t2Qwy8%2b/o6CMjVKU76gaxo3D8rg%2bTu6XFBfwOUxuPyX37B%2br3ygkp6ezrp162jVqhHU8cKQI0eO0K9fP/Ly8nz6fHp6OmvXriUzM9Nkz0IcdzFUbG3wscO5J%2bh39X3kn5Cvtyd3bkffZx5Bs50/je4qq2Df7P9w5D9f%2ba%2bzH9BiE7GPeQT7kNvAFhxS6EZxOcZJddoG3l3Lcc37lYyJNcDlIgdFewDaAc8iGEA0T4jitQmXYNNDq/nPV87IDt/Vv1Z2eMPhYjx%2b2Ct8Rnb4rWW1b4GXdkyq92fw5Kx9zF7ZsDpmXTgcDhYtWkR2dra0LYuGU1ZWxjXXXMP%2b/b7XlsvLy1m6dCm33HKL1Rcggx5TqxPgbVjHfFJiHAP6dmfmnKXSi4Kqi06h6Rop2R3r/HvD4%2bXosjVseuZfnNwaKJney8HPC4yksGmgaikQoKW0wrv5I3AJT1a0AmYADX5bEw0A7gWGCJ5l2oD2DOuaIXo8ZIg%2bIzvcO5ODRRXsK/ST7LCzVnb4g9V5tG0eQ8eMH67QXLPrFHe9vE3JveDll19m/Pjx8oYsGozH42HChAmsXLmywWcLCwv57rvvmDRpEnow3ZwbG/b4BjcEArRq0YTE%2bFiWLF8v7cKpXQdI69WFqLTkH/x58ZY9bPrTPwMg0zuAiAenfy/TG3w9YJrdhqFwKRC6DaOsEOOYcK%2bVBhwDvm7oQdEA4B%2bAcPv%2bS%2bMvJiNR/ax6sJIWG8nNfdpwebsmbMz1r%2bzwrK9qZYf7dEikSWIENS4vI5/%2bloJS%2bRvCLbfcwjPPPKPAUwsRHnzwQd59913h8/v37yc/P98SaJJBc/isGPhj%2bvbpomYywDA4tesgra4ZgGbTqcwrZHtAZHrbqJPpDTRuL1QrDJqi4vB%2b97GMhVRqBfkahEgOvguwU%2bAcAFlpcex/wrqh1IfL4%2bXVVft48tNtlFb5Z38AgMOmce%2bI1kTYdZ7/SL4B6aKLLuLrr78mJib4IvxQ4KWXXlK2a%2bGll17i/vvvV2IrLDFcULYWjIY301ZV13D5tQ%2bwacs%2baTeybhyGZrdx8MPP8KpQI/SVyBjsw6fhGHV/YDb4mUG1E2%2bu7wufLoyB85XRGCVSZdcOQIOiRZEMwDRAuFXz3ss7MCREZ/9VEGjZ4a93y8/7p6SksGLFCpo0aaLAM4uGsmTJEm677Ta8iuRLly5dSs%2bePenUqZMSe2GH9v1t1kexoHNx2O1cPehi3pm9lGrJNP2pnfs5uX2fH2V6NWwDxhP58L%2bx9RyqXqY3kNh0KKlU2DOh1ZYBjm6RMXKUBpYBRIp7UsotE3pZncW%2bkBobyYvjLmb9o9dyRVZwPUhfe%2b012rRpE2g3wpIdO3YwadIk3G51b3gej4dbbrmFLVukbk7hTWQr0MUaKrPaZvDmy8J6awFBb9eTyN8tJOJnL6IlBpfSq09oGsSqzWbYug6VNTG2oQcaGgC0REL4p1PTBC5qYc2BN4TerZJZ%2beDVLPzZQNqkmKR3rZA777yTCRMmBNqNsCQ/P58RI0ZQWlqq3HZZWRkjRozg6FEp8bEwRodI8eU2464fyNSbrlXojzloyc2J%2bNmLRD7xCXqW8KMiKNBi1E7IaOld0FKkXpD7UfuM9pmGBgA3ILE7YGJv6%2b1flFHdW7Dj19fx5PDuxEQ0zlRahw4d%2bPvf/x5oN8KSqqoqxowZw5Ej5kmzHj9%2bnNGjR1NRoU4QJayISAddvPn55efuJ6ttI52eiojGPuYRov6yGtuA8f6T6Q0ksZHKTepdrpY5rgENarBraABgpf8DSEyEjd8Pz2bXb0YysXdmo/ods9vtvPPOO8TFxQXalbDD6/Vy8803s26d1DYxn9i0aRNTpkxR1l8QXmhSWYD4uBjef%2bt3OByNaGGOpmHrez1Rz36FY%2byjEBFG0102HS1SjeDSWZNdpQIAaGAZoCGvkinUrhsUGgrulp7I74dby2BUkBjtYHzPTIZ0as6WY6fIO%2b2/bYL18fTTTzN5srAwpIUEv/zlL3nrrbf8dr1du3ZRXV3N0KHSNcvwwxYHrhNCEwEALdLTMAyDL1fLKwfKorfJrpXpHXZPQGV6A4rbA1XqxgG1uFS8O5ZClfAG1kxqn9M%2bPRQaEgCMAW4U8Qjg/oEdubJ9CDaDBJDM5FjuviyLzOQY1h0upsLpx9Gec%2bjZsyczZsywFsYEgOnTp/PLX/7S79dds2YNzZs3p0%2bfPn6/dnCj1U4FuIuELQzo153/LF1HXr7KMTTf0RKbEHHz0zimPoOWFp7r3M%2bgaRrGaeENfnViVJ7COLJJ9LgN2ISPo/oNCQAeAy4S8QjgHxMuoUmc%2bppJuKNpGr1bpXDvFR1w2HTW5hTh8ZPsMNSm/j/55BNatBBTG7QQ56uvvmLSpEl4PGr0yRvK0qVL6d%2b/P%2b3atQvI9YMWWxy48oWzALqu07dPF96a%2bal/SzHfy/RGPPAmevuLw6POfyHsOobScUDQ4tPwfDtXxkQ54NNWIV9f2XRgmKg32RlJdGkWpikiPxEbYef3w7PZ9vgIRnX338P4scceo1evXn67nkUtu3fvZuzYsTid/lvh%2bmNcLhfjxo1j%2b/btAfMhONFqxwIluKh7Fg//j/9WbNt6DSXqmS9x3PI0WrTviqIhj6ahRavtA9BS26ClSQXVw/GxWd/XAOBSQHgYfYS1999vdGgSz8KfDeSz/xlM1%2baJpl6rU6dO/O53vzP1GhY/pbi4mFGjRnHqlPzSJllOnz7N9ddfT0FBQaBdCS4c6bVrgiX4/eNTad/O3GBfa9GRyF/MIuKhf6M1a2vqtYKWaBOmAdpfJnO8OeDTW5mvAcBwcV9geNd0meMWAlzTuTlbfjWcF8ddTEqM%2bvWbmqbx6quvWmpxfsbpdDJ%2b/PgGqfuZzaFDh7jhhhuorg58M2rQoNkgQu7FKDoqkjdeehTNhFS8FpuE45anifrDMvTuVyq3H1JEq7%2b/6llSAQDACJ%2bu46Mx4QAgIcrBZW2DXPghSLHrGg9c2ZH9T4zigSs7Ylcov3zLLbdw1VXCG6EtBDAMg9tvv50vv/xSib20iGjSFI1trVmzhjvvvBPDX3KyoUBkSwSHqs4y6PKeTBw7WI0/AJpeu7732a%2bwD70TbI1o5LCRokU50GxqgzA9sydESOmo%2bPTM9qUJMAl4AcFv6nXdWnDTxeKzrxbyRDtsDO%2bawdgeLdl6vJTcU3Ja1jabjU8//dSa%2bfczTz31FK%2b88ooSWxG6jYX9x3Nzq268l7sDj4IH97ZttXKmgwYNkrYVFmg2MKrAUy5l5or%2b2bzw6ofSwZfe8VIiHpmBffCtQSnTG1CqXaByCku3YRzdhnHysKiFdOBF4LzSsr481K9CXDaYYV2s9H9jQVUz5qRJk2jevLkCjyx8Zc6cOTz99NNKbGnAm72GMygtkwGpLXmnzyjx9Z4/4umnn2bmzJmKrIUBEXLNgADNmiYzfrR8ml5v2Rm9ZWdpO2GJGWUAuT4AOzDwgtfwwdAQGS%2butQKARsOBonJmrD8kZSM2NpY333xTkUcWvrB69WqmTp2qLL3%2bROfLuTWz%2b9n/PaFFZ57ofLkS24ZhcNdddykrU4Q8tjiwyQfl77z%2bOHFxcuUc91ezMArNWyUd0pjRCCjfB3DBZ7epAUD39EQyk61UUmPhqU%2b34fLIzQ1Pnz7davzzI4cOHWLcuHHU1Jw3k%2bczE1p05skuP33YP9nlcm5p1U3JNc40Ku7bJ69hHxZINgMCRETY%2beffH5Ez4nHjWvSStC/hiBZpV94HoCVloKVKqapecK/whQKAFoCwCPhwa/yv0XCwuJxZG4XrSQBcffXVltKfHzl9%2bjSjRo1SNmI3ILUlMy4eWWe6XwPe6j2CQWlq9Doa06hio8fRDDT5ZrvJ44cweKDcTg7P6g8wiizFRxGMyEY3DdCN2pHA%2bu1fwIBUm7dV/288vLBij9SGQE3T%2bNOf/qTQI4vz4XK5uOGGG9ixY4cSe21jkpjf9waiztPVHaHb%2bLDvWDrEJSu55p49exgzZkxAlxUFBZoODjU9Nc89fY/cWKDHjXuZ/3QlQgktSu1CIJDuA9CA846IXCgAuGATQX3ERdoZ0E54d5CFQk5VOvn3uoNSNsaOHcsll1yiyCOLC3H//ffz%2beefK7GVYI9kYf9xNPWhszs1IpqF/caT7FBT5lm5ciXTpk1TYiukiVSz0Ofinh0ZNay/lA33l7MwKk8r8SesMKMRsHVv2XHAK85r/wKHhTuDhnRsTqTdEodpDLy6eh/lNeIjKrqu88QTTyj0yOJ8PPvss/zzn/9UYsuh68zrO5buCb4H453jU1nQbxwRuvDwzw94%2b%2b23%2bfOf/6zEVsiixyhpBgT44%2b/uQJfZ%2bVFdjmeFNcnRYKLUBwDYItAze8tYEA4A0pCo/w/p1Ez0qIVCatxe/rFSrhlr4sSJXHSRsA6URQOYP38%2bv/nNb5TZe6nHUK5u2vBGooFprXi957XK/Hj88ceZPXu2MnshSYSae2Z213aMu144eQuAe%2blb4HYp8Sdc0HQNLcKEMkBbqcxrNyClXtvnOXgFPgoK1MXALEv6tzHw3rc55EnIVdpsNuvt309s3LiRKVOmKFN4%2b2XHfkxrK94UdnvrHjzWoZ8SXwzD4I477mDt2rVK7IUkjmZI3HJ/wB9/eyc2m3gG1ig5gWftAiW%2bhBVm9AFkSjV2akC9jQQXCgCESI6JIDvDXCEaC994YcVuqfO33HILnTtby0HM5tixY4wePZqKigol9m7I6MSfusovh3m2%2byAmNVMzHlhVVcXYsWM5csSaNa8TzQH2el/WGkTH9i2ZNE5uVbd7iZoyVDhhRiOg1rwzREptXa33WX6%2bAGCA6NUub9cE3dKKDjirDhSyPa9U%2bLymaTzyiORsscUFKSsr47rrruPYsWNK7PVOas47fUYq%2bR3UgOmXDKdvrPzGOoD8/HyGDx9Oaan49zKkUVQGAPjlQ5OkJgK8ubvw7t%2bozJ9wwDAhAEDT0Vv2kLFQby9ffQFAJCBc9L2yvZX%2bbwy88bWcYtywYcPo0UPqi2dxATweDzfffDNbtmxRYi8jKo6P%2b40j1qbuRhTtsLOgx0QyI5KU2Nu5cyeTJk3C7Va4Oz1UsKfVagQoILtrO64eJNVAhvvL95T4Ei5oEQ5VVZwfoLeW%2bjn2BursUKwvALiI2iBAiIHtrfG/QFNS5WTellwpG48%2b%2bqgibyzq46GHHmLRokVKbMXbI/j0sgm0jI5XYu9cmqdFsChrKvG6mpWnS5Ys4eGHH1ZiK6TQbLVBgCIe/V%2b5xV2edR9bI4ENQcOURkBNbhIgCsiu6y/qCwD6Cl/JYaNnCzWLRCzEmbkhh0qnR/h8jx49LLlfk5k/f74ydT%2bbpvFun1H0SDQp%2b2b30iM5lbltJ2PX1Iz3vvLKK7z88stKbIUUDnUBwLVDLqFndntxA85qPGs/VuZPOGBGGUBP7ww2qTHDS%2bu0W8%2bHhecO%2brRKwSHRfWqhhunfyC3%2b%2bcUvfiG3UczivNTU1HDfffcps/dC9tVcn95Bmb06SXAxLKEjf2txnTKTDz/8MIsXL1ZmLySwpyKovl4nD/3POKnznhXvKPIkPDAjA4AtAr258FQ%2b1PNMr%2b9bVme04Av92qSKHrVQxNqcIr47Jr6DPSMjg4kTJyr0yOLHLFiwgPz8fCW27s%2b6mPuzLlZi67xEu8Hh4f4ml3F/E2mlMqC2B%2bKmm25S1gMREmg2sKvptwC4adwQ0puL35e9R3bizdmqzJ9QR4uU13Wo026LOrP4vuJzBiABEH6VuLS1FQAEmrfXykn%2b3n777TgcJkSxFmdZtWqVEjsjmmfxQvYFRb8UYUB87XKYF1pcx4gEqTeSs5SVlTFq1Cjy8vKU2AsJFJYBIiLs3DZZbqmTZ6W1xMlnohxgQvZUb9H9wh%2bqny7AT5qD6goAetXz5z7Rr426L65Fw3F5vFLNf5qmcfvttyv0yKIujh8/Lm2jW0Ias/pcj82fpZo4J2hg03Rmt7mJi6LVCH7l5uYycuRIZXsQgh6FjYAAd025Tmo9sGf9J%2bCxpjZ8QtPAoWaS4wdm5QIAHfjJSFddD3rhua/0hGhaJUsJF1hIsnzPCYorxLXjhw4dSlZWlkKPLOoiKkpObCc9Ko5PL5tAokNNV77P6AbE16r7xdsiWdRuKukONVMHmzZt4tZbb1W2CTGo0SOVaQMAtGuTzqDLewqfN8qK8e6xtjj6ihahvgygJWWgxUotivrJF6CuAED4W3JxppotVhbizNl0WOr83XffrcgTi/PRrZv4dr0Ym4OF/cbTKlrdA6JBxNcAtdLSrSISWdhuCjG6mpLRRx99xK9%2b9SsltoIeRVsBz3D3VLnmTc%2b6hYo8CQNMCADg%2b62A4vxkt4/SAKBXS2v8L5A4PV4WbhffJpeWlsaoUaMUemRRH%2bPHjxeastCAt3qPoE%2byGv14IRze2obA7%2bkT05KZrSeiK9qA8txzz/H6668rsRXU2NXeT28YNZAmaeLNhZ4Nn1gCQb5iWgAg1XdzwQDADnQVtW4FAIFl6a48TlU6hc9PnTqVyEg/p5TDlE6dOjF27NgGn3u2%2byAmtexigkcNJOGHD4IbkrrxTMYwZeYfeOABPv/8c2X2ghJ7grKtgFDbDDh5/BDh80ZFKZ5dq5X5E9KYFABIjgJmAz/4Qv04AOhM7dYgIXq2UDe6YtFwZm%2bSE1mZPHmyIk8sfOHll18mMzPT58/f07anMnU%2baaJcYP9hrf6xZgO5M7WPEvMul4vx48eza9cuJfaCEx1sau%2bpN42XW%2b5llQF8Q4uwmzIJoDWTCgCi%2bdGE348DAOE2w%2bSYCNqkSCkWWUjg8nj5ZId4%2bj8rK4veveX2hls0jIyMDJa/N5euiedfna0Bj7S/lNd6qnvDlkbjbDPgubzWagxD4tU0kZaUlDBy5EgKCwuV2AtKFJcBLr24M20yxctH3k1LwSu%2bYTRs0DSwmTAJkNJSVhnwB81HdWUAhLioRZIZAY%2bFj3x9qIjSKvH6nLX4JwCUVdLh/VVsvHIqz3QbROuYH0po2zSN4c3aseKKyfw1%2byozNEbkiK8BzfjBHzk0Gx%2b0vZnOUWr0QA4ePMjYsWOprq5WYi/oUBwAaJrGhLGDhM8bFSV4D2xW6FHookWqDwBAQ28qsdq5dh/AWX4cAAjX/7unW%2bn/QLJkl9wSFSsA8DNuDzz3HuQVE2Wz86uO/ci59l4OX/s/fDv4NjYMuo2SkQ/zn8smcGWa72UCv6IDsT8NOpNt0XzSbipN7LFKLrNmzRruvPNODMO48IdDDVscaGqXck28YbDUec%2b2FYo8CXHMagRs0k7m%2bHkDAOHuoq7NAzSSZAHApzvFF8t06tTJkv31J4YB/5gH23%2bq15AZk8DFSc3pk9ycOLuU%2bId/SHByZiTwXLIiU/mo3a1E6WpugrNmzeKpp55SYivosCde%2bDMNoPdFHeiQ1VL4vHerFQD4hCO4AgAbIJxb6NZc7ZfUwneOl1ax9XiJ8PkJE%2bQkQy0ayNzP4asQSaNGeCCq7prwgNjWzMi8EU1R8eLpp59m5syZSmwFFQoXAp3hxjFXCp/15mzDKA3jvgwf0UzYBgigpUkFAJ0457l/bgDQDokJgK7pVgAQKJbsykMmOzpy5Eh1zlicnzVbYe4XgfZCLQn1b56ckNyDJ5qrkZU2DIO77rqLFSvC7A3Upv7eet01EtMkhhfv9q/UOROqNM4MQAxwtqZ4bgDQUdRi0/go0mKt%2bfFAIZP%2bT0tLo08fNaNbFhdg92F46QOkorXGSIznJyOB5/Jk%2bhBuTeml5FJOp5Mbb7yRffv2KbEXFNjiQXELaN8%2bXUhJFl/h7LHKABfGbjNnFDAuDeS2gJ6dJfxxBkCILs2s%2bn%2bgMAz4Yu8J4fPXXnstuq5Oe9yiHk6cgj%2b/C65QFFT5r0pgXWhovJk5jkFxUm8uZykuLmbUqFGcOiUueR1UaLbaZkCF2Gw6QweLB/7eHatCL5BVjQbYzLm36mltZY6f/UU81zvh4d0OTdSIgVg0nJ35pZyU2P43fPhwhd5Y1EllDTwzA0rLA%2b2JecQ7fzISeC4Rmo0P295Mh0g1Knd79uxhzJgxOJ3i3/2gwoQ%2bgGFXXyJ81igrxjghJzseFkSY1AeQ3ErmuNoAICvNWgAUKNYcEm/G0XWdoUOHKvTG4id4PPCXmXBEPEsTFOheiD1/diPVHsPCdlNItkUrueTKlSuZNm2aEluNHpv6l6xhQy4V0qM4g3fveoXehCaa3aQ%2bgGTxKQ7OedYrCQDaWxmAgPH1wSLhs3369KFp06YKvQkfPB4PCxYs4KabbiI7O5usrCz69u3LI488wo4dO/77wTcWwdYDgXPUnyRceFlP56gmfNj2ZhyKdty//fbb/PnPf1Ziq1GjuAQA0LxZCj2zxZfKePZtUOhNiGJWBiBFbQZAA9qIWmvfxMoABIrVB8UzAFddpaY7O9zYuXMnffv2ZezYscyePZvt27dz8OBB1q9fzwsvvEB2djb33nsvle9/BkvXBdpd/xHhrXck8Fyuis/itVZjlF3217/%2bNfPmzVNmr1Fii0V1IyDA4CuExV/xWgHAoEVzOwAAIABJREFUBdHsjbIE8JMMQDq1QgFi1qwSQEA4UVbNgSLxuvKAAQMUehMebN68mYEDB7Jx48Z6P2MYBq%2b//jojH7yHKk8oNv2dh/j6RwLP5c7UPjzWbKCSS3q9XqZMmcKGDaH8QNJBj1FudUA/YfkXjPyDGKfFM5BhgUlNgFqKVAkgDmgC/w0AhK01jY8iPlLtqkoL31gj8favaRr9%2bjUSZbkgobi4mBtuuIHi4mKfPr%2bi8DC/2vGlyV41MmJ/qhJYH89mDGNS8k8kyoWorKxk3LhxoS0cZEIZ4PJ%2b2eKHDQPv/voDYQtqRwHNICpBdhSwJfw3ABDOJ2Qmq49KLXxj3WHfHkR10alTJ9LS1HRkhwMej4eJEyeSk5PToHOvHNzIvvIwGVc7Q5xvnfkaGm9ljuOSGKm3mbPk5uYyefJkPJ4QVauzqdFWOJemTZLk1gIf2KTQm9DDMCsAALQEcVVHvn/mS2cAWiVZAUCg2HJMfP3v5ZdfrtCT0Oe3v/0tn3/%2beYPPeQ2DmbnbTfCoERPv9LlcHaM7%2bLjdFDIj1IiJLV%2b%2bnCeeeEKJrUaHCRkAgAF9JcoAuTsVehJ6aLoGujk6npIBwA8yAC1ErWSmqI9KLXxjq0QAYNX/fWfhwoVSnebrT4lvagxKbAbE%2bD6fn%2b6I59Os20m0CW8i/wHPPPMM8%2bfPV2KrUWFCDwDAgH7dLvyhevDm7lLoSYhiVh9AYjOZ4z8IAKwMQJBRVFFD3ukq4fOXXnqpQm9Cl0OHDjFlyhQpKdrCGvGfU9CS2LAFPV2jmjKrzSRsmvzN0jAM7rzzTg4fPixtq1GhR2HGJEC/S4RV4DFO5mFUlCr0JgQxaxdAglQA8IMSgHAGoEWSmqUeFg1DJv0fHR1Np06dLvzBMMcwDO655x5KS%2bVucPHBIOurmghP7VhgAxiR0Im/t1AjTFVSUhKCS4K074MAtXTukEmkRCO3VQY4P5rdpAyAwhKAcCjR0soABIRtEvK/3bp1w2YzrzklVJgxYwbLli2TttMrSSpSD17ifBsJPJf/bdKf%2b5tcpuTyS5YsCT35YF39C5fdbqNLx9bC560ywAUwqQRAgtQSt6agIABIT7AyAIFAJgDo0aOHQk9Ck6KiIn7xi18osXVTS/EUa1AT6xbKWL/Q4jquT%2byixIWHH36YEydCaA2zSX0APbqJCzUZR3cr9CQEMasHIE5qiutsABABCAtON4tXn5KyuDDb88TT0t27i3f9hgv33XcfRUXyS05GNm/PpcnpCjwKQmzeBjUDnj2m6bzbeiI9oqVSnEDt7oaHH35Y2k6jwYQSAEC2RADgtQKA82NWABCTLHM8BbDr1EYCQp0l0Q4bcZHmNDhYnB%2bZDYBWBuD8fPrpp8ydO1faTrPIWP7Va5gCj4KY2Pplgs9HvC2ST9rdRlO7/Ojb%2b%2b%2b/z5IlS6TtNApsjTADUBBizZaqMUtuPSoexPuLdCD1TAAgRHMr/R8QympcFFc0vL56huxsie1fIY7X6%2bXxxx%2bXtmPTNGb2GUV6VJivyY52n1cm%2bHy0ikhkTtubsCuYDHjsscfwehvWlNgo0SJNMZvdVVxf3igrhppKhd6EFprNnD0AIJ0FaKoDwoWEpnHmfBktzs%2bh4grhs4mJiZYC4HmYNWsWW7ZskbbzbLdBDG0qrK8VOmhAjLgewqC4dvxf%2brXSbmzbtk1JVifg6OZMlKQ3TyU%2bTjC7YBgYRUfVOhRCGGY1AQLEpsqcbqJTWwsQO23V/wNCjkQA0LateKQf6rhcLn7/%2b99L2xmd3oFHO/RV4FGIECNWBjjDL5pdwfgk%2bb6VJ554ApdLzpeAozkwYxcAQOtW4tMq3qJchZ6EFpqJAYAWK5UBSNUBYQupMWE439wIOFQsXv%2b3AoD6efPNNzlw4ICUjZbR8bzTZ6RJt%2bggRaIMALWaAW9kjiPDISV%2bwr59%2b5g%2bfbqUjcCjmZYFaNtavOnSKDyi0JMQw6weAKgVBRInUUdiAiDJCgACQs5J8QxAmzZWWrouqqqq%2bMMf/iBt57We15Jgt0pjP0A3ahcDSZBki%2bLVVqOlXfnDH/5AdXW1tJ2AYlIfQNs24tMqhpUBqB9dMytpgxYVL3M8SS4AiLZkgAOBFQCo5/333ycvL0/KxuRWXRnZvL0ij0KMaHmFvtGJXZmQLDfBcuzYseDvBTAtAyARABRaAcD50DSTIgC5JuNEHRCW4UqMsjIAgeB4qfhueasEUDevvfaa1PnUiGheyL5akTchSLR4I%2bC5/KPl9TSxywmQvfjii0p8CRgmZQDaZIr3ABglIbRsyQQMkwIAKwMQhsiMAGZmZir0JDRYu3Yt3377rZSNp7tcQdNIay12vUR4/rt3VII0eyy/bX6VlI1NmzaxYcMGeWcChWbO7hWZJkCj7KRCT0IQsxoBI%2bUDAGELiVYAEBCKJAIAawTwp/zjH/%2bQOt8mJpG72lykyJsQRTMgQk0WYFpaX9pFCg8vAfI/84BiUgDQJE04GQzlp9Q5EoKYVQKQzAAk6IDwa0tshLUF0N%2b4PF5OV4uPMqWmSs2NhhyFhYV8%2bOGHUjb%2b0HUgEbolrnRBIuX7AAAiNBu/k8wCzJ49m4KCAiX%2b%2bB2TAoC0FOFkMEZlKXjUBHihiKGb1APgkBrFj9YB4XV%2bMVYA4HeKK5yIStMnJCQQEWH1bZzLe%2b%2b9J9UV3j2hCZPDVeynoSgKAABuTe5F1yjxbFZNTQ2zZ89W5o9fMSkAiIqKIDZG8IFiGLVBgEWdmNYEqCAAEM4AxERYbz3%2bRqb%2bb739/5T58%2bdLnX%2b8Y390s365Q41IdW%2bINk3nV80GSdmQ/dkHDJMCAIDUFIm5cqsMUD8mZQA0uQAgxsoABBky9f%2b0NCn5yJDjxIkTfP3118Lnm0bGMK5FJ4UehTg2o1YhUBETk3vQTEIsaNWqVeTn5yvzx29o5r14paVKlAGsRsB6McxaBiSZAbAjEQDMWHeI5BirEdCf7Mw/LXw2JUWucSrU%2bOijj/B4xNPS97TtRaRV%2b28YEV6oUnMzjNBs3Jl6CX86sULovNfr5ZNPPuGuu%2b5S4o/faKQZAPdXs9D3BfF0hYkY5dUg0btVr90qqbKLXADw5%2bU7ZS5u4WcSE8Wj%2b1Dko48%2bEj5r13R%2b1qanQm/CBIcXxNdY/IRpaX35S8FXuA2xzMJHH30UfAGAinnKekhKFM%2boeFZ/gLouDws/EKMD1it8mBAVZYk3naGkpIQvv/xS%2bPzwZu1oGS01ghOeONQ%2bIlpFJDIsoaPw%2bc8//5zTp8WzaoHBvAAgIsJ6HIQRdh2wcphhgjUB8F9WrVqF0%2bkUPj%2b%2bRWeF3oQRigMAgHESSoE1NTWsWbNGoTd%2bwMSm0wiH1dcVRth0wPqJhwlWAPBfvvnmG%2bGzDl23dv6L4lDXBHiGUQldsGvib8Uy34XAYF4AEBlpZQDCCIdVArAIS2Ru%2boPTWpMSYZVThLAhJQ1cF6n2GK6ME9e4kJkECQwmysuq/dFYNG4idEz9Nlk0JmTV7kIFt9sttQt%2bTIZ4zdnCALv6LMCYxG7CZ9evXy81DeJ3TCwBHD9RbJpti0aHTcfMfJJFo6K8vDzQLjQKtmzZQkWFuKTy4DRLUEkKm/rXzEHx7YTPlpWVsW3bNoXemI15t%2bzKSvGtmBZBh0ThzCLoMG0dZZCxfv164bMpEVF0irc2KkphQgaga1RTkmziZZl169Yp9CaYse4R4YSOVfUJG2Jj5XTUQ4U9e/YIn%2b2X0sK6RcqicBvgGXQ0%2bsWKZ2b27t2r0BuzMe%2bWLawFYBGMGDqg/rfRolGSnp4eaBcaBQcOHBA%2b2z%2blhUJPwhSTBo/7SwQAMt8JvyOqBuYD6c2s7FYY4dEB9fsJLSwaMYcOHRI%2b2zuxmUJPwhTdnAfYxTHiwdnBgwcVemI2Jr6zKZ7QsGjU1OiAJeIcJsgsvgkVDMOQCgDaxyUr9CZMMaEEANAuQlzr4uDBgxgmvlmrxTw/a2qs98Ewwq2Dtb45XLACgNpRyMrKSqGzuqbROsbSU5DGpLfMthEp6IIdGhUVFRQUFCj2yCRMDFScLut9MIywSgDhRHW1NeKTk5MjfLZldLyl/qcCk/4Jo3Q7GQ5xNTuZzJB/Ma8EYGUAwgq3HQltrnvb9iLBEanQH4sLsa/8FPOPi3Wxl5ZKSUeGBDLCL%2b1ikhR6EsaYWGduF5nCUZfY9zxoRIEElQ99ofS0%2bK4QvctVaMmtFHoTQlTUYJgRXLkq8B5YInq6UioAuD%2brD12smWi/srIoVzgAKC62tnzJLABKjRBWzrY4FxPnKFPtMcJnZb4b/sW8NH1RsXgQZLv0ZvRWFyn0JnTw5p2CMoU62N9jlB6WCQCqdCQCgEqPlS7yN2mR4g%2bhoqIihZ4EJzLbEOPslphSYydOF/8ZBc2mTMPMAEA8S6hZGbL6Matvw1Mjc7pKB8Q6orACgEAg8xZqZQDk3vJi7ZZulhI081LYsRIBQNBkAEwMAIpPSpQJo60G2frQzAoA3FIBQKVcBsBtdYz6m9SIaOEMallZGTU1Ul%2bYoEcqALBZAYASTCwBWBkAcaqqa6isErw/aDpatHgDZsjjDcEMQIXHGivzN3ZNJ9Ehvq4z3LMAMpMQUTa7Qk8szCBKFw/SqqrU12hNwTBnclsq/R8Vb0nLnAfDpADAUBAACHd9lLjC%2b20yUKRJlAEKCwsVehJ82GziM2hWyUsVJqrZecVfShyOIMnwmJQBkAkArPT/BTCrBOCUylqV6kCJ6OkSlzVXHghk%2bgCOHDmi0JPgIyJCPEVc5rIyXmowbwywTOKNKDIySEaaTQoADueeED5rNQBeALMCAJdU30qJDgiHfaVWBiAgpEfFCZ8NnmUn5iBzky9zWwGAEgzzUsVlEhkAmeDQrxjm3HdzjogHAMSlqXMkFPGa0/hqOAMYAJyyMgABoU2seLpNZhNeKJCQIN6oVG4FAGowqyEKOO0RvyclJgZJGlsiyDkfhw7nCZ/VkjIUehJqGOYt3JfLAJRKBQBWD0BgaCOxjz7cMwCpqeKLq05bAYAizOsBKPOK35NSUsTFhPyKSRmAQzlWAGAKXgPTyl5yPQAlUj0Ap5xWBiAQtJUIAMI9A5CWJp6qzK0KklWxjR3DvADgiFP4dkaTJk0UemIWhokZgHzhs1YAcB7c5mW8DAUZgJOipwtqgmRxRojRNla84SbcMwBNmzYVPnu4spRqj7X7QhqT0qFVXhe5TvFO9qAIAAwXZr1NSjUBWgFA/ZhU/wegWkrf5aQOCGtgnqgRXiFgIYFMCaC0tDR4ZE9NoFWrVsKjgB7DYH/FKcUehSFeczIAe2uK8Ao%2bHO12Oy1btlTskQlIlDjOR15%2bMWXlovdzDS0xXak/oYRhagAgnvECCiQDACsDEAji7RFSo4Bbt25V6E1w4XA4yMgQf1vZUy6cMLM4g9ecKYA91eI7Llq1aoXdHgSLnkwKALZsPyB8VotNBocllFUfmsesEoCBUSOVASjQgUIEc0rVHjen5XYRWwiSJVEGCOcAAKBt27bCZ3eXhfcmRSV4zMkA7KkRF7uS%2bU74Fa852wq37xLvDdKSgyBzEkAMr0k1L2cFeIWXk3mBYh1wAcJ5zQKrDBAQshPEa9nbtm1T6Enw0bVrV%2bGzm0okZqUtajGpBLCp8pjwWZnvhF8xKQDYukMiA9C0vUJPQhC3STsAaqTS/8WA50wuTrgMkF9tlQECQXaieMNSuGcAsrOzhc9%2bWXQYr1lbvcIFj/oSgMfw8lW5eIOrzHfCr5gVAGw/KHzWCgAugMekHgC5BsBCAOkA4GhVmYwTFoL0SBAPAHbs2IE7jJUce/ToIXz2pLOaLaXh20SpBBNKAJuqjnPKI/5wlPlO%2bBUTAgC328PufeIrwrWmHRR6E3oYHnNKAEaVeMkLOAH/DQCOilqxZqMDQ49E8RJATU0Ne/fuVehNcNGzZ0%2bphq8vCg8r9CYMcakPAFaUib/BOhyOIMkAGOBVv3tl974j1NSIC13pTbMUehN6aCaVAKiQEnY7ClYAELSkRkTTIjpe%2bPzatWsVehNcxMXFSb3xrSiyAgBxNPCIKzLWxxfl4jXsXr16ERsbq9Abk/BWY8YOgG/W7xQ%2bqyU2hyjx9drhgGFSCcColAoAcuG/AYBw90xupVUCCBQyZYA1a9Yo9CT4GDBggPDZFYVHLGEgUdya8mdYqaealRL1f5nvgl/xmtNwvWbtduGzVvrfB9wmlQDkAgArAxDsyJQBvv76a4WeBB8DBw4UPlvpcTHv%2bB6F3oQRbvUNgB%2bWbKdKfBxK6rvgVzxSe9/rZc06mQDAagA8L4ZhnviVXA/ADzIAucJWrAAgYPRLkVhos2cPhYVSEWRQM2TIEKk%2bgJlHxG%2baYY1bff3/nZObhM86HA4GDx6s0BsTMSEAOFFwiv0Hxccn9ZbB0DsRQFxmyQCCUSkVABwDBRmAgppKKx0aIC5PbSWsq2YYBt98841Sf4KJ5ORk%2bvbtK3x%2bReFhciqlxnDCE6fa%2bv9hZwmrysWX2AwYMCB4ZIBNCABWr5XZCaKhtbACgPNhmJT%2bx1kmqwT4gwxAPiA8X3LA2o8eENIiomkflyx8Ptz7AK677jrhswYwK1e8eSpscapdtzvz5CYMiaaCESNGKPTGRAyvKSOAUvX/tDZoMeL3n7DApAyAUS4u3QyUAUXw3wDAAIS7aPaXWwFAoBiQIr6Gc8WKFQo9CT4mTJggdf61Q5twmrXmM1RxqusBqDHcvF60TsrGDTfcoMgbk/FWYMYEwIpV3wmf1VsGye6EQGJWA6BcAHB2Zlav6w8byv4KqZWEFhIMSBUPADZu3BjWyoBZWVn07t1b%2bPzRqjLesXoBfMetK10D/HbxRo65xHuQ%2bvbtS1ZWkMywm5D%2bzz9xUk4EqFVPhd6EKGb1AMgFAGd/6Hpdf9hga1YJIGDIBABer5elS5cq9Cb4mDhxotT5Z/d%2bg9swUe4zlHCpe/t3GR7%2bcuIrKRuyGSC/4lE/bv3p8vUYEmut9VYXKfQmRDEtA5Avc1xtALDPKgEEjM7xqVLSwJ9%2b%2bqlCb4KPKVOm4HA4hM8fqChh7tHdCj0KYarV1f/fO/Udh5zi9x2Hw8HkyZOV%2bWM6HvUNp0uWrxc%2bq8WmoKW0UuhNaGI0zh6As%2bV%2bJQHAzjKpcQQLCTTgqiathc8vXboUj0m7qoOB5s2bM3LkSCkbf9yzxsoC%2bIKiAMBleHgm/0spG9dffz3NmzdX4o/pGB7wqBVd83i8LP9yo/B5re2lIDyDFEaYlQE4LTy4B/VkAISXwxfWVFJoyQIHjOHN2gmfLSoq4ttvv1XoTfBx9913S53fVVbMSwfC%2b9/wghiashHAvxWsZm%2bN3EuH7M/cr3hOo7oBcO2GnZw8JV5W0LMuU%2bdMqOL01C4CUk31qdoxQHHObjE7NwA4BAgrTVhZgMAxrFk7qVj8k08%2bUeZLMDJs2DC6dOkiZeP3u1ZzzFLGrJ8aXckzLNdZyh/zv5Cy0blzZ4YOHSrvjL/wqF%2b2tniphBaIpqO366fOmRDFcJmjuGqUiis3ApWcs/jv3ADAA%2bwTtbrjtBUABIr0qDguSmwmfH7u3LkKvQk%2bNE3joYcekrJR5nby6Ha5B1NIoyj9/%2bCxRZR75RaPPfbYY%2bi6%2bpXEpuFWX///YIF4A6WW3hktNkWhNyGK06QA4LRUALAbOFuv/PFvwS5Rq1YGILDIlAH27t3Ld9%2bJzwOHArfeeitNm4prKwDMObqLZQXiW%2blCmmrxRssz/Of0Hj4q2SFlIz09Pbia/0B5BuDbzXvk1v9mBYl4UqBpnBmAHzzjfxwACK82225lAALK8ObiAQDAnDlzFHkSnERHR/PYY49J27lj02KKnOo3tgU1Hh2q5er/Be5y7j4yX9qVxx9/nMjISGk7fsNTDoa40FFdzJkvtwBMb2/V/32icWYAzhsACM8zbSktMGFPlYWv9E9pQZIjSvj83LlzpWaCQ4H77ruPFi1aSNk4WlXGlG8X4Q3zf8sfUCX38PdicGvOXI5LLP0ByMjI4K677pKy4XfcakesDcOQS/9HJ6JndFPoUehiig6AYWCUSGUZzxsACK81K3FVc8jaCBgw7JrO9eni0pwHDx5k40bxsaBQICoqil//%2btfSdj49cZC/7JNbURtSVMml//8vfwVLy4Tbk87y5JNPEh0tvjMjICgOANZu2MXh3BPC5/VOg0ALov6JQGEYppQAjIo8cEtlGH9QQ/vxT3IPEpMAm0vFv1gW8kxoIdfJ/v777yvyJHj52c9%2bRteuXaXt/G7nSlYXS83qhgaGJhUAfFl%2bkKfyP5d2Izs7mzvvvFPajn/xgkftS9Xs%2bXKNqnqXqxV5EuI43WZIN2CcEl/dDFTwo0b/HwcAbiSyAJtLrAAgkFzTtC0pEeJlgHfeeYeamhqFHgUfdrudl156SdqO2/Aydu08dpcVK/AqiKm2n9Nz3DD21RQx8dD7eBQsWfrrX/%2bKzaZWith03KdrlwApwul08/6H4gGAFpOE3vZSZf6ENDUm1f9PCWv2AWzjR7%2bNdeVytohatzIAgcWh64xJ7yh8vqioiIULFyr0KDgZMmQI119/vbSdImcVw7%2bey/Fq9UIuQUNZhNCxo65Srt7/FgVu%2bX%2b7cePGBdfc/xkUp//nLVxJYZF4RkHvfBXoQRZEBQjDrAbAEmHNPqjj2a40ANhUIiVQYKEA2TLAG2%2b8ociT4Oa1114jKSlJ2k5OZSnXrJnNSadwZS148WpCDYClnmpGHpjBEad8%2bjshIYEXX3xR2k5AcKvNHr35zmKp83rXaxR5EvoYTrWTG2ftypUAtv74D%2boKAIQHwvOrKzhSqX5rlYXvDGnamqaRMcLnly9fzoEDUl%2bykCAjI4P/%2b7//U2Jrx%2bkiRq/9kHK33AKboKPcUdsD0ADKPDVcd%2bDfbKmSEjs5y3PPPSc92REQvDVKFQAP5uTx5WrxXR9aXCp6a3Hp7LDDhADAqMiHGqmlUD/5AtSXARAuuq09dVz0qIUC7JrO2AzxMoBhGEyfPl2hR8HLtGnTGDx4sBJbq4uPMnj1rPDSzChv2Lx9gbucwfvfYE3FYSWXv/rqq4Nr5/%2b5uNXuVXnzncV4vRLSv12GWN3/vmIY4FQvDmYUC8v1QO0zfduP/7Cun%2bhpzhELaCjrTloBQKC5o7WcTvfbb7%2bN0xlmb6t1oOs6M2fOJDU1VYm9b0/l0%2b%2brd9hfEQby2dU2cPr%2bwDjkPMUVe//JxkrxDXXnkpyczPTp09G0IFWsc6kLAJxON2%2b/t0TKhu0i%2bZ6YsKHGjRkjAEax8GMZapf8/SSlVN9vqLBQ9NqTan6BLcS5NDmdnhLaAHl5ecyePVuhR8FLixYteP3115XZO1hRwsCV77G1tECZzUZJqe9v/99V5XHZ3tekFf7OZfr06bRqFaR69YYb3OrG/2Z9uJz8EyeFz2vpXdCad1bmT6hjVJtU/5cLAOpcTFJfALBB9CqbSk/g9Iavvnxj4c42PaTOP//882G/GfAM48eP54EHHlBmL6%2b6nAEr3%2bW9XLm99o0Wl%2b7z7v93T27mir2vk%2b9SV%2b9%2b9NFHGTNmjDJ7fsd9Eokq7E/4%2b6vzpM7beo1V5EmYUGNC9tTrwiiRGgGs85muPANQ7XHzXai/3QQBt7bqToxNfAHLtm3bWL58uUKPgpu//vWvDBw4UJm9creTW75dxJSNn1DpMeeNIWCURl4wA1rtdfPg0UXceniutLrfuVx22WU888wzyuwFBFehMlOfLlvPlu0STb2OaGzdrlXmTzhgRgbAOHkAvFJ2GxQAbAGEN8KsLJISK7BQQKIjkvEtOknZ%2bOtf/6rIm%2bDHbrcze/ZsWrZsqdTuzCPb6f/VzNBZGOTWoOL8geeu6gIu2fMKLxV%2brfTSmZmZzJs3D4dDXnkwYBgepeN/f31FTurb1m0oRMYq8iYMMAxTRICMQuH9fFC73fcnDYBQfwDgRGIc8KuiXNGjFgq5u01PqfOfffYZW7YIr4UIOdLT01myZImS/QDnsrW0gN4r3ub3u1ZTE%2bzls5NR9Y7%2buQwPLxau4dI9/2B7tdqlYQkJCSxatIjmzZsrtet33EXKtv9t3XGQL1ZulrKhW%2bn/huF01QYBivHKBQAbgTrTB%2bdr010terVVxbl4rPpxwLk8tSXZCU2kbFhZgB/SrVs3Zs%2berfwts8rj5qndq%2bn5xXQ%2bL5RS%2bwocNXaorPvfZVnZPrrv%2bjsPHf1EacofwOFwMG/ePHr0kOt7aRQ41S1Te/aFWVJ9PFqzjugtspX5Ew4Y1SZsADQ8GMXCQr0Aq%2br7C1MCgFJXDdtOW30AjYFHOsjt7p41axa7du268AfDiGuvvZYZM2aYslt%2bd1kxV6%2bezeQNC8mplFr64Wc0OBlZ%2b9/ncMh5iok573PN/ulKu/zPYLPZmDlzJldfHQIiNYZL2frfHbtzmDN/hZQNW79blPgSVtSYUP8/dRBcUvtD6n2WXygAEA4frTJA4%2bDmlt1oGR0vfN7j8fDUU08p9Cg0uOmmm3jrrbfQdXOWo7x/dCdZS19nwvoFwdEfUBZRmwH4noM1J7kn9yM67nyeuad%2bsoFUCZqm8dprrzFx4kRT7Psd1wlUzY8/%2bad/Sy3%2b0eKbYusahPoJAcaoUj8BIFn/9wLf1PeX57t7FQHCeYcvCtVs87KQw6Hr/E87uRWec%2bfOtXoB6mDq1Km8%2buqrpgUBXsPgg2O76fb5m0za8DFbGut0jfvM23/tTP/EnPfpsPN5/lW0HrcCJb%2b60HWd1157LXg3/dWFU01fxLadB/nok3qzvj5h63sTSEwRhSVew5QMgLegzv49X9kB1LsE4kJ3LuEywOcFOcHf0BQiTGvbizi7mCob1K4HtrIAdXPPPffw7rvvYrfbL/xhQbyGwZyju%2bj5xXS6LX%2bTP%2b9dy4maCtOu1zA0Tp6AfxVu4PK9r9Nr90vMPbUVrxli6N9js9loRDR3AAAgAElEQVR46623uOeee0y7ht/xVIBHjY7Kr59%2bS%2brtn4gYa/ZfADPe/vE4MeQCgPNGghcqYiYCN4hc1WV4GdQkk3axajumLRpOtM1OQU0F6yR0Gnbv3s2IESOCU1jFZLKzs%2bnevTsLFy7E7TZHBvQMhc5Klhfm8OKBb9lwKg8DaBoVIxXgiZBfXcHHefv49daVTNu/iIWlu8h1md%2bzEB0dzZw5c5g0aZLp1/IrNTlKxH%2b%2b3byHx574p5QN2yWT0Duq23kRNpRVgeIgwCjYgjfncxkTfwPqrSFcaFF2BiC82/fnHfryXHc1YioWchyqLKHj0n9JpWSvuuoqPv9c6ssY0nzzzTeMHj2awkJ1i1x8QQO6JqQxpEkbBjfJZGBqJikRUUqvUeysYlVxLl8UHuaLwsPsOK2%2boe9CNG3alI8//ph%2b/fr5/dqmYnihbE3tCmBJBl33MF%2btkSjX6XYi/vdjtATxVeLhinG0GKNSeH1OnXg2v4F33yLR4wa1z/B6R0t8UcrYBQgtgu6WkMb2IXeJHLUwgds2LmbGEal0Eu%2b99x6TJ09W5FHoceDAAUaNGhXwyYmmkTF0iU%2bjY1wKneJS6BifQoojijh7BPH2CJIcUcTZa2u85W4XJa5qytxOyt1OTrqq2VNWzN7yU%2bwpL2Z3WTEFAVYx7NatGwsXLqRdu3YB9cMUnHlQJTXmBcDM2cuYMk1uC6Kt11js1/1G2pdwxLs/r7YPQCHuT%2b/FKBN%2bB98GnHc21pcA4BXgPlEPcq69l9YxiaLHLRSSU1lKp2X/ktJqiImJobi4mKgotW%2bYoUR5eTl33HEHH3zwQaBdCQlGjx7NjBkzSEwM0ftI%2bUbp%2bn9VVQ1p7cZQWSXxBmpzEHHvPLSkDClfwpIaN97Dapt0jYoTuBdLNbm%2bADxyvg/40r4slfP9rEBKwMBCIW1iErktU26xR2VlJbfffrsij0KTuLg45syZw3PPPRfca2kDTEREBH/7299YsGBB6D78PeVKmv%2bmTHtW7uFP7du/9fAXw6isVm8zb6OsiQs%2bu30JAFYAwq%2bMn%2bYfFD1qoZhtpwvZUSZfu/3ggw/Iy8tT4FHoomkaP//5z/nmm2/o1ElOkyEc6dy5M9988w0PP/xwoF0xlxr5fSnH8oqYv0hu7A/AOLEXo2C/tJ1wxKhUPwHgzZcKANxcYAIAfAsASqjdJSzE54U5ljxwgDnprObBrcvp/cXbrCk%2bKm3P4/Hw6KOPKvAs9Ln44ovZuHEj9957r2n7AkIJXde577772LhxI717y%2b2vaPR4a8AlnzZ%2b%2bPFX8Xrl9y14c7/D%2bcZk3B8/gVFR7%2bi4RV2oHgH0umTH/9YBF0wt%2bXpH%2blTUizK3U8lDx6LhuA0vLx34lg7LXuelA98qXcoye/ZsayLAR2JjY3n11VdZuXIlXbp0CbQ7jZYOHTqwfPlyXnnlFWJiYgLtjvk4j1K7qE2cFau%2b48OPv1LjD4DhxbPtPzhfH49nw2ywXt4uTLULFARg52IU7gC3VFnBp2e2rwHAfyQcYckJqw/A3ywtOMRFn0/nwa3LOek0oT5lGNx7771UVVUptx2qDBgwgM2bN/PHP/6RuLi4QLvTaIiPj%2beZZ55h%2b/btDB4cJmPDhgec4ns5ACqrarjr/uekBH/qpeo07s%2bex/mvm/AeXKvefghhSPZe1IU3b5OsCZ%2be2b6qmeQB9wJCwtAl7mrpdbQWvrGv/BS3b1zM73atotBp7ujWyZMn8Xg8oSHE4ifsdjsDBw7ktttuo6ioiG3btplzAw8CdF1n6tSpLFiwgOHDh5sirtRocR6rlf6V4NdPv8nipesUOVQPlafwbvsPRt5u9IwuaNEh2owpw8kycKnNlHg3vwFO4ebQPOAxXz7oawbACywR9WbH6SJ2Kmg%2bs6ifCo%2bL3%2b9aTfbnb7Io33%2bNPM8//zybNklHq2FHRkYGM2bMYNu2bdx4441omi8TuaGBpmmMHDmSjRs38vbbb5Oenh5ol/yM8X36X5wt2w/w4uvzFflzYbz7VuJ8fQLuz56HmnK/XbfRY6hfAWyUHsYok/p%2bfIqPqlIN6UoS7gMA%2bOCY/KILi5/iNQzeOryFrM9e56ndq/2uv%2bB2u7njjjtwudSLYIQDXbt2Ze7cuWzcuJEJEyaE9Fuw3W5n4sSJbNq0iUWLFtGzZ89AuxQYnPngFS/Lud0e7rjvL7hc5q6d/gleN54Ns3G%2begOe7z6u3WAY5hjVTuXLf7y5whI8Z/D5Wd2Qu80x4FEaFjSc5URNBfe1u1jkqEU9rC4%2byg3rPuKfh76jwhO4B/CJEydwOBxceeWVAfMh2ElPT%2bfGG2/k1ltvxTAMdu/eTU2N%2btpiIEhKSuKee%2b5h1qxZ3HXXXTRv3jzQLgUQAyq3S639ffovM5k97wuFPjUQVxXevSvx7luF1qQdWmIY/zxLK5VPAHg3vgZOYV0IFzAN8Onm0dC843JgSEM9OsPWIXeSndBE9LjF9xypPM1jO1Yw9%2bguEzXXGobdbmflypX0798/0K6EBJWVlXzwwQe88cYbfP3110HXJ6BpGgMGDODuu%2b/mxhtvJDo6OtAuNQ6cx6Fqj/DxDZv2MODa%2b/3/9l8vGnrXodiHPBCWgYD3cKFSCWDj1EHcyx6SMfEZMMzXDzc0APhf4OUGnjnLbzpdxh%2b7WipTolR6XPxl7zqe27eOygC%2b8ddHVlYWmzdvJj4%2bPtCuhBQ5OTnMnTuXOXPmNPp%2biz59%2bjBhwgQmTJhA69atA%2b1OI8OAsrXC6f/TZZX0vPxuDh1uhEu4HFHY%2bk/B3n8KOMJjTbjh9mIcrFdnRwjP1hl4d8%2bTMTEN8FkOsqEBQAsgV%2bAcAFmxSey/ZprI0bBnUf5%2bHtiyjJxK8yVXZbj99tuZPn16oN0IWXJzc1myZAlLlizhiy%2b%2boKSkJKD%2bJCUlMWTIEIYNG8awYcNo2bJlQP1p1Ei%2b/d96zzO8O2eZQofUo8U3xTb4Pmw9RiD4mAgajNOVGPlqf//c//kZRrlwUOEFWlI7BeATIj%2bh9cAlAucA2DT4dnolWVKTvrKpJJ%2bHtn7OqmL5laH%2b4v333w89vfZGiNfrZceOHaxevZq1a9eydetWdu7cidOpfi0p1O7m79q1Kz169KB///5cfvnldO3a1dpw6AuGF8rX1m7/E%2bCDBV8x4banFDtlHlpGV%2bzX/By95XnF6IIab94pKFO3B8U4uRf38p/LmFgDXN6QAyIBwOPAnwTOAfDLjv14ttsg0eNhQ7Gziqd3r%2bEfBzfiCbL6b3JyMhs2bCArKyvQroQdLpeLvXv3sn//fnJycjh48CBHjx6luLj47H%2bqq6txu92UldU2GsXHx2O324mKiiI1NZXU1FTS0tJo2bIlbdu2pW3btrRv356OHTtit9sD/P8wSKk5DNViuij7DhzlksH3Unq6QrFTZqNhyx6ObciDaHGpgXZGOcaBfAyPukkIz3fT8e5dIGPi58BfG3JAJADoDAiLnbeNSeLAtdNCPDkkjsvr5dVDm3hy1ypKXf7rAndoNu5N60uUbucvJ1ZK2%2bvRowdff/01sbFCu6MsLEIHwwll64Q6/ysqq%2bk35D6275LfptoztT%2baprO1eC0ew4/jwo5obP1vxX7ZbWCP8N91TcSocmLkqtxtY%2bD%2b5C6MykIZI1lAg6JMkaHjImAsINTyWeKqZkTzLFpEW41iP2Z5QQ5j1s5jZu52v87zXx3fno/bTWFKSm8GxrVlfskOCt1ybxsnTpzg0KFDjBs3TpGXFhZBSvV%2b8Ij17tx9//Ms%2b1JaFpbkyDQGZYwiI7Y17RK6UOWuoMRZLG3XJ7xujMMb8e5cihaXhtaknX%2buayanKqBaXanNKNqNd%2b/HMibWA8819JDo1pEkQHj/a4I9kmubtRU9HnLsKT/J1I2f8IQf1veeS6fIJrzTZgJ/SB9KE3vtm7pd0%2bkVk8GMk5swJIcMt2/fTmpqKn379lXhroVF8OGtFG78e%2bHVD/nLi7OlXdA1natb3kCcIwGASFs0bRM60zymJcXVBVR7/HTPqTqNd9dyjCOb0Zt3RotN8c91TcAoLAGPutKsd88CjJN7ZUy8AHzT0EOimfhMIEf0fLPIWHKH3YcjzJuHTrmq%2bfPetbywf4NfJZOTbdH8stmVPNz0ciK0umPAJ/OW83S%2bvNqfw%2bFg%2bfLlDBxojX9ahCEVW8DdcGndr9ftYNDIh5XM%2b/ducgU9U%2bvez%2bE1vOwr3cbGwlX%2bCwQAdBu2nqOxDboXLSbZf9dVQY2rdv5fFV43rkW3Q43whJcBtAGONPSgaAaglNplA0IzPxUeFz2TmtIlPk3w8sGN1zCYmbuD69d%2byNKCQ35r8tPRuCWlFwuzpnBtQkdsWv0B2BVxbVhWtp%2bjLrmxQ6/Xy5IlS7jxxhtJSkqSsmVhEVS4Cmub/xpIzpF8ho79BafL5B/IzaJbckX6cLR63tU0TSMtqjkdk3rgMdwU15yQzvz5hGFg5O3Cs/ljNHsEenpXOM/9qDFhKN7%2b5z26BiNHarPjauDvIgdl/sXnSJzljZwtMseDlhWFh%2bm14m2mbvyEwhr/RdyD49qxufMDvNN6Ak3tF5aitWs677WeSIItUvra%2bfn5jBgxIuAz6xYWfsPw1Nb%2bG8jpskqun/RbThScknYhQo/kyozr6n34n0ukLYp%2bzYYwtu3ttIz1Y42%2b%2bjTupX/F%2bc8JePd/7b/rSmCUq5VX9x5cKmtC%2bFks04yfQW3KQSiLoGsaB66ZRpuY8JCXzK06zW92rmTmke1%2bvW6riET%2bmH4NU1LE5JhnnNzEbYc/UOLLoEGD%2bOyzz4iICI1OYAuLeqneDzUN293hcrkZcePjLFfQ9AdwZcZIshK6Cp09Ur6fdSe%2boMzl36Bd73AF9mseRUtupAulXB68h04oM2dU5ONefA8%2bivfVhZvaTLyQUzLSY2XAZUB7kcMGkOCIZHCT0F4XWuFx8ac93zBpw8dsKlG7NvJ8xOoR/LrZIOa0mczFMS2E7fSMTmdvTRHbq%2bW/9Dk5ORw7dozRo0dL27KwaLR4KqCqYeqnhmFw5/8%2bz0efrFLiQvvEbvRKGyB8PjEihS7JvYi0R1NQdQyvn8YGjZNH8Gz8ECpL0Ftd1OjGBo3TlVCpbjzbu2c%2bRtFOGRP/Ad4QPSyrPeoBhOe8DlSU8GDWJeghqIVuADOPbOf6tR%2byOP8Abj9JZ2po3JiUzcJ2Uxmd1BW7grrakPj2zCvZzkmP/Nar7777DpvNZikHWoQoZ9T%2bGpYmfurP7/Di61I74M%2bSGJHC1S1vwFZPg6%2bvaJpG0%2bgMOiR2x%2bV1crK6QIl/F8TwYhzfjve7BWBzoGd0g0byjDAKSkHV8h/Dg3f9i%2bCWuq/%2bBhCOIGQDgP3UCgQJqT%2bUuZ1ckpxOx7jgHQepiw2n8rhx/QJePriRcrf/RHsuiWnJ3LaTeaTpFSTa1AlyROl2BsW1Y%2bbJzbgUvAl8%2beWXpKenc/HFljy0RYjhPFa7878BvD59EY894bN%2by3lx6BEMazWRWIe6PSsOPYLMuPa0isuipKaYCvdpZbbPi6sa74FvGo/ssMuNUSQs0/sTvMfXy9b/TwE/o/ZFXAjZAMBNbQlArMBMbYr8ppZidarGxvHqcu7bspQHtiwjt0rdF%2bVCZDgSeL7FCF7NHENmhDmd9s0ccbSNTGFeiZoehsWLF9OqVSt69eqlxJ6FRcDxVkHlDhpSz313zjLufvB5ZXLPV2ZcR3pMphJbPybGHkfHpGySItMoqs7DKahr0GDKi/BuWYiRtwu91UVoUYFZImeUVEKVuv/Pni3TobxhweKP%2bDewUMaAbAAAtVHIHaKHD1SUcGfrHiQ45LvNA0WVx83f9q9n4voFbDjlP6nOaN3Bo02vYG6byVwW19qnbl8ZsqObU%2bKpZl2lGmGixYsX07lzZ7p166bEnoVF4DCgclttEOAjCxav5ua7/4RHUUo5O%2bVSuqX0UWLrfCRHptEp6SIceiSF1Xn%2b7Q/Y/BE4K9BbZIPN4Zfrnr1%2bobr0v1FVhHfTP5Fo/gO4HzgmY0BFAJAL3AQIqT14MUiOiGZgWisFrvifRfn7GfXNh3x4fLdfl/mMTOzMJ1m3cWNSNpG6/wRaro5vz8ryQxx2yncHG4bBwoUL6d27Nx07dlTgnYVFgKg5Ak7fm3yXrdjIuFufVLLoByA9JpMr0keg%2balWrms2msW0pH1iN2o8VZysUbgY53x43Ri5W/BuWwzRSejNOuAX2WGnG6NYXVbX2LcQo2CrjImdwK9l/VD1L/dzBPYQn6FNTCL7r5mGrZE0evjC5pITPLRtOSuL/CvT2zM6nRdbjmJgXOBWKee7yrh4zyscd6mpBUZHR7N48WIGDx6sxJ6FhV/xVkDZt9TKsV%2bYFau%2b47obH6eqWk06OdYRz%2bg2U4myxSixJ0JhVR5rC5ZTWOW/DCiA3qI7tmt%2bjt6iu6nXMYpOY5wsV2TMi3vxzzAqpZoqH0Zw%2bc%2b5qMgAAOwFHgSEXkVLXDVclBgcmwGLnVU8vuMr7t78KTmVclvyGkKqPYZnMq7lzcxxtI0MbNNknC2SwXFZzDr1HU4F6T%2b3283s2bPp0aMHnTp1UuChhYWfMLxQuaVW8c8HPl22ntE3/VbZw/9M01%2b8Sb0/vhLriKdjUg8SHEkUVB/H7fVP87NRVoB3y0I4lYvW6iK0iGhzrnOiBLxq%2bjS8R9fgPSTV/FcD3AZIb5JTFQBUAt0A4TAsp7KUu9v0VOSOelxeL68c3MjYdfNZWZTrj2WZQK1M7/826c%2bCdrdyZVy7RjMyme6Ip1dMBnNKtuJV8K/h8XiYP38%2bXbp0oWvX0GgKtQgDqvf4vOt/0ZJvGD/191QrUpHT0BjcYjTNYxpH%2bVRDIyWqKZ2TemLTbBRWHffPWmEMjIJ9eDbNA48LvWU26KoebWBU1kCJnDrquXi%2bfRmqpJQYZwPvqfBF3b8SnASmih4%2bVl3ONc3a0io6QaFLalhekMPYdfOYecT/Mr0L2t3KlJTeRPmxzu8rHSLTSHcksKh0lxJ7Z4KAzMxMevZsvMGghQUArgKo9k1%2bfdYHn3PTnX/A6VRT8wfo32wo7RMbXwOtTbORHpPpf9lhj%2bt72eFlaHGp6mSHi8uhRk1GwyjcgXen1BZ9qG3%2ba7jIRB2oDABygIlAE1EDJa4aJrbsos4jSfZ%2bL9P7u12r/Lq3v2NkGv9ufSN/zLjGp739/9/efYfHUV2NH//urrTqXbIk94ILxg0wOG5ggws2zYANIZRAgBASIA4hCXnzSwJ5E/KSQBIISYDQElMcTMcQmg1uYBv3bqtaXVpJq7J9d2Z%2bf4wMtrFlaedu1f08zz5yXM6cJ0g7Z%2b/ce04knZ06AIfq43NnrwdRndCRjYG5ublyjLAUvVS3vuu/B8/9n3zuHW6964/CdvsDTMj7BhPzviEsXigcGTtcmDKQFm9jGMcOt%2btjh6t3YC42OHZY0/Tlf0ELGer2p9A6DW3cPwD8TEw2YgsAgET0KYFBOeho5VsDzyAvRM9xeqrN7%2bH%2bA%2bu5cetKDnSGqXoFsi3J3F88h38NXcLY5H5hu65RczNPE9Yu%2bIj3338fTdM4//zzw7azWZJ6RtXH/Krdd/vTNI0HHvo3P/3Vk8LO%2bQMMyxjNtKJ5IT/2K0qGNZvR2RNJS8zA5q4joIlbBemO1larHxvstGEaMB5TYu%2bbo2mdHug03gFVj1WLsiPorr1H/AbYJCAdQHwBsBf4ARDUoX4NUNC4uGiE0KR6KtJjet8Z8W3mZ44S0r43nEyYWJg5ms%2bch6n0GZ9idsSaNWs4fPgwF198MRaL6G9VSQqS%2b9TP/X2%2bALfc%2bUcee%2bJ1oZfunzaECwYswhxr7xFfjh2eiKIFaPaEaS7KkbHDO94MbuywrQP8Yh77qruXodl7PyHyKJ3oj9mFdSMKRQn5OHoREJRUSyKHL/o%2b%2bWFeBfi0uYqluz5mZ3uY%2bl13mZU%2bnL8MvISJKcVhvW4ouFQ/F5U9yzpHpdC4F1xwAa%2b99hrZ2ZHd6SxJeKvAU9btX7G3dXLVDb/mk3U7hF66X0p/5g%2b6mkRzdA3ICUabr4VNjaupdVaE9bqmvKEkzLsH84hpp/7LPgW1sgkh6//edvwrbwHF0AbQR4GlxpP5SigKgJHozymCLlF/c/pMfjkm%2bElWvRHpMb035J4ZM0t5PdGueLiw9Gm2ugw95/qasWPH8t577zFkSHxPj5SiWKAVnLvo7oZQWdXAwiU/Z/9BIXu0vpSb3I8Fg75JksAZH9EgsmOH78WUc/JJqSLP/it7XkLdt9xICA0Yg37kXphQ3Xk%2bAOYF%2b4/7JaVSOf/7pFhCt/Pdpfj5w6FNPFSyEY8SnmdSAKnmRH7S7zzuK5wVlTv7RbAFnMwqeYp9gqeHFRUVsWLFCmbMmCE0riSdkuoCx1bo5vn12s92cfVND9DYJO4xGOitdxcMvpZkS2T3RoWKqinsb9vBNts6/KqYI5I9YknEctZVJMy6A5LSjv0zTUMrb0QTsXFT8eqf/r2GGqetBC41nsyxQvVg1Q58K9h/7FT8DEnN5Oxs8dOfNODV2gNcvvE13q4vicCY3huFjemNVmlmK4tzxvNO%2bwFaBO78dTgcLFu2jKSkJFkESOGj%2bcG5o9tmP089v5Jvfud/6egUu9M905rDgsHfJCUh7dR/OUaZTObIjh3etRKsqZiLRn81dtjhQesQs/lPrfgIrXqD0TB3Ad0/ewpCqFYATOgbAoM%2b0zc6PZe9c24T2h54i72Bpbs/ZkNLjbCYPTE5dSB/GXgJ09P61vL1YV8bF5Y%2bTZlX/EmK6667jqeeeorU1Mi1P5X6AE3Rd/wrJ%2b766XR5uPWuh1n%2b2mrhl8605nDRoGtIT4y%2b3iih1OxpYFPjKhrdYh8jnoqpeCwJ836MedBEtJoWvQGQUZpC4L/fR3MYapG8G5iIsMOIXwnl1moPcFmw/7jF5%2ba0tBwmZhk/DlfncXDv7tV8f%2bcHVLnCNMsavVveIwMu5h%2bDFzEkwq06IyHbkszV2eP5sLOEpoCgPtpddu/ezcqVK5k3bx65uZFtjSzFq64Jf8qJn0%2bXltcyb9FPWb12m/ArZ1vzWDD4m6QlRmb0bSTpY4cnRGDssA115ztojWWQMhRTovEPF2rlatTKVUbD/ATYaTiZEwjl7rMkoBzoH2yAoalZHJz7XaxBtnX0qQr/qNjOr/atoyMQpm8iwGqy8L38Kfxv8TwyLbE75lgUW8DJ/NJn2e42NPv6hLKzs3nyySe5%2buqrhceW%2bjj3/pNO%2bHv51dXccc%2bfae8Q1yL2iPzkIuYNWhK3z/x7I6D62d26mV0tm1DC1D8AAEsS5jFXYhlzFViCPHWhKgT%2bewea09CRxxpgBBCSzRGhXAFQACswJ9gAbX4vQ1KzOCuIvQBHxvS%2bXLMvrO17L8kaw8rhN/Gt3ElhHdMbzdLMVq7Jmcg6RyXVfrEDlDweD6%2b%2b%2bir79u1j7ty5JCfH1y5pKUI8peD7esHa0eni7p/9lf/5zdN4BbWHPVphykDmD14Sd7v9g2Xuais8MmscXjWMY4c1Bc22B61yNSRlYMoeSm8/L6vlH6Ae/tRoJg8A640GOZlQnz/LBKqArGADDE7N5NDc20nq4SrA/s4WfrT7Yz5oDO/50tOT%2b/GnARdzUaaca38yTtXHovJlfNxpqBnGSQ0dOpRly5bJDYKSMZ4K8H69l8WmLfu5/rsPUloemmfTxamDmTPwyrg45x8q9a4qNjWuptUb3n4tpn7jsUy6FVN2D8ewKz4C730Pzd1s5LIdwGAgZGNnQ91ezYs%2bG2BqsAHa/V6KktM5N6f7RjmtPg/37f2Um7e9S4lD7DGc7uRaUvn9gPk8P3gxo5Kjf5xxJFlNFpZkj%2beg1yb8iCBAW1sby5YtA2D69OmYzfF70kIKkRPc/AMBhd/8YRk3f/8hmltC8148PPN0LhiwiARzYkjix4uMxCxG50wkMzGbRnctAS08Y4dxNqGWfwCOBswFYyGh%2bxUatew91GrDH9z/ArxrNEh3wtGBpgh9L0DQD7SKk9MpnXc7qZav/3AENJVnD%2b/iF3vX0OwTc2yjJxJMZr6TN5nfFc8jP46P6ISChsYD9at4oMHw5piTmjBhAk8//TTnnHNOyK4hxZkT3Px37inj1rseZsv2gyG77Nics5lSeEFcNQQLB5/iZVfrRva0bkHVwveYl8Q0LKcvxjzqMjhRwab4CLz3XTR3z8ZEn4QLGAaEdKkjHA3WHUAxcG7QAQI%2b8q2pTM09tmuTPqb3dZ49vAtXGJv5XJgxgjeH38gteZNJlct1vWbCxKyM4QyyZvPfjkOoIZgZ3tjYyHPPPUdLSwvnnXceVqv87yR147ibv9vj5XcPv8iNt/%2bemtrQPHc2YWJa0Vwm5U%2bTN/8gWMwJ9E8byrDMMTj87XQInEPSLdWP1rgTrXoDprRCTBnH3pfUQ2%2bh1n5u9CqPA2IHSZxAuL7rBgGl6JsCg5JvTaF8/h1kJFgpcdj5xb41rKg9IC7DHhiZlM/v%2bs9jSfb4sF43nn3YWcKSihfpUEJ3SmP48OE8%2beSTzJkT9H5UKZ55yvQe/13WfraL2%2b5%2bmEOloesXkmi2Mqv/pQxKj8zgs3hU5zzMpqZV2L2Gnrv3mqlwIpZJt2HKGgwBD/53bwOvoUdFXvSd/yFvhBDOsvMp4DYjAX5z%2bkwUTeP/Dn0e1p396WYrP%2b43k58XzSLJJHf2i7bdXcelZf%2bi1h%2b6Hg0mk4lrrrmGP/3pTxQXx/7gJUkETZ/s59ObtNQ1tLD0vr/x6ltrhI7vPV5aYgZzBy4mN6kgZNfoq1RNZX/bdrbb1oevfwCA2YJ5xEJMCSko%2b18xGu1vwJ0CsjqlcBYAw9AHGQR9BzWbTKhhGtEL%2bpje63In8ccBCylMSA/bdfsiW8DJtZUvs6pTeLfLY5jNZhYtWsQLL7xASoo8Z91naQq49kKgBWED7PwAACAASURBVK/Xz213P8xLK1ahqKFtDV6UOojZ/S%2bL69a%2b0cCruNne/Bn77dvQQvCI8eRMGGzY50MfqFd1qr8oQjiHrLcBQ4Czgg0Qzv%2bMU9IG8eqw67irYBrp8jl/yKWZrXwrZxI%2bTWGDU%2bwktaNpmsb%2b/fv505/%2bRH5%2bPpMnTw7ZtaQopQX0qX6Knf%2b8/gnT5t3J1h2HQvqpH2B09kRm978Mq2wOFnIJ5kQGpg9ncPpptPtacYRwdVGwp4CXwnWxcO88GYy%2bChC1PwEDE7P4Xf/4G9MbS1627%2bS2qtdxhmEy2OzZs3nooYfkaYG%2bQnWBczebv9jGT3/1JGs2hKTD6jESzVZmFC9gWMbokF9LOjF97PAqOgU3IhPMg/7pP2zDaiJxh3sUuDsC1%2b1WqjmR%2bwpncW%2b/maTIs7gRd8Bj48qKF9gfpslgc%2bbM4aGHHuKss4JeoJKiXaCVPVtW8puHnuXVt9aG/BM/QJY1lwsGLCInSfYIiTRFC7C7ZTO7WjcRUMPUP6B3HgHuDecFI1EAFKCPNYyKKRcmTFybM5GHBlzEwMSgGxZKIdCuePhe9Zsst4f%2bUxroGwUXL17M/fffz9ixY8NyTSk89u5Yza9//QCvv7MuLDd%2bgNOyzmBq4VzZ2S/KOAOdbGlaQ1nHvkincjQH%2bs7/sLY4DOcegCNc6C2CI96vdXLqQFYM%2bxZL%2b00nU/bejjrJ5gQWZ49jRFIeqxyleMPQ7GPfvn088cQTlJSUMGLECIqKej%2bHQooeO7Zv456lt3Ln0l%2bx70Do9pYczWpOYmbxQiblT8NiisRbrNQdqzmJoRmjSEodQou3iUBA/ECnIDwErAz3RSP1kDsHfRUgJxIXL0rM4MHi%2bXw77yzM8jl/TDjsa%2bOGw/9hnePrPdpDafr06fzsZz/jkksuwWSS3yuxYv369Tz0fw/y7nvvh%2b0TP0C/lP6c3/8SMhL73vjvWKICOxU/AVTsHftoaP6MgBKxQqAV/dP/iedOh1Ak39F%2bAvwhnBdMNFm4Q47pjVmKpvJw0zp%2bWf8R/nC2/gTGjx/PnXfeyY033ignDkYpn8/H8uXLefjhh9m9e3dYr202mZmYN1V29YsRDapC9VHvIarqx2bfis2%2bBS2cY4d1P0Lv%2bx92kfxOtQL7geHhuNiirLE8PGAhI5LywnE5KYQ2Oqu4peq1kAwUOpXi4mJuuukmbrnlFkaMkF3cokFZWRnPPPMMzz//PPX19WG/fk5SPjOKF1CQLBtMxQJV09ip%2bjnRbd7nb6e%2beS0djtD2IzlKBXA6eve/sIt0qXod8EIoLzAuuZA/D7yEORmnhfIyUpj5NYXfN37K/fUfh7U/xNHOPvtsvvvd73L99deTmpoaoSz6Jq/Xy9tvv81TTz3FqlWrwrrMf7QzciczueB8%2baw/hjRoCtWn6CTrcFVRb1uDx9cS6nSuAQy3DgxWpAsAM7AZOFt04BxLCr8uvpAf5E8lwSTHwsajn9S%2bx8NN6yKdBvn5%2bVx33XV885vfZMqUKXKvQIhomsbGjRtZvnw5L774Ii0tIX9zPqXxuedyTr9ZkU5D6iEV2KX48ffoY4OGveMADc1rCSghmTS7CZhKeHvcHSMa3qnOBz4VFSzBZOZ7%2bVN4oHgOuRb5qSxelXlbOGP/X/CG/3ldtwYNGsQVV1zBkiVLmD59uiwGBNi7dy8rVqzgxRdfpLS0NNLpHMNssnDFsJvJsuZGOhWpBxo1hapezpFRFA%2bNrZ/T2r4bTRPaKnomsF5kwN6KlnenzYDhVmyz0ofz%2bKDLOCO5UEBKUjS7rPzfvNO%2bP9JpdOu0007j6quv5uKLL2bKlClYLHKZuCcURWHjxo28%2b%2b67vPLKK5SVhe15bFAGp5/GnIFXRjoN6RT0T/8%2bgm0B5PG1UNf0CU63kEZ9nwPTRAQyIloKgDHAPgzmc3Pe2Tw7eLGYjKSotaqzjDmlT0c6jV5JT09n1qxZXHrppSxcuJCBAwdGOqWoYrPZ%2bPTTT3nnnXdYuXIldnuYZrsLMm/QEgamDYt0GlI36lWFGoOnh6ob3qet0/AYeg0YDZQYDWRUtBQAoG%2bEWGI0yAenfYd5GSMFpCNFo4CmcuaBx9jjaYx0KkEzmUxMmjSJ2bNnM2PGDKZNm0ZhYd9atWpsbGTDhg2sX7%2beTz75hJ07d0ZsI58I2dY8Fg27GbPcbxSVAuif/o3c/jtdlVTWvikinVfQN/9FXDQVAKlAHWCoH%2b9Qaw67T18qJ/jFqUdtG1haE/aGWSE3cuRIpk%2bfzowZM5gyZQpjxowhISHoydlRJRAIcODAATZu3Mj69ev57LPPKCmJ%2bIcf4b5ReCFjc4TvZ5YEqFIDNBp4fq9qAUoOL8NnfJhQOzAAiIr2g9FUAAB8C3jRaJB7%2b83kjwMWCkhHiiatiotR%2bx6hJeCKdCohZ7VaOeOMMxg/fjzjx49nwoQJjB8/nuLi6D5rXl9fz%2b7du9m5cye7d%2b9m9%2b7d7Nu3D58v9JMdIy3JksxVw28j2ZIS6VSko3jR2K30bN//ydTb1tDctl1EOlcDK0QEEiHaCgAT%2bomA84wEsZjMbBx1B5NT5XPWePKD6rf4e/NGQzEmpg1mZHIhb7VuC3s3QRHS09MZNmwYQ4cOZdiwYV%2b%2bhgwZQkFBAXl5eSHrVOh2u2lpacFms1FVVUVFRcUxr8rKShwOR0iuHUoJJgvTc86kzttEibPKUKzTc85iauEcQZlJIpSpAVoNfPp3eRoor/4PmvHTep8AFxgNIlK0FQAAZwDbAUMzeSekFLFl9J0kygYdcWGfp4mJBx4lYOAH2Wwy8%2bLI73FaciH1vjaeblrDu/YdKGKP9kRcWloaeXl55OXlUVBQQFZWFhaLhczMTAAsFgv19fV0dHQAkJmZSXFxMYqiF0QdHR0oikJ7ezs2m42WlhZaWlpwOqNi1VIYi8nMN7InsqBgBrmJWdR7m/ld2VOoBr4fTJi4fNhN5CYVCMxUCpZD09hvYPSvpqmUVr%2bMx2szmooPmITe/TZqRGMBAPB74D7DQfrP575C2aQjHswvfZYPO409N16Sdy4/HXDxMb/X7O/k9dYtLG/eSKfiMRRfig3JZitTcyZyYd43yD1uBPjy%2bvdZ27rFUPzi1CEsGBwVe7z6vAOKn04Dn9ybWjfR2PK5iFR%2bC/xSRCCRorUASAX2AkONBEk2J7BjzN2MltV4THu9bS9XVRjrGJ1pSeG10XeTnXDi5lAu1cvbrdt5wfYZjcY3%2bkhRKDMhnZk5ZzE771xSTzL%2b26m4ub/k7zgNdn67cMAVDJGnkSLKrqmUqsE3CvP6WimpehHN%2bKPCcmAcEJJ2gkZE6/q4HzgIXG8kSEBT%2bdxZxU15Z2ORx3Nikk9TuLLiBVoVYxv/7iqex%2bT0k5/TTjQlMC51IEvyz2VgUi51Pjut0TEnXDJoYHIhVxReyA0DLmV0%2blASzSc/XWE1J5JoSmSfwWEwzZ4GxuRMlMcCI0QDSrRA0Mf%2bNE2lsv4t/IFOEencgN7nJupEawEAUApMQJ%2bUFLR6fycBTZXDgGLUH5rWsqLN2GjXYUkF/HLQ5T16M7aYzIxKKeKqvHOYmTkaMFHlbY7JDYN9WaIpgUmZo1lSPJ9FhRcyMLkQcw/bMg9JKWZH50E6DRSAPtVDojmRQrkROSKaNNXQxr%2bGlvV0OIQcVV0BPCgiUChE6yOAI4rQK6ccI0HMmPjotFu4IEOOb40ljQEHo/Y9TIdibFLmY8NuYKqBAtCpePmwfTdvtGxlv7vOUC5SaBUn5TMlewLTc84kzcBxvIPOCh6tNHYiOdFs5arht5KakG4ojtQ7ga5jf8Eu/jvdNZTXvIaAGT2twFggaruWRfMKAIADsAGXGwmiAas7y7gp7yxSzIYOF0hhdGf1W2x2Geu7fV7maG4pPN9QDKs5gdNT%2bnNF3mRmZo4mwWShwd%2bG28DuYkmczIQ0pmZP4tr%2bC7m03yxGpA7CavDnPN%2baQ5WnniZfa9AxVE3Bq7jlXoAwq9JUHEF2lVRULxW1b6Cqxj50dPke8JmIQKES7SsAR7wPzDca5Krscbw67DoB6UihttVVy7kH/4ZqoApPNFlYPuoHDE7KE5iZTkVjl7OaVe17%2bbBtD62B2Dv/HstSLcmMzxjJWZljOSN9REietdt8dv639AkCBh//XDr0BgqSo7uBU7xwoLJfCX7jX1X9e7Q7DolIZRUwlwiO%2bu2JaF8BOGIdcAuQZCTIfk8Tw5JymZQifxijmYbGNZUvc9jXZijO9QXTmZc9TlBWxzJhosiaxbSMkVyb/w0mpg3GYrLQ4G%2bPuhHF8SLNksI52eO4vHA21xYv5MzM0ylMygvZyOU0Swoe1Ue5wVWoNm8zo7InCMpKOhkNKFUCQU/7a23fg83%2bhYhUnMBCIOonWsXKCgDAXcBjRoNkmJPYPuYuRoTgU6Ekxgut27nh8CuGYuQmpPHa6LtJP8lxr1BRNZWDngY2O8pZ13GQ3c5qQ6sYfV1xUj7jM0YxJn0YI1OHhP00j0f18UDJ32k3uMJzfv9LGJE5VlBW0okYmfbn9dkprX4JVcxjvTuBv4kIFGqxVACYgY%2bB2UYDTU4dyGejvie7BEYhl%2brn9P1/osrgp/9fDrycy3LPEpRV8FoDDj7vLOWzzlK%2bcJRjl0cLu5WRkMaYtGGMTR/B2PThZCSkRTolPrPv4IU6YwOoUhPSWTz8NhLkHqSQ8Goae9UAShDFtqaplNe8gsvTICKVdcAsICbai8ZSAQB6Y6CdQKbRQL8qupAHimXP7mjzy/qP%2bG3DakMxRqcU8%2b%2bRt2OOwm/vWp%2bdHc7DHHDXs9NZxQF3vYge4zEr35rDiNSBjEgdxIjUQRQlFUTdfzUNjT%2bUP8dhgydAJuVP46z8GYKyko5WogZoC/LYX0Pzemx2Y90fu7QDE4HDIoKFQ7T9rPXEd4BnjAaxmMy8P%2bJm2R8gilT72hmz/xFcBpfhnhrxHc5MGyIoq9CyB5zsclWzx1VDibuBUk9T3HYizEnMZEBSPwYkFzIsdQDDUweSbjlxZ8ZoU%2b6q4ZGK5w2VahZTAlcNv4X0REMTz6XjtGoqZUF2/Ot0VVJZ%2bxaC9urdBPxLRKBwicUCAOA14EqjQXItqWwZcyfDrIbaDEiCLKl4kVfb9hiKMT97PL8dvFhQRpHRobgp9TRS6mmkxN1ImaeJWl9rzHQmzExII9%2baQ/%2bkfgxI1l/9k/qdtP1urHi25g22tO81FGNYxmhmDzB0qlk6iqpp7FYD%2bIK4gfv9HZRWv0zAYNvnLm8Bi0QECqdYLQAKgD1AP6OBJqUU89moO2R/gAjb4DzMzENPGloOTzInsmLUnRRbswVmFj08qp86n51aXxv1fjt1vjbqfHaa/Q7aFRdtARcdYt7MTirNkkKaJYX0hFQyE9LJT8wm15pFfmIOedYs8hKzDZ/Bj1Zt/g7uL/0HPoMrVAsHX0tR6iBBWfVt1apCQxAb/zQtQFn1K7i9TSLSsAHjieKGPycTqwUA6NXWGyIC3ZI3macHXyUilBQEFY1zD/6Nra5aQ3G%2bWzib2/r49EcVjbaAi3bFRXvAzYqWTXwY5KrK5KwzOD93sn7Dt6SSlpCCKabfMox7t2kt79rWGoqRm9yPy4d%2bu8//f2mUS9PYp/qD%2bshQ0/gB9g4hk3k14DLA2C7RCInlSRVvAk%2bICPRMyxaeat4sIpQUhH82bzZ88%2b%2bXmMn1BdMEZRS7zJjITUhjWFIBk9IGMyQpP%2bhYhda8ro15%2baQnpMobFjAvf9rXRgj3VquniUNtuwRl1DepQIUaCOrm39K2U9TNH%2bBxYvTmD7FdAAD8CBDyk3RnzdtscMbM5s240aF4ub9hleE4PyyeR4rZKiAjSTq5RHMCiwovMBxnq20dPoMzLvqyWk3BFcTt3%2bWpp77Z2ArOUfYAPxMVLBJivQDwAN9CwJxlv6ZwbeXLNMmWrmF1f8PHNPiNjdyckDqIuSHq%2bCdJx5ucdQanpQ42FMOjuNjREtVt4qOWQ1NpUHv/3D%2bguKiqfxdNzGRPYfeeSIr1AgBgL/ATEYGqfe18s%2bJlAgbGSEo9V%2bpt4e%2b2jYZimDHx4/4L5PK0FFZLiucZ/p7bZ99Ku4FhQ32RCpQHtelPpar%2bPfziPuD9EDA2pzwKxEMBAPB3BG0I/MRRzs/r3hcRSjqFH9a8Y7hv/mW5ZzE2dYCgjCSpZwYlFzE1Z6KhGKqmsrnpE0EZ9Q3VagBvEJP%2bGprX4XQbm%2blwlFeAp0QFi6R4KQA04GagTESwR5rW86J9h4hQ0kl81FnCex0HDcVINSdxe6HhztCSFJTL%2b80mxWJoPhnVjjJqnOWCMopv7ZpKUxCrs/aOfTS3bReVxiHgVlHBIi1eCgDQ2zBeiYBnMhoaNx9%2blVWdQuoJ6TgBTeVHNe8ajnNr4fnkJ2YIyEiSei8jIY2LBLT23dT4Cap87NgtRYPKIFYLne4aapuMbzLu4gG%2bCRjbtBRF4qkAAP1EwFIRgfyawtUVL3HQaxMRTjrKX22fsddjrGfGQGsu1%2bRPEZSRJAVndt659LPmGorR7mthv32boIzi02EtgK%2bXK/9eXyuH694RtekP4A5A2FJCNIi3AgD0ZzNC%2bjG3Ki4WlD5HozwZIEyr4uK3Dcafe97T/yKspgQBGUlS8BJMFq4sMj5UbHvLBjyKS0BG8ceuqbT0coUkoLiprHsLRRV21PJp4HlRwaJFPBYAAD9AUH%2bACp%2bdReXLcIuZE93n/U/dh7QafKM7J304MzNHC8pIkoyZkDGKsekjDMXwKV622dYLyih%2b%2bNGo7OWgH1X1U1n3Jj5xQ7W2AXeLChZN4rUAcAKXA80igm10VnF15Uso8jmdITvd9Tzd8oWhGBaTmR/3XyAoI0kSY3HRXCwmY2%2bnB9t20ixmJn1c0IAyVaF3t3%2bN6sYPcBt8xHiUFmAxMX7e/2TitQAAqETfsGHsnFmXle0H%2bJk8HmjI0pqVhouoJXnnMiLZ8AwoSRKqKCmfmTlnG4qhobGpcbWgjGJfrabQ2cv3izrbGjocpaJSUNCb/VSIChht4rkAAFgF/I%2boYI80reNx2%2beiwvUpr7bt4VOHseNOmZYUbi08X1BGkiTWJf3OJ92SaihGo7uGys5DgjKKXW2aSn0vu/01t22npU3o8e17gQ9FBow28V4AADwMLBcVbGntSt7tOCAqXJ/gUQP8tPY9w3HuKLqALINvsJIUKqmWZC7ud57hOJubVhPow3uOfBpU9PLm3%2bEoo97glMbjvAj8RWTAaNQXCgANuAXYKiKYoqlcXfES6xyVIsL1CQ83raXCZzcUY1hyAVfkThaUkSSFxsycsxlg8BGVw9/BXvsWQRnFFg0o0wL0Zs6f011DdcN/u/61EF8At4kKFs36QgEA4AIuBYT0gnSpfi4pf54vXMJaS8atWn8HDzWuMRznnuIFhjdZSVKomU0mFhfNMxxnZ8tGHP4OARnFlmo1gKMXz/1dngYq695GNdhS/Ch1CGooFwv60jtqPXAZ%2bgkBwzoUL/NKn2G7u05EuLh1X937OFSfoRizsk7nGxnGjllJUriMThvKxAxjx1QDqp9tzesEZRQbWjWVxl7c/D3eZirr3kQ1%2bP5yFDewCEEfFGNBXyoAQO/idCP6UCnD2hQPF5U%2bx35Pk4hwcWejs4oXW41tykk0Wbi7aK6gjCQpPK4qmkOiwUZVpe17aRQ3wCaqebTenff3%2btuoqH0DRfGISkFF3/Fv7JxyjOlrBQDA68AvRQVrCjiYV/qs4Wfc8UZDY2ntSjSDz%2bWuK5jGoKQ8QVlJUnjkW3O4IO9cw3E2Na42/DMU7VT05/493fbnD3RSUfM6AUXIYu4R9wFvigwYC/piAQDwIPoIYSFq/O3MLX2Guj74zO5k/t26nU3OakMxchPSualgpqCMJCm8LiqYQVaCsWFVzZ4Gytr3CsooOlWqCq4ejvj1BxyU17yKPyD0vfafwB9FBowVfbUAAL2141uigpV5W5hd8k85NwBwqD7%2bp%2b4Dw3HuKp5LmsFxq5IUKUlmK5cXzjIc5wvbGvzinnNHlTpVoaWHw3oCipuK2tdFtvgFeBf4vsiAsaQvFwBHujxtFBXwkLeZeaXPGO51H%2bsebPjE8GrImJRiFuZMFJSRJEXGlOwJDE3pbyiGO%2bBkV4uwt6moYddU6np481dUL5W1b%2bD1tYpMYQtwDYK6xcaivlwAgH48cBFgrEXdUXa5G1hY9jx2pU%2bcIvmaCp%2bdPxscamLCxI/7L8SMSVBWkhQZJvRjgUa/k3e3fkFHHO0zcmka5WrPTvsfufm7vUI3W5cCCxF0KixW9fUCAKARWICgwUEAm5zVXFDyT2yBvve9dW/tu3h6Ob3reBflTGBS2mBBGUlSZA1PHcg5WeMMxVA1hS024/00ooEPjRI10KOjWAHFRXnNq7jEDkmyob/n20QGjUWyANAdAuYAbaIC7nDXc17Jk9SIfV4V1T5xlPN6m7ENS8nmRL5fdKGgjCQpOiwqvBCrOdFQjMrOQ9Q6Y7sDqQaUKgF8PfjsHwg4qah5DY9X6H26A/3mL2xiUCyTBcBXdgJXAMIOlh7w2Jh56EnKvC2iQkYtRVNZWvOO4Tg39ZtJUWKWgIwkKXpkJ2YwL3%2ba4Tibm1ajxvBY8nI1gLMHN3%2bfv4Oymlfw%2bIS%2bd7rRm8EJaQsfD2QBcKxPEbwppNJnZ2bJk%2bwVN586Kj3ZspldbmPLdIWJWVwn4E1SkqLR3Lyp5CVmG4ph9zZzqH2noIzCq0ZVaO1B8eL1tVJe84ro3f4KcD0QH89RBJEFwNe9DdyMoG6BAPX%2bTi4oeZqd7npRIaOKXXHz6/qPDcdZ2n8%2byQaXSSUpWiWaE1hUeIHhOFtt6/DG2CbjVk2lvgc7/j2%2bFsprX8Mv9ji1hj7c53WRQeOBLABO7AXgRyIDNgUcXFDydFwOEHqgfhXNBjc8TkwbzIVZYwVlJEnR6eyssYxMG2IohlfxsKPlc0EZhV6HplHRg43BLk895dWvEBC7eVoD7gKeExk0XsgC4OQeA%2b4RGbBVcTG75J%2bs7iwTGTai9nua%2bHuzsTPKZkz8uP8CTPLYn9QHLCmah9lk7Ht9v30bdq%2bwg0sh40SjtAc7/p3uWr23v%2boVncLPgb%2bJDhovZAHQvT8D/09kQKfq49Lyf/FO%2b36RYSPmntp38fewmcfJXJ57NqcbbJYiSbFiYHIhU7MnGYqhaiqbmlYJyig03JrGISWAcopNfx2OMipr3xA51e%2bI/wEeEh00nsgC4NR%2bB/xGZECX6ueKihf4q%2b0zkWHD7p32/bzfcchQjDRLErcXzRaUkSTFhsv6zSLFkmwoRp3zMNWO6FxN9GoahzQ/p2r109y2nar6laia8GZ89wO/Fx003sgCoGd%2bjV4ICKNoKnfXvMMPa95BjcFpXz5N4d7a9wzHua3fLPIS0gVkJEmxIyMhjQUFMwzH2di4CsXgCpxoAeCQGsDXzduahkad7VPqbWtCMe3wEeAB0UHjkSwAeu7/IXglAOAx22dcVf4CLtUvOnRIPWb7jEMGn0EOsuayJN/4yFRJikWzc8%2bl0OCo605/G/vt2wRlZJwCHFT9eLq5qauqn6q6lbS07QhFCn8A7g1F4HgkC4De%2bTX63Gih3mzfF1OTBJsCDn7bsNpwnB8PWIjVlCAgI0mKPRaTmasK5xqOs715A%2b4oaDuuahqHVH%2b3o30DipPy2lfpcIbk0cVDwM9CETheyQKg90LyTbbZVc3Ug39nv0fowIuQ%2bEXdh7Qrxhomnps%2bnOkZIwVlJEmxaVzGaZyRPsJQDL/qY1uzsQFcRmlAqarg6Obm7/W1Ulb9H9yhaYoWkg9n8U4WAMEJyTJThc/O9ENP8KlD2HBC4ba763iu1VgnTYvJzI/7LxCUkSTFtquK5mExGXsrPtS2i2axA3N6pVwN0N7NYT%2bHq5qy6v/gMzgm/CR%2bQQgez/YFsgAI3iPAD0HsDha74uai0ud4oXW7yLDCLK1ZiWKwF/k1eVMYntxPUEaSFNuKkvI4P3eyoRgaGhsbI3MssEILdNvi196xj8q6N0Nxxl8F7gQeFB24r5AFgDGPATcAQnfwebUANxx%2bhdur3zB8xl6k/9h3sdZRYShGpiWFWwrPF5SRJMWHiwvOIz0h1VCMJnctFZ0HBGXUM%2bWqQrN64pu/pqk0NK%2bnpvFDNPHvYwpwK7LJjyGyADDuReAq9ElTQj3VvJk5pc/Q4O8UHbrX3Kqf%2b%2breNxznB0VzyLSkCMhIkuJHiiWZSwuMF8abmz4hEKYTReWqQstJbuwBxU1l3RvY7FtCcWkvcDWyva9hsgAQ4x30GdPCH3CtdVQw%2beDjfO6sEh26V/7QtJZKn91QjOHJ/bg89yxBGUlSfJmecxYDkwsNxXD6O9nT%2boWgjE5MA8rUwElv/m5PI6VVL%2bFwVYfi8g7gEuRgHyFkASDOGuBCQHiD7lp/B7NL/smTzZtEh%2b6RGn87f2xcazjOPf0vMrzZSZLildlkYnGR8WOBO1s24gjNZrsvb/4ne%2bbf0raTsppX8AdCsmppA84HjI8elQBZAIi2BZgClIgO7NUCfK/6TW44/ErYmwb9tPa/OA326b4wayxTDB53kqR4NyptKGdmjjEUQ9ECbLUZL9iPp2oaJaof%2bwlu/poWoKbxI%2bpsn4TieT9AOTADiJ6uR3FAFgDilQNTgZA0%2bn%2bhdTszDj1BhcHl%2bJ763FnFcvsuQzGspgR%2bUGz8k40k9QVXFs4h0WCDrLKOfTQKHD2uAiWaQvsJzvn7A52U1azA3rFX2PWO8wX6e6qxwSPS18gCIDRagHnAylAE3%2b6u45yDj/OBwUE8p6KisbRmpeFe3TcUTGeQNVdQVpIU3/Ks2VyY/w3DcTY2rRLSZz8AHFD8dJzgk3%2bns5KSqhdD1dwH4EP0R6vR3yEtBskCIHScwBXA06EI3hJwcXH5v/hF3YchOyr4fMtWrzqugAAAEINJREFUNhvcyFOQmMmN/YwPPZGkvuSi/OnkJGYaitHiaaS0fY%2bhGH40Dip%2bnMcVEkeO%2bFXWvYVisCtoN54EFgKRPwYVp2QBEFoB4Dbg59BNm6wgKZrKg42fMOPQk5R6W4TG7lS8/L/6Dw3HubNoDqlmq4CMJKnvsJoTuazfLMNxttjW4guyAY9b09ivBnAdd/P3%2buyU1fyn64hfSCaZqsBPge%2bhn/eXQkQWAOHxf8AS9FUB4Ta7qplw4FEetW0QFvO3jaupN9h/YHzqQBbkTBCUkST1LedmT2BE6iBDMdwBJ7taNvb63zk0jQOqH%2b9xz/ztHfsprX4plEv%2bTvS%2bKn8M1QWkr8gCIHxeB6YDITnQ71b9LK1ZyVUVL9AScBmKVe5t5dEmY3sYTZi4p/8CTJgMxZGkvsoELCmaZ/hnaE/rFjp6sWnYrqkcUP0Ejvo9RfVS3fBfaho/QA3dKaQ69GN%2bb4bqAtKxZAEQXjvRd7OGrFPH6217GXfgL7xvYIPgPbXv4tUCp/6L3bg4ZyLjUgcaiiFJfd3glGLOzR5vKIaqKXxh%2b7RHf7dRUyhVA8cs7Dtc1ZQcXkZb50FDeZzCDuAbgLFJY1KvyAIg/OqAWcDyUF2gwd/JxWXP87O6/%2bLr5QbB1Z1lvNW%2bz9D1U81Wvl80x1AMSZJ0VxReSLI5yVCMw50l1Dq7n%2bNRpSpUqV%2b9X2iaQn3zOipqX8cfcBi6/im8CEwDQtI6UDo5WQBEhgu4FvgJIdrkoqLxh8a1TDv0Dw54bD36N4qmsrTW%2bMnFm/rNpCAxw3AcSZIgMyGNeflTDcfZ1LQa9QRH%2bRQ0StQAjUd9WPD6Wimr/g/N9q2EaKMf6Juk7wGuJwSzVKRTkwVAZD1MiM%2b4bnXVMuHAo9xX9/4pVwP%2b0byJ3W5jM8X7W3O4rmCaoRiSJB1rTv5UCgz20mjztnCwbccxv%2bfV4IASoK2rMNA0FZt9CyVVL%2bH2hvTofQv6/JQ/h/IiUvdkARB5a4DJ6G2EQ8KvKTzUuIbJBx9nk/PEq2x2xc0DDcbniS8tno/VYBczSZKOlWCysKjwAsNxtjWvx6voH7YdqOzX/F8e83N7myirXk5D83o0g3uATmEHcA6yp3/EyQIgOlSj7379dygvstvdwPSSJ7in9t2v9fb/Vf1HNAeMnVKcnD6M2VmnG4ohSdKJnZk5htPThxuK4VU8bG/egE1TOaAE8Gsaquqn3raGsqqXQ/2pH%2bBZ9Of93W9IkMJCFgDRwwV8u%2btl7BxfNxRN5c9N6xm3/y9fthLe52niyebNhuKaTWbu6b9ARIqSJJ3E4qK5mA1O1Nxv384BdwMa0Omq5NDhZTS3bRfSNrgbHuC7wC3I5/1RQ67VRp9/A7uAFcBpobpIpc/ORWXPsSR7PM2Ky3A74Stzz2akwVnmkiR1rzipgOk5Z7KuNfjTchoadbZPSLLm0tq%2bW2B2J1UCLEZ/X5OiiFwBiE470PcFvB7qC61o280nnWWGYmRaUrhdwPNJSZJO7bJ%2bs0izpBiK4XTXhuvm/wpwNvLmH5VkARC92tFbYv6AKF8yu61wFtkJqZFOQ5L6hDRLCgsKZkY6jVNxAbcD1yCH%2bUQtWQBEv7%2bjV9A7I53IiQxLKmBx3jmRTkOS%2bpRZuZPpn1QQ6TROZh96V7%2bnIp2I1D1ZAMSG/eg/UI8Rwq4cwfhR/4tIMFkinYYk9Slmk5nFxfMincaJLEM/4heW5wuSMbIAiB0e4IfAlUDPWvuF2IzMUUzNCNk%2bRUmSujEmbRjjoufnrwm4FLiREJ5iksSSBUDseRMYR4QnZiWaLCwtnh/JFCSpz1tSNC8aVuD%2bC0wCjPcRl8JKFgCxqQm4Av1MbUckErg6fwpDkvIjcWlJkroUWHM5P3dypC7fDtwMLATqI5WEFDxZAMS2Z4EJwCfhvKgJEwkmM07FG87LSpJ0HJfix2VKxIQp3JfegL45%2bflwX1gSJ%2bJrR5Jh7egbb1qAmYA1HBfd6aziLfs2TJgYnVIUDcuQ0glsdVayzVkZ1L8dlTaEUWlDBGckieBT/bzXsolna16j0lkezkt3AvcC3wdaw3lhSTz5rh0fNGAz8DIwFhgRjot6VD%2bbHGW80boVFY2xqf2xGGxTKoklC4D4EtAU1rft4InqV9nXeZBAaIf2HO8D9OX%2bj4iy00hScGQr4PhSCcwHlgD/APLCcVF7wMnj9R%2bxonkz1xdM48q8yXIioCQJpGgqW9r38HbTWuz%2btnBfvg34GfBP5I0/rsgVgPi0D/2xwFD0FYGwcKpePu8s5YO23aRbkjktuR8mU9ifTUpHkSsAsU3VVD5v28k/q19lY9suPKon3CmsAC5BH1suxRn5MS1%2b1aMP4LgY%2bCswLFwXrvXZeaD6DZ5rWsv1BdO4OGeSXBGQpF7wqwE2tu3k45ZN2HwRedReDtyJfsRPilNyBSD%2blaC35AwAUwlj0deuuFnXcYg3WrfSHnAxPLkfqZakcF1eQq4AxBpHwMWnrV/wXM0bbOnYh0sJ%2bxgQP/A39A8P%2b8J9cSm85MeyvsEN3I8%2bmesfwHnhvLg94ORftvUsb9nEJTmTuC5/KoOSwrI9QZJiQpOvlVXNG9nYvgu/GtaNfUf7FLgDOBCpBKTwkgVA37IPOB%2b9ZecyICucF/eqfl5r%2bYI3WrYwLXMk1%2bZP5dz04eFMQZKiSpW7nk9aN/NF%2bx5ULWL76zrRl/uXITf59SmyAOib3gH6A/9CHzkc1p16KhrrOw6xvuMQp6f055r8KVyUPUEeIZT6BA2NPZ2lfNC8gXJXTWRTgbeB6wFHJBORIkMWAH2XC/244FDgOWBWJJLY767j/uo3%2bFvDKhZmT%2bCqvHMotmZHIhVJCqn2QCeb2nazzr6NFl/Yj/IdbwtwLVAa6USkyJEFgFQJzEbfIPhHYHokkrD5O/iXbT3LbBuYnD6MK/ImMytzjOwwKMU0VdM45Kpkfes2dnQeRNXUSKf0BfAT5LE%2bCVkASF/5HL2V8GLg/4CIPJxX0djsKGezo5z8xAwuzp7IFXmTGWDNiUQ6khSUNn8Hm9v3sLZ1K63%2b9kinA1AF/BL5nF86iiwApKNp6I0/3gJuAn4LFEQqmWZ/5zGrAgtzJjIn6wySzImRSkmSTiqgKezqPMSmtl3sdZRGclPf0ezAQ8CjQNi7CEnRTRYA0on40HsHrEAf/HE3kB6pZI5eFXis/kPmZ09gbvY4xqUOiMQUNEn6kgZUuGrY2rGXL9r24lBckU7pCAfwF%2bAR9Fa%2bkvQ1sgCQumMHfgH8ma8KgZRIJtQacPJy8%2be83Pw5hYlZzM46nQuzzmBi2iBZDEhhU%2b%2b1sa19P5vbd2Pz2SOdztF86CN6fw00RDgXKcrJAkDqiWbgPuBx9OeINwMRX4dv9LezvHkjy5s3MtCay9zscczNPoORyUWRTk2KQzWeRra272Vrx36ao%2bumD/qN/xngd0BthHORYoQsAKTeqAFuR3%2bT%2bTFwGxFeETiixtfKc01rea5pLf2tOZyXOZqLcyYxJqU40qlJMezIJ/2tHXtp8LZEOp0T8QH/AR4AyiKcixRjZAEgBaMK%2bCHwB%2bCnRFEhAFDns3%2b5MjAsqYDpmaOYlnEaE9MGy6FEUrcCmkKJ8zD7HGXsdZRG600f9D4eT6Ef3a2LcC5SjJLvhpIRteiFwIPoKwK3A5kRzeg4FV4bFTYbL9g2kGq2Mjl9GNMyRjItY6RsOCQB0OJrY6%2bjlL2OMg46K/Gp/kin1J129HkefwaaIpyLFONkASCJ0Ii%2bEvC/wHfQi4FBEc3oBFyqj7UdB1nbcRCAAdYczk0fwczMUUzJGCFXB/oIvxagzFXNAUcFB5wVVLnrI51STzQAT6Lv7Je7%2biUh5DueJFIn%2bnnjfwDfQi8ExkU0o27U%2buy80bqFN1q3kGxOZHL6MM5JH86ZaUMYnVyEWc4miAuqplLtaaDEVcUhRyWHXIej/VP%2b0XYDDwMvo4/qlSRhZAEghcKRo0j/AuajHx%2bcD0TtHdWj%2br8cUASQZkliUupgzkwfyplpQxiTUixXCGJEQFM47K6j1FVFqbOKMlc1HtUX6bR6QwX%2bCzwGfITs3CeFiHxHk0JJA97veo1A3yz4XSDq%2b/o6FS8bOkvY0FkCgMVkZnBSHpNShzAxbRCnp/RnWHKB7D0QBdoDnVS5GyhzVVPmqqbKXY9fC0Q6rWB0on/SfxR9dLckhZQsAKRwKUPvJfAgepvhO4AxEc2oFxRNpcJjo8Jj443WLQDkJqQzOqWI0SnFX74GWnNkURAiGmDztVLjaaTaXU%2b1p5FqTwOdAWekUzPqAPpjs%2beBjgjnIvUhsgCQwq0DfWnzr8B56CsCVwFJkUwqGK0BB593lvJ551cTVdMsSYxMLmR4cj%2bGJ/VjeHIBw5P7kZcQsU7KMak94KDea6Pe06x/9dqo9TTG2lJ%2bdzzAa%2bhH%2bdZGOBepj5IFgBQpGvpI0jXoewS%2bjf6IIGZWBU7EqXjZ4axih7PqmN/PtKQwLLmAQdZcBibl6l%2b7fp1piZoWCmHlVNw0%2b%2bzYvny10uRrpcHbjEuJ27k1%2b9Fv%2bv8GWiOci9THyQJAigYtwJ%2b6XlPRi4FrgLg5qN%2bhuNnprGLncYUB6MVBYWIWRdYsihKzKLRmUZiYSWFiFjkJaeQlpJNhSY5A1sFzKx7aA04cipNWfwf2L1/ttPrbsfs74vkmfzw7sBz9pr8xwrlI0pdkASBFm8%2b7XkuBy9CLgfmAJZJJhVKH4qZDcVPiOfnsFqspgeyEVPIS0slNSCPDkkK6JZlMSzIZlmTSj7zMyVhMZtItSVhNCXQauMm6FDd1XhsBNYBb9aJoCh7Vh1vx4Fa8uFQ3LsXb9b89dChOOgJOHAEnAU0J%2brpxIoC%2b%2bfXfwNuAN7LpSNLXyd1KUiwoApagrwpMQ37fStFJBT5D782/Ar1BliRFLflGKsWageibBpcgiwEpOuxDv%2bH/GyiPcC6S1GPyzVOKZSOAK4ErgClEcaMhKa6o6M/y3wBeR970pRglCwApXuQDC9FXBuYB1simI8UZBf2mv6LrJSfwSTFPFgBSPEoDLgAuQS8KBkY2HSlG2YBPgZXoG/nkEB4prsgCQIp3JuAsYEHX61zk6RfpxALon/LfR%2b/Fvx3Zh1%2bKY7IAkPqaNPReA3O6Xmchfw76snLg467XR8hP%2bVIfIt/4pL6uCP1xwQxgJjAWuZkwXqnAXmAdsB5YjTyqJ/VhsgCQpGPlAtPRC4IZ6CsEsdWGTzrCDWxDv9mvBzagd%2bWTJAlZAEjSqSQAo4Gzu17TgTORqwTRqBz9Jr%2b16/UFsgOfJJ2ULAAkqfcygAnARGBS19dxQGokk%2bpDXMAeYAews%2bu1C%2biMZFKSFGtkASBJYliAkeiFwGjgDPTJhqORhUGwXMCBrte%2brq97gFL0c/mSJBkgCwBJCi0zMAQYBQxH71549Nf0yKUWFTrRl%2b7Lur4e%2bfUh4DDyGJ4khYwsACQpsgrQGxUNBAYDA476dUHXK5/Y%2b1nVgGb0ZjpNQDVQA9QCVV2/run6c0mSIiDW3lQkqS%2by8FUhcORrNpB13NcM9D4HKegnF9KBxK4/P7Jp0dz1%2b8ePV1YAB/pRObq%2btgP%2brt/3oO%2bqd3S92rr%2bvO2oXx%2b54R/5KpfpJSmK/X/3Au%2bCpcufRQAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect width='12' height='12' fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3e%3cuse xlink:href='%23image0_48_976' transform='scale(0.00195312)'/%3e%3c/pattern%3e%3cimage id='image0_48_976' width='512' height='512' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQustVlZ3/%2bLq1wGiFiKF1AYS4sCSpGmgHVmMMKApGgtt9ZAQihRCHJppRAbrKVVLFEuUqyirS31AjYNCAjS4oAUaIsUudiWQhkGShQsUBiBIsOs5p3Z55vznW%2bfs9/LWuu/Lr%2bTkEh43%2bdZ6/es7f%2b3373P%2bYIK/sQYv1rSX9j95%2bsl3WL3n5tJ%2bqKkz0r6nKQP7v7zsRDCtQWXSCsIQAACEIBAEgIxxhtJuvMu875Z0m0k3XaXe3%2b2y70p%2b/73LvM%2bFEL4dJLmM4qEGdesviTGeFdJ3yPpuyRdImkK/SU/n5f0Dkm/J%2bl3p/8bIViCj2shAAEIQKAUgV3gP0DSZbvcu5%2bkWy7sP8nAW3a598YQwkcW3j/78uQCEGO8g6RHS3qMpL86eyXzLvy4pFdI%2btUQwn%2bddwtXQQACEIAABPIRiDHeR9LflvQoSV%2bXsFOU9J8k/bqk3wgh/EnC2komALt3%2b0%2bV9IQVxrNmT2%2bT9NOSXhtCmCDxAwEIQAACEChCIMY45ed3S5py72EFmn5J0isl/ZMQwgdS9NssADHGr90F8WQ/0%2bcdpX/eI%2blpIYQ3l25MPwhAAAIQGI9AjPGBkl4o6Z6G3X9F0r%2bR9KwQwh9v6b9aAGKMN5X0I5J%2bXNJFWxaR6N7po4G/F0KYPj/hBwIQgAAEIJCUQIzxGyT9rKRHJC28rtj0hfmfkPTiEMI1a0qsEoAY4/Stxl%2bTNH3ZoaafCcgTQwiTDPADAQhAAAIQSEIgxvj9kn5J0vTbbDX9vHP63l0I4cNLF7VYAGKMf0PSL0u63dJmBa9/qaRnhBCmz0z4gQAEIAABCKwiEGP8KkkvkPRDqwqUuekzkh4fQnjVknaLBCDGOH3ZYXr84fisf8m%2bpmunX6N4eAhh%2btsC/EAAAhCAAAQWEYgxTm90X737lb5F9xounr4M/%2bwQwvTl%2bFk/swRg923H50l65qyq9Vz0fkkP4XsB9QyElUAAAhBogUCM8Y6SXi/p21tY77E1vljS0%2bf8zZy5AvDPJD2pMQhHy50%2bF7kshPDRRtfPsiEAAQhAoCCB3ffcrpA0/TG7Fn9eGkJ48qGFHxSAGOM/3H3T/1Ctmv/3q3YScGXNi2RtEIAABCDgJRBjvJOkKfwv9q5kc/fnhBCee1aVMwUgxvh3JP3i5mXUUYAnAXXMgVVAAAIQqJJAB%2b/8T3J9Qghh%2btL%2b3p9TBSDGeC9J/1nS9A3IXn54EtDLJNkHBCAAgYQEOnrnf5zK9Jtw9wshvHsfqr0CEGO8taTfl/QXE/KtpRQSUMskWAcEIACBCgh0Gv5HZD8k6S%2bHEK4%2bifo0AZgeGTy%2bgrnkWgIfB%2bQiS10IQAACDRHo8LH/PvovCyE88aAAxBjvu/vXh1r4Xf8tx4wnAVvocS8EIACBxgl0/s7/%2bHSulXT/EML0sf65n/OeAOz%2bLeN3SPorjc917vKRgLmkuA4CEIBARwQGCv%2bjqb1ryvbjfx/gpAD8oKSXdzTjOVvh44A5lLgGAhCAQCcEBnnsv29a078ZcO7fyjkpANM3BVv7q0cpjiRPAlJQpAYEIACBygkM%2bM7/%2bETeI%2bneIYTpzwbrnADEGB8q6XWVzy7n8pCAnHSpDQEIQMBMYPDwP6L/4BDCG08KwGskPcw8H3d7Pg5wT4D%2bEIAABDIQGPix/0mavxVCePg5AYgxTv%2b%2b8R9JulkG7q2V5ElAaxNjvRCAAATOIMA7//PgfFnS14YQPnXdRwAxxh%2bW9FJO0DkCSACHAQIQgEAHBAj/vUN8YgjhZUcC8AZJD%2b5g1im3wMcBKWlSCwIQgEBhAjz2PxX4b4cQvjfEGG8i6dOSLio8mxba8SSghSmxRghAAAInCPDO/8wj8TlJXz0JwPRHf87760CcpPMIIAEcCAhAAAINESD8Zw3rPpMAPEXSi2ddPu5FfBww7uzZOQQg0BABHvvPHtaTJwF4iaQnz75l3At5EjDu7Nk5BCDQAAHe%2bS8a0osmAfgdSQ9adNu4FyMB486enUMAAhUTIPwXD%2be3JwH4gKS7Lb513Bv4OGDc2bNzCECgQgI89l81lP8%2bCcD0B4DuuOr2cW/iScC4s2fnEIBARQR45796GB%2bfBOBqSbdeXWLcG5GAcWfPziEAgQoIEP6bhvDZSQCukXTjTWXGvZmPA8adPTuHAASMBHjsvxn%2bNZMAfF7SLTeXGrcATwLGnT07hwAEDAR4558E%2bp9OAvAJSXdIUm7cIkjAuLNn5xCAQEEChH8y2H80CcD/knTXZCXHLcTHAePOnp1DAAIFCPDYPynkD04C8GZJlyQtO24xngSMO3t2DgEIZCTAO//kcN80CcDLJD0heelxCyIB486enUMAAhkIEP4ZoEr/fBKAH5X0T7OUH7coHweMO3t2DgEIJCTAY/%2bEMM8v9XcnAXigpDdlazFuYZ4EjDt7dg4BCCQgwDv/BBBPL3HJJAC3kPQZSTfP2mrM4kjAmHNn1xCAwEYChP9GgGff/iVJtwvTNTHG/yjpAVnbjVscCRh39uwcAhBYQYDwXwFt2S1vCSFceiQAz5b0k8vu5%2boFBJCABbC4FAIQGJcA4V9k9s8MITz/SADuLOkjkq777/xkIYAEZMFKUQhAoBcChH%2bRSUZJdwkhXHUu8GOMb5N0/yLtx22CBIw7e3YOAQicQYDwL3Y83hpC%2bK6p23EBeJykXym2hHEb8SuC486enUMAAnsI8Kt%2bRY/FY0MILz8pADeV9CFJ08cB/OQlwJOAvHypDgEINEKAd/5FB/UxSReHEL58ngBM/yXG%2bAxJP1N0OeM2QwLGnT07hwAErs%2bcO0m6YgolgBQh8CMhhJ876nTel/52fxPgv0n6piJLoQkSwBmAAASGJED4Fx/7RyXdPYTwhb0CsHsK8AhJryy%2btHEbIgHjzp6dQ2BIAoS/ZezfH0J41fHOe3/tL8b4HyR9t2WJYzbli4Fjzp1dQ2A4AnzhzzLyN4YQHnyy82kCMH0u825Jt7csdcymPAkYc%2b7sGgLDEOCdv2XU05/6v/f0e/%2bzBGD3UcDDJP0Wfxyo6MCQgKK4aQYBCJQiQPiXIn1en%2bmP/kyP/l%2b9r/uZf/kvxjj9RsD0mwH8lCPAxwHlWNMJAhAoQIDH/gUg72/x/BDCM0/rfkgAbiTp1yU90rb8MRvzJGDMubNrCHRHgHf%2btpG%2bQtLfCiFcu0oAdh8F3EzSayQ9yLaNMRsjAWPOnV1DoBsChL9tlG%2bWdHkIYfpnf0/9mfWP/8QYL5L0ev7J4OLD5OOA4shpCAEIpCDAY/8UFFfVmP5dn4eEEK4%2bdPcsAdg9CbiVpNdKuvRQUf73pAR4EpAUJ8UgAIHcBHjnn5vwqfXfvnvnfzD8pwqzBQAJsA10aowEWPHTHAIQmEuA8J9LKvl1i8J/sQAgAckHtqQgErCEFtdCAALFCRD%2bxZEfNVwc/qsEAAmwDZgnAVb0NIcABM4iQPjbzseq8F8tAEiAbdBIgBU9zSEAgX0ECH/buVgd/psEAAmwDRwJsKKnOQQgcJwA4W87D5vCf7MAIAG2wSMBVvQ0hwAEdv//f/p3Y66QdDFEihLYHP5JBAAJKDr0k834YqAVP80hMC4B3vnbZp8k/JMJABJgOwg8CbCipzkExiRA%2bNvmniz8kwoAEmA7EEiAFT3NITAWAcLfNu%2bk4Z9cAJAA28FAAqzoaQ6BMQgQ/rY5Jw//LAKABNgOCBJgRU9zCPRNgPC3zTdL%2bGcTACTAdlCQACt6mkOgTwKEv22u2cI/qwAgAbYDgwRY0dMcAn0RIPxt88wa/tkFAAmwHRwkwIqe5hDogwDhb5tj9vAvIgBIgO0AIQFW9DSHQNsECH/b/IqEfzEBQAJsBwkJsKKnOQTaJED42%2bZWLPyLCgASYDtQSIAVPc0h0BYBwt82r6LhX1wAkADbwUICrOhpDoE2CBD%2btjkVD3%2bLACABtgOGBFjR0xwCdRMg/G3zsYS/TQCQANtBQwKs6GkOgToJEP62udjC3yoASIDtwCEBVvQ0h0BdBAh/2zys4W8XACTAdvCQACt6mkOgDgKEv20O9vCvQgCQANsBRAKs6GkOAS8Bwt/Gv4rwr0YAkADbQUQCrOhpDgEPAcLfw11SNeFflQAgAbYDiQRY0dMcAmUJEP5leR/rVlX4VycASIDtYCIBVvQ0h0AZAoR/Gc57ulQX/lUKABJgO6BIgBU9zSGQlwDhn5fvGdWrDP9qBQAJsB1UJMCKnuYQyEOA8M/DdUbVasO/agFAAmYcrXyXXCXpshDClflaUBkCEChBgPAvQXlvj6rDv3oBQAJsB5cnAVb0NIdAGgKEfxqOK6pUH/5NCAASsOLopbuFJwHpWFIJAkUJEP5FcR9v1kT4NyMASIDtIPMkwIqe5hBYR4DwX8ctwV3NhH9TAoAEJDia60vwJGA9O%2b6EQFEChH9R3E2%2b8z9adLChWtk4xngrSa%2bVdOnKEty2jgASsI4bd0GgGAHCvxjqk42aeuffrADwJMB2wPk4wIqe5hA4mwDhbzshTYZ/cx8BHB8vTwJsh50nATb0NIbAfgKEv%2b1kNBv%2bTQsATwJsB54nAVb0NIfA%2bQQIf9uJaDr8mxcAJMB28JEAK3qaQ%2bB6AoS/7SQ0H/5dCAASYHsBIAFW9DQfnQDhbzsBXYR/NwKABNheCEiAFT3NRyVA%2bNsm3034dyUASIDtBYEEWNHTfDQChL9t4l2Ff3cCgATYXhhIgBU9zUchQPjbJt1d%2bHcpAEiA7QWCBFjR07x3AoS/bcJdhn%2b3AoAE2F4oSIAVPc17JUD42ybbbfh3LQBIgO0FgwRY0dO8NwKEv22iXYd/9wKABNheOEiAFT3NeyFA%2bNsm2X34DyEASIDtBYQEWNHTvHUChL9tgkOE/zACgATYXkhIgBU9zVslQPjbJjdM%2bA8lAEiA7QWFBFjR07w1AoS/bWJDhf9wAoAE2F5YSIAVPc1bIUD42yY1XPgPKQBIgO0FhgRY0dO8dgKEv21CQ4b/sAKABNheaEiAFT3NayVA%2bNsmM2z4Dy0ASIDtBYcEWNHTvDYChL9tIkOH//ACgATYXnhIgBU9zWshQPjbJjF8%2bCMAu7MXY7yVpNdKutR2HMdsfJWky0IIV465fXY9MgHC3zZ9wn%2bHPthGUFljJMA2ECTAhp7GLgKEv4u8CP9j6BGAYzCQANuLEgmwoadxaQKEf2ni5/oR/ifQIwAngCABthcnEmBDT%2bNSBAj/UqQv6EP470GPAOyBggTYXqRIgA09jXMTIPxzEz61PuF/ChoE4BQwSIDtxYoE2NDTOBcBwj8X2YN1Cf8zECEAZ8BBAg6%2buHJdgATkIkvd4gQI/%2bLIjxoS/gfQIwAHACEBthcvEmBDT%2bNUBAj/VCQX1yH8ZyBDAGZAQgJmQMpzCRKQhytVCxAg/AtA3t%2bC8J%2bJHgGYCQoJmAkq/WVIQHqmVMxMgPDPDPj08oT/AvQIwAJYSMACWGkvRQLS8qRaRgKEf0a4Z5cm/BeiRwAWAkMCFgJLdzkSkI4llTIRIPwzgT1clvA/zOiCKxCAFdCQgBXQ0tyCBKThSJUMBAj/DFDnlST853FCAFZyuuA2JCAVycV1kIDFyLghNwHCPzfhU%2bsT/hvQ8wRgAzwkYAO8bbciAdv4cXdCAoR/QpjLShH%2by3jxBGAjL54EpAa4vh4SsJ4ddyYiQPgnArm8DOG/nBkCkIAZEpAD4rqaSMA6btyVgADhnwDiuhKE/zpuCEAibkhALpDL6yIBy5lxx0YChP9GgOtvJ/zXs0MAErJDAnLCXFYbCVjGi6s3ECD8N8Dbdivhv40fApCYHxKQG%2bj8%2bkjAfFZcuZIA4b8S3PbbCP/tDBGADAyRgBJQ5/VAAuZx4qoVBAj/FdDS3EL4p%2bGIAGTiiASUAnu4DxJwmBFXLCRA%2bC8Elu5ywj8dSwQgI0skoCTcs3shAfXMovmVEP62ERL%2bmdHzh4AyA%2baPBWUGfHp5JMCGvp/GhL9tloR/AfQIQAHISEAByPtbIAE29O03JvxtMyT8C6FHAAqBRgIKgb6wDRJgQ99uY8LfNjvCvyB6BKAgbCSgIOzzWyEBNvTtNSb8bTMj/AujRwAKA0cCCgO/oR0SYEPfTmPC3zYrwt%2bAHgEwQEcCDNCvb4kE2NDX35jwt82I8DehRwBM4JEAE3gkwAa%2b5saEv206hL8NvYQAGOEjATb4PAmwoa%2bvMeFvmwnhb0N/fWMEwDwAJMA2ACTAhr6exoS/bRaEvw39DY0RgAqGgATYhoAE2ND7GxP%2bthkQ/jb05zdGACoZBBJgGwQSYEPva0z429gT/jb0FzZGACoaBhJgGwYSYENfvjHhX575riPhb0O/vzECUNlAkADbQJAAG/pyjQn/cqxPdCL8behPb4wAVDgUJMA2FCTAhj5/Y8I/P%2bNTOhD%2bNvRnN0YAKh0MEmAbDBJgQ5%2bvMeGfj%2b2ByoS/Df3hxgjAYUa2K5AAG3okwIY%2bfWPCPz3TmRUJ/5mgXJchAC7yM/siATNBpb8MCUjPtHhFwr848qOGhL8N/fzGCMB8VrYrkQAbeiTAhn57Y8J/O8OVFQj/leBK34YAlCa%2bsh8SsBLc9tuQgO0Mi1cg/Isj552/Dfn6xgjAenbF70QCiiM/aogE2NAvb0z4L2eW6A7e%2bScCWaoMAlCKdKI%2bOwl4naRLEpWkzDwCSMA8TtarCH8bfsLfhn59YwRgPTvbnUiADT0SYEN/uDHhf5hRpium8H9ICOFzmepTNhMBBCAT2NxlkYDchE%2btjwTY0J/emPC3DYXwt6Hf3hgB2M7QVgEJsKFHAmzoL2xM%2bNuGQfjb0KdpjACk4WirggTY0CMBNvQ3NCb8bUMg/G3o0zVGANKxtFVCAmzokQAbeonwt8En/G3o0zZGANLytFVDAmzokQADesLfAP36loS/DX36xghAeqa2ikiADT0SUBA94V8Q9vmtCH8b%2bjyNEYA8XG1VkQAbeiSgAHrCvwDk/S0Ifxv6fI0RgHxsbZWRABt6JCAjesI/I9yzSxP%2bNvR5GyMAefnaqiMBNvRIQAb0hH8GqPNKEv7zODV5FQLQ5NjmLRoJmMcpw1VIQEKohH9CmMtKEf7LeDV3NQLQ3MiWLRgJWMYr4dVIQAKYhH8CiOtKEP7ruDV1FwLQ1LjWLRYJWMctwV1IwAaIhP8GeNtuJfy38WvmbgSgmVFtWygSsI3fhruRgBXwCP8V0NLcQvin4dhEFQSgiTGlWSQSkIbjiipIwAJohP8CWGkvJfzT8qy%2bGgJQ/YjSLhAJSMtzQTUkYAYswn8GpDyXEP55uFZdFQGoejx5FocE5OE6oyoScAYkwn/GCcpzCeGfh2v1VRGA6keUZ4FIQB6uM6oiAXsgEf4zTk6eSwj/PFybqIoANDGmPItEAvJwnVEVCTgGifCfcWLyXEL45%2bHaTFUEoJlR5VkoEpCH64yqSID4J31nnJNclxD%2bucg2VBcBaGhYuZaKBOQie7Du0BLAO/%2bD5yPXBYR/LrKN1UUAGhtYruUiAbnIHqw7pAQQ/gfPRa4LCP9cZBusiwA0OLRcS0YCcpE9WHcoCSD8D56HXBcQ/rnINloXAWh0cLmWjQTkInuw7hASQPgfPAe5LiD8c5FtuC4C0PDwci0dCchF9mDdriWA8D84/1wXEP65yDZeFwFofIC5lo8E5CJ7sG6XEkD4H5x7rgsI/1xkO6iLAHQwxFxbQAJykT1YtysJIPwPzjvXBYR/LrKd1EUAOhlkrm0gAbnIHqzbhQQQ/gfnnOsCwj8X2Y7qIgAdDTPXVpCAXGQP1m1aAgj/g/PNdQHhn4tsZ3URgM4Gmms7SEAusgfrNikBhP/Buea6gPDPRbbDughAh0PNtSUkIBfZg3WbkgDC/%2bA8c11A%2bOci22ldBKDTwebaFhKQi%2bzBuk1IAOF/cI65LiD8c5HtuC4C0PFwc20NCchF9mDdqiWA8D84v1wXEP65yHZeFwHofMC5tocE5CJ7sG6VEkD4H5xbrgsI/1xkB6iLAAww5FxbRAJykT1YtyoJIPwPzivXBYR/LrKD1EUABhl0rm0iAbnIHqxbhQQQ/gfnlOsCwj8X2YHqIgADDTvXVpGAXGQP1rVKAOF/cD65LiD8c5EdrC4CMNjAc20XCchF9mBdiwQQ/gfnkusCwj8X2QHrIgADDj3XlpGAXGQP1i0qAYT/wXnkuoDwz0V20LoIwKCDz7VtJCAX2YN1i0gA4X9wDrkuIPxzkR24LgIw8PBzbR0JyEX2YN2sEkD4H%2bSf6wLCPxfZwesiAIMfgFzbRwJykT1YN4sEEP4Huee6gPDPRZa6QgA4BNkIIAHZ0B4qnFQCCP9DuLP974R/NrQUngggAJyDrASQgKx4zyqeRAIIf9v8CH8b%2bnEaIwDjzNq2UyTAhn6TBBD%2btrkR/jb0YzVGAMaat223SIAN/SoJIPxt8yL8bejHa4wAjDdz246RABv6RRJA%2bNvmRPjb0I/ZGAEYc%2b62XSMBNvSzJIDwt82H8LehH7cxAjDu7G07RwJs6M%2bUAMLfNhfC34Z%2b7MYIwNjzt%2b0eCbCh3ysBhL9tHoS/DT2NEQDOgI0AEmBDf54EEP62ORD%2bNvQ0ngggAJwDKwEkwIb/OgmQdI2kKyRdbFvJmI0J/zHnXtWuEYCqxjHmYmKMF0l6g6T7j0nAtusP794E3MW2gjEbT%2bF/eQjh6jG3z65rIYAA1DKJwdfBk4DBD8A42%2bed/zizrn6nCED1IxpngUjAOLMedKeE/6CDr3XbCECtkxl0XUjAoIPvf9uEf/8zbm6HCEBzI%2bt/wUhA/zMebIeE/2ADb2W7CEArkxpsnUjAYAPvd7uEf7%2bzbX5nCEDzI%2bx3A0hAv7MdZGeE/yCDbnWbCECrkxtk3UjAIIPub5uEf38z7W5HCEB3I%2b1vQ0hAfzPtfEeEf%2bcD7mV7CEAvk%2bx8H0hA5wPuZ3uEfz%2bz7H4nCED3I%2b5ng0hAP7PsdCeEf6eD7XVbCECvk%2b10X0hAp4Ntf1uEf/szHG4HCMBwI29/w0hA%2bzPsbAeEf2cDHWU7CMAok%2b5sn0hAZwNtdzuEf7uzG37lCMDwR6BdAEhAu7PrZOWEfyeDHHUbCMCok%2b9k30hAJ4NsbxuEf3szY8UnCCAAHInmCSABzY%2bwtQ0Q/q1NjPXuJYAAcDC6IIAEdDHGFjZB%2bLcwJdY4iwACMAsTF7VAAAloYUpNr5Hwb3p8LP4kAQSAM9EVASSgq3HWtBnCv6ZpsJYkBBCAJBgpUhMBJKCmaXSxFsK/izGyCZ4AcAaGIIAEDDHmEpsk/EtQpoeFAE8ALNhpWoIAElCCctc9CP%2bux8vmEADOQNcEkICux5tzc4R/TrrUroIAAlDFGFhETgJIQE66XdYm/LscK5viOwCcgSEJIAFDjn3Npgn/NdS4p0kCPAFocmwseg0BJGANtaHuIfyHGjebRQA4A0MRQAKGGveSzRL%2bS2hxbRcEEIAuxsgmlhBAApbQGuJawn%2bIMbNJvgPAGYCAJCSAY7AjQPhzFIYlwBOAYUfPxpGA4c8A4T/8ERgbAAIw9vyH3z0SMOwRIPyHHT0bPyKAAHAWhieABAx3BAj/4UbOhvcRQAA4FxDgOwEjnQHCf6Rps9czCSAAHBAI7AjwJKD7o0D4dz9iNriEAAKwhBbXdk8ACeh2xIR/t6NlY2sJIABryXFftwSQgO5GS/h3N1I2lIIAApCCIjW6I4AEdDNSwr%2bbUbKR1AQQgNREqdcNASSg%2bVES/s2PkA3kJIAA5KRL7eYJIAHNjpDwb3Z0LLwUAQSgFGn6NEsACWhudIR/cyNjwQ4CCICDOj2bI4AENDMywr%2bZUbFQNwEEwD0B%2bjdDAAmoflSEf/UjYoE1EUAAapoGa6meABJQ7YgI/2pHw8JqJYAA1DoZ1lUtASSgutEQ/tWNhAW1QAABaGFKrLE6AkhANSMh/KsZBQtpjQAC0NrEWG81BJAA%2bygIf/sIWEDLBBCAlqfH2u0EYozfKum9km5kX8xYC7hW0r1CCH841rbZLQTSEUAA0rGk0mAEYox3knSFpIsH23ot2/2opEtDCFfWsiDWAYGWCCAALU2LtVZDgPCvZhRIQDWjYCGtEUAAWpsY67UTIPztIzi5ACSgupGwoBYIIAAtTIk1VkOA8K9mFEhAtaNgYa0QQABamRTrtBMg/O0jOLQAngQcIsT/DoFjBBAAjgMEZhAg/GdAquMSJKCOObCKBgggAA0MiSV6CRD%2bXv4ruiMBK6Bxy3gEEIDxZs6OFxAg/BfAqutSJKCuebCaCgkgABUOhSXVQYDwr2MOG1aBBGyAx639E0AA%2bp8xO1xBgPBfAa3OW5CAOufCqioggABUMASWUBcBwr%2bueSRYDRKQACIl%2biOAAPQ3U3a0gQDhvwFe3bciAXXPh9UZCCAABui0rJMA4V/nXBKuCglICJNS7RNAANqfITtIQIDwTwCxjRJIQBtzYpUFCCAABSDTom4ChH/d88mwOiQgA1RKtkcAAWhvZqw4IQHCPyHMtkohAW3Ni9VmIIAAZIBKyTYIEP5tzCnjKpGAjHApXT8BBKD%2bGbHCDAQI/wxQ2yyJBLQ5N1adgAACkAAiJdoiQPi3Na8Cq0UCCkCmRX0EEID6ZsKKMhIg/DPCbbs0EtD2/Fj9CgIIwApo3NImAcK/zbkVXDUSUBA2rfwEEAD/DFhBAQKEfwHIfbRAAvqYI7uYQQABmAGJS9omQPi3PT/D6pEAA3RalieAAJRnTseCBAj/grD7aoUE9DVPdrOHAALAseiWAOHf7WhLbQwJKEWaPhYCCIAFO01zEyD8cxMepj4SMMyox9soAjDezLvfMeHf/YhLbxAJKE2cfkUIIABFMNOkFAHCvxTp4fogAcONvP8NIwD9z3iYHRL%2bw4zatVEkwEWevlkIIABZsFK0NAHCvzTxYfshAcOOvr%2bNIwD9zXS4HRH%2bw43cvWEkwD2K7RRWAAAZb0lEQVQB%2bichgAAkwUgRFwHC30V%2b%2bL5IwPBHoH0ACED7Mxx2B4T/sKOvZeNIQC2TYB2rCCAAq7Bxk5sA4e%2beAP13BJAAjkKzBBCAZkc37sIJ/3FnX%2bnOkYBKB8OyziaAAHBCmiJA%2bDc1rpEWiwSMNO1O9ooAdDLIEbZB%2bI8w5ab3iAQ0Pb7xFo8AjDfzJndM%2bDc5thEXjQSMOPVG94wANDq4kZZN%2bI807S72igR0Mcb%2bN4EA9D/jpndI%2bDc9vpEXjwSMPP1G9o4ANDKoEZdJ%2bI849a72jAR0Nc7%2bNoMA9DfTLnZE%2bHcxRjYhIQGcgmoJIADVjmbchRH%2b486%2b050jAZ0OtvVtIQCtT7Cz9RP%2bnQ2U7RwRQAI4C9URQACqG8m4CyL8x539IDtHAgYZdCvbRABamVTn6yT8Ox8w2%2bNJAGegOgIIQHUjGW9BMcY7S7pC0l3H2711x2%2bTdCNJ97OuYrzmH5Z0WQhheiLADwRsBBAAG3oaTwR45287B2%2bXdLmkayW9TtIltpWM2ZiPA8ace1W7RgCqGsdYiyH8bfO%2bLvxDCFfvJOxWSIBlFkiABTtNjwggAJwFCwHC34J9anpe%2bB%2btIsaIBHhGggR4uNNVEgLAMShOgPAvjvyo4d7wRwJs8zhqfNXuOwFX2lfCAoYigAAMNW7/Zgl/2wzODH8kwDYXJMCOftwFIADjzr74zgn/4shnvfM/uSo%2bDrDNiScBNvRjNkYAxpx78V0T/sWRrwp/ngTY5sSTADv68RaAAIw38%2bI7JvyLI98U/kiAbV5IgB39WAtAAMaad/HdEv7FkScJfyTANjckwI5%2bnAUgAOPMuvhOCf/iyJOGPxJgmx8SYEc/xgIQgDHmXHyXhH9x5FnCHwmwzREJsKPvfwEIQP8zLr5Dwr848qzhjwTY5okE2NH3vQAEoO/5Ft8d4V8ceZHwRwJsc0UC7Oj7XQAC0O9si%2b%2bM8C%2bOvGj4IwG2%2bSIBdvR9LgAB6HOuxXdF%2bBdHbgl/JMA2ZyTAjr6/BSAA/c20%2bI4I/%2bLIreGPBNjmjQTY0fe1AASgr3kW3w3hXxx5FeGPBNjmjgTY0fezAASgn1kW3wnhXxx5VeGPBNjmjwTY0fexAASgjzkW3wXhXxx5leGPBNjOARJgR9/%2bAhCA9mdYfAeEf3HkVYc/EmA7D0iAHX3bC0AA2p5f8dUT/sWRNxH%2bSIDtXCABdvTtLgABaHd2xVdO%2bBdH3lT4IwG284EE2NG3uQAEoM25FV814V8ceZPhjwTYzgkSYEff3gIQgPZmVnzFhH9x5E2HPxJgOy9IgB19WwtAANqaV/HVEv7FkXcR/kiA7dwgAXb07SwAAWhnVsVXSvgXR95V%2bCMBtvODBNjRt7EABKCNORVfJeFfHHmX4Y8E2M4REmBHX/8CEID6Z1R8hYR/ceRdhz8SYDtPSIAdfd0LQADqnk/x1RH%2bxZEPEf5IgO1cIQF29PUuAAGodzbFV0b4F0c%2bVPgjAbbzhQTY0de5AASgzrkUXxXhXxz5kOGPBNjOGRJgR1/fAhCA%2bmZSfEWEf3HkQ4c/EmA7b0iAHX1dC0AA6ppH8dUQ/sWRE/7HkMcYbyXpdZIusU1izMZXSboshHDlmNtn1xMBBGDgc0D424b/dkmXhxCutq2gosZIgG0YSIANfR2NEYA65lB8FYR/ceS88z8DORJgO49IgA29vzEC4J9B8RUQ/sWRE/4zkCMBMyDluQQJyMO1%2bqoIQPUjSrtAwj8tzwXVeOw/AxYSMANSnkuQgDxcq66KAFQ9nrSLI/zT8lxQjfBfAAsJWAAr7aVIQFqe1VdDAKofUZoFEv5pOK6oQvivgIYErICW5hYkIA3HJqogAE2MadsiCf9t/DbcTfhvgIcEbIC37VYkYBu/Zu5GAJoZ1bqFEv7ruCW4i/BPABEJSABxXQkkYB23pu5CAJoa17LFEv7LeCW8mvBPCBMJSAhzWSkkYBmv5q5GAJob2bwFE/7zOGW4ivDPABUJyAB1XkkkYB6nJq9CAJoc29mLJvxtQyX8M6JHAjLCPbs0EmBDn7cxApCXb/HqhH9x5EcNCf8C6JGAApD3t0ACbOjzNUYA8rEtXpnwL46c8DcgRwIM0K9viQTY0OdpjADk4Vq8KuFfHDnhb0MuIQE2%2bEiADX36xghAeqbFKxL%2bxZET/jbkNzRGAmxDQAJs6NM2RgDS8ixejfAvjpzwtyG/sDESYBsGEmBDn64xApCOZfFKhH9x5IS/DfnpjZEA21CQABv6NI0RgDQci1ch/IsjJ/xtyA83RgIOM8p0BRKQCWyJsghACcqJexD%2biYHOL8ev%2bs1nVfxKJKA48qOGSIAN/bbGCMA2fsXvJvyLI%2bedvw358sZIwHJmie5AAhKBLFkGAShJe2Mvwn8jwPW3885/PbvidyIBxZHzJMCGfFtjBGAbv2J3E/7FUJ9sRPjb0K9vjASsZ7fxTp4EbARY8nYEoCTtlb0I/5Xgtt9G%2bG9naKuABNjQIwE29MsaIwDLeBW/mvAvjvyoIeFvQ5%2buMRKQjuXCSkjAQmCOyxEAB/WZPQn/maDSX0b4p2dqq4gE2NAjATb08xojAPM4Fb%2bK8C%2bOnHf%2bNuT5GyMB%2bRmf0gEJsKE/3BgBOMyo%2bBWEf3HkhL8NebnGSEA51ic6IQE29Gc3RgAqGwzhbxsIj/1t6Ms1RgLKsUYCbKxnN0YAZqPKfyHhn5/xKR0Ifxv68o2RgPLMdx15EmBDv78xAlDJQAh/2yAIfxt6X2MkwMYeCbChv7AxAlDBMAh/2xAIfxt6f2MkwDYDJMCG/vzGCIB5EIS/bQCEvw19PY2RANsskAAb%2bhsaIwDGIRD%2bNviEvw19fY2RANtMkAAb%2busbIwCmARD%2bJvAS4W9DX29jJMA2GyTAhh4BsKAn/C3Yp6aEvw19/Y2RANuMkAATep4AFAZP%2bBcGfkM7wt%2bGvp3GSIBtVkiAAT0CUBA64V8Q9vmtCH8b%2bvYaIwG2mSEBhdEjAIWAE/6FQF/YhvC3oW%2b3MRJgmx0SUBA9AlAANuFfAPL%2bFoS/DX37jZEA2wyRgELoEYDMoAn/zIBPL0/429D30xgJsM0SCSiAHgHICJnwzwj37NKEvw19f42RANtMkYDM6BGATIAJ/0xgD5cl/A8z4oqFBJCAhcDSXY4EpGN5QSUEIANcwj8D1HklCf95nLhqBQEkYAW0NLcgAWk4IgCZOJ4rS/jnJnxqfcLfhn6cxkiAbdZIQAb0PAFICJXwTwhzWSnCfxkvrt5AAAnYAG/brUjANn48AUjMj3f%2buYDOr0v4z2fFlYkIIAGJQC4vgwQsZ3bqHTwBSACTd/4JIK4rQfiv48ZdCQggAQkgriuBBKzjxhOARNx4558a5PJ6hP9yZtyRmAASkBjo/HJIwHxWPAFIwOqCErzzz0F1Vk3CfxYmLipBAAkoQXlvDyRgI3o%2bAlgJkPBfCW77bYT/doZUSEwACUgMdH45JGA%2bKz4C2MCKx/4p4G2rQfhv48fdGQkgARnhnl0aCViJnicAC8Hxzn8hsHSXE/7pWFIpEwEkIBPYw2WRgMOMeAKwghHv/LdAS3Mv4Z%2bGI1UKEEACCkDe3wIJWIieJwAzgfHOfyao9JcR/umZUjEzASQgM%2bDTyyMBC9AjADNgEf4zIOW5hPDPw5WqBQggAQUg8yRgE2QE4AA%2bwn/T%2bdpyM%2bG/hR73VkEACbCNgScBM9AjAGdAIvxnnKA8lxD%2bebhS1UAACTBAv74lEnAAPQJwCiDC3/aiJfxt6GmciwASkIvswbpIwBmIEIA9cAj/gy%2bqXBcQ/rnIUtdOAAmwjQAJOAU9AnACDOFve5ES/jb0NC5FAAkoRfqCPkjAHvQIwDEohL/txUn429DTuDQBJKA08XP9kIAT6BGAHRDC3/aiJPxt6GnsIoAEuMjzxcDj5BEASYS/7cVI%2bNvQ09hNAAmwTYAnATv0wwsA4W97ERL%2bNvQ0roUAEmCbBBIgaWgBIPxtLz7C34aexrURQAJsExleAoYVAMLf9qIj/G3oaVwrASTANpmhJWBIASD8bS82wt%2bGnsa1E0ACbBMaVgKGEwDC3/Yim8L/ISGEz9lWQGMIVE4ACbANaEgJGEoACH/bi4vwt6GncWsEkADbxIaTgGEEgPC3vagIfxt6GrdKAAmwTW4oCRhCAAh/24uJ8Lehp3HrBJAA2wSHkYDuBYDwt72ICH8behr3QgAJsE1yCAnoWgAIf9uLh/C3oadxbwSQANtEu5eAbgWA8Le9aAh/G3oa90oACbBNtmsJ6FIACH/bi4Xwt6Gnce8EkADbhLuVgO4EgPC3vUgIfxt6Go9CAAmwTbpLCehKAAh/24uD8Lehp/FoBJAA28S7k4BuBIDwt70oCH8behqPSgAJsE2%2bKwnoQgAIf9uLgfC3oafx6ASQANsJ6EYCmhcAwt/2IiD8behpDIHrCSABtpPQhQQ0LQCEv%2b3wE/429DSGwPkEkADbiWheApoVAMLfdugJfxt6GkNgPwEkwHYympaAJgWA8LcddsLfhp7GEDibABJgOyHNSkBzAkD42w454W9DT2MIzCOABMzjlOGqJiWgKQEg/DMc23klCf95nLgKAnYCSIBtBM1JQDMCQPjbDjXhb0NPYwisI4AErOOW4K6mJKAJASD8ExzLdSUI/3XcuAsCdgJIgG0EzUhA9QJA%2bNsOMeFvQ09jCKQhgASk4biiShMSULUAEP4rjl2aWwj/NBypAgE7ASTANoLqJaBaASD8bYeW8LehpzEE8hBAAvJwnVG1agmoUgAI/xnHKs8lhH8erlSFgJ0AEmAbQbUSUJ0AEP62Q0r429DTGAJlCCABZTjv6VKlBFQlAIS/7XAS/jb0NIZAWQJIQFnex7pVJwHVCADhbzuUhL8NPY0h4CGABHi4S6pKAqoQAMLfdhgJfxt6GkPASwAJsPGvRgLsAkD42w4h4W9DT2MI1EEACbDNoQoJsAoA4W87fIS/DT2NIVAXASTANg%2b7BNgEgPC3HTrC34aexhCokwASYJuLVQIsAkD42w4b4W9DT2MI1E0ACbDNxyYBxQWA8LcdMsLfhp7GEGiDABJgm5NFAooKAOFvO1yEvw09jSHQFgEkwDav4hJQTAAIf9uhIvxt6GkMgTYJIAG2uRWVgCICQPjbDhPhb0NPYwi0TQAJsM2vmARkFwDC33aICH8behpDoA8CSIBtjkUkIKsAEP62w0P429DTGAJ9EUACbPPMLgHZBIDwtx0awt%2bGnsYQ6JMAEmCba1YJyCIAhL/tsBD%2bNvQ0hkDfBJAA23yzSUByASD8bYeE8LehpzEExiCABNjmnEUCkgoA4W87HIS/DT2NITAWASTANu/kEpBMAAh/26Eg/G3oaQyBMQkgAba5J5WAJAJA%2bNsOA%2bFvQ09jCIxNAAmwzT%2bZBGwWAMLfdggIfxt6GkMAAhMBJMB2DpJIwCYBIPxtwyf8behpDAEIHCeABNjOw2YJWC0AhL9t6IS/DT2NIQCBfQSQANu52CQBqwSA8LcNm/C3oacxBCBwFgEkwHY%2bVkvAYgEg/G1DJvxt6GkMAQjMIYAEzKGU5ZpVErBIAAj/LIObU5Twn0OJayAAATsBJMA2gsUSMFsACH/bUAl/G3oaQwACawggAWuoJblnkQTMEoBd%2bL9Z0l2TLJEicwlM4X95COHquTdwHQQgAIEaCMQYbyPp9ZLuX8N6BlrDhyVdGkL42KE9HxSAGOPtJb1V0t0PFeN/T0qAd/5JcVIMAhAoTYAnAaWJn%2bv3QUnfGUL45FkrOFMAYoy3lPTvMbjiQyT8iyOnIQQgkIMAEpCD6qya/0XSA0MInz/t6lMFIMY4/W//TtL3zWrFRakI8Ng/FUnqQAACVRCIMV4k6Q28mSw%2bjinD/2YIIe7rfJYAPE3SC4ovd%2byGvPMfe/7sHgLdEuBJgG20TwkhvGS2AMQY7yPpbZJublvyeI0J//Fmzo4hMBQBJMAy7i9Jul8I4d0nu1/wBCDGeGNJ75L0bZaljtmU8B9z7uwaAsMRQAIsI3%2b/pHuHEK453n2fADxV0gstSxyzKeE/5tzZNQSGJYAEWEb/pBDCz58qADHGO0j6gKTbWZY3XlO%2b8DfezNkxBCBw/T8lzBcDy56ET0u6WwjhU0dtz3sCEGP8KUnPKrumYbvxzn/Y0bNxCEBgIsCTgOLn4LkhhOdcIAA7G/so7/6LDITwL4KZJhCAQO0EkICiE5qeAnxjCOFPp67nngDEGJ8h6WeKLmXMZjz2H3Pu7BoCEDiFAB8HFD0aTwshvOikALxP0j2KLmO8ZrzzH2/m7BgCEJhBgCcBMyClueS9IYTrfsvvuicAMcbpv/xBmtpUOYUA4c/RgAAEIHAGASSg2PG4Zwjh/UcC8DxJf79Y6/Ea8dh/vJmzYwhAYAUBPg5YAW35LT8ZQvixIwGY/kLQty%2bvwR0zCPDOfwYkLoEABCBwRIAnAdnPwu%2bHEO4bYoy3lTT9XuD0FwD5SUuA8E/Lk2oQgMAgBJCArIP%2biqTbTwLwMEmvydpqzOI89h9z7uwaAhBIRICPAxKB3F/moZMA/ANJz83aZrzivPMfb%2bbsGAIQyECAJwEZoF5f8tmTAPwrSY/N1mK8woT/eDNnxxCAQEYCSEAWuP9iEoApsO6Xpfx4RQn/8WbOjiEAgQIEkIDkkN86CcCVkr4peenxCvKZ/3gzZ8cQgEBBAnwnICnsD08C8CeSviZp2fGK8c5/vJmzYwhAwECAJwHJoH9iEoAvSvqqZCXHK0T4jzdzdgwBCBgJIAFJ4H9hEoAvS7pJknLjFeGx/3gzZ8cQgEAFBPg4YPMQvjwJwGcl3WZzqfEK8M5/vJmzYwhAoCICPAnYNIzPTALwcUlft6nMeDcT/uPNnB1DAAIVEkACVg/lY5MA/KGkb1ldYrwbeew/3szZMQQgUDEBPg5YNZz3TQIw/Rng6c8B83OYAO/8DzPiCghAAALFCfAkYDHyV00C8LOSnr741vFuIPzHmzk7hgAEGiKABCwa1vMnAXiipF9YdNt4F/PYf7yZs2MIQKBBAnwcMHtoT5gE4B6S3jf7lvEu5J3/eDNnxxCAQMMEeBIwa3h3nwQgSPpjSXeYdctYFxH%2bY82b3UIAAp0QQALOHOQnJd1xCn/FGP%2btpB/oZO6ptsFj/1QkqQMBCEDAQICPA06F/soQwqOOBOAxkn7NMJ9aW/LOv9bJsC4IQAACCwjwJGAvrEeGEH7zSABuKekTkm69gGuvlxL%2bvU6WfUEAAkMSQALOG/vVkv58COGL1wnA7mOAl0v6wSFPxw2b5rH/4AeA7UMAAn0S4OOAc3P91yGEx03/7bgAfIekd/Y5%2blm74p3/LExcBAEIQKBNAjwJuG5u3xFCeNd5ArB7CvC7ki5rc7SbVk34b8LHzRCAAATaIDC4BLwxhPDgo0mdewKwE4AHSfqdNsaYbJU89k%2bGkkIQgAAE6icw8McBDwwhXLFXAHYS8FpJ31v/CJOskHf%2bSTBSBAIQgEBbBAZ8EvDqEML3HZ/SeU8AdgJwsaTpXwi8eVvjXLxawn8xMm6AAAQg0A%2bBgSTgS5LuGUL44JkCsJOAn5D0nH7GfMFOeOzf8XDZGgQgAIG5BAb5OODHQwj/6CSTC54A7ATgJpLeLOkBcyE2dB3v/BsaFkuFAAQgkJtA508C3ipp%2buz/mlkCsJOAb5D0B5Junxt%2bwfqEf0HYtIIABCDQCoFOJeAzku4dQrhq3xz2PgE4ujDG%2bD2Spi8F3qyVIZ6xTh77dzBEtgABCEAgF4HOPg74M0kPDSG86TReZwrA7knAoyX9qqQb5YJeoC7v/AtApgUEIACB1gl08iQgSnpcCGH6C7%2bn/hwUgJ0EPFXSC47/5cCGhvw2SQ8JIUx//5gfCEAAAhCAwJkEdk8CXt/o9%2bCm8H96COFFh8Y8SwB2EjD97eBfkjR9QbCVn9dIenQI4QutLJh1QgACEICAn0CMcfpV%2bOnp9w/4VzN7BV%2bR9KQQwi/OuWO2AOwk4K9L%2bg1Jt5hT3HzNL0v6oX3ffDSvi/YQgAAEINAAgRjj9Ib3FyQ9voHlTm90pze80xvfWT%2bLBGAnAd8i6RWS7jGrQ/mL/p%2bkZ815/FF%2baXSEAAQgAIHWCMQYHyvp5yXdstK1/49d%2bL9nyfoWC8BOAm4t6SXTlwyWNCtw7QThUSGE9xboRQsIQAACEBiEQIzx23ZPwP9SZVv%2bl5KeEkL4/NJ1rRKAoyYxxgdKerGkb13aOPH106OP50t6XghhegLADwQgAAEIQCApgRjj9CvxPyzpH0ua3gg7f/6npKeFEKYvK6762SQAU8cdkOm3BH5U0p9btYr1N01feJi%2bk/DsEMLH1pfhTghAAAIQgMA8AjHGb5T0U5IeKenG8%2b5KdtUnJf20pJ8LIXx5S9XNAnDUfPeNyUdJ%2bjFJd9uyqBn3Tv%2bwwSsnCwshTBbEDwQgAAEIQKAogRjjXaZ34ZKeUOD7AR%2bR9EJJL0v1m23JBOCYCEx/MOj%2bkh4h6TEJnwpcK%2bkdkn5z%2btWMEML/KTppmkEAAhCAAAT2EIgx3lbSw3e5d3nCX5f/v5Kmb/VPuff61L/VllwAjrOJMd5U0n0lXSLpr0m6l6Svn3mCPifpA5KmP%2bTzFklvDSF8aua9XAYBCEAAAhAoTiDG%2bDWSvlPSpbs3w9OXBi%2bauZCPS5q%2bxP57u/%2b8c%2btj/rP6/n8cj5tnnEuT1QAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect width='9' height='9' fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3e%3cuse xlink:href='%23image0_321_201' transform='scale(0.00195312)'/%3e%3c/pattern%3e%3cimage id='image0_321_201' width='512' height='512' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAHH1JREFUeJzt3Xus7Wld3/H3OcyNmzK0M86MIwPoEFSCiGgkKtAOUI3FmRabqqixNGkx3tp/NE1Tk4pGTdOLFlqbpiaNjVKtdRAswki1IMVQGGBEY5lyFWaGmeiAEmYYmDn94znnzD7X2eectfdv7d/zeiVPzsk%2be6/zfdbav/X9rN/l%2bR1qezy6elp19dFxzWn%2bvKq6ZKkCOfCOVPdUd1Z3HP1z59/vqD5U3b1UgeypK6undOp7y86/X1EdWqpADrwHqrs68T3l5Peb91f3LVXgTkv/oj%2bxekl1U/Xi6jHLlgMdqd5Z3Xx0/PGy5XCBvqLx/nJT9ZyWf8%2bDz1Rvary/vK7686UKWWJjuK66sbFBPq961AI1wG7d3sNh4A%2bqh5Yth0dwuPr6Hm761y9bDpzVg9VbGu8vr60%2bsmw5e%2bPS6keqWxufsAzjII67qldXT4pt86TGa3NXy/%2beGMb5jlsbvfLSVuBQ9d2N46pLP7GGsalxf/UvqstjaZc3Xov7W/73wjA2NT7U6J0H9pDVi6t3t/wTaRh7Ne6tfrS6LPbbZY3n/t6W/z0wjL0a72700gPj2dUtLf/EGcZ%2bjY9W39c4/szeOtx4rj/a8q%2b7YezXuKXRW7fW46tfapwktfSTZRhLjD9snGnO3nhO4zle%2bnU2jCXGQ40e%2b/g2ZFPHF55a/Wb1lRt6PDio7qteXr1m6UJW5juqX2ysFwIz%2b6Pq26oPXugDbeISvBc0dk9ct4HHgoPu4urbj/75uwvXsgaHqp%2bsfq7xnMLsrmycIPiO6sMX8kAXGgBeUf1K9bgLfBxYm%2bdVX1X9VmN1MM7d46r/Wv2DpQuBLfOYRgi4p7Fw2Xk530MAF1X/pvqB8/2PYRK3NXbXrXKBjz10XeOw4jOXLgS23Kurf1R9/lx/8HwCwBOq/1bdcB4/CzO6p/pb1duWLuSA%2bIbqNxrr8gOP7M2NQ4%2bfPJcfOtcAcFH122n%2bcK4%2b1Vii9k%2bWLmTLPb2x5PIXLl0IHDBvrr65c9gTcK7XLf%2bbNH84H1/YuPGH1QPP7PLGc6T5w7m7odGjd%2b1cTgJ8RfXPz6kcYKcnNq5l/%2bXcVOhkFzWO%2bVtHAc7f11WfaJcnBu42ALygcba/lc7gwjy1EQTesHQhW%2bbnGtf6Axfmm6u3totLBHdzDsBTG9cb/pULLAp42Cuq/7B0EVviH1a/sHQRsCJ/1tgbcNbFgh4pADy%2bentW%2bINN%2b1z1oup/LV3Iwp7fWEjMIj%2bwWX9UPbf6yzN9wyPt0v93af6wFy6ufq1xWe2sntB4DjR/2LyvbPTwMzpbAHh29bKNlgPsdEX1T5YuYkH/JNf6w156WWe5i%2bDZDgHcUr1w4%2bUAO91fXV99bOlC9tm11e3VZUsXAiv3O43Djac40x6AF6f5w364rPqJpYtYwE%2bk%2bcN%2beGGjp5/idHsADlW3Vs/ay4qA4x5q3DjofUsXsk%2beUb03lxXDfnlP41DAkZ1fPN0G%2bLI0f9hPh6ufWbqIffQzaf6wn57Vac7pO3kPwKWNtcqfvB8VASd4Qeu/LPD51e8tXQRM6MONe2189tgXTk7hr0jzh6XMsBdghjnCNnpyo8cfd/IegFurr963coCTPa1xdvwaXV%2b9f%2bkiYGLvbsdlgTv3AFyX5g9Lu3HpAvbQmucGB8FXN3p9dWIAsHHC8m5auoA9tOa5wUFxvNfvDAA2Tljec1vn6nhXNOYGLOt4rz8WAJ5YPW%2bZWoAdDlcvWbqIPfCSXPoH2%2bB5jZ5/fIN8SfWoxcoBdlrj4bg1zgkOokd19EPGsQBg9z9sjxdVj1m6iA16TGdYixxYxE01AsCjO8M6wcAiHt26GuaLGnMCtsOLq0cfblx3vKZPG7AGa1qOe01zgTV4TPW0w9XVS1cCnOKapQvYoDXNBdbiagEAttMXL13ABq1pLrAWVx9OOodttKbtck1zgbW4xh4A2E5rapprmgushT0AsKWurC5euogNuLgxF2C72AMAW%2bpQddXSRWzAVZ1611FgefYAwBZbw7a5hjnAGl1zuHV8yoA1WkPzXMMcYI2uOlxdsnQVwGldunQBG7CGOcAaXeLuXAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEKHqyNLFwGc1kNLF7ABa5gDrNGRw9U9S1cBnNbdSxewAWuYA6zRPYerO5euAjitO5YuYAPWMAdYozsPZwOFbbWGbXMNc4A1usMeANhOf1F9eukiNuDTjbkA2%2bVOAQC205o%2bOa9pLrAWDgHAllrTdrmmucBaOAQAW2pNTXNNc4G1sAcAttTHly5gg9Y0F1iLOw5XH8piQLBtPrB0ARu0prnAGhypPnS4sVDHOxcuBjjRG5YuYIPWNBdYg3dWdx%2b7F8DNS1YCnOBd1ceWLmKDPtaYE7Adbq6HbwYkAMD2eO3SBeyBNc4JDqoTAsAfV7cvVwuwwxqb5RrnBAfR7Y2ef8LtgO0FgOV9uLpt6SL2wG2NuQHLOt7rBQDYLmv%2bpLzmucFBcdoA8AfVJ/a/FmCHNTfJNc8NDoJPNHp9dWIAeKj69X0vBzjm7uqtSxexh97amCOwjF9v9PrqxABQ9bPVZ/e1HOCYn6o%2bv3QRe%2bjzjTkC%2b%2b%2bzjR5/3MkB4KPVv923coBjPlj9wtJF7INfaMwV2F//ttHjjzt0mm%2b6vLGBPmE/KgKq%2bq7qV5YuYp98Z/XLSxcBE/lk9dTq3p1fPHkPQEe/4af3oyKgGqvkvWbpIvbRa7IyIOynn%2b6k5l%2bn3wNQdVn1/upL9rIioKoXVm9euoh9dkP1O0sXARP40%2bpp1f0n/8Pp9gB09Bt/fC8rAqp6Y/M1/xpzfuPSRcAEfrzTNP868x6AGuHgvdUz9qIioCPVs6v3LF3IQp5V3drZ34eA8/e%2b6qvacenfTmfaA9DRH/h71X17UBQwLombtfnXmLvLAmFv3Nfo4adt/lWPeoQHuKP6QPXtGywKqN%2bovn/pIrbA71XPrL586UJgZb63etPZvuGRAkCNXQgXV8/bREVA763%2bZvXA0oVsiddX31pdtXQhsBI/Vf38I33Tbo%2b9Har%2be3XThVQEdHf1ddVHli5ky1xXvaO6culC4IC7ufrbjXOMzupcTr55XPW2xu464Nw9UP31xnbEqb6xcXXAJUsXAgfUbdU3VJ/ezTef7STAk326%2brbqnvMoChjH/DX/M/v9nBcB5%2bueRo/eVfOv3Z0DsNOnqv9dvbSxWBCwOz9Z/aulizgA3l1dlHOO4Fx8qtH8//Bcfuh8r799evW66svO8%2bdhFg80PtX%2b4tKFHDAvr/59DgfAI/l/1UuqPznXH7yQBTgur36tsaQncKq7G3vLfn/pQg6ob2zcv9yJgXB6b67%2bTqdZ5383zuUcgJPdW31z9aoLeAxYq/c2zvbX/M/f7zeew/cuXQhsoVc1evB5Nf8693MATvZQ9YbqrupvbODxYA1%2bo3GdvxNmL9ynql9qLBRksSCoz1U/UL2ys6zytxubatjvqt7SWMzjsRt6TDhojjQW4Pj%2bLPKzSZ%2brfrXxfvVNuXcA87qncbz/1zfxYJv8xP6R6j82Dit8TeNMXpjFGxvH4n5l6UJW7Her11ZPyQnIzOX%2bxlVEf7f6vwvX8oiubZz1/GDjU5FhrHW8MyfCLuGGxnO/9OtvGHs5Hmz00ms7gJ7RWOd76SfRMDY9PlB9Z3ZHL%2blQ4zX4QMv/PhjGpsfrGz30wHt%2b9faWf0IN40LHJ6ofzvXp2%2bSSxmvyiZb//TCMCx1vb/TMPbffn16ur25s3FTouV3YZYiwXz7cOPb82uqt1eeXLYczuKhxkuCNR8eTly0HduWhRtO/ufEec/t%2b/cdL7r68onE2443Vi6pHL1gLnOxdPdz0b1u4Fs7PM3s4DHzNwrXATvdVtzTeX17XQpcMb8vxy8c0QsCzqmuqLz765zWNVcC2pU7W5S%2bqO3aMjzeOJ7%2bh%2btiCdbF511bfUn1pJ76/XFN9wYJ1sV5HGquB7nx/uaN6T6P5f2a50oaD0Fgvrq7q4Y310mXL4QB7qBM3yF3fNYtVe1wnfuBwaJLz9dkefn%2b5q7GGBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK3No6QJ24eLqquqao%2bPSZcvhAHuouru64%2bj49LLlsCUe18PvL1dWh5cthwPssz38/nJX9bllyzm7bQkAj6leVD2rsRF%2bcSdukNtSJ%2bvyFz28sd5Rfbz6QPWG6mML1sXmXVt9S/Wlnfj%2bck31BQvWxXod6cQPHB8/%2bud7qluqzyxX2rBkY72iekl1Y6P5P3rBWuBk76pee3TctnAtnJ9nNt5fbqy%2bZuFaYKf7GiHgtdXrqnuWKGK/A8D1jY3xpuq52dXGwfDhHg4Db60%2bv2w5nMFF1Tf1cNN/8rLlwK48VL29urnxHnP7suVs3vMbEzxiGAd8fKL64eqS2BaXNF6TT7T874dhXOh4e6NnHnjPqF7f8k%2boYWx6fKD6zpyfsqRDjdfgAy3/%2b2AYmx6vb/TQA%2bfa6herB1v%2bSTSMvRzvrG6I/XZD47lf%2bvU3jL0cDzZ66bUdAE%2bofrZxgsPST5xh7Of47cZVLOytZzWe66Vfb8PYz3Ffo7c%2boS31/MYlD0s/UYax1HioemUOC%2byFQ43n9qGWf50NY6lxdxs8P%2bBRG3qcf1j9SvX4DT0eHESHquc1Lj97fVu%2bCMgB8tjqNY33GeGKmT22elkjCLzrQh/sQjemi6p/Xf3ghRYCK/PexqVoH1m6kAPuusalUV%2b1dCGwZV5V/eMu4LLkCwkAl1e/lhOg4Ezurl5a/f7ShRxQ31j9emM1UOBUb67%2bTnXv%2bfzw%2bS7E8/TqHWn%2bcDZXNjbQly9dyAH08sZzp/nDmd3Q6MVPP58fPp9zAL6h%2bt3GGtrA2T2qcSjgosZ2wyN7ZfUv29w5SrBmT6y%2bp7FK6Z%2beyw%2be6yGA66r/01jHHzg3f79xTS9n9vLqPy1dBBxA91Rf2zmcd3QuAeBx1dsaZzgD5%2b6B6q83tiNO9Y2N3f6WWYbzc1tjL/2ubnW%2b23MADlW/lOYPF%2bKS6r839qRxousaJ/xp/nD%2bntno1bv6cL/bY2w/Wf2D860IOO6x1V9rbKTWCRge27g16pcuXQiswNMb5xz9z0f6xt0EgO%2bofu5CKwKOu6r68upXly5kCxxqLPLzgqULgRV5XvV/q/ed7ZseKQA8p3GP4os3VBQwfHlj%2b5v9yoBXNlb4AzbrW6s3Vnec6RvOdpzgcGM1swN5O0I4AI5Uz67es3QhC3lWdWuW94W98r7GKpoPne4fz3YS4Pem%2bcNeOlT9zNJFLOhn0vxhLz2j0ctP60wb32XV%2b6sv2YuKgBO8sHH520xuqH5n6SJgAn9aPa26/%2bR/ONMegB9O84f98rPN9Un4UGPOwN77kkZPP8Xp3nQurz5YPWEvKwJO8F2NW2rP4DurX166CJjIJ6undtJNg053FcArG6uVAfvnq6tfqB5cupA9dmwxpMuXLgQmclmj39%2by84snHwJ4UvVD%2b1URcNxTq1csXcQ%2beEVjrsD%2b%2bqFGjz/u5ADwY9Wl%2b1YOsNM/bazgtVYXNeYI7L9LGz3%2buMMn/f2l%2b1oOsNOV1TctXcQe%2bqbGHIFlvLQdfX9nAPj66ov2vRxgpxuXLmAPrXlucBB8UaPXVycGgJv2vxbgJGtukmueGxwUx3u9AADb5cmt87bbz2zMDVjWKQHgK6rrl6kFOMkaPymvcU5wEF3f6PnHA4BP/7A91tgs1zgnOKhuKgEAttHXVNcuXcQGXduYE7AdjgeAK6vnLFsLcJJvWbqADVrTXGANnlNdebh6SnPdiAQOgi9duoANWtNcYA0OVU85XF2zdCXAKb546QI2aE1zgbW45nB19dJVAKdYUzBf01xgLa62BwC205q2yzXNBdbCHgDYUmtqmmuaC6zF1QIAbKcvqB63dBEb8LjGXIDt4hAAbLE1bJtrmAOskUMAsMXW0DzXMAdYo6sPV1csXQVwWlcuXcAGrGEOsEZXHM4iQLCtDj/yt2y9NcwB1uiQjRMAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAEzocPXA0kUAp/XZpQvYgDXMAdbogcPVXUtXAZzWHUsXsAFrmAOs0V2Hs4HCtlrDtrmGOcAa3XG4unPpKoBTHGkde%2bfuaswF2C532gMA2%2bnu6nNLF7EBn2vMBdgu9gDAllpTMF/TXGAt7AGALbWm7XJNc4G1sAcAttTHly5gg9Y0F1iLOwUA2E5r%2btS8prnAWtx5uHp/9ZmlKwFO8J6lC9igNc0F1uAz1fsPV/dVb1q4GOBh91W3LF3EBt3SmBOwHd5U3XfsXgA3L1kJcIJbWtdeuc%2b0rkADB93N9fDNgF5XPbhcLcAOr126gD2wxjnBQfRgo%2bcfDwB/Xr1lsXKAYx7q6Ma5Mq9rzA1Y1lsaPf%2bE2wE7DADLe3t1z9JF7IF7GnMDlnW81%2b8MAHbRwfLWHMTXPDc4KI73%2bp0B4CPVu/e/FmCHNQfxNc8NDoJ3N3p9dWIAqPrP%2b1sLsMMfVLcvXcQeur0xR2AZJ/T4Qyf946XVn1RP3rdygGNeUP2vpYvYY8%2bvfm/pImBCH66eXn322BdO3gPw2eqf7WdFQFW/1fqbf405/tbSRcCE/lk7mn%2bdugfg2NdurZ61HxUBPVR9VfW%2bpQvZJ8%2bo3tupH0CAvfGe6tnVkZ1fPN0GeKT6sf2oCKjGcblZmn%2bNuTrfCPbPj3VS86/T7wE45pbqhXtWDlB1f3V99bGlC9ln1zZOCrxs6UJg5X6netHp/uFsu%2bBOmxiAjfr55mv%2bNeb880sXASt31j36Z9sDUPVL1XdvtBzgmHuqp1WfXLqQhTyhcTvyK5YuBFbqv1Tfc6Z/fKQA8PjG8p1fucmKgD7X2C03w5n/Z/P8xuHGi5cuBFbmj6rnVn95pm94pLNw/7L6turPNlgUUD%2bU5l/jOfihpYuAlfmzRu8%2bY/OvetQuHuje6h2NQwEu24EL96rqlUsXsUXeVf3V6uuWLgRW4PPVS9rF0v67CQA1VhC6p/qbF1AUUG9uHJNza9wT3VJ9Q/XUpQuBA%2b4Hqv%2b2m298pHMATvaqow8OnLv/1/iUe%2b/ShWypyxt7G79s6ULggHp19YO7/eZzDQAXVb9d3XCOPwez%2b1T19Y17bXBmT2/cMOgLly4EDpg3V9/cOASwK%2bd6TP/z1bcf/Y%2bA3bmn%2btY0/934k8Zzdc/ShcAB8uZGb95186/zO6nvk42U8erz%2bFmYzW3V11ZvW7qQA%2bRtjefstqULgQPg1Y2efM7riez2JMCTPVT9j%2boTR/9jVwfAqW5unDjr0%2by5%2b1RjEZOvaBwWAE70%2bcY5eT/ReZ5UfL4B4Jh3Vm9tXHLwmAt8LFiTn6peUT2wdCEH2APVrzbOPXrewrXANvmzRt/d1dn%2bZ3KuJwGeyVOr38yKgXBf9fLqNUsXsjLfUf1i9eilC4GF/VFjkZ8PXugDbWrX/QcbSw7%2bl9xAiHm9r/FJVfPfvNc0ntuZbpsMOx1p9NjntoHmv1ee3VjU44hhTDI%2bWn1fzoXZD4cbz/VHW/51N4z9Grc0euuB8eLGUoRLP3GGsVfj3upHc0/7JVzWeO7vbfnfA8PYq/HuRi89kA417iHwoZZ/Ig1jU%2bP%2b6l80Vq5jWZc3Xov7W/73wjA2NT7U6J2bOk9vUZdWP1Ld2vJPrGGc77ircc3tk2LbPKnx2tzV8r8nhnG%2b49ZGr7y0fbBEuriuurG6qXFSz4Veigh76fbG9fw3N5aodROf7Xa4seTyTUfH9cuWA2f1YPWWxvvLa6uP7Od/vvTuhSc2rmW8qXGcw1oCLO1IY32LY03/j5cthwv0FT0cBp7T8u958JnqTY33l9dVf75UIdu0MTy6elp19dFxzWn%2bvKq6ZKkCOfCONFblu7O64%2bifO/9%2bR%2bPY291LFcieurJ6Sqe%2bt%2bz8%2bxVt1/siB8sDjcNQO99TTn6/eX9jvZDF/X9uoJFH/4LstgAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect width='10' height='10' fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3e%3cuse xlink:href='%23image0_48_1629' transform='scale(0.00195312)'/%3e%3c/pattern%3e%3cimage id='image0_48_1629' width='512' height='512' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQnYttXUv89/c1FEg6IoQxqEMpSiCAnVx4dPIdGAJhrwUUjIVBSpVErGFH3NidAkoSI0GEsqoQxpksr/WOynnt6e57nv676Gtfbev30c7/HGe%2b291zrXXuta97728P9QEQERiEZgUeARwNLAUunPMvP8b/u3ZdO/PcBJgVuAG4A/AH9K/23/2/77j%2bl/T/3/1wC3OcmpbkVABGYg8P9ERQREYHACCwIrAMsDywErz/PnUcB8DaTy8uN/NZDRHv0L8JsZ/vw%2b/X9KEBoC1eMi0IaAV%2bBoI7PqikAuBJYEngCsDqwJPB5YKf26n79DJbz8uGkCMJfKdwE2S3AlcAXwE%2bBn6Y8lDioiIAIdE/AKHB2roeZEwJWA/aJ/HLBaetmvnf7bXvZD%2bNgQfcwEuMsEYC4DWgJwGXARcGn674uBW12trs5FIHMCXoEjc2wSv2IC9svdXvTrpj9PSy//BRyZePnxUAnATGjvBH4BfB/4XvpjScLdjnZQ1yKQFQGvwJEVJAlbNYEl0vT9esD6wDOAhwQj4uXHngnATCa4GbgEOA/4bkoKbFGiigiIwAwEvAKHjCECUQnY4rznAs8C1gFWGWgavw0PLz%2bOlgDMy9Dks/UEFwDnAGemdQZtWKuuCBRDwCtwFANQimRPwLbQ2XS%2bvfTtz1oZvPDnhe7lx9ETgJkGp%2b1CsETA/nwT%2bGv2I1gKiMCEBLwCx4TiqpoItCZg3/CfNO2Fb7/0F2rdqm8DXn6cYwIw3VK28%2bDH0xICmyW4w9eU6l0EhiPgFTiG01A9iQA8FNgs/XkOYN/1Sypefpx7AjDvGLgJ%2bBZwInAKcGNJg0S6iECUqUNZQgT6JmDf8jcBNgU2BmyrXqlFCUD3lrXZAVs7cBxwPPC77rtQiyLgS8ArcPhqrd5LJWAn6tkL/%2bVptX4t49tLz9JmAObyC9tiaMnAyek8glJ9SHpVRMArcFSEWKr2TMBO2tsCeGlasd9zdyGb9/LjmhKA6Ya3nQU2K/DldFJhyEEhoURgFAGvwDFKLv27CMxFwL7p/zewFWD782svXn5cawIwfbzZzMDngKOB62sfiNI/LwJegSMvSpI2AoFF0vS%2bvfRL/6bflLeXHysBuNdSdgLht4HPp9kBO5RIRQRCE/AKHKGhSLgwBOxGPDt57zVpmn/xMJLFEsTLj5UAzDwO7FZD20VgycDpgB1brCIC4Qh4BY5wICRQKAJ2Te52wLbp5rxQwgUUxsuPlQCMHgy2e%2bAI4HDArj1WEYEwBLwCRxgAEiQUAbtF783AKwvfttc1dC8/VgIwviVtW6HNBhyYzhoQu/HZ6cmeCHgFjp7UUbMZErBDeeyFvxNgK/pVmhPw8mO9xJrbymrYLYZHplmBP0/WhGqJQHsCXoGjveRqIXcCqwJvBF4PPDB3ZZzl9/JjJQDtDH97OlvgY%2blI4natqbYINCTgFTgaiqnHCyFgi/o2B3bX9r1OLerlx0oAujOjXV%2b8H3ASYDsKVESgdwJegaN3xdRBKAJ22Y5N8/8vYL/8Vbol4OXHSgC6taO19mvgk8BhgO0mUBGB3gh4BY7eFFLDoQjYtj2b4t9Dq/l7tYuXHysB6M%2bsfwQOSYsG/9JfN2q5ZgJegaNm5jXovizwprSi/8E1KOyso5cfKwHo3/B/B44CPgpc03936qEmAl6BoybGNen6eODtwJaATfurDEPAy4%2bVAAxjX%2bvlDuALwEeAnw/XrXoqmYBX4CiZaY26PRJ4Z5ruX6BGAM46e/mxEoDhDW8LBL8G7An8cvju1WNJBLwCR0kMa9ZlhfR9/w3AwjWDcNbdy4%2bVAPgZ/p/AMcDewG/8xFDPORPwChw5M5PssAywW/rGb5f0qPgS8PJjJQC%2bdp/6NPBZ4L3Adf7iSIKcCHgFjpwYSdZ7CSyVfvHvAiwqMGEIePmxEoAwQ4B/pCuJ36NrieMYJbokXoEjOhfJd18CdlyvLe6zF79O7Ys3Orz8WAlAvLFg1xAfkBYL2g4CFRGYlYBX4JBJ8iBgJ/e9Gvgw8LA8RK5SSi8/VgIQd7jdALwfOAiwi4hUROB%2bBLwCh0wRn8BGwP7AE%2bOLWr2EXn6sBCD%2b0Ls8fbY7Lb6oknBoAl6BY2g91d/4BFYB3ge8fPwqetKZgJcfKwFwNnyD7s8EdgV%2b1qCOHi2cgFfgKBxrluo9BHhbChI6xCcvE3r5sRKAvMaJbR20UwX3Av6Ul%2biStg8CXoGjD13U5mQEFgR2Bt4F6NjeyRh61/LyYyUA3pafrP8/A/sAnwLunKwJ1SqBgFfgKIFdCTqsBxwKrFGCMhXr4OXHSgDyHnQ/SXd2nJ%2b3GpJ%2bUgJegWNSeVWvGwL2S98ODtkJsJX%2bKnkT8PJjJQB5jxuT3mxodwzYwV62c0ClIgJegaMixOFUtcV9tjXITvNTKYOAlx8rAShj/JgW9lngHcDhKSkoRzNpMisBr8AhkwxP4DHAwcDzhu9aPfZMwMuPlQD0bFiH5s8B3gjY9kGVwgl4BY7CsYZSz87q/9/0Rxf2hDJNZ8J4%2bbESgM5MGKoh2y3wsXTR0O2hJJMwnRLwChydKqHGZiXwTOBIwH79q5RLwMuPlQCUO6ZMs18A2wDnla1mvdp5BY56iQ%2bjuV3UY5eC7AHMP0yX6sWRgJcfKwFwNPpAXZuNbV2ALRK8ZaA%2b1c1ABLwCx0DqVdnNOumwj8dXqX2dSnv5sRKAesbbr4HXAefWo3L5mnoFjvLJDq%2bhfevfW7/6hwcfoEcvP1YCEMD4A4pwd9pBZCeG2vXDKpkT8AocmWMLJ75d2HO0Lu4JZ5ehBPLyYyUAQ1k4Vj%2bXAlsDF8YSS9I0JeAVOJrKqednJmDH%2bNq3Obu8x/5bpU4CXn6sBKDO8WZa2xHCdlvou4E76sWQt%2bZegSNvajGkt2/8x%2bhXfwxjOEvh5cdKAJwNH6D7i4Et0o6BAOJIhCYEvAJHExn17P0JbJUu8nig4IgA4OXHSgA0/IzAbekUwQOFIy8CXoEjL0pxpF0cOAR4VRyRJEkAAl5%2brAQggPEDiXAcsD3w10AySZQ5CHgFDhmlOYG105S/DvVpzq70Gl5%2brASg9JHVXL%2br0ieBC5pXVY2hCXgFjqH1zLk/s9EuwEeAhXJWRLL3RsDLj5UA9GbSrBu2o4T3BfYBbOugSlACXoEjKI5wYi2dDvV5UTjJJFAkAl5%2brAQg0iiIJ8s3AVuvdH080SSREfAKHKI/msCz0pT/cqMf1ROVE/DyYyUAlQ%2b8MdS/Dvgf3ScwBimHR7wCh4OqWXVpC2kO0t7%2brGzmKayXHysB8LR6Pn3bmQF7AR/OR%2bQ6JPUKHHXQba6lHed7cDpzu3lt1aiVgJcfKwGodcRNpvcX0y6BWyerrlpdE/AKHF3rUUJ7KwBfA55agjLSYVACXn6sBGBQMxfR2Y%2bBlwJXFqFN5kp4BY7MsXUu/obAV4BlOm9ZDdZAwMuPlQDUMLq61/HGtFXQFgmqOBLwChyOKofqemqL337AAqEkkzA5EfDyYyUAOY2SWLLeBeyZtjdrHDnZxitwOKkbqls7xvezwH%2bHkkrC5EjAy48VuHMcLbFkPhbYBrg5llh1SOMVOOqgO7uWywMnA2vVDkL6d0LAy4%2bVAHRivuob%2bQmwKXB19SQGBuAVOAZWM1R3awKnALboT0UEuiDg5cdKALqwntowAnZewGbARcIxHAGvwDGchrF62hiwKa8lYoklaTIn4OXHSgAyHzjBxL8F2BI4KZhcxYrjFTiKBTqHYna4z6e02K9G0/eus5cfKwHo3bTVdTC1OFCHBg1geq/AMYBqYbqYH/hYutAnjFASpCgCXn6sBKCoYRRKmcOAHQE7RVClJwJegaMndcI1ayv9v5QWuIQTTgIVQ8DLj5UAFDOEQipyBvAK4KaQ0hUglFfgKADdSBXsl//5wNNGPqkHRKAdAS8/VgLQzm6qPZrAD4BnAPZpQKVjAl6Bo2M1wjb3QuB4YOGwEkqwEgh4%2bbESgBJGT1wd/plmAE6IK2LeknkFjrypNZNeSUAzXnq6OQEvP1YC0NxWqjEeAb38x%2bPU6imvwNFK6AwrKwnI0GgZiezlx0oAMhokGYmql/9AxvIKHAOpF6obJQGhzFGUMF5%2brASgqGEUQhm9/Ac0g1fgGFDFUF0pCQhljmKE8fJjJQDFDKEQiujlP7AZvALHwGqG6k5JQChzFCGMlx8rAShi%2bIRQQi9/BzN4BQ4HVUN1qSQglDmyF8bLj5UAZD90Qiigl7%2bTGbwCh5O6obpVEhDKHFkL4%2bXHSgCyHjYhhNfL39EMXoHDUeVQXSsJCGWObIXx8mMlANkOmRCC6%2bXvbAavwOGsdqjulQSEMkeWwnj5sRKALIdLCKH18g9gBq/AEUD1UCIoCQhljuyE8fJjJQDZDZUQAuvlH8IM4BU4gqgfSgwlAaHMkZUwXn6sBCCrYRJCWL38Q5jhP0J4BY5ACEKJoiQglDmyEcbLj5UAZDNEQgiql38IM9wrhFfgCIYhlDhKAkKZIwthvPxYCUAWwyOEkHr5hzDDfYXwChwBUYQSSUlAKHOEF8bLj5UAhB8aIQTUyz%2bEGe4vhFfgCIojlFhKAkKZI7QwXn6sBCD0sAghnF7%2bIcwwsxBegSMwklCiKQkIZY6wwnj5sRKAsEMihGB6%2bYcww%2bxCeAWO4FhCiackIJQ5Qgrj5cdKAEIOhxBC6eUfwgxzC%2bEVODJAE0pEJQGhzBFOGC8/VgIQbiiEEEgv/xBmGC2EV%2bAYLZmemJeAkgCNidkIePmxEgCNyXkJ6OWf0ZjwChzREM0P3BVNqBnkURKQgZEcRPTyYyUADsYO3GVOL/9cYn6v5vYKHL0q1bDxxYBvAPsBJzSs6/G4kgAP6rH79PJjJQCxx8WQ0uX08rcYuhfwfODmISFF68srcEThMB9wPLA5kNsANrkXjgJScrgS8PJjJQCuZg/Tea6x8zRgs0xmf3sxtlfg6EWZCRo9ENhlWr1cB/IEqqtKQQS8/FgJQEGDaEJVco%2bZBwC7Tqh79tW8AkcEcNsDn55BkNwHdAS2kmFYAl5%2brARgWDtH662UWLkzcFA0uEPI4xU4htBtrj42AU4CFpjloVIGtjdn9T8MAS8/VgIwjH0j9lJSjLQF4C9N74SIrHuTyStw9KbQGA2vAZwHPGjEsyUN8DGw6JGMCXj5sRKAjAdNC9FLjI1/B54JXNKCS3ZVvQKHF6jlgQuAFcYUoMSBPqbqeiwjAl5%2brAQgo0HSkaglx8TrgKcD13TEKnwzXoHDA8wDgXOAJzfs/A7gFcCJDet5PK4tgh7U/fv08mMlAP62H1KCnF7%2btrPrWGChhoAuAjYAbmlYL8vHvQLH0LBMz2PSi3ySvnMa%2bEoCJrFw3nW8/FgJQN7jpon0NcVA22L9MqD48e0VOJoMvC6efTvwoZYN1eQALVGp%2bsAEvPy4%2bAA5sB2jdldj7NsD2D%2bqQbqSyytwdCX/OO1sBJwB2NGPbUuNjtCWmer3T8DLj5UA9G9b7x5qjXm2M%2bBF6d3hbYPe%2bvcKHL0pNE/DKwIXAkt32GGtDtEhQjXVMQEvP1YC0LEhgzVXe6z7M/AU4MpgdulMHK/A0ZkCczS0CHBuMmDX/dXuGF3zVHvtCHj5sRKAdnaLXFsx7j/W%2bTGwHnBrZGNNKptX4JhU3ib1jgRe16RCw2flIA2B6fHeCHj5sRKA3kzq2rBi233xfwF4jatFeurcK3D0pM49zdrRjp/ouxNdIDQAYXUxDgEvP1YCMI518npGL/%2bZ7bUjcHBephwtrVfgGC3Z5E88A/jOBPs/J%2b1RDjMpOdXrioCXHysB6MqCMdpRLJvdDsbmueksmRjW6kAKr8DRgegzNmGL/eybjZ34N2SR4wxJW33NS8DLj5UAlDMWFcNG2/Ja4EnADaMfzeMJr8DRBx3T5YR0v3Mf7Y9qUw40ipD%2bvS8CXn6sBKAviw7brmLX%2bLxPT9sDixj7XoFjfNzjP7lbgIMb5Ejj20tPdkfAy4%2bLCILdmSHLlhSzmpvtLcCBzavFq%2bEVOLomsTZw/oDf/eeSXw7VtXXV3igCXn6sBGCUZWL/u2LVZPb5B2BrzS6erHqcWl6Bo0sCdsmPHfazSpeNtmxLjtUSoKo3IuDlx0oAGpkp1MOKUe3M8SvAfnje1K4Z39pegaNLrT8PvLrLBjtqSw7WEUg1M5KAlx8rARhpmpAPKDZ1Y5bPAa/tpimfVrwCR1fabg0c1VVjPbQjR%2bsBqpq8HwEvP1YCkN9gVEzq1mZbAfYjNMviFTi6gPWY9A1m8S4a67ENOVyPcNX0vwl4%2bbESgLwGoGJR9/a6OR03//Pum%2b6/Ra/A0VazhYALgCe3bWig%2bncArwBOHKi/Nt28ELD7sBdu04jqDkrAy4%2bVAAxq5lad5fTy3xw4Nsii7nGgXwSsm06GHef5MM94BY62AN4H7NW2kYHr5%2bSASgIGHhwtu/PyYyUALQ03UHXFnv5BvxfYu/9uuu3BK3C00cJ%2b9X8fWLBNI0515YhO4Avv1suPlQDEH1iKOcPY6M40C2A70rIpXoFjUkA2LW2A15i0gQD15JABjFCYCF5%2brAQg9kBSrBnWPpelrYG3D9vt5L15BY5JJf4w8LZJKweqJ8cMZIwCRPHyYyUAcQePYoyPbfYF9vTpunmvXoGjuaSwDnAeMP8klQPWkYMGNEqmInn5sRKAmANGscXPLvYpYP30mdpPijF79gocY4p3z2M29W/HLq7WtGLw5%2bWowQ2UiXhefqwEIN4AUUzxt8kVwFrAbf6izC2BV%2bBoyuVjwK5NK2XyvBw2E0MFFtPLj5UAxBoUiiVx7LEf8NY44swsiVfgaMLFLl04p6Cp/5l0l%2bM2GRF6dl4CXn6sBCDOWFQMiWMLk%2bRuYEPg3Fhi3Vcar8AxLpNFgJ8Ajx23QsbP6bCgjI3nLLqXHysBcDZ86j6nl39uh/y0sbCdDvhEwG4PDFm8Ase4MOxwhXeP%2b3ABz%2bXkyDosKM6A8/JjJQD%2bY0Axw98Gc0nwHmCfqCJ6BY5xeNivfvv1b7MANZWcHLqmbD7SGLTFRVemP1cBOzkJdxDwKGCl9GdRJzlq7VazhvEtb7/%2bbRYg5F0BkROAM4GN4tu3FwmVBPSCNbtGbwB%2bClwO/Cz9bSuMrw%2bqyXLAKsCqwBPS33Zo11JB5c1ZLL3887HeWcBzgHAzZlETgNcAdtdyzUVJQF3W/wvww3TSpZ12aX9%2bVwiCFdONaU9JJ6U9FViyEN081NDL34N6uz63BL7cronua0dMAB6Sfuks07262bWYUxKgNQHNhtcf0gvfDrey2a4fpZXDzVrJ9%2bmVgeemQ1OeBTwyX1UGlVwxYVDcnXVm/m4zY5bohykRE4DDgW3DEPIXRA7vb4MuJLDv9t9NL3t74dvBVuGmBLtQdMI2phICSwpeACw%2bYTslV1MsyNu6BwM7RlIhWgLwdOB8YL5IkALIkpPja2HgvQPmOuBE4IR0lkU2l4Q4j3lb%2bLsB8F%2bAjSdbW1B70bR//iPAzgawY4K/F0WVSAnAAum7p62YVLk/ASUBeYwKW5V/bHrp27XV5vQqkxOwHwN2D4glAy9Puw4mby3Pmnr552m3maS2Rb1rAxbP3UukBMCO%2brUjf1VmJ6BAEHN02He9U9LC1W9par9XI1nw3Ap4JVDDOiEl/r0OJ5fGdwZsC617iZIA2MK/XwL2t8rcBBQQYoyQu4DTAFuz8vUoGX0MNINIsRCwSVovZH%2bXckvodHhK%2bAcZSoN3Yj8Y7JybGwfveZ4OoyQAn3Q8zMTbBpP0n1MSUNruAPuu/3ngUMCm%2b1X8CSwP2NbhNxb0iUA%2b7j%2bu%2bpTg48BufXYwTtsREoDHpxP/FhxHYD1zD4GcAkQJCwPPBj6RFvXZr3%2bVeARsFsDG2psB21qYa9Ev/1wtN77cFr/tkKxfjF%2bl%2bycjJACnAvYrUaU5ASUBzZk1qWHHeB4DHJj26Tepq2d9Cdh97G8B/gewzwW5FL38c7FUezltd9BL2jczeQveCYAdj2iLplQmJ5BTEpDL5wB78R8NvA%2b4ZnLTqGYAAssCtsDYFl4tFkCeuUSQLwc3UA/iPS%2bdDdJD06Ob9EwAbLrOTj%2bzM8NV2hHIKXBE/hxwE/ApwL7P/amdSVQ7GAHbMWDfXHcIesiQfvkHGzADiXNJ2hbo8lnRMwF4Q1pINRDn4rvJKQmINhMw9Yv/XcAfix8pdStoO43eBuwCRLm9UL5b95jcBjjSA4FXAmDHfNrih4d5KF1wnwokzYxrvI4C3gvY6n6Vegg8PCUC9kNkYUe15bOO8IN0bfcEPA6wGchBi1cC8H5gz0E1raeznKYSPT8H2AKctwK/qmdoSNMZCFjg/SiwmQMd%2baoD9KBd2o%2bQvYeWzSMBsLvBfxP0O9zQ/PvqT78qZid7efoWbIf3qIjAFAFbkGwnkQ51FLl8VGNvOoGbAbsQa9C1Rx4JwH7A7rJ97wRyCjBDzAT8GXgncATgsuCmd4urg7YEbGHy9sAHgCXbNjZH/Zx%2b%2bUdbr9OjWdyb/hDwjiGlGDoBsFu9bMo1%2bnacIW3QZ185JQF9Bprj0kmTWuDX52grp21bKPhBYDug6xgpnyxnnHStyS3AowFbEzBI6XpwjxJaR/6OItT9v%2bcUcLqeCbDp/jcBdoqfigg0JfBswO5wt9NKuyj65d8FxbLbGPSI4CETgBXTyn/PFbdlD53ZtcspCehiJuBOYH/gPYBt8VMRgUkJLJIWZ%2b3R8sKh2nxwUt6117s9XRQ0yAFkQyYAh6UptdoN7KV/LQHoMuB1wA%2b8QKvfIgk8PW0ZXXUC7WrxvQnQqMoMBGzWacchyAyVADwK%2bHlmZ3IPwX/oPnIKRE0/B9ydVnHbYT6WRauIQNcEbDbAFgja0cLjxk5N%2b3dthfLbszi9CnBl36qOO4jbymHnqm/VthHV74RATknAuJ8DbNGM/eo/vRNCakQE5iawEfA5wK4hnquU6GsaG8MQ%2bAywbd9dDZEAWCZzacvvZ31zqK39kn6VnAFsDVxfmxGlrysBO8/Ejm/ddBYpcnr5N51tcwVfSee2jsk%2bN/V6UNkQCYA5if06U4lFIPcAZfLbme52Ve%2b/YqGVNJUQsPhpVw5/GFhwms4lJdiVmDKkmoencyl6E67vBMDO27ZT/3K6j7s32AEbzikJmP45wPbzbwF8OyBTiVQfgfWBr6RPArn6VH1Wi6%2bx7WBaCfh9X6L2nQDYGdu2fUYlLoGcApZNVdp1rraeZLDDMuKaTpIFIrBsWhdgK7hPDCTXbKKMu74mA1WKFrHX0wH7TACWAK4GHlS0ecpQLqckoAzi0kIE/Ajo5e/HvmnPdkOgnaHzt6YVx3m%2bzwTgf9NxmuPIoWf8CSgJ8LeBJBCBvgno5d834e7bt1tL7Q6dzktfCYCd9mff/kdtk%2blcITXYioCSgFb4VFkEQhPQyz%2b0eWYV7tp0U6AtLu209JUA2P5FW8Gokh8BJQH52UwSi8AoAnr5jyIU%2b99fn06i7FTKPhIAa9P2/U9yZGanyqmxiQkoCZgYnSqKQDgCevmHM0ljgewk3dUAO/G0s9JHAvAS4PjOJFRDXgSUBHiRV78i0B0Bvfy7Y%2bndku2COqlLIfpIAM4FbF%2bsSv4EcjrQJH/a0kAEuiWgE/665endmr1bn9WlEF0nAE8EftylgGrLnYBmAtxNIAFEoDEB/fJvjCyLCmsBP%2bpK0q4TgE/3fXRhV4qrnUYElAQ0wqWHRcCVgF7%2brvh77fyQdBhaJ510mQAsDth2BftbpTwCSgLKs6k0Ko%2bAXv7l2XS6RjcDdsS%2bHRDUunSZAOySLmZpLZQaCEtASUBY00gwEUAv/zoGwY6AHTndunSZAPwMWL21RGogOgElAdEtJPlqJKCXfz1WvwxYo4tbULtKAJ4DfKse/tVrqiSg%2biEgAIEI6OUfyBgDibIBcE7bvrpKAI4DXtZWGNXPioCSgKzMJWELJaCXf6GGHaHWMelK9Fbad5EALAf8FliwlSSqnCMBJQE5Wk0yl0JAL/9SLNlcD4u9jwKua1713hpdJAB7A%2b9pI4TqZk1ASUDW5pPwmRLQyz9Tw3Uo9l7AB9q01zYBmA%2b4ClihjRCqmz0BnRiYvQmlQEYEdMJfRsbqUVR7967cZjFg2wRgI%2bDMHhVU0/kQ0ExAPraSpPkS0C//fG3Xh%2bStFgO2TQA%2bC7y2D63UZpYElARkaTYJnQkBvfwzMdSAYh4BbDdpf20SgMWA63Xy36Toi62nJKBY00oxRwJ6%2bTvCD9y1nQj4MOC2SWRskwC8CvjCJJ2qTvEElAQUb2IpOCABvfwHhJ1hV/8DHDuJ3G0SgNOBF0zSqepUQeAbwMZVaColRaBfAmcAz%2b%2b3C7WeMYFTgE0nkX/SBGBZ4BpggUk6VZ3iCdinIbu28vfFayoFRaB/AhZvL0qXwPTfm3rIjcCdwCOAPzQVfNIEYDdg/6ad6fkqCNj0v%2b0OObcKbaWkCAxDYF3gLGChYbpTL5kRsMv4PtlU5kkTgB8BT2ramZ6vgsCuwAFVaColRWBYArsD%2bw3bpXrLhMCFwFObyjpJAmA3/tnNfyoiMC8BWxfyojYHUwipCIjArAQsXp846fdecS2egN0QeGkTLSdJAPYF3tGkEz1bBQH73r8mcEMV2kpJEfAhsAxwSdr65SOBeo1K4H3Au5sIN0kCcAWwSpNO9GzxBO5OK/51KmTxppaCAQjYjoCvA5PE7wDiS4SeCNivf5sFGLs0HUCrApeN3boerIWAfZd8ay3KSk8RCEDgY4Ctt1ERgekEHgf8clwkTROAPYH3j9u4nquCgM0IPRm4vQptpaQIxCCwMHAxsFoMcSRFEAJvBz4yrixNEwBbabj2uI3rueIJ2P7T9YAfFK%2bpFBSBeATWAc4D5o8nmiRyInABYFtGxypNEgA7aOBqfXcai2stD30QeGctykpPEQjMayECAAAgAElEQVRI4KPAHgHlkkg%2bBP4FrJgO6hspQZMEYGfgEyNb1AO1ELg8Tf3/oxaFpacIBCSwKPBjwL79qoiAEdgBOGQcFE0SgO8AG47TqJ4pnoBlmc8Fvl28plJQBOITsDvhLT43iefxtZKEkxL45rh3R4w7YB6arv7V2f%2bTmqSsekcDW5elkrQRgawJ2M2sdkOrigjYcex2f8RfRqEYNwF4HXDkqMb071UQsEH1eOCPVWgrJUUgDwIW8O2z3JJ5iCspeybwGsCSwjnLuAnACcDmoxrTv1dB4I3Ap6vQVEqKQF4E3gQcnJfIkrYnAl8DXjaq7XESAJv2vxFYYlRj%2bvfiCdgRpLYN9K7iNZWCIpAfAdsOaGcD2JHcKnUT%2bCuw1KhYPU4CYPu8ba%2bpigjYEaS2wERFBEQgJoHnAN%2bKKZqkGpiAnRPx/bn6HCcB2Bt4z8CCq7t4BP4PeGk8sSSRCIjAPATsxsDNRKV6Au8adXLvOAmA/fq3WQCVegnYqlI7cvRX9SKQ5iKQDQE7E8CubF8wG4klaB8EzgFsi%2bisZVQCsHj6/q%2bB1Id58mnTFhbtmI%2b4klQEqidgC3W3r55C3QDuAGwL/82zYRiVANg0kk0nqdRLwC75eey4R0vWi0mai0AoAsunGTs7KVClXgIvAk6bNAH4JLBTveykebpZym6YUhEBEciLwP7AbnmJLGk7JnDAXNdGj5oBsIMl7NAXlToJ3ASsBPy5TvWltQhkTcC2gf0GsE%2b5KnUSuAxYfZIZALv973d1MpPWicC%2bwJ6iIQIikC0Buxv%2brdlKL8G7ILDCbJ9w55oB0PG/XaDPt41b069/Hfmbrw0luQg8LM0CaC1AvWPB7m2x%2b1vuV%2bZKAI7ShS/1jhhgzm9HVZOR8iKQF4GDtIsnL4N1LO1ngG2bJgD6/t%2bxFTJq7h/Ao4FrM5JZooqACMxMYMW0I0DbuescIbOuA5htBuAhwA26X7rO0QJ8FrBPQCoiIAJlENB1wWXYcRIt/pXOA7jf9cCzJQAvBE6dpCfVKYLAU4ELi9BESoiACBiBtYCLhKJaAi8AzphX%2b9kSgPcBe1WLqm7FzwKeXTcCaS8CRRI4F1i/SM2k1CgCdqfPe8dNAM4ENhrVov69SAIvAU4oUjMpJQJ1E/hv4Kt1I6hWe/v1b7MA9ykzzQDMB9i3giWqRVWv4lcDK4%2b6Q7pePNJcBLImMD9wJWD7wlXqIvDXtA7g7ulqz5QArAlcUhcbaZsI2LXP%2b4iGCIhAsQRsGvjdxWonxeYiYCcC2o6Ae8pMCcAbgEPFsToCd6Vf/zYLoCICIlAmAfv1b7MANhugUheBbYAjRyUAtgXstXVxkbbAScDmIiECIlA8AbsdbpPitZSC8xI4AthuVAJwKbCa2FVHwF7%2blgSoiIAIlE3gpcDXylZR2s1A4CfAE%2bdKABYGbgYWEL6qCNhtf8sBd1SltZQVgToJLARclxaF1UmgTq3/CTxwepyfdw3Ak4GL62RTtdYH66zwqu0v5esjcNi808H1IahS4ycAP5vSfN4EYKvZbg2qElU9Sq8HnF%2bPutJUBKonsAFgh36p1EVgS%2bDLsyUAuju6rsFg2tqKYLv4x86LVhEBEaiDgJ33Yr5vFwWp1EPgg8A7Z0sATp/ptKB62FSpqSV9b69ScyktAnUT2B/YrW4E1Wl/CrDpbAnANcDDq0NSt8LrAhfUjUDai0CVBOxeALsfQKUeAr8FHjVTArAkYKvBVeohYCuBH6Hp/3oMLk1FYBoB%2bwxwLfAwUamGgH3qfQhgRwMzfRHgs4Czq8EgRY3Ap4CdhEIERKBaAp8Gtq9W%2bzoVv2fR9/QEYIf0QqgTSZ1abwx8o07VpbUIiADwQuBUkaiKwJumjvufngAcAryxKgx1K3tbOgjE/lYRARGok8CiwI2A/a1SB4F7Zn6nJwDfATasQ39pCXxd54FrHIiACKRZwOeJRDUEvg1sZNpOTwBsdaD2hFYzBngLcGA96kpTERCBWQjsDuwnOtUQsPMfVp6eACwI2FSwroisZgz8%2b8Kny%2btRV5qKgAjMQmAN4KeiUw2BO9MnnzunZgDsJLhfVaO%2bFP09sLwwiIAIiEAiYDFB2wHrGQ42A3DlVALwXOCb9ehevabHAFtUT0EAREAEpggcB7xMOKoh8BzgO1MJwHaA3Q6lUgeBHQG7AVBFBERABIzALloTVNVA2AY4cioB2Bd4R1Xq163smvrmV/cAkPYiMA8BXQVf15B4P/CuqQTgS5oSrsb6dtzz0sDd1WgsRUVABEYRsAXgdh7Ag0Y9qH8vgsAXgVdPJQB2GczTi1BLSowicIZufByFSP8uAlUSOHNqf3iV2tel9PnAelMJwB%2bAZerSv1ptPwDsVa32UlwERGA2Ah/S1eDVDI5/7wSzBMCOgLxlnkOBqqFQoaIvBf6vQr2lsgiIwNwEXg4cK0hVELBbAR9gCcBjgV9UobKUNAJ22uPvhEIEREAE5iGwEvAbUamGwKMtAVgXsO8BKuUT%2bJM%2b9ZRvZGkoAi0I2EJAuy9epXwC61gCsDlwQvm6SkPgLODZIiECIiACsxA4F1hfdKogsKklANsCh1ehrpS85xpIoRABERCBGQgcCrxBZKog8HpLAOwAIDsISKV8AjsAh5SvpjQUARGYkMDOwCcmrKtqeRF4uyUA%2bwO75SW3pJ2QwIbA2RPWVTUREIHyCdg98XYegEr5BPazBOBoYKvydZWGwHLA9SIhAiIgArMQeDhwjehUQeBoSwBO18lwVRj7Ntv3Cdj%2bTxUREAERmImAvRNuBRYRnuIJnG7GvhBYu3hVpeBlwOrCIAIiIAIjCFwBrCJKxRO40BKA36bDYYrXtnIFTwVeXDkDqS8CIjCawGnAJqMf0xOZE/itJQB2DPBimSsi8UcTOAiwFb4qIiACIjAXAYsVOwpR8QRunboMqHhNpaAIiIAIiIAIiMC9BJQAaDSIgAiIgAiIQIUElABUaHSpLAIiIAIiIAJKADQGREAEREAERKBCAkoAKjS6VBYBERABERABJQAaAyIgAiIgAiJQIQElABUaXSqLgAiIgAiIgBIAjQEREAEREAERqJCAEoAKjS6VRUAEREAEREAJgMaACIiACIiACFRIQAlAhUaXyiIgAiIgAiKgBEBjQAREQAREQAQqJKAEoEKjS2UREAEREAERUAKgMSACIiACIiACFRJQAlCh0aWyCIiACIiACCgB0BgQAREQAREQgQoJKAGo0OhSWQREQAREQASUAGgMiIAIiIAIiECFBJQAVGh0qSwCIiACIiACSgA0BkRABERABESgQgJKACo0ulQWAREQAREQASUAGgMiIAIiIAIiUCEBJQAVGl0qi4AIiIAIiIASAI0BERABERABEaiQgBKACo0ulUVABERABERACYDGgAiIgAiIgAhUSEAJQIVGl8oiIAIiIAIioARAY0AEREAEREAEKiSgBKBCo0tlERABERABEVACoDEgAiIgAiIgAhUSsATgFmCxCnWvTeWDgJ1rU1r6ioAINCZgsWLHxrVUITcCt1gCcBXwyNwkl7yNCZwKvLhxLVUQARGojcBpwCa1KV2hvldZAvBD4CkVKl%2bbypcBq9emtPQVARFoTOAKYJXGtVQhNwI/tARA2V5uZptM3tuABwD/mqy6aomACFRAwN4JtwKLVKBr7SqeZsY%2bGtiqdhKV6L8ccH0lukpNERCB5gQeDlzTvJpqZEjgaEsA9gN2z1B4idycwIbA2c2rqYYIiEAlBDYCzqxE19rV/KglAG8HPlQ7iUr0t5W9B1eiq9QUARFoTmAX4MDm1VQjQwJvswRgG%2bCIDIWXyM0JfArYqXk11RABEaiEwKHAGyrRtXY1X2cJwGbAibWTqET/s4BnV6Kr1BQBEWhO4Fxg/ebVVCNDAi%2b2BGBd4PwMhZfIzQncACzdvJpqiIAIVELgRuAhlehau5rrWALwGOCXtZOoSH879OnqivSVqiIgAuMRWBn49XiP6qkCCKxsCcCi6Thg3QtQgEXHUOG/gePHeE6PiIAI1EXgFcBX6lK5Wm3tPJjFpl76tjd82WpR1KX4vsCedaksbUVABMYg8BHgrWM8p0fyJ3Ad8PCpBOB7wDr56yQNxiDwDWDjMZ7TIyIgAnUR%2bLYWCVdj8O/aYs%2bpBOBLwBbVqF63on8BlgLurhuDtBcBEZhGYH7gz8ASolIFgS8Cr55KAD4AvLMKtaWkEVgT%2bKlQiIAIiEAisBZwkWhUQ%2bB9wLunEoBtgcOrUV2K2mFAdiiQigiIgAgYgTcDBwhFNQReDxw1lQDo/Odq7P5vRW2l7yvrUlnaioAIzEHgq4DtEFKpg4AdCHfWVAKg/Z91GH1Ky98Dy9elsrQVARGYhYC9BywmaCdYPUNkJeCqqQRgQcDui7eFICp1EFgNuLwOVaWlCIjAHASeAPxEhKohcGc6/%2bfO6Yf//BZYsRoEUnRXffPTIBABEQD2AD4qEtUQuBKwWX%2bmJwDfAey%2beJU6CHwd2KQOVaWlCIjAHATsbJDniVA1BOy8B1v3d58E4BDgjdUgkKL2yeeh6dOPaIiACNRJYDHALgBapE71q9T6IGDneROAHbQ1rLrB8ALgjOq0lsIiIAJTBF4EnCIcVRF4E3DovAnAM4FzqsIgZW3WxxI/FREQgToJ2Pkvdg6MSj0EngHY8f/3%2bQSwZDoKsh4M0vQPaTugjgXWWBCB%2bgjMB1wLPKw%2b1avV2G4BfDBw07wJgP3va%2byGoGrR1Kn4PdlgnepLaxGolsCzgLOr1b5Oxa8C7AyAf5fpuwDsf58O2HdhlXoI2Paft9WjrjQVARFIBD4OvEU0qiJwMrDZbAnAh/UyqGowmLKWEdqeUJsaUhEBEaiDgE3/m%2b%2bvUIe60jIR%2bOD0i//mnQF4DfA5oaqOwPqA3Q%2btIgIiUAcBO/PFzn5RqYvAFsAxs80APBm4uC4e0hbQbgANAxGoi4BW/9dl7ylt1wAunS0BWBi4GVigTjbVav1nYDngjmoJSHERqIfAQunyn4fUo7I0TfF98elxft5PAEbJsgO7KEalLgL/BZxYl8rSVgSqJGDX/tr1vyp1EbALn544XeWZEoAjgdfVxUXaptPANhUJERCB4glot1fxJp5RwcOAN4xKALYD7EGVugjYYUC2P/TqutSWtiJQFQFb9W%2b3wenq96rM/m9lXw8cNSoBsEUCP62PjTQG9gbeKxIiIALFEtgHeFex2kmxuQisClwxKgGw/aF/AZYQy%2boI/C7NAtxVneZSWATKJ2C/%2bm3v/yPKV1UazkPA3ul2%2b%2bt9znuZaQ2A1dP90PWOH1sgdHy96ktzESiWwMuA44rVTorNRcDWfbxw3gdmSwBsGvjd4lklAbsRcoMqNZfSIlA2ATvsy%2b7%2bUKmPwHsA%2b/xznzJbArAJcFp9jKRxIvA04IeiIQIiUAyBp8ini7HlJIo8H/jmuAmAXRd4I2DrAVTqI/B5YKv61JbGIlAsgS8BdgysSn0EbIeXHfr0t3ETAHvuMsBWDarUR8BOBHwMYIsCVURABPIm8Ejgl8CCeash6SckYIf72e6%2b%2b5XZPgHYgzoQaELahVT7BPDmQnSRGiJQM4GDgTfVDKBy3Y8A7HyfRgnA1vMeGlA5xNrUvy1tCfxDbYpLXxEoiIDd8fEbYJGCdJIqzQi8drZbfueaAXg4cE2zfvR0YQQ%2bBLyjMJ2kjgjURGA/YPeaFJau9yNgpz/O%2bC6fKwGwVrQOoO7R9Pc0C2ALQlVEQATyIrB0%2bvX/wLzElrQdEpj1%2b7/1MSoBsO/AO3cojJrKj4D9gnhrfmJLYhGonsDHgbdUT6FuAAcAu86GYFQCsJmuiK179AC3A4/V56Dqx4EA5EXAPuHayv9F8xJb0nZM4EVznekzKgFYPJ0HoO0jHVsls%2bYO1SrizCwmcWsncDiwbe0QKtfftnPb%2bf83TzoDYPXOBdavHGTt6v8z7SP9Re0gpL8IZEDg8elG1wUykFUi9kfgbGDDuZofNQNgde0MYbsmVqVuAicBm9eNQNqLQBYETgFs6lelbgJ7AR9omwDY5RF2iYSKCGycbooUCREQgZgEngN8K6ZokmpgAk8HftA2AbBppBuABw0svLqLR8C2hT4RuDOeaJJIBKonMD/wI%2bAJ1ZMQgL8CSwF3tU0ArL7dD/8SMRUBYAfgEJEQAREIR8B881PhpJJAHgSOA14xquNx1gBYG3aU4GdHNaZ/r4LAXwBbZPTHKrSVkiKQB4FlgcuBJfMQV1L2TOBVgN0AOWcZNwGwqwTtTHitKh1FtI5/13XBddhZWuZD4IvAlvmIK0l7JGC7tiwhtB9rnSQA1ogtLLEFJioiYAQ2Ar4tFCIgAu4EbKuX%2beK4P%2bjcBZYAvRI4A3jBOD00GTA7AZ8cp1E9UwWBK4Anp5MCq1BYSopAQAJ20t8l6bTOgOJJJAcCdvWzHd42sjRJAOxoyd8pyxzJtKYHPgK8vSaFpasIBCPwsbnOeg8mq8Tpn8DdwCOA34/TVZMEwNqzPYVPHadhPVMFARtsGwDnVaGtlBSBWATWTSe12vY/FREwAucD642LomkCYHfD7ztu43quCgI/T58CbqtCWykpAjEILAJcBKwWQxxJEYSA3dxqN7iOVZomALb9y7aaqIjAdAI2Dbm7kIiACAxGwK55ffNgvamjXAjYza2/GlfYpgmAtWsJgCUCKiIwReBfwIvnunZSqERABDojYEdyn671WJ3xLKWhnwJrNlFmkgTALhd4Z5NO9GwVBGzRiR0T/KcqtJWSIuBDwPZ326p/%2b1tFBKYT2Cdd3jc2lUkSAPvmdOnYPejBmgjYrxK7hcxmBFREQAS6JWDx2m7ltNk2FRGYl8CqgG3PHrtMkgBY4xenhV9jd6QHqyGwG/DxarSVoiIwHIE9gI8O1516yojAD4GnNZV30gRgV8AWfqmIwLwE7KZAOzHyXKERARHojIBt%2bTsbWLCzFtVQSQR2Bg5qqtCkCcAywLW6G6Ap7mqevx5YG7iuGo2lqAj0R8C%2b99us6/L9daGWMyZgP7rs8B%2b7r6dRmTQBsE5OAzZp1JseronANwBbrawiAiLQjoD50vPaNaHaBRM4GdhsEv3aJABbjHPd4CRCqU72BOw2KruL%2boTsNZECIuBP4IXA8cDC/qJIgoAEXg58dRK52iQAdgmFbf160CQdq06xBPTyL9a0UsyRgJIAR/iBu/4bsBww0UmsbRIAY3IUsHVgOBJtWAJ6%2bQ/LW73VRUBJQF32Hkfbw4Htx3lwpmfaJgC22vtbk3auekUR0Mu/KHNKmaAElAQENYyTWM9qs%2bOqbQIwH3AlsKKT8uo2BoE70jf/E2OIIylEoGgCmwPHAgsVraWUG0XA3r2PbnPwWtsEwAR8F2BHEKrUSUC//Ou0u7T2JaCZAF/%2bEXq323k/1EaQLhKAhwFX64CKNmbItq5e/tmaToIXQEBJQAFGnFAFm3W1mffGe/%2bn99dFAmDtfSVNAU%2boi6plSEAv/wyNJpGLI6AkoDiTjqXQl4BXjfXkHA91lQBsCHynrTCqnw0BvfyzMZUErYCAkoAKjDyPis8EzmurdlcJgMlhdxGv0VYg1Q9PQC//8CaSgBUSUBJQj9HtNt5O3rVdJgA7AZ%2bsxwZVaqqXf5Vml9KZEFASkImhWor5JuDQlm38u3qXCcDiwDXAEl0IpjbCEdDLP5xJJJAI3I%2bAkoCyB8Xf08U/N3WhZpcJgMlzCPDGLgRTG6EI6OUfyhwSRgTmJKAkoNwBcjCwY1fqdZ0ArA78rCvh1E4IAnr5hzCDhBCBRgSUBDTClc3Da6b1dp0I3HUCYEKdC6zfiXRqxJuATvjztoD6F4HJCejEwMnZRax5DrBBl4L1kQDYoNM1sF1ayact/fL34a5eRaBLApoJ6JKmb1ubASd3KUIfCYC1aZ8BVutSULU1KAG9/AfFrc5EoFcCSgJ6xTtI41cA9on97i576yMBMPleD3ymS0HV1mAE9PIfDLU6EoHBCCgJGAx1Lx1tDRzddct9JQALAr8GVuhaYLXXKwG9/HvFq8ZFwJWAkgBX/BN3fi2wMmBrsjotfSUAJuTbgA93Kq0a65OAXv590lXbIhCDgJKAGHZoIsXuwMeaVBj32T4TADsQ6LfAg8cVRs%2b5EdDL3w29OhaBwQkoCRgc%2bcQd/g14JGB/d176TABMWLur%2bO2dS60GuySQ08vfAtdbgNcCv%2b8SgtoSgZYElgY%2bCxyeyS4oJQEtDT5Q9Q8Ae/XVV98JwLLAVcAifSmgdlsRyO3lfzywMPBHYEvgW620V2UR6IaA3cx2DLA8kKtPdUNCrXRJ4B/ASn3%2b2Ok7ATAYRwDbdElFbXVCIKdANdOBJnem2aWPA//qhIgaEYFmBCx%2b2vfZDwILTKua0wFamgloZvMhn7YLf%2bzin97KEAnA4wC7vnC6g/SmkBoei0BJAeqb%2biQwls31ULcEbMr/SODFszSbe4LdLS211pSAjZ9V0266pnXHfn6IBMCEOQqwfYwq/gRyCkzj/jqxTwJ29sSp/nglQQUEngt8DlhuhK4l%2bloF5g2hoq0l2b5vSYZKAGwV4y%2bAhfpWSO3PSSCngNT0HHP7DHAAsCdwm8aBCPRAYNE03b9Lg6vUS5pt6wGpmpyBgI2ZxwNX9k1nqATA9LDvGW/oWyG1PyuBnF7%2b4/7yn0lZO4DKZgPs4gwVEeiKwLppyt8Cc9NSi%2b815aLnZyZwELDzEHCGTABsheyvAMuiVYYlUFsAsvOybfHpbsAtw6JWb4URsB1MewN7APO30K02H2yBquqqtwOPAez0v97LkAmAKXMgYNNnKsMRyCnwNJ32H0XRPjvZKtpvj3pQ/y4CMxCwb/0HA4/tiI4%2bB3QEsuBm9k/J5iAqDp0APCytalxsEO3USU4v/zbT/qMsfVyaUvvDqAf17yIA2PklHwVe3eBb/7jg5JPjkqrvOZuttDP/bVHzIGXoBMCU%2bgjw1kG0q7uTnAJN17/8Z7L8X9ICwcOAu%2boeGtJ%2bFgI2xW/rlOz0tT6PMNdMgIbgTAT2TTFqMDoeCcBD0%2brGxQfTsr6Ocnr59/nLfybL273adnjLafUNC2k8B4GN0oUraw5EST46EOhMurGz/u3X/5%2bHlNcjATD99gHeNaSiFfWV06%2bLIX75z2b6k9JMlK0TUKmXgK3q3w94kQMC%2baoD9KBdvie9FwcVzysBeGA6F2DUQRqDwiigM/2qaGZEO074y4A5X%2b97bpuJpqd7JvCI9CPEtox6nlIqn%2b3Z0Bk0byv%2bV/HYseSVAJhNtk03Z2VgnyxEVCCZ3Ez2S8xucns3oIWCk3PMoaZ9grQ1SLYbKcqWZPluDiOnPxntdlM7WXLw4pkAzAf8AFh7cK3L6zCnAOI57T/K8n8HDknfgpUIjKKV17/bbKOdC/FGwGYgo5WcPgcMvW4nmq26lOdHwFMAO7tk8OKZAJiyz9Ye7dY2z%2bnln0vgsGD8lfRNzg6vUsmXgB1Dbi/%2b7QL94p%2bNpnw533E2qeQbeJ5a6p0AGLQTgc0mpVd5vZwCRuRf/nMF5GPTHQMXVj7WclP/qcCuwMuABTMSXjMBGRmrpahfS%2bOzZTOTV4%2bQADwauEwXBTU2ol7%2bjZG1qnBeSgRO0DkCrTj2Wdn28f9XevGv12dHPbetJKBnwAGaNxuvAfzSU5YICYDpb7e4vdkTRGZ95/Tyz2Xaf9whcB3weeDT2jkwLrLen3t4OrXPvu8/qvfehulAPj4MZ69e7KTJt3l1PtVvlARgyZQJ2QpdlbkJ5BQYcpz2H3f82aKdrwOfAU4F/jFuRT3XCYGFgRen3UTPB2xRcWlFMwGlWfQ/%2bvwp3S9hh/%2b4ligJgEGwbTl2WZDK7AQUEGKOjr8CJ6etPHbxkMuK3phoOpXKXvLPAF4ObAks1WnrMRtTwh/TLm2k2iHtNmrTRid1IyUAdhiHbQt8ciealdeIAkEeNr0a%2bCrwf8D5SgZaG82%2b69tL/yVpwdQKrVvMrwEl/vnZbDaJLwKeHmUdUaQEwIDZyt0LCp3OazOE9fJvQ8%2bvrp0lYLtc7M9ZwK1%2bomTVs90WaluE7ROS/VkmK%2bn7EVZJQD9ch2zVZgZtcaq940KUaAmAQTk03cgVAlAAIXJ6%2bZe24K9L89uxw99PnwrOBC4G/tVlB5m3ZRehPBfYNP29SOb69CG%2bYkEfVIdr86B0LflwPY7oKWIC8CDgckD3BIAcPoyrdC6I3fltn7xse%2bF3U3Jg9q6h2LS%2bXcJjv4bWBzYEapzan8TWigmTUPOvcz2wKmDrhcKUiAmAwXkV8IUwlHwEycnRS17tP5T1bwLssKHpf0q5oGildNypHXlqn/ns%2bO8lhgJbYD/6HJCfUV%2bZThcNJXnUBMAgfTNNBYYCNpAwevkPBDp4N3Y3%2bKXpoKypv68A7CyCaJ8PLJYsn37ZrwasDtjfdtiJbfNV6ZaAkoBuefbZ2jeAjfvsYNK2IycAjwV%2bAtT2LVAv/0lHcz31bgeuAn6TDiPayUl1%2b6Zp3%2b7tF779sb35KsMRUBIwHOtJe7LzQZ4I/HzSBvqsFzkBML33Tne198kgUts5vfy14C/OyPHy42izEHEsMpwkihnDsZ6kJ7ti/H2TVByijlfgGFc3%2b0VhswCPG7dCxs8pm8/YeM6ie/mxEgBnw6fuc0oCalovZJ/rnhT5lFCvwNHEbdYFzgVs5XCpJScH1i//eKPQy4%2bVAMQZC4ohcWxhktief7vq13b5hC1egaMpELs4YY%2bmlTJ5Xo6biaECi%2bnlx0oAYg0KxZI49vgw8L9xxJlZEq/A0ZSLfQqwIxRtZXFJRQ5bkjX9dPHyYyUAfjafrWfFFH%2bb2Dk2awG2WDd08Qock0AxoHaE4oKTVA5YR44a0CiZiuTlx0oAYg4YxRY/u9iJn3Z3xQ/9RBi/Z6/AMb6E931yX%2bAdk1YOVE8OGsgYBYji5cdKAOIOHsUYH9vYin9b%2bfzDmJ4AABKHSURBVJ9F8Qock8JZKGVWa07aQIB6cswARihMBC8/VgIQeyAp1gxrn0uApwG2oyuL4hU42sCxbRV2hnqOnwLkkG0sr7qzEfDyYyUA8cekYs4wNrKp/3XSWrVheuygF6/A0Vb0HA8IkiO2tbrqKwHQGJiEgGLPJNSa1XkX8P5mVfyfzjUBsF//30uXivhTHC2BDvkZzUhPTE7Ay481AzC5zYaumVMSkNthQbbgzxb%2b2SxAVsUrcHQB6TFpuiX6rWI5OZ4O%2beliZA7fhpcfKwEY3tZtelQsakNv5ro3px%2biv%2bi%2b6f5b9AocXWn2P8AxXTXWQztyuB6gqsn7EfDyYyUA%2bQ1GxaRubfaanK%2bu9wocXZrgc4AZIVqRo0WzSLnyePmxEoA8x5RiUzd2Owp4fTdN%2bbTiFTi61PYBwIXpHvIu223TlhysDT3VbUrAy4%2bVADS1VJznFaPa2eJX6bS/v7drxre2V%2bDoWusnpK2Bi3Td8ATtybEmgKYqrQh4%2bbESgFZmc6%2bsWDWZCf4B2CV1P5qsepxaXoGjDwJvAT7eR8MN2pRDNYClRzsj4OXHSgA6M6FbQ4pZzdHvDBzUvFq8Gl6Bow8Spsv/AbaFxKPIkTyoq08j4OXHSgDKGH%2bKXePb8VRgU6CIse8VOMbH3ezJJYEfAys2q9b6aTlQa4RqoAUBLz8uIgi24F5SVcWw0da8BrCTaG8c/WgeT3gFjj7p2HGMZwF2hfAQRY4zBGX1MRcBLz9WAlDWuFQsm92exuY5wHklmdwrcPTNcAfgU313AshhBoCsLkYS8PJjJQAjTZPdA4ppM5vsDcBh2VlzhMBegWMIjkcA2/TYkRylR7hquhEBLz9WAtDITNk8rNh2X1PZWTOvzcZ6DQT1ChwNRJz4UdsSeA7w1IlbmHs66BXACT203XWTOt63a6Lx2vPyYyUA8cZCVxIpCfgPSdvqtx5wW1dgI7XjFTiGYrBCui9g6Q47lGN0CFNNdULAy4%2bVAHRivrCN1B7r/pjO%2bbfFf0UWr8AxJMxnA98AFuig09odogOEaqIHAl5%2brASgB2MGa7LWmGc3%2bz0vLSgPZpLuxPEKHN1pMF5LuwP7jfforE/V6ggtsan6AAS8/FgJwADGDdBFjbHPDpY7MAD7XkXwChy9KjVL418GXjlhxzU6wISoVM2BgJcfKwFwMLZTlzXFwC8Br3LiPGi3XoFjUCVTZ3ZpkC0KXKth53cAtuDvxIb1PB7Xgj8P6v59evmxEgB/2w8pQU5JgJ0IeyywUENAdrHcBsCtDetl%2bbhX4PCCtRxwQYOTAnMa8Hr5e40q/369/FgJgL/th5ag5Jh4LWAHyRW76G/eweIVOIYetNP7Wx34LvCgEUKUPNA9%2bavv7gl4%2bbESgO5tmUOLJcZGu9b3mcAlORigKxm9AkdX8k/azguAk%2bfYGVDiAJ%2bUlerFJ%2bDlx0oA4o%2bNviQsKUbeBbwkvRP64hWyXa/AEQHGdrMc7VjSwI7AWTL0T8DLj5UA9G/byD2UEit3Gujo%2bHC29AocUUAcALx5mjClDOgofCXHMAS8/FgJwDD2jdxL7jHz48BukQH3KZtX4OhTpyZtzwccD9iK0dwHchO99WxZBLz8WAlAWeNoUm1yjZ2nAZsB9gmgyuIVOCLBXgw4A9hfZ/tHMotkaUDAy4%2bVADQwUuGP5pYE7AU8H7i5cLvMqZ5X4IjGfP5MskBt9Ys2cmLI4%2bXHSgBi2D%2bKFDklAbnE/F5t6xU4elWq0Mb18i/UsB2o5eXHSgA6MF5hTeSUBBSGvrk6XoGjuaR119DLv277j9Ley4%2bVAIyyTJ3/riQgE7t7BY5M8IQQUy//EGYILYSXHysBCD0sXIVTEuCKf7zOvQLHeNLpKb38NQbGIeDlx0oAxrFOvc8oCQhue6/AERxLCPH08g9hhiyE8PJjJQBZDA9XIZUEuOKfu3OvwBEYSQjR9PIPYYZshPDyYyUA2QwRV0GVBLjin71zr8ARFEcIsfTyD2GGrITw8mMlAFkNE1dhlQS44p%2b5c6/AERBFCJH08g9hhuyE8PJjJQDZDRVXgZUEuOK/f%2bdegSMYhhDi6OUfwgxZCuHlx0oAshwurkIrCXDFf9/OvQJHIAQhRNHLP4QZshXCy4%2bVAGQ7ZFwFVxLgiv/ezr0CRxD1Q4ihl38IM2QthJcfKwHIeti4Cq8kwBX/fzr3ChwBVA8hgl7%2bIcyQvRBefqwEIPuh46qAkgBX/EoAPPHr5e9Jv6y%2blQCUZc%2batFES4Ghtr8DhqHKIrvXyD2GGYoTw8mPNABQzhFwVURLghN8rcDipG6JbvfxDmKEoIbz8WAlAUcPIVRklAQ74vQKHg6ohutTLP4QZihPCy4%2bVABQ3lFwVUhIwMH6vwDGwmiG608s/hBmKFMLLj5UAFDmcXJVSEjAgfq/AMaCKIbrSyz%2bEGYoVwsuPlQAUO6RcFVMSMBB%2br8AxkHohutHLP4QZihbCy4%2bVABQ9rFyVUxIwAH6vwDGAaiG60Ms/hBmKF8LLj5UAFD%2b0XBVUEtAzfq/A0bNaIZqfHzgfeFoIaSREyQS8/FgJQMmjKoZuPwCeAdwVQ5yypPAKHGVRnF2bBwBfAjarRWHp6ULAy4%2bVALiYu5pOzwBeAdxUjcYDK%2boVOAZW07U7mwn4APB2VynUeckEvPxYCUDJo8pXt8OAHYE7fcUou3evwFE21Zm12x74FLBAjcpL514JePmxEoBezVpl4zbVvyvwySq1H1hpr8AxsJphutsYOBZYIoxEEqQEAl5%2brASghNETR4ebgS2Bk%2bOIVLYkXoGjbKpza/cE4BRgxZohSPdOCXj5sRKATs1YdWPXAZsCF1dNYWDlvQLHwGqG6265lOWuHU4yCZQjAS8/VgKQ42iJJ/Ml6eX/u3iilS2RV%2bAom%2bp42tkOgSPTKtfxaugpEZiZgJcfKwHQiGxL4BhgW%2bCWtg2pfnMCXoGjuaTl1rDFgQcBC5arojTrmYCXHysB6NmwBTdvi/32BD4CaBw5GdorcDipG7bbZ6XFgcuGlVCCRSbg5ccK3JFHRVzZbgC2AM6MK2IdknkFjjroNtPyEcDXdHJgM2h6%2bt8EvPxYCYAGYFMCPwJeClzVtKKe756AV%2bDoXpMyWlw4nRWwTRnqSIuBCHj5sRKAgQxcSDdfAOyT522F6JO9Gl6BI3twPStgTmIHYSzUcz9qvgwCXn6sBKCM8dO3Fnaa317Ah/vuSO03I%2bAVOJpJWefT6wNfAZavU31p3YCAlx8rAWhgpEofvTbtdLKL0VSCEfAKHMEwhBVnKeAo4MVhJZRgEQh4%2bbESgAjWjyvDScDrgRvjili3ZF6Bo27qzbQ3G%2b2Sps9sjYCKCMxLwMuPlQBoLM5E4B/p8rNPaItf7AHiFThiU4kp3VqAHZrx2JjiSSpHAl5%2brATA0ehBu/552uJnq/1VghPwChzBsYQVb/G0S%2bA1YSWUYB4EvPxYCYCHteP2%2bXlgB8Au9VHJgIBX4MgATWgRt0qJwANDSynhhiLg5cdKAIaycOx%2b/p5e/LbNTyUjAl6BIyNEYUV9HPBlwD4NqNRNwMuPlQDUPe5M%2bwvTlP%2bvhCI/Al6BIz9SMSVeANgd2EdnBsQ00EBSefmxEoCBDBywG9vbvz/wbuCOgPJJpDEIeAWOMUTTIw0IrAl8Fnhygzp6tBwCXn6sBKCcMdREk58BWwMXNamkZ%2bMR8Aoc8UjkL5HdJrgb8D7dLJi/MRtq4OXHSgAaGirzx6d%2b9b8HsK1%2bKpkT8AocmWMLLf7T0mzAqqGllHBdEvDyYyUAXVoxdluXpV/9P4wtpqRrQsArcDSRUc82J7AIsDewBzB/8%2bqqkRkBLz9WApDZQJlA3LuBI4BdgVsnqK8qgQl4BY7ASIoSze4T%2bAxgOwZUyiXg5cdKAModU6aZHepjR/nqHP9C7ewVOArFGVKtqbUBNiNgMwMq5RHw8mMlAOWNJdPIVvV/HNC3/jLte49WXoGjcKwh1Xt0Ojxo45DSSag2BLz8WAlAG6vFrHsW8CbgipjiSaouCXgFji51UFvNCGwKHAw8olk1PR2YgJcfKwEIPCgainZ9usDncw3r6fGMCXgFjoyRFSH6g4H3AjtqkWAR9vTyYyUA%2bQ8fW%2bT3xbTIT9f25m/PRhp4BY5GQurh3gjYMcKHAk/trQc1PAQBLz9WAjCEdfvr48dpuv%2bC/rpQy5EJeAWOyExqk82OE7Zvfrbg56G1KV%2bIvl5%2brAQgzwF0Q/L3TwN35amCpO6CgFfg6EJ2tdEtgSXTN8C3AAt327Ra65mAlx8rAejZsB03/0/gKGBPwJIAlcoJeAWOyrGHVv%2bxwAeAl4eWUsJNJ%2bDlx0oA8hmHp6Tv/Lq1Lx%2bb9S6pV%2bDoXTF10JrAs4GPAU9q3ZIa6JuAlx8rAejbsu3bvzjdEXJ2%2b6bUQmkEvAJHaRxL1Wc%2b4NXAh4DlSlWyAL28/FgJQNzBc13a6WMngeo7f1w7uUrmFThclVbnjQk8EHhrmkJcvHFtVeibgJcfKwHo27LN278pzdztB9zSvLpq1ETAK3DUxLgkXR8C7JISgSVKUixzXbz8WAlAnIFjL3v7tW/rd/4YRyxJEpmAV%2bCIzESyjSawVLpp0JKBRUc/rid6JuDlx0oAejbsGM3buf2fTdv67DQ/FREYm4BX4BhbQD0YmsAyaYHRm3XRkKudvPxYCYCf2ae29O0DXOsnhnrOmYBX4MiZmWS/P4EV095iuzrUDhZSGZaAlx8rARjWztabvfiPSQv8fj189%2bqxJAJegaMkhtLlXgKPAd4GbKXDhAYdFl5%2brARgODPfDhwNfBTQi3847kX35BU4ioYq5bBPAzsAOwO2cFClXwJefqwEoF%2b7Wuu2qt%2b%2b8X9EU/39w66tB6/AURvnWvW17YPbALsDK9QKYQC9vfxYCUB/xv1DuqjrAOCv/XWjlmsm4BU4amZeo%2b4LAa9MnwdWrxFAzzp7%2bbESgO4Na0f1HgTYRT027a8iAr0R8AocvSmkhkMTsJMFX5y2ED4ztKR5Ceflx0oAuhsn5wD7AycD4todV7U0BwGvwCGjiMDjga2B7QG7iVBlcgJefqwX1eQ2s5p/B74MHAxc0q4p1RaB5gS8AkdzSVWjVAJ2tPAWadHgE0tVsme9vPxYCcBkhv15upb3MOAvkzWhWiLQnoBX4GgvuVookcDaaUbgNTphsJF5vfxYCcD4ZrIT%2b04E7KX/LU3zjw9OT/ZHwCtw9KeRWi6BwLJp98B2wKNKUKhnHbz8WAnAaMNeCRyezunXGf2jeemJAQl4BY4BVVRXmROwWQE7WGhLwO4gULk/AS8/VgIw82j8G3AS8Dn92pe7RibgFTgiM5FsMQksDDwfsM8D/wUsGFNMF6m8/FgJwL3mvgv4DvB54Gu6itfFD9RpQwJegaOhmHpcBO5DwHYNvDzNDKwnNnj5sRIAuCz90rfT%2buzwHhURyIaAV%2bDIBpAEDU9g1bSL4KVArYcMeflxrQnAz4Dj0xa%2bK8J7iAQUgVkIeAUOGUQE%2biCwErBZmh1YF7CDh2ooXn5cSwJwN/Aj4JR0E59e%2bjV4VQU6egWOCtBKRWcCSwObpGTA1g7YccSlFi8/LjkBsG/6FwDHAV/VRTyluk7denkFjrqpS/uhCdiaATuCeHNgI%2bDBQwvQc39eflxaAmCH8pyZ9uufqkt4eh61at6dgFfgcFdcAlRLYH7gScBz0x%2b7k8B2GORcvPw49wTgznQEr7307c/ZwD9zHgiSXQSaEPAKHE1k1LMi0CeBxYBnTEsI1gK3VfWT6unlxzkmAL9JL3t74X8DsD37KiJQJQGvwFElbCmdBYHlgecBzwLWAezSouiLCb38OHoCYIv3Lk/f8u22PXvpX5fFKJSQIjAAAa/AMYBq6kIEOiFglxXZJUV23sD6gO0ueGgnLXfXiJcfR0sA7Ha9nwDnAd8Fzgdu7A6zWhKBsgh4BY6yKEqbmgjYbIDNCtjsgCUDTwPsLALPkwm9/NgzAbBv9fbr/vvA99KvfNue5ylTTX4gXQsg4BU4CkAnFUTgHgILACumg4js7oLV0n8P9fnAy4%2bHetn%2bHriU/5y6d1H6b/vft2sMioAITE7AK3BMLrFqikA%2bBB4ErJH%2brJlmDuywohUASxq6Kl5%2b3GUCYCvyfwfY7Xn2S96m8u3EPfujhXpdjRS1IwLTCHgFDhlBBGonYGcTrDzLH7sCucnCQy8/bpoA2D57W4U/05%2brAUsCVERABAYi4BU4BlJP3YhAlgQWAR4O2GmGdgWy/W1/lpnn/1s2/fsDnLS8BbgBuD79bf/9J8Duvbe/7Y/9f/a/bfW9puydDKVuRWAmAv8faBYTtxmyCEcAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect width='9' height='9' fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3e%3cuse xlink:href='%23image0_321_211' transform='scale(0.00195312)'/%3e%3c/pattern%3e%3cimage id='image0_321_211' width='512' height='512' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeJzt3XmYXHWZ6PFvVyeBJGQPSQgQAsi%2bSABZZNMACi7jwuDDOHJdrqLjAo5zUeeqV3Qch3EbcRzF5d6Zx4VxGRUUVHZQlgBCBjBAWAxZgLAlJAGSdHc6949flzSdXqq66py36pzv53nep9PVVdUv55C8v/qtHZTTDGBfYH6/mNX3eDXG9MWkvtesBbYA64HNwPPAamBlv1jeLyRJalkd0QnkYBZwdF8cAhwEzM34d64F7gAW9/u6FNia8e%2bVJKm0JgNvBr7NC0W3FWI18D3gbcDszP7rJUkqkTnAB4FrgW7ii/1I0UvqFfgssE8G10OSpMKaCLyTVPR7iC/qjcRtwIeBnZp6hSRJKpCDgW8AzxBfuJsdPcClwElNu1qSJLW5Y4FfkbrPowt1HnEncBYwvhkXT5KkdtJBmtB3F/EFOSoeA87FhoAkqSReS1pCF12AWyVWAu8m7U0gSVLhHARcRXzBbdW4B3jTqK%2buJEktZippcl%2b7z%2bjPK64A9hjVlZYkqUW8ntTFHV1U2y2eB84DxtV/ySVJirMj8DPiC2m7x2LgsDqvvSRJIU4GHiG%2beBYlukm9AZV6boIkSXkZB1xAedbz5x2XAjNrvhuSJOVgLnAj8UWy6LESOK7GeyJJUqaOJW1qE10cyxLdwHtqujOSJGXkdGAj8UWxjHEBzguQJAU4B9hCfCEsc/wMmDDSjZIkqRk6gK8RX/yMFDcD04a9Y5IkNagT%2bC7xRc94cSwGZgxz3yRJGrVO4AfEFztj8LgdmD7k3ZMkaRQ6gG8RX%2bSM4cOeAElSUznm3z5xGzBx8NsoSVLtPkl8UTPqi8uAMYPdTEmSavEW3Nq3XeNbg9xPSVLBdTbhPY4FfoGfJNvVYcB6YFF0IpKk9jEXt/ctQmwBTkWSpBqMBX5HfPEymhNPA7shSSqFRvaI/yKeOFck00n7NziUI0klMNo5AK8C/pW07l/FMY/Us3N1dCKSpGyNpoDvCNwFzGlyLmoNvcApwJXRiUiSsjOaIYALsfgXWQX4Nm4SJEmFVu8QwGnAp7NIRC1lKjAeuDw6EUlSNuoZApgCLAF2zigXtZZe0h4PN0cnIklqvnqGAP4Ji3%2bZVEjDPWOjE5EkNV%2btQwAHAd%2bhsWWDaj%2bzSfsD3BKdiCSpuWodArictPRP5fMU8BJgXXQikqTmqaUH4HXAp7JORC1rAmmr4GuiE5EkNc9IPQAdpO7fl%2bWQi1rXRmBvYFV0IpKk5hhpTP/NWPyVlgR%2bMjoJSVLzDNcD0AHcSZoAKHUB80mnP0qS2txwPQCnYPHXC8YBH4pOQpLUHMP1AFwFnJhXImoLa0kHBj0bnYgkqTFD9QAcjMVf25oGvCM6CUlS44Y6%2b/19uWahdvJh4L7oJCSpoLqA54AngEdI27JnYrAhgIl9v3RKVr9UkiSNaBNwP7CYtBfLtcDKZr35YA2AdwL/r1m/QJIkNcVW0gFt3wN%2bRIM7tA7WALgOOKGRN5UkSZl6lvRh/XxGuTx7YANgDmm3t1oPCZIkSXGeB74IfJ40f6BmA1cB/CUWf0mS2sUE4NPA7cAh9bxwYAPgtGZlJEmScnMgaX7A39T6gv5DAJNJR7%2bObXJSkiQpP98g7dw67BLC/j0AJ2HxlySp3b2ftEpg2JrevwFwSqbpSJKkvJwO/DvDnPnTf8Lfl4EZWWckSZJycTAwCbhisB9W5wDMAh7PKyNJkpSbvwYuGvhgtWvg5fnmIkmScvJNYM%2bBD1YbAEflm4skScrJZODCgQ9WGwB1bR4gSZLayknAW/o/UJ0D8AgwN/d0JElSXh4G9ga6IfUAzMTiL0lS0c0H3lr9pgLsE5eLJEnK0ceqf6gAuwcmIkmS8rMffRP/K6QuAUmSVA5nQmoA7BaciCRJys8bIDUAZgcnIkmS8rMzsHcFmB6diSRJytUrqssAJUlSeRxYAaZGZyFJknK1TwXYLjoLSZKUqz1sAEiSVD6TO4AeoDM6E0mSlJuNFV44EEiSJJXDmArQFZ2FJEnK1QYbAJIklc%2bGCrA5OgtJkpSrVRVgQ3QWkiQpV0srwFPRWUiSpFzdVwGejs5CkiTl6gZ7ACRJKpcNwG0VYEV0JpIkKTdXAT0VYHl0JpIkKTffB6gAy4ITkSRJ%2bVgD/BpSA%2bDB2FwkSVJO/o2%2b/X86%2bmINMDUyI0mSlKnngPn0Tf6vAFuBJZEZSZKkzH2Jfiv/Kn1f74rJRZIk5eBPwD/3f6DaALg1/1wkSVIOtgLvBzb2f7DaALgx93QkSVIevghcPvDBjn5fVwOz8sxIkiRl6vfAiUD3wB9UewC2AjfkmZEkScrUEuCNDFL84YUGAAzSPSBJktrSQ8AppGX%2bg%2bro9%2bddgJVZZyRJkjJ1N3Aq8MhwT%2brfA7AK9wOQJKmd/QI4lhGKP7y4AVB9oSRJai%2bbgXOA04D1tbygY8D3B%2bGmQJIktZNrgQ8A99bzooE9AHfX%2bwaSJCnE7aRZ/gsZRe0e2AAAuKjRjCRJUia6SMP1pwKHA5eM9o0GDgEA7Aw8DIwZ7ZtKkqSmeQy4pi8uZpilffUYrAEA8Evg9c34BSqc9cCPopOQpALqAp4FngHWAg8A95EaALl5HWl3QMMYGF9CktT2huoB6CDtCbBfjrmo9fUAewIrohORJDVmsEmAkD7pXZBnImoLP8HiL0mFMFQPAMB4YDmwY065qPUdTlp2Iklqc0P1AABsxPFeveBqLP6SVBjD9QAATCSdKDQ7h1zUurYCLwcWRSciSWqO4XoAAJ4Dzs8jEbW0n2Lxl6RCGakHAGAc8Edgr4xzUWvqBg4grUeVJBXESD0AkDYm%2bFjWiahlfRuLvyQVTi09AFVXkw4cUHk8DewPPBGdiCSpuWrpAaj6EOm8YZXH/8LiL0mF1FnHc58kHRD0ioxyUWu5FvhIdBKSpGzUMwQAaULgHaRJYSqu54GDSUtAJUkFVM8QAKQJge8gzQxXcX0Ki78kFVo9QwBVj5IOhTmxybmoNVwDfJC0%2bY8kqaDqHQKoqpAKxQlNzEXxHgUW4MQ/SSq8eocAqnqBM0gFQ8XQC/wPLP6SpBocTVoauNVo%2b/gUkiTV4Wzii5fRWPwXo%2b8NkiS1odFMAhzoFmAGcGQT3kv5uw14A2mFhyRJdekELib%2bk6xRX/wJj3qWJDVoB%2bBm4ouaUVs8Bew96J2UJKlO04DFxBc3Y/hYC7xsiHsoSdKozALuIb7IGUMX/8OHvHuSJDVgFvDfxBc7Y9vif8Qw902SpIZNJ60QiC56Roo1%2bMlfkpSTycAVxBe/ssdDwL4j3CtJkppqDPBN4otgWWMRaUhGkqQQfw9sIb4glil%2bAoyv5eZIkpSlU4CniS%2bMRY8e4NOM/rRHSZKabnfgDuKLZFHjUeCVNd8NSZJyNBY4D4cEmh1XAzvVcR8kSQpxErCK%2bMLZ7vE88FE80U%2bS1EamABdgb8Bo43pc4idJamPHAUuIL6jtEk8Bb8eJfpKkAhgLnE3atS66wLZqdJH2VdhxlNdYkqSWNQP4KrCR%2bILbKtEL/BjYq4HrKklSW9iF9Gl3M/EFODKuxH38JUklNA/4MrCe%2bGKcV3QBP8TCL0kSU4BzgQeIL9BZxRrgfFLvhyRJ6qcDWAhcRFoDH120G41u4DLgrcCEJl4nSZIKaxKpcF4CbCK%2bmNcavaST%2bj6Ep/VJktSQCaTdBS8AlhFf5AfGE6QT%2bs7CLn5JUqCibyIzHzimL44G9gfG5fS7u4F7gMWkw49%2bB9xFaghIkhSq6A2AgcYC%2bwAH9X3dvS/mkzbW2b7O9%2bsCHiGdZ/AwsBJYTir6d5OGJCRJajllawCMZCJpE6IZpIN1pvDCATsbSQV9PenT/bq%2b6M0/TUmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEkalY7oBCTlbiowBpjc9/16oAd4JiwjSbmzASAVx2TgpcAewG7Arv1iDjAJGDvCe3QDG4DVwApgFbASWA78CbiT1GCQ1OZsAEjtaSJwDHAosKDv655k/3d6K/AgsBi4oy9uAp7L%2bPdKklRaewDnAFcCm0jFuBWiG/gDcB5wGFDJ6gJIklQGFeAE4DvA48QX%2blpjNfBt4HhsDEiSVLMDSJ%2bmHyK%2bmDcaq4ALgGObeoUkSSqIscBbgduIL9pZxS3AGaQVCJIkldpk0rj%2bcuILdF7xKKmHY3oTrp8kSW1lOvDPpCV30QU5KtYD/0Tal0CSpEKbAHwMWEN8AW6VWNN3TcY3cF0lSWpJFeA9pElx0QW3VWMl8C5cOSBJKoiDgJuJL7DtEjcBB47qSkuS1AK2J01220x8UW236ALO77uGkiS1jeOA%2b4kvpO0eS3EPAUlSG%2bggTWjrIb54FiV6SD0pnXXcB0mScjMLuJz4glnUuBaYW/PdkCQpB6%2bmvfbrb9dYDZxc4z2RJClTZ5FOxIsujmWJHuBDNd0ZSZIy0Ek66Ca6IJY1LsB5AZKknE0ELiG%2bCJY9fgNMGuFeSZLUFDOAPxBf/IwUtwLThr1jkiQ1aBrFPrK3XWMxqWEmSVLTWfxbO2wESJKabhp2%2b7dDLAZmDnEPJUmqy0Qs/u0Ut5COXZYkadQqwC%2bIL2pGffErXCIoDcu/INLwvgq8PToJ1W1v0vLAy6MTkSS1n78l/pOs0Vicvc1dlSRpGCcBW4gvYEZj0QOciKRtdEQnILWg2aTZ5DtFJ6KmeBxYADwWnYjUSirRCUgtpgL8AIt/kcwGLsI5T9KL%2bBdCerHPAO%2bMTkJNN580pHN9dCKSpNZzAo77Fzl6gGORBDgHQKrajjTuv190IsrUUuAQYFN0IlI0hwCk5B%2bAN0UnoczNBHqB66ITkaLZAyDBQcDtwNjoRJSLHuBlwH9HJyJFchWAyq4T%2bC4W/zIZA3wT//1TyfkXQGX3duCI6CSUu6OAM6OTkCI5BKAy2x64H9g1OhGFeATYC9gYnYgUwR4Aldk5WPzLbGfgA9FJSFHsAVBZTQMeBKZHJ6JQa4GXAGuiE5HyZg%2bAyurjWPyVGoLnRichRbAHQGU0GVgBTIlORC1hPTAPWBediJQnewBURmdh8dcLJgPvik5Cyps9ACqbMcBDpE98UtUqYA%2bgOzoRKS/2AKhsTsfir23tArw5OgkpT2MyfO8O0j%2b0e5Em2kzBBofifTA6AbWsT%2bDQkOL1kuajrAUeIM1X2prFL2rmEMAY4HhgIfBKYAEwvonvL0lS2TxPOqn0WuAa4HekY8sb1owGwH7Au4G3AnOa8H6SJGlwjwH/CXwHuK%2bRN2qkAXAoqcvsjdi1L0lSnnqBXwCfY5QnW46mATANOI80lmrhlyQpzlbgB8DfAU/W88J6GwBvJB2dOqPO10mSpOw8SRqO/2WtL%2bis8Xljga/0xYT685IkSRmaCJxB2tjqWtIQwbBq6QGYCPwUOLWh1CRJUh6uIu1rsWG4J43UAJgCXA4c2aSkJElS9hYBpzDMGRfDTeIbTxpLsPhLktRejgIuAbYf6glDNQA6gB%2bSNvaRJEnt5wTg%2bwzR2z/UJMBzgbOzykiSJOVif9IwwKKBPxisVXAk8HvSzH9JktTeuoBjgD/0f3BgA2AMcBtwSE5JSZKk7N1N2sG3p/rAwCGAs4F35JmRJEnK3GzgKeDW6gP9ewAmAg8DM3NOSpIkZe9pYD7wLLx4FcDfYPGXJKmoZgDvqX5T7QHoBJYDO0dkJEmScrGK1AuwpdoD8Cos/pIkFd0uwEJ4YQjgbXG5SJKkHJ0JaQigk3SM4LTQdCRJUh6eBmZVSGv%2bLf6SJJXDDODgCnBcdCaSJClXx1dI%2bwRLkqTy2K8C7BudhSRJytW%2bFWBedBaSJClXu1WASdFZSJKkXE3qADYD46IzkSRJudlcGfk5kiSpaCr0nQokSZJKY0MFWB%2bdhSRJytX6CrAiOgtJkpSr5RVgaXQWkiQpV0srwJLoLCRJUq7urQC/j85CkiTl6voO0kqAJ0inA0mSpGL783HAvcBvg5ORJEn5uAzorW4E9IPITCRJUm6%2bD9DR900nsBzYOSwdSZKUtZXAfPr1AGwB/iUuH0mSlIOvkIb%2b/9wDADARWAbsGJGRJEnK1FPA7vQdAdDZ7wfdpJMBTw1ISpIkZetc4MbqNx0DftgJ3AYsyDMjSZKUqduBI0lD/kDaA6C/LcB7ga4ck5IkSdnpAs6iX/GHFw8BVD0KPA%2b8OoekJElStj4CXDzwwcEaAACLgAOA/bPMSJIkZerHwEcH%2b8HAOQD9jQMuBU7OIiNJkpSp60gT%2bzcN9sPhGgAAU0jbBB/V5KQkSVJ2biYV/3VDPWHgJMCB1gEnAr9uYlKSJCk7VwKvYpjiD0PPAeivG/gpaaOgoxi510CSJOVvK/Al4F0M0e3fX73F/C%2bA7%2bJugZIktZInSIX/slpfUEsPQH9Lge8AE4DDGXkIQZIkZaeXdKLvG4A763lhI935LwU%2bAZyGDQFJkvLUSxqe/0fg7tG8QTPG8/cB3g28FZjbhPeTJEmDewS4iDQcf38jb9TMCX2dwLHAwr5YQJo4KEmSRuc5YDFwDXA16TCfLcO%2bokZZz%2bifB%2bwJzAQmU/%2bcA6nZPggcFJ2EWtLdwNejk1Dp9QAbgCeBh4CVselIxXEGaamMYQyMtyCViGv6VTadwAPA7tGJqKUsB15C%2bvQllYKz91U2W7CbV9v6KhZ/lYw9ACqjSaRxtSnRiaglrAd27fsqlYY9ACqjDcCF0UmoZXwdi79KyB4AldVU4EFgRnQiCrWWtFJpbXQiUt5clqey2kSa%2bX1ydCIK9Qng2ugkpAj2AKjMtiedbzEvOhGFWE7ayXRzdCJSBHsAVGY9wDPAG6MTUYizgTuik5Ci2AOgsqsANwFHRieiXN1M2rq8NzoRKYoNACltDfwHYFx0IspFF3AosCQ6ESmSQwASPAFsBxwfnYhy8TnSMapSqdkDICXbkU7c2i86EWVqKXAIaRWIVGpuBCQlm4GzaNIxm2pJPcA7sfhLgEMAUn8rSI3iV0Qnokz8H%2bCi6CQkSa2pAlxB/NG0RnPjGvzAI72IcwCkbc0mzQfYKToRNcXjwALgsehEpFbiHABpW48DZ%2bJ8gCLYAvwVFn9JUh3eS3zXtdFYfGibuypJUg2%2bSnwRM0YXXxrkfkqSVJMK8DPii5lRX/wSJ/1Jkho0AbiF%2bKJm1BY3AeMHvZOSJNVpKnAr8cXNGD7uAKYPcQ8lSRoVGwGtHRZ/SVJmbAS0ZtyOxV%2bSlLFp2AhopVhEaphJkpS5icDFxBe/ssfPSZM0JUnKTQdwHvFFsKxxAe5mKkkK9B6gm/iCWJboAT5Q052RJCljJwOriS%2bORY/HgIU13hNJknIxC/gt8UWyqHENntAoSWpRHcA5QBfxBbMo0UOaa%2bHWvpKklncssJT44tnucR9wTJ3XXpKkUGOBjwGbiC%2bk7RZdwPnA9nVfdUmSWsSBpANqootqu8SNwAGjutKSJLWYCvAuYAXxBbZVYznwdlzbL0kqoHHAWcDjxBfcVomnSUMldvdLkgpvKvB5YD3xBTgq1gGfA6Y0eC0lSWo7k0jLBpcRX5DzimWkT/zTmnD9JElqa2OA0yn2ZMEbgL/E9fySJA1qP9LGNw8SX7QbjRWkQ3sOaeoVkiSpwDqA44ALSXvgRxfzWuMx4JukzZA6mn5VJEkqmT1IKwh%2bBWwkvtBXYyNwJWlc/zAs%2blJb8C%2bq1J7GA0eRCu6hfbEX2a%2bh7wXuB%2b4AFgO3A4tIjQBJbcQGgFQck4CDgT2BecCufTEPmANMZOS19puA50hHGy8HVgKrSGP5DwJ3Ac9mkLuknNkAkMpnMumcgur6%2b3VAN2lPAkmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJBVbR3QCkiSNUicwBZgKjAV2AMYD2/d7ztq%2br0/3xYY8E2xlNgAkSa1sAnAwcAgwH9gVmNcXc4Exdb5fF/Ak8DCwrO/rUuBu4N6%2bn5eCDQBJUquoAAuA44FD%2b/68L%2bmTfh66gXuARcBNwI3AQzn9bkmSSmUWcDrwLeARYGuLxWrge305Ts3oGkiSVAo7AR8GbiW%2bwNcTm4FLgTNJcw8kSdIIJgFvB64Aeogv5o3GJuDHwEk4nC5J0jbmA18G1hFftLOKB4GP4hCBJEkcDfyEYnzarzXWA/9CavRIklQqRwHXEV%2bMI6OLNKlx1wavpSRJLW8/4OfEF99Wik3A14CZDVxXSZJa0hzgu5Srq7/eWENa9TB2lNdYkqSW0QH8T1Jxiy6w7RL3AieM5mJLktQK9gSuJL6gtmP0kjYWml73VZckKUgF%2bDiwkfhC2u6xCji5vssvSVL%2bZgG/Jb5wFil6gQuA7eq4D5Ik5eZk0p740QWzqLEY2KPmuyFJUsY6gX8EthBfJIsea4DX1HZbJEnKzkTgYuILY5liC/C/a7k5kiRlYQ5wG/EFsazx77hngCQpZwcCy4kvgmWPK4HJI9wrSZKa4mjgGeKLn5HiVtwvQJKUsaMp9pG97RpLgLnD3DdJkkbt5Vj8WznuAXYc8u5JkjQKx5DOsY8ucsbwsRiYNsQ9lCSpLgfgmH87xc2k5ZmSJI3aHOBh4ouaUV9cBowZ5H7WrbMZbyJJaivjgd%2bQlvypvexFarxd2ugb2QCQpHLpBH4KnBidiEbtMNLWwbdGJyJJah%2bfJb4b22g8uoHjkSSpBq8EeogvXkZzYjWwM6PUMdoXSpLayk6kpWSzoxNRU11HGs7prfeFzgGQpOKrAD8HDo5ORE03H9gE3BCdiCSp9fw98d3VRnbRBRxOnRwCkKRi2xu4E9g%2bOhFl6j7gEGBzrS9wCECSiqsD%2bAlp7biKbSZpZcD10YlIkuK9h/juaSO/2ATsR40cApCkYpoD3AtMjU5EuboaOKmWJ1YyTkSSFOOzWPzL6ETgjbU80R4ASSqefYA/0qRDY9R2/gTszwgTAp0EKEnF811SAVA5TQOeYISzAuwBkKRiOZJ0brz/vpfbamBP4PmhnmAPgCQVyw9Ju8Op3HYAngFuGuoJthAlqTiOAG6JTkIt4wlSY3DjYD90FYAkFcffRSegljILOHOoH9oDIEnFsBvwIM7814vdT9ocaJvTAu0BkKRiOBuLv7a1N3DqYD/IsgdgF9Ja1L2ByaRlCROBcRn%2bTkkqqzNI/9ZKA13CIJsDNbMBsCPwJmAh8ApgdhPfW5IkjU4PaYjo0f4PNtpd1AG8BjiL1MUwtsH3kyRJzTUGeAfw%2bf4PjrYHoAM4Dfgk8NLG8pIkSRlbAhzY/4HRNAD2Ar4OvKoZGUmSpFwcSGoIAPWtAuggrTFdgsVfkqR285b%2b39TaAzAV%2bD7wuqanI0mS8nAX/Ybta2kAzAF%2bAxySVUaSJCkX84CVMPIQwDzSQQIWf0mS2t%2bfh/CHawDMBH4L7J55OpIkKQ%2bvrv5hqCGAccB1wNG5pCNJkvKwGtgJhu4B%2bAIWf0mSimYOsCcM3gB4LelQCUmSVDzHwrYNgAnAv%2bExwZIkFdXLYNsGwCdIBwZIkqRiOhhe/El/BvAwsENIOpIkKQ/PANP79wB8BIu/JElFNxXYpdoDsD3pnOBpcflIkqScLKz2APwFFn9JkspifrUB8LbQNCRJUp52r5B2/VsYnYkkScrNvApwBDAxOhNJkpSbmRXgmOgsJElSrmZUgP2is5AkSbmaWQH2ic5CkiTlanIF2Dk6C0mSlKtxFWBSdBaSJClX23UAXcDY6EwkSVJueitAb3QWkiQpV70VYEN0FpIkKVebK8C66CwkSVKuuirAsugsJElSrjZVgKXRWUiSpFytqQB/jM5CkiTlak0FuD46C0mSlKsnK8C9wGPRmUiSpNw8Wen7wyWhaUiSpDw9XG0AfD80DUmSlKdl1QbAzcB9kZlIkqTc/LkHYCvwhchMJElSLrYCSzv6PTAWeADYLSYfSZKUgxXAbpV%2bD3QDHw9KRpIk5eMugMqAB38EXJV/LpIkKSeDNgAA3geszzcXSZKUk0UweAPgIeDd%2beYiSZJysBW4EQZvAAD8FPhybulIkqQ83AusgaEbAADnAj/MJR1JkpSH66p/GK4BsBV4J6k3QJIktb/fVv/QMdyz%2bj3ny8DfZpaOJEnKWhcwA3gWhu8BqNoKfAR4P7Apu7wkSVKGrqev%2bENtDYCqbwJHA39sdkaSJClzP%2bv/TS1DAAONBc4GPg1MakZGkiQpUz3AXODJ6gP19ABUdZPmBOwBfAZY25TUJElSVq6hX/EH6GzgzZ4nLSe4EFgGTAN2ZXS9CpIkKTvn0bcFcFWzi/XOwELglcACYB9gfJN/hyRJqt1aUn3e2P/BrD%2btd/T90h2BHYDtMv59klRWFwJ7RiehlvSvpLl7kqQC%2biBp2bZh9I9e4AAG4Xi9JBXDBGAFaaMXqeo3wGsG%2b0EjkwAlSa2jmzQZ%2b9joRNRS3keaqL8NewAkqTjmkv6xHxediFrCHcBhQ/3QHgBJKo4NwDyG%2bUdfpfJe4P6hfmgPgCQVy1zSP/oToxNRqD8AR5AmAg7KHgBJKpYNpGXXx0UnolDvAB4a7gn2AEhS8UwCHgRmRSeiEJcBrxvpSfYASFLxdAFbgFdHJ6LcdQNvAp6KTkSSFGMsae/36I1ojHzjK9TIIQBJKq4jgJuwt7csHgX2B9bV8mT/p5Ck4noEmA4cFZ2IcnEmcGd0EpKk1rAD8DDxXdNGtvEjJEka4FWkSYHRRcrIJlYxijMgHAKQpOJ7iHRYkOcEFE8vcBqwJDoRSVJrGgPcQPynVaO5cT6SJI2fsr%2blAAACV0lEQVRgF%2bBJ4ouW0Zy4htSwkyRpRK/F%2bQBFiJU0uNOjcwAkqVweAJ7FXQLb2UbgNQxz0l8tbABIUvncTJo1fmR0IqpbL/BXwFXRiUiS2lMncDHxXdlGffGRwW6mJEn1mAjcRnxRM2qLLwx%2bGyVJqt9U4Fbii5sxfPxfPL9HktRk04HbiS9yxuDxH0BlyLsnSVIDpgK3EF/sjBfHhVj8JUkZm0ZaIRBd9IwUX8Ruf0lSTrYDLiK%2b%2bJU5eoHzRrpRkiQ1WwepAEUXwjLGRuCMkW%2bRJEnZeS/QTXxRLEusBI6o6c5IkpSxI4FlxBfHosf1wJwa74kkSbmYCVxKfJEsYmwhHenrqX6SpJbUAZwDbCa%2baBYlVgOn1HMTJEmKcjiwmPji2e7xI9KBTJIktY0xpN6ADcQX0naLR4E313/JJUlqHXsCVxBfVNshuoCvAJNGdaUlSWpBbwbuIb7Itmr8Gth31FdXkqQWNgZ4N2kte3TBbZVYBJzcyEWVJKldjAfOJY11RxfgqLgdeH2jF1KSpHY0Djid9Ck4uiDnFTeQCr8H%2bEiSBCwELqGY2wqvAb4GHNC0qyVJUsHMBs4GbiG%2bcDcS3cDlwNtIQx6SJKlGewOfAe4gHX8bXdRHik3AlaQDkmZmcD0kSSqdWcBfA/9B60we7AWWAN8gjetPzOy/PogTFSRJrWZvYAFwaF8sIPttc1cAdwN3ATcDNwFPZ/w7Q9kAkCS1g12B%2bcBuwC59388jHaG7PTAB2AEYC0zre8060if5LlIxr8bjwMN9sQxYCjyT039Hy/j/57/OsdpLm2wAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect width='11' height='11' fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3e%3cuse xlink:href='%23image0_321_234' transform='scale(0.00195312)'/%3e%3c/pattern%3e%3cimage id='image0_321_234' width='512' height='512' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAG1pJREFUeJzt3XmwZmlB3/Fvs48gu6VAWAZkKcSFzcQIyCoiIBYlSoygWbSipKJljKACouWGOigStdRKVIxGg1sEHUAE1CFGHURBcYAZhwEVRAYQwQFm6fxxustJ2zPTPX3f85z3Pp9P1VND8cd5fuf2fc/7u2d5TgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBIR0YH2HM3r253tVF1m3Fx4FA7Wn3g2P%2b%2b9Grjw8MSwR5TAE7N2dV9q/tU9zo27lN90shQQFXvri6o3lq95dh4c3XxyFCwdQrAyd2hekj16Opzq7uNjQNcD%2b%2bufrd6VfXK6u1j48C2KAD/6AHV06snVPcYnAU4eBdWL6teXL1hcBYYbvYCcMfqKdWXV/cfnAVYz5url1Q/lTMDTGrWAvDw6pnVY6obDs4CjHNly%2bWB51e/PTgLrGq2AvCQ6tuqR44OAmzO61qKwMtanjiAQ22WAvDk6tk5zQ9ct9dX31H96uggsEuHvQDcs3pR9djRQYC989rqGS33C8Chc1ivf5/V8hf/z1X3HpwF2E93q76qun11XvWxsXHgYB3GMwCPr364uuvoIMChcXHL2YBzRweBg3KYzgDcqPquli//Ww/OAhwut6m%2btLpt9eqWpwdgrx2WMwB3qX6%2b%2bqzRQYBD7/zqS6q/GB0EzsQNRgc4AE%2bq/jhf/sA6HtSykuBTRgeBM7HvlwCeU/1Yy01/AGu5afVF1eUt7xuAvbOvBeBIdU71zaODANM6Uj2q5SmBV2TxIPbMPt4DcJPqp6unjg4CcMwvt9wk%2bNHRQeBU7VsBuEXLB%2b0xo4MAnOCVLauOfnh0EDgV%2b1QAbly9NKv6Adv16urzcyaAPbAv9wDcoPrZljv%2bAbbq7OqTq1/JPQFs3L4UgBdU/350CIBTcL/qE6rfGB0Ers0%2bFIDnVt80OgTAaXhwy2WA80YHgWuy9XsAnlj977afE%2bBER1tuCvRaYTZpy1%2bsd2lZbeu2o4MAXE/vrx5QvX10EDjRVpcCvnHL2v6%2b/IF9dpvqF1rWL4FN2eo9AOdknW3gcLhTdbPqN0cHgavb4iWAx7c877/FbADXx9HqcS1LBsMmbO1L9qzqz1qepQU4TC6p7lv9w%2bggUNu7BPDtLXf%2bAxw2t66urF47OgjUts4A3LN6U8trNgEOo49Vn1a9ZXQQ2NJTAD%2baL3/gcLtJ9aLRIaC2UwCe3PJebYDD7jHVF4wOAVu5BHB%2b9cDRIQBW8oaWY54XBjHMFs4AfH6%2b/IG53L/lTAAMs4UC4EU/wIy%2bZXQA5ja6ADy8esjgDAAjPKx66OgQzGt0AXjm4PkBRnIMZJiRNwHesXpH21uMCGAtV7W8%2bfSvRgdhPiPPADwtX/7A3G5QPXV0COY08gzAG6tPHTg/wBb8aY6FDDDqDMAD8wsPUHW/luWBYVWjCsDTBs0LsEVPHx2A%2bYwqAE8YNC/AFj1%2bdADmM%2bIegLu0vBcbgH/0z/I0ACsacQbgkQPmBNi6R4wOwFxGFAC/5AD/lGMjqxpxCeCSlssAAPyjd1R3HR2Ceax9BuDsfPkDnMxdUgBY0doF4FNWng9gn9x3dADmsXYBuPfK8wHsE8dIVqMAAGyHYySrUQAAtsMxktUoAADb4RjJatZ8DPDm1YdWnA9g3xxtOVZeNjoIh9%2baZwA%2bYcW5APbRker2o0MwhzULwO1WnAtgXzlWsoo1C8CtVpwLYF/dZnQA5rBmAbjZinMB7KubjA7AHNYsAH6pAa7bTUcHYA5rFoAbrTgXwL7yxxKrWLMAjHjzIMC%2bcaxkFWsvBAQAbIACAAATUgAAYEIKAABMSAEAgAkpAAAwIQUAACakAADAhBQAAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwIQUAACYkAIAABNSAABgQgoAAExIAQCACSkAADAhBQAAJqQAAMCEFAAAmJACAAATUgAAYEIKAABMSAEAgAkpAAAwIQUAACakAADAhBQAAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwIQUAACYkAIAABNSAABgQgoAAExIAQCACSkAADChG40OAHvkQ9Xbq3dWl1bvPfbfS6srq6uqvxuWjsPi90YHYA4KAPxT76reVP3Jsf/%2becsX/3tHhgI4SAoAs7uq5Yv%2bvJa/vM5r%2bQsf4FBTAJjRpdUrq3OrV1TvGRsHYH0KALN4f/Wy6iXVy6vLx8YBGEsB4DC7suWv/J849l9f%2bgDHKAAcRu%2bqfqz6b9VfDs4CsEkKAIfJW6sfqX68umxwFoBNUwA4DM6vvrXlNP/RwVkA9oICwD77s%2brbql/MFz/AaVEA2Efvqp7Xco3/ysFZAPaSAsA%2b%2bWj1A9V3VX8/OAvAXlMA2Bevq76yZVleAM6QtwGydR%2bsvq56WL78AQ6MMwBs2f%2btvqy6aHQQgMPGGQC26IqWu/sfki9/gJ1wBoCteWf1lOr3RwcBOMycAWBLfqf6zHz5A%2bycAsBWvKB6VPXu0UEAZuASAKNdWX1t9cOjgwDMRAFgpA9V/6p62eggALNRABjl0uqx1etHBzkDN69ud7VRdZtxceBQO1p94Nj/vvRq48PDEu05BYAR/qb63OqNo4OcorOr%2b1b3qe51bNyn%2bqSRoYBquW/ogpbXgb/l2HhzdfHIUPtAAWBtf9lys99bRwe5FndoWYPg0S1F5W5j4wDX4pOOjYef8P%2b/u/rd6lXVK6u3r5xr846sONdTqv%2b14nxsz3taPqRbXNL3AdXTqydU9xicBTh4F7bcb/Ti6g2Ds2yCAsBaPlA9sm198O7Y8nv55dX9B2cB1vPm6iXVTzXxmQHrALCGv285nb6VL/%2bHV%2bdW76h%2bMF/%2bMJv7Vt/aclbgN6rPGRtnDAWAXbuy5YU%2bW7jb/yHVb1WvqT6vuuHYOMBgN6weV722Oq96YuueGR9KAWDXvrb6tcEZnlz9UcsNQY8cnAXYps9uOVb9YfWFg7OsQgFgl17Q2BX%2b7lm9vPqlnOYHTs0Dq19pOVN438FZdkoBYFdeUz1z0NxnVc%2br3tSy2BDA6Xp49cfVC6tbDM6yEwoAu/DO6kuqKwbM/fiWxwy/tbrpgPmBw%2bPG1X9qWbTscYOzHDgFgIN2ecujdX%2b78rw3qr6neml115XnBg63s6tfbzkbcJPBWQ6MAsBBe171%2byvPeZfqd1ouOUxzBy%2bwqiMtZwNeV919cJYDoQBwkM6rnr/ynE9quU73WSvPC8zpQS1rmjxldJAzpQBwUD7Y8rz/lSvO%2bZzqV/MGPmBdt6x%2bofrm0UHOhALAQXlWdclKcx2pzqm%2bfaX5AE50pPrO6kXt6XfpXoZmc36v%2brGV5rpJ9XPV1680H8C1%2bY8t7xXYu6eOFADO1Eerf1tdtcJct2h5m9dTV5gL4FQ9uWUVwZuPDnI6FADO1DnVBSvMc%2bPqF6vHrDAXwOn63JYSsDdnAhQAzsTftM5d/zeofiar%2bgHb9siWVwzvxXfrXoRks57Vcvf/rp3TsrIgwNY9teXGwM1TALi%2b3li9eIV5nlt93QrzAByUr2n5A2nTFACur%2be2%2bxv/ntiysiDAvvmuNv5aYQWA6%2bP1LTe77NJdWq6lWdoX2EdHqv9e3W10kGuiAHB9PLc6usPt37j6%2beq2O5wDYNdu07Ji4CZfIKQAcLr%2btDp3x3N8b9b2Bw6Hz6y%2bY3SIk1EAOF3f327/%2bn989bU73D7A2r6hDT7GrABwOv6m5XTWrpzV8viM6/7AYXKkZbn0jxsd5OoUAE7Hj1Qf2eH2n1OdvcPtA4xy1%2bqZo0NcnQLAqbqy5a78XblnXvADHG7Pqu49OsRxCgCn6tzqHTvc/o%2b2R2toA1wPN2lDqwQqAJyqn9jhtp9cPWqH2wfYisdUXzA6RNWNRgdgL7y/evmOtn2kevaOtr2Wy6qLqkurDx8bwMG6%2bbFxu%2boeLTcN76vntPvF1K6TAsCp%2bKXqYzva9uOq%2b%2b9o27tyQfWq6jXVH1WXtNtHI4H/3w1aVgt9YPWI6tFt6Nr6KXhQy2OBrxgdZC1PaTlIGvs3HnOSf8%2bDct4G9u9UxqXVD1SfsZsfA3CGHlD9YMtndfTx4lTG7%2bzmx7BNCsB%2bjve2uzNFD9/A/l3XeFfLIh4fv6OfAXCwPr76xpZ1S0YfP65rPHRHP4PNUQD2c/zsyf4xD8i5G9i/axqXt/zFf8ud7T2wS7eqXlhd0fjjyTWNl%2b1s7zdGAdjP8WUn%2b8c8AHdqux/Mt7ScTgT23wOrtzX%2buHKycUV1h93t%2brXzGCDX5qrqlTva9r%2bubrijbZ%2bJX2i5QeePRgcBDsTrW0rAL44OchI3rL50dIg1OAOwf2OXX4Jv3MD%2bnThemFIMh9WR6vmNP86cON60y53eCgVg/8YPnfRf8sw9YAP7duL4ph3tK7Atz2788ebE8ek73eNr4K8drs3rdrTdp%2b9ou9fX91XfPToEsIrvqF4wOsQJnjY6wK45A7B/484n/Zc8cxduYN%2bOj5/P64dhNkeqlzT%2b%2bHN8XLDb3R1PAdiv8dcn/2c8Y3fZwL4dH2/LY34wq1u0fPGOPg4dH3fa7e7%2bUy4BcE3%2bZEfbfeSOtnu6rqi%2bpPrg6CDAEB9qOfV%2b5eggxzxi7QkVAK7JG3e03dV/ya/Bi/KoH8zuD1teRb4FCgCbsatHU7ZQAN5dPW90CGATnl29Z3SIBrwSXQHgmuzippSz292NhafjnJz6BxZ/17Ls92h3PTZWowBwTS7ewTY/ZQfbPF3vq35sdAhgU36kev/oEK18jFQAOJm/b3ml5kHbwvu6f7pl/wCO%2b2D1M6NDVPdaczIFgJN5%2b462u4UC8OLRAYBN2kIBWPUYqQBwMn%2b1o%2b2u2m5P4oLqjwdnALbp/Ja1QUZSABjub3e03fvsaLun6lWD5we27bcGz68AMNx7d7DNm1efuIPtno7XDp4f2LZXD57/DtVZa02mAHAyu7gB8BN2sM3Tdf7oAMCmvX7w/Eeq2681mQLAyfzdDrZ5ux1s83RcVr1zcAZg295efWRwhtWOlQoAJ/OxHWzzVjvY5um4sLpqcAZg266qLhqc4TZrTaQAcDK7KAA328E2T8cWFvkAtm/0seIma02kAHAyuygAq/1SXwOL/wCnYvSx4qZrTaQAcDKX72CbN9rBNk/HZYPnB/bDhwfP7wwAh86RwfMfHTw/sB9GHytWO1YqAAAwIQUAACakAADAhBQAAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwIQUAACYkAIAABNSAABgQgoAAExIAQCACSkAADAhBQAAJqQAAMCEFAAAmJACAAATUgAAYEIKAABMSAEAgAkpAAAwIQUAACakAADAhBQAAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwIQUAACYkAIAABNSAABgQgoAAExIAQCACSkAADAhBQAAJqQAAMCEFAAAmJACAAATUgAAYEIKAABMSAEAgAkpAAAwIQUAACakAADAhBQAAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwIQUAACYkAIAABNSAABgQgoAAExIAQCACSkAADAhBQAAJqQAAMCEFAAAmJACAAATUgAAYEIKAABMSAEAgAkpAAAwIQUAACakAADAhBQAAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwITWLABHV5wLALgWaxaAK1acCwC4FmsWgI%2btOBcAcC3WLAAfWXEuAOBarFkAPrDiXADAtVizALx3xbkAgGuhAADAhNYsAP9QvXvF%2bQCAa7D2QkBvWXk%2bAOAkFAAAmJACAAATUgAAYEJrF4A3rzwfAHASaxeAi6tLVp4TADjBiNcBv3bAnADA1YwoAK8ZMCcAcDUjCsCrB8wJAFzNiALwzurCAfMCAMeMKABVLx00LwDQuALwPwbNCwA0rgD8UfWmQXMDwPRGFYByFgAAhhldAK4cOD8ATGtkAfjr6pUD5weAaY0sAFXPHzw/AExpdAH47eq8wRkAYDqjC0DVd40OAACz2UIBOLc6f3QIAJjJFgpA1XeODgAAM9lKAfjVljMBAMAKtlIAqr62%2bsjoEAAwgy0VgLdV54wOAQAz2FIBqOVegItHhwCAw25rBeCy6hnV0dFBAOAw21oBqOVmwB8YHQIADrMtFoCqZ1X/Z3QIADistloALq%2beWl06OggAHEZbLQBV76y%2bIvcDAMCB23IBqHpZ9S2jQwDAYbP1AlD13bkpEAAO1D4UgKr/XP306BAAcFjsSwE4Wn1l9fLRQQDgMNiXAlDLkwFfVL1idBAA2Hf7VACqPlw9ofrJ0UEAYJ/tWwGouqL6d9X3jQ4CAPtqHwtALfcEfGP1TVknAABO274WgOO%2bp3pS9b7RQQBgn%2bx7Aah6afUZ1etGBwGAfXEYCkAtywY/vPq26qrBWQBg8w5LAajl5sDnVZ9f/cXgLACwaYepABz3iup%2bLWcDPjI4CwBs0mEsAFWXtZwNuF917uAsALA5h7UAHHdRyyWBJ1XnD84CAJtx2AvAcb9WPbh6aMsrhgFgarMUgOPOq55YPaz69erKsXEAYIzZCsBxv9vyToE7V19XvX5sHABY16wF4Lh3VS%2bsHlR9enVO9ZahiQBgBbMXgKt7Y/UN1X2qT6q%2buPrx6uKRoQBgF240OsBG/U31kmOj6q7VfVvKwb2qex8bdxySDgDOkAJwai45Nk5cU%2bCs6nbHxu2rI9Utqxuumu7g/d7oAADslgJwZi6r/vLYAIC94R4AAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwIQUAACYkAIAABNSAABgQgoAAExIAQCACSkAADAhBQAAJqQAAMCEFAAAmJACAAATUgAAYEIKAABMSAEAgAkpAAAwIQUAACakAADAhBQAAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwIQUAACYkAIAABNSAABgQgoAAExIAQCACSkAADAhBQAAJqQAAMCEFAAAmJACAAATUgAAYEIKAABMSAEAgAkpAAAwIQUAACakAADAhBQAAJiQAgAAE1IAAGBCCgAATEgBAIAJKQAAMCEFAAAmpAAAwIQUAACYkAIAABNSAABgQgoAAExIAQCACSkAADAhBQAAJqQAAMCEFAAAmJACAAATUgAAYEIKAGs5Onj%2bI4PnB/bD6GPFasdKBYC1XDF4/rMGzw/sh5sPnv9ja02kALCW1X6pr8HHD54f2A%2bjjxUfXWsiBYC1fGTw/LcdPD%2bwH0YfKxQADp0PDJ7/Hvl9B67dDaq7D87w/rUmckBkLe8dPP9Z1Z0HZwC27W7VzQZnWO1YqQCwltEFoOpBowMAm/bAwfMfrd631mQKAGv5h%2brdgzM8YvD8wLY9avD8f11dttZkCgBrumDw/I8ePD%2bwbaMLwFvWnEwBYE1vHTz/vav7D84AbNNnVp88OIMCwKG16i/3NXj66ADAJj1tdIC2cYyEnXh8y00uI8eljV/oA9iWW7Y8fjf6%2bPS4Xe/o1TkDwJrePDpAyyIfXz06BLApz6huPTpE2zhGws5c0viW/e6Wxg9w6%2bo9jT8uXbzrHT2RMwCs7TWjA1SfWH376BDAJnxn9QmjQ1S/NToA7NqXN75pH60ub/yiH8BY/7zlTaWjj0dHqy/b8b7CcHdu/Aft%2bLiwutVudxfYqFtXFzX%2bOHR83Gm3uwvb8LbGf9iOj5dUR3a7u8DG3KD65cYff46PP9/t7sJ2vKDxH7irj3N2u7vAxvxg4487Vx/fu9vdhe24f%2bM/cCeOZ%2b90j4GteG7jjzcnjk/d6R7Dxryx8R%2b6E8cL82QMHFZHWv7SHn2cOXG8YZc7DVv0Xxr/wTvZeEnWCIDD5tZt65r/1cfX73C/YZPu1HYevzlxXFg9eHe7DqzoM9vW3f5XH1dUd9jdrsN2/UbjP4DX9sH8oTwmCPvq1tUPt90/NI5WL9vZ3sPGfU7jP4DXNd5TPSuXBWBf3LL6pupvG3/8uK7xkB39DGAv/G7jP4SnMt7XcpPgg3bzYwDO0INbztpt4a1%2bpzJeu5sfA%2byPz2v8B/F0x9uqH62eUt09Tw7A2m7Y8tn74pbP4oWNPy6c7njMgf9UTpMV0NiC89vvdfk/2nIAel/1oWMDOFi3ODZuW31yddOxcc7IH7S8h2AoBYAt%2bMLqV0aHAFjJE9vADYAKAFvxG9XjRocA2LFXVo8dHaIUALbjni2rA95sdBCAHflo9WnVW0cHqeVGCtiC91VnVQ8bHQRgR76jZUXCTXAGgC05q/qz6uzRQQAO2EXV/aqPjA5ynMeX2JLLqme0PCIDcFgcrb66DX35l0sAbM%2bFLSt5fdboIAAH5PnVj48OcSKXANiiG7eskvUvRwcBOEO/Xz20unx0kBMpAGzVnVvek3270UEArqf3V/evLhkd5GTcA8BWvbP6itwPAOyno9W/aaNf/uUeALbtrdXHqkeNDgJwmr6x%2bsnRIa6NAsDWnVfdKjcFAvvjv1bPGR3iuigA7INXVnerPmN0EIDr8HPVV7UHly/dBMi%2buHH1ay2vDwbYoldVj2%2b5dLl5bgJkX1xefVH1itFBAE7i5S1vNt2LL/9yCYD9cnn18y2PCN5/cBaA4362emobW%2bnvuigA7JurWi4FfFz12YOzAPxQ9R%2bqK0cHOV0KAPvqN1terfmo3MsCrO9o9cyWu/03f8PfyThwsu%2beWP1UddvRQYBpXFp9efXro4OcCQWAw%2bDO1f/MJQFg9/6g5Xr/xaODnCmXADgMPli9uOU03MNSbIGDd7R6UcuX/6WDsxwIB0oOm8dWP1LdfXQQ4NC4qPqalkXJDg1nADhsLqp%2borqi%2bhfVjcbGAfbYx6rvr764esvgLAfOGQAOs3u0nLJ73OggwN55dfWM6oLRQXbFSoAcZhdVn189qTp/cBZgP/xBy9NFj%2boQf/mXMwDM5SEtz%2b0%2bYXQQYHNeVz2/eunoIGtRAJjRQ1uKwOflPhiY2ZXVuS1f/OcNzrI6BYCZ3aHl5p6nVQ8cnAVYz5tbHh1%2bcfWuwVmGUQBg8WnV01suD9x7cBbg4F1QvazlS/9Ng7NsggIA/9Qntiwo9OjqMdXZY%2bMA18O7Wk7rv6rlVb3vGBtnexQAuG53re5b3ae6V8sZgntXdxwZCqjqr1qe0X/rsf9eUP15dcnIUPtAAYDr76zqdsfG7Vs%2bT7fMjYWwC1e2LPt9VctSvMfHZSNDAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANfX/wNKN6XBzDJ4bwAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e";

/** colors.ts: Supplies all the basic color functionalities used in the colorPicker. */
/** From colors.coffee, used in NetLogo color conversions. */
var colorTimesTen;
var baseIndex;
var r, g, b;
var step;
/** netlogoBaseColors: The array of NetLogo base colors in [r, g, b] form. */
const netlogoBaseColors = [
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
var mappedColors = {
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
        }
        else {
            r += Math.floor((0xff - r) * step);
            g += Math.floor((0xff - g) * step);
            b += Math.floor((0xff - b) * step);
        }
        results.push([r, g, b]);
    }
    return results;
})();
/** componentToHex: Converts one component of a rgb color to its hex string. */
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
/** hexToRgb: converts a hex value to rgb  */
function hexToRgb(hex) {
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
function colorToHex(r, g, b, a) {
    if (a !== undefined) {
        // Include alpha if provided
        let alpha = ((a | (1 << 8)).toString(16)).slice(1);
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${alpha}`.toUpperCase();
    }
    else {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toUpperCase();
    }
}
function rgbToHex(r, g, b) {
    return colorToHex(r, g, b);
}
function rgbToNetlogo([r, g, b]) {
    if (r == 0 && g == 0 && b == 0) {
        return 0;
    }
    // Calculate the Euclidean distance between current color and each NetLogo color
    let minDistance = Infinity;
    let closestNetlogoColor = 0;
    for (let i = 0; i < cachedNetlogoColors.length; i++) {
        const [netR, netG, netB] = cachedNetlogoColors[i];
        const distance = Math.sqrt(Math.pow(r - netR, 2) + Math.pow(g - netG, 2) + Math.pow(b - netB, 2));
        if (distance < minDistance) {
            minDistance = distance;
            closestNetlogoColor = i;
        }
    }
    // Return the closest NetLogo color value
    return closestNetlogoColor / 10;
}
/** cached: 2d array of NetLogo colors in rgb form. */
let cached = cachedNetlogoColors;
/** netlogoColorToHex: Converts NetLogo color to its hex string. */
function netlogoColorToHex(netlogoColor) {
    let temp = cached[Math.floor(netlogoColor * 10)];
    return rgbToHex(temp[0], temp[1], temp[2]);
}
/**
 * arrToString: takes an rgb(a) array and returns a string rgb(a)**/
function arrToString(colorArray) {
    // Check if the array represents an RGBA color
    if (!Array.isArray(colorArray) || !colorArray.every(item => typeof item === 'number')) {
        console.error('Invalid colorArray input:', colorArray);
        return 'invalid'; // or any fallback string you prefer
    }
    if (colorArray.length === 4) {
        const [r, g, b, a] = colorArray;
        return `rgba(${r}, ${g}, ${b}, ${a / 255})`; //alpha defaults to values between 0 and 1 in css
    }
    // If not RGBA, assume it's RGB
    const [r, g, b] = colorArray;
    return `rgb(${r}, ${g}, ${b})`;
}
/** RGBAToHSLA: Converts rgba color to hsla color array. */
function RGBAToHSLA(r, g, b, a) {
    // turn into fractionss
    r /= 255;
    g /= 255;
    b /= 255;
    a /= 255;
    // find max and min
    let cmax = Math.max(r, g, b), cmin = Math.min(r, g, b), delta = cmax - cmin;
    let h, s, l = 0; // initialize
    // calculate hue
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
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
function HSLAToRGBA(h, s, l, alpha) {
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
        const hueToRGB = (p, q, t) => {
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
function netlogoColorToRGBA(netlogoColor, alpha = 255) {
    let temp = cached[Math.floor(netlogoColor * 10)];
    return [temp[0], temp[1], temp[2], alpha];
}

/** ColorMode: Base class for each of the ColorPicker Modes */
class ColorMode {
    constructor(parent, state, setState) {
        this.parent = parent;
        this.state = state;
        this.setState = setState;
    }
    /** toDOM: A mode of the colorPicker will change the body of the color picker*/
    toDOM() {
        throw new Error("Method not implemented.");
    }
    /** showNumbers: will show numbers in the mode */
    showNumbers() {
        throw new Error("Method not implemented.");
    }
    /** hideNumbers: nhide the numbers in the ColorPicker preview */
    hideNumbers() {
        throw new Error("Method not implemented.");
    }
}

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
class GridMode extends ColorMode {
    constructor(parent, state, setState) {
        super(parent, state, setState);
        /** colorArray: an array of netlogo colors in the grid */
        this.colorArray = [];
        /** textElements: Array of SVGTextElements that are the "numbers" of each cell in the grid. */
        this.textElements = [];
        this.init();
    }
    /** createGrid: creates the grid of colors */
    createGrid() {
        function hover(e) {
            if (e.target instanceof SVGRectElement) {
                let rect = e.target;
                let hoverColor;
                if (Number(rect.dataset.value) % colorsPerRow <
                    (colorsPerRow + 1) / 3) {
                    hoverColor = 'white'; // the color should be white
                }
                else {
                    hoverColor = 'black';
                }
                rect.setAttribute('stroke-width', '0.08');
                rect.setAttribute('stroke', hoverColor);
            }
        }
        function hoverOut(e) {
            if (e.target instanceof SVGRectElement) {
                let rect = e.target;
                rect.setAttribute('stroke-width', '');
                rect.setAttribute('stroke', '');
            }
        }
        function handleChangeColor(e) {
            if (e.target instanceof SVGRectElement) {
                let rect = e.target;
                let colorIndex = Number(rect.dataset.value);
                // Convert the selected color to RGBA format
                let newColor = netlogoColorToRGBA(this.colorArray[colorIndex]);
                // netlogoColor defaults to 255 for the alpha value
                newColor[3] = this.state.currentColor[3];
                // Use setState to update the currentColor in the component's state
                this.setState({ currentColor: newColor });
            }
        }
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        // the height of the svg is 14.01 rem, and the width is 20rem, we set the viewbox to be equal to that so its a 1:1 ratio
        svg.setAttribute('viewBox', '0 0 20 14.01');
        // create the cells 
        let numRows = 14;
        let colorsPerRow = 10 / this.state.increment + 1;
        let cellWidth = 20 / colorsPerRow;
        let cellHeight = 14.01 / numRows;
        let textFontSize = this.state.increment == 1 ? 0.6 : 0.4;
        for (let j = 0; j < numRows; j++) {
            // generate the row
            for (let i = 0; i < colorsPerRow; i++) {
                let number = j * 10 + i * this.state.increment;
                if (i == colorsPerRow - 1) {
                    number -= 0.1;
                }
                this.colorArray.push(number);
                let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.classList.add('cp-grid-cell');
                rect.setAttribute('x', `${cellWidth * i}`);
                rect.setAttribute('y', `${cellHeight * j}`);
                rect.setAttribute('width', `${cellWidth}`);
                rect.setAttribute('height', `${cellHeight}`);
                rect.setAttribute('fill', netlogoColorToHex(number));
                rect.setAttribute('data-value', '' + (j * colorsPerRow + i)); //we are storing the index (row major order) of the cell's color in the corresponding colorArray
                rect.addEventListener('mouseover', hover);
                rect.addEventListener('mouseout', hoverOut);
                rect.addEventListener('click', handleChangeColor.bind(this));
                svg.appendChild(rect);
                // Create and append text element for each rect
                if (this.state.increment > 0.1) {
                    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', `${cellWidth * i + cellWidth / 2}`);
                    text.setAttribute('y', `${cellHeight * j + cellHeight / 2}`);
                    if (i < (colorsPerRow + 1) / 3) {
                        text.setAttribute('fill', 'white');
                    }
                    text.setAttribute('dominant-baseline', 'middle');
                    text.setAttribute('text-anchor', 'middle');
                    text.classList.add('cp-grid-text');
                    text.textContent = `${number}`;
                    text.setAttribute('visibility', this.state.showNumbers ? 'visible' : 'hidden');
                    text.setAttribute('font-size', textFontSize.toString());
                    this.textElements.push(text); // pushed to the list to allow toggling visibility 
                    svg.appendChild(text);
                }
            }
        }
        return svg;
    }
    /** toDOM: creates the body of the Grid */
    toDOM() {
        this.parent.replaceChildren();
        let gridContainer = document.createElement('div');
        gridContainer.classList.add('cp-grid-cont');
        gridContainer.appendChild(this.createGrid());
        let spaceContainer = document.createElement('div');
        spaceContainer.classList.add("cp-space-container");
        spaceContainer.appendChild(gridContainer);
        let incrementBtns = `
      <div class="cp-grid-btn-cont"><div class="cp-increment-cont"><button class="cp-numbers-btn"></button><span class="cp-increment-label">Numbers</span></div><div class="cp-increment-cont"><div class="cp-btn-label-cont"><button data-increment="1" class="cp-numbers-btn cp-numbers-clicked"></button><span class="cp-increment-label">1</span></div><div class="cp-btn-label-cont"><button data-increment="0.5" class="cp-numbers-btn"></button><span class="cp-increment-label">0.5</span></div><div class="cp-btn-label-cont"><button data-increment="0.1" class="cp-numbers-btn"></button><span class="cp-increment-label">0.1</span></div><span class="cp-increment-label">Increment</span></div></div>
      `;
        spaceContainer.insertAdjacentHTML('beforeend', incrementBtns);
        this.parent.appendChild(spaceContainer);
    }
    /** updateIncrementApperance: updates the increment button apperance based on which increment is on */
    updateIncrementAppearance() {
        var _a;
        const incrementBtns = document.querySelectorAll('.cp-numbers-btn');
        incrementBtns[0].classList.toggle('cp-numbers-clicked', this.state.showNumbers);
        for (let i = 1; i < incrementBtns.length; i++) {
            const btn = incrementBtns[i];
            // Retrieve the data-increment value
            const incrementValue = parseFloat((_a = btn.getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
            const isSelected = incrementValue === this.state.increment;
            btn.classList.toggle('cp-numbers-clicked', isSelected);
        }
    }
    /** attachEventListeners: Attaches the event listeners to the GridMode body */
    attachEventListeners() {
        const gridBtns = document.querySelectorAll('.cp-numbers-btn');
        // event listener of the numbers button 
        gridBtns[0].addEventListener('click', () => {
            this.setState({ showNumbers: !this.state.showNumbers });
            this.toggleTextVisibility();
            this.updateIncrementAppearance();
        });
        // the increment buttons 
        for (let i = 1; i < gridBtns.length; i++) {
            gridBtns[i].addEventListener('click', () => {
                var _a;
                let increment = parseFloat((_a = gridBtns[i].getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
                this.setState({ increment: increment });
                this.state.increment = increment; // weird bug, did we create a copy of the state?
                this.init();
            });
        }
    }
    /** toggleTextVisibility: toggles the text visibility based on state of numbers */
    toggleTextVisibility() {
        this.state.showNumbers ? this.textElements.forEach((text) => text.setAttribute('visibility', 'visible')) : this.textElements.forEach((text) => text.setAttribute('visibility', 'hidden'));
    }
    /** init: initializes a grid mode  */
    init() {
        this.toDOM();
        this.updateIncrementAppearance();
        this.attachEventListeners();
    }
}

/** dragHelpers.ts: defines helper functions useful for the dragging and clicking feature of the Wheel Mode */
/** getMousePosition: Gets the mouse position of an MouseEvent(evt) in an SVG element(svg) */
function getMousePosition(evt, svg) {
    evt = evt; // standardize evt as MouseEvent
    let CTM = svg.getScreenCTM();
    if (CTM != null) {
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d,
        };
    }
}
/** distance: Calculates the distance between two points with coordinates (x1, y1), and (x2, y2) */
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
/** findAngle: Calculates the angle between three points with coordinates (a, b), (c, d), and (e, f) */
function findAngle(a, b, c, d, e, f) {
    let AB = Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2));
    let BC = Math.sqrt(Math.pow(c - e, 2) + Math.pow(d - f, 2));
    let AC = Math.sqrt(Math.pow(e - a, 2) + Math.pow(f - b, 2));
    let outOf180Degrees = Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB)) *
        (180 / Math.PI);
    // if we are "positive" relative to the axis -- the center point to the top "zero" point, then we just return, else we return 360 - outOf180
    if (e < c) {
        return 360 - outOf180Degrees;
    }
    return outOf180Degrees;
}

/** GridMode: A mode for the ColorPicker that shows a wheel of colors */
class WheelMode extends ColorMode {
    constructor(parent, state, setState) {
        super(parent, state, setState);
        /** textElements: Array of SVGTextElements that are the "numbers" of each cell in the grid. */
        this.textElements = [];
        this.outerWheelColors = []; // hex colors of the outer wheel
        this.parent.replaceChildren();
        this.init();
    }
    /** toDOM: creates the body of the Wheel */
    toDOM() {
        this.parent.replaceChildren();
        this.parent.innerHTML = `
        <div class="cp-wheel-spacing-cont"><div class="cp-wheel-cont"><svg class="cp-wheel-svg" viewBox="0 0 110 110" width="100%" height="100%">
        <clipPath id="cp-inner-wheel-clip">
        <path d="M 55 35 
                 a 20 20 0 0 1 0 40 
                 a 20 20 0 0 1 0 -40 
                 M 55 10 
                 a 45 45 0 0 0 0 90 
                 a 45 45 0 0 0 0 -90"></path>
    </clipPath>

        <clipPath id="cp-outer-wheel-clip">
            <path d="M 55 0 
                        a 55 55 0 0 1 0 110 
                        a 55 55 0 0 1 0 -110 
                        M 55 5 
                        a 50 50 0 0 0 0 100 
                        a 50 50 0 0 0 0 -100"></path>
        </clipPath>
    

        <foreignObject width="110" height="110" clip-path="url(#cp-inner-wheel-clip)" >
            <div xmlns="http://www.w3.org/1999/xhtml" class="cp-inner-wheel"></div>
        </foreignObject>

        <foreignObject width="110" height="110" clip-path="url(#cp-outer-wheel-clip)">
            <div xmlns="http://www.w3.org/1999/xhtml" class="cp-outer-wheel"></div>
        </foreignObject>

    </svg></div><div class="cp-grid-btn-cont"><div class="cp-increment-cont"><button class="cp-numbers-btn"></button><span class="cp-increment-label">Numbers</span></div><div class="cp-increment-cont"><div class="cp-btn-label-cont"><button data-increment="1" class="cp-numbers-btn cp-numbers-clicked"></button><span class="cp-increment-label">1</span></div><div class="cp-btn-label-cont"><button data-increment="0.5" class="cp-numbers-btn"></button><span class="cp-increment-label">0.5</span></div><div class="cp-btn-label-cont"><button data-increment="0.1" class="cp-numbers-btn"></button><span class="cp-increment-label">0.1</span></div><span class="cp-increment-label">Increment</span></div></div></div>
        `;
        this.innerWheelSetup();
        this.outerWheelSetup(Math.floor(rgbToNetlogo(this.state.currentColor) / 10) * 10);
        this.numbersSetup();
    }
    /** innerWheelSetup() : sets up the color of the inner wheel  */
    innerWheelSetup() {
        // get the inner wheel 
        const innerWheel = document.querySelector('.cp-inner-wheel');
        let netlogoColors = Object.keys(mappedColors);
        let hexColors = [];
        for (let i = 0; i < netlogoColors.length; i++) {
            hexColors.push(netlogoColorToHex(Number(mappedColors[netlogoColors[i]])));
        }
        let degreesPerSV = 360 / netlogoColors.length;
        let cssFormat = `background-image: conic-gradient(`;
        let degreeTracker = 0;
        for (let i = 0; i < netlogoColors.length - 1; i++) {
            cssFormat +=
                hexColors[i] +
                    ` ${degreeTracker}deg ${degreeTracker + degreesPerSV}deg, `;
            degreeTracker += degreesPerSV;
        }
        cssFormat +=
            hexColors[netlogoColors.length - 1] + ` ${degreeTracker}deg 0deg`;
        innerWheel.setAttribute('style', cssFormat + `);`);
    }
    /** setInner: takes the current NetLogo color and places the draggable thumbs in the approximate location they should be  */
    setInner() {
        let radius, degreesPerIncrement, baseColorIndex, angle;
        let center = [55, 55];
        radius = 30; // inner thumb is going to be here
        degreesPerIncrement = 360 / 14;
        const netlogoColor = rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]]);
        baseColorIndex = Math.floor(netlogoColor / 10);
        angle = baseColorIndex * degreesPerIncrement + degreesPerIncrement / 2;
        let angleInRadians = (angle * Math.PI) / 180;
        let x = center[0] + radius * Math.sin(angleInRadians);
        let y = center[1] - radius * Math.cos(angleInRadians);
        return [x, y];
    }
    /** setOuter: takes the current NetLogo color and places the draggable thumb in the approximate lcoaiton */
    setOuter() {
        let radius, degreesPerIncrement, angle;
        let center = [55, 55];
        radius = 52.5;
        degreesPerIncrement = 360 / (10 / this.state.increment + 1);
        const netLogoColor = rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]]);
        let value = netLogoColor % 10;
        if (Math.abs(value - 9.9) < 0.00001)
            value = 10;
        let index = Math.floor(value / this.state.increment);
        angle = index * degreesPerIncrement + degreesPerIncrement / 2;
        let angleInRadians = (angle * Math.PI) / 180;
        let x = center[0] + radius * Math.sin(angleInRadians);
        let y = center[1] - radius * Math.cos(angleInRadians);
        return [x, y];
    }
    /** toRadians: Coverts degress to radians  */
    toRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    /** numbersSetup: sets up & updates the appropriate numbers for the wheel */
    numbersSetup() {
        const radius = 38;
        const degreesPerIncrement = 360 / 14; // divide by 14 because the wheel has 14 inner colors 
        const center = [55, 55];
        const svg = document.querySelector(".cp-wheel-svg");
        if (svg === null) {
            return;
        }
        /** calculate the correct x and y coords in the svg viewbox for each text element  */
        for (let i = 0; i < 14; i++) {
            let angle = this.toRadians(i * degreesPerIncrement + degreesPerIncrement / 2) - 0.01; // give it a small offset for appearance
            const x = center[0] + radius * Math.sin(angle); // Use sin for x
            const y = center[1] - radius * Math.cos(angle); // Use -cos for y
            let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', `${x}`);
            text.setAttribute('y', `${y}`);
            text.setAttribute('fill', 'white');
            text.setAttribute('font-size', '0.4rem');
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("text-anchor", "middle");
            text.setAttribute('visibility', this.state.showNumbers ? 'visible' : 'hidden');
            text.textContent = `${i * 10 + 5}`;
            this.textElements.push(text);
            svg.appendChild(text);
        }
        // create text elements for the outer wheel 
        // if(this.state.increment == 0.01) return;
        // const outerRadius = 51;
        // const numIncrements = 10 / this.state.increment;
        // const outerDegreesPerIncrement = 360 / numIncrements;
        // for(let i = 0; i <= numIncrements; i++) {
        //     let angle = outerDegreesPerIncrement * i - 90; // Adjusting starting angle to -90 degrees for correct orientation
        //     let angleInRadians = this.toRadians(angle);
        //     const x = center[0] + outerRadius * Math.sin(angleInRadians);
        //     const y = center[1] + outerRadius * Math.cos(angleInRadians);
        //     let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        //     text.setAttribute('x', `${x}`);
        //     text.setAttribute('y', `${y}`);
        //     text.setAttribute('fill', 'white');
        //     text.setAttribute('font-size', '0.2rem');
        //     text.setAttribute('text-anchor', 'middle');
        //     text.setAttribute('dominant-baseline', 'central'); // Ensuring vertical alignment is centered
        //     // Apply rotation directly at the text's position without offset
        //     text.setAttribute('transform', `rotate(${angle + 90}, ${x}, ${y})`); // Correcting rotation to make text upright
        //     text.classList.add('cp-wheel-text');
        //     text.setAttribute('visibility', this.state.showNumbers ? 'visible' : 'hidden');
        //     text.textContent = `${(i * this.state.increment).toFixed(2)}`; // Adjust text content as needed
        //     this.textElements.push(text);
        //     svg.appendChild(text);
        // }
    }
    /** updateInnerWheel: Updates the color of the wheel based on the location of the inner thumb */
    updateInnerWheel(inner) {
        let innerX = Number(inner.getAttribute('cx'));
        let innerY = Number(inner.getAttribute('cy'));
        const angle = findAngle(55, 20, 55, 55, innerX, innerY);
        let degreesPerIndex = 360 / 14; // the number of degrees per slice of the inner wheel
        let innerColor = netlogoBaseColors[Math.floor(angle / degreesPerIndex)];
        inner.setAttribute('fill', `rgba(${innerColor[0]}, ${innerColor[1]}, ${innerColor[2]}, 255)`);
        this.outerWheelSetup(Math.floor(angle / degreesPerIndex) * 10);
    }
    /** setThumbs: creates the thumbs and sets them in the right spot  */
    setThumbs() {
        let innerThumb = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let innerThumbCor = this.setInner();
        innerThumb.setAttribute('cx', `${innerThumbCor[0]}`);
        innerThumb.setAttribute('cy', `${innerThumbCor[1]}`);
        innerThumb.setAttribute('r', '2');
        innerThumb.setAttribute('fill', 'black');
        innerThumb.setAttribute('stroke', 'white');
        innerThumb.setAttribute('stroke-width', '1.2');
        innerThumb.classList.add("cp-inner-thumb");
        innerThumb.classList.add("cp-draggable");
        let outerThumbCor = this.setOuter();
        let outerThumb = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        outerThumb.setAttribute('cx', `${outerThumbCor[0]}`);
        outerThumb.setAttribute('cy', `${outerThumbCor[1]}`);
        outerThumb.setAttribute('r', '2');
        outerThumb.setAttribute('fill', 'orange');
        outerThumb.setAttribute("stroke", "white");
        outerThumb.setAttribute('stroke-width', '1.2');
        outerThumb.classList.add("cp-outer-thumb");
        outerThumb.classList.add("cp-draggable");
        const svg = document.querySelector('.cp-wheel-svg');
        svg.appendChild(innerThumb);
        svg.appendChild(outerThumb);
        const innerAsSVG = innerThumb;
        this.updateInnerWheel(innerAsSVG);
        this.changeColor(); // update the outer wheel 
    }
    /** changeColor: changes the color based on the position of the outerwheel */
    changeColor() {
        // calculate the outer thumb angle
        const outerThumb = document.querySelector(".cp-outer-thumb");
        if (outerThumb) {
            const outerX = Number(Number(outerThumb.getAttribute('cx')).toFixed(4));
            const outerY = Math.round(Number(outerThumb.getAttribute('cy')));
            const angle = findAngle(50, 20, 50, 50, outerX, outerY);
            const degreesPerIndex = 360 / (10 / this.state.increment + 1);
            const index = Math.floor(angle / degreesPerIndex);
            const color = this.outerWheelColors[index];
            outerThumb.setAttribute('fill', color);
            // set the color to the current color 
            const colorAsRGB = hexToRgb(color);
            const colorAsRGBA = [colorAsRGB[0], colorAsRGB[1], colorAsRGB[2], this.state.currentColor[3]];
            this.setState({ currentColor: colorAsRGBA });
        }
    }
    /** outerWheelSetup(): sets up the color of the outer wheel */
    outerWheelSetup(baseColor) {
        // solve base color based on current color
        const numColors = 10 / this.state.increment + 1;
        this.outerWheelColors = [];
        for (let i = 0; i < numColors - 1; i++) {
            this.outerWheelColors.push(netlogoColorToHex(baseColor + i * this.state.increment));
        }
        this.outerWheelColors.push(netlogoColorToHex(baseColor + 9.9));
        const degreesPerSV = 360 / numColors;
        let cssFormat = `background-image: conic-gradient(`;
        let degreeTracker = 0;
        for (let i = 0; i < numColors - 1; i++) {
            cssFormat +=
                this.outerWheelColors[i] +
                    ` ${degreeTracker}deg ${degreeTracker + degreesPerSV}deg, `;
            degreeTracker += degreesPerSV;
        }
        cssFormat +=
            this.outerWheelColors[numColors - 1] + ` ${degreeTracker}deg 0deg`;
        const outerWheel = document.querySelector('.cp-outer-wheel');
        outerWheel.setAttribute('style', cssFormat + `);`);
        // also update the color based on the changed outer wheel since the color will be different 
        this.changeColor();
    }
    /** makeDraggable(): makes the thumbs of the color wheel draggable */
    makeDraggable(wheel) {
        document.querySelector(".cp-inner-thumb");
        const cpWindow = document.querySelector(".cp");
        const center = [55, 55];
        /** throttle function to reduce number of event listener calls */
        function throttle(func, limit) {
            let inThrottle;
            return function () {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
        function makeDraggable(cpWindow) {
            // confinement code should go here
            cpWindow.addEventListener("mousedown", startDrag);
            cpWindow.addEventListener("mousemove", throttle(drag, 5));
            cpWindow.addEventListener("mouseup", endDrag);
            cpWindow.addEventListener("mouseleave", endDrag);
            let svg = document.querySelector(".cp-wheel-svg");
            let selectedElement;
            /** startDrag: start drag event for draggable elements */
            function startDrag(evt) {
                let element = evt.target;
                // select the element, and make sure it is a dragable element
                if (element.classList.contains('cp-draggable')) {
                    selectedElement = element;
                }
            }
            function confinementInner(x, y) {
                let xRestrict = x;
                let yRestrict = y;
                let angle = findAngle(55, 20, 55, 55, x, y); // Given the reference point [55, 20] (straight up), and [55, 55] the center
                const angleInRadians = wheel.toRadians(angle);
                const innerLowerBound = 20;
                const innerUpperBound = 42;
                const dist = distance(x, y, center[0], center[1]);
                if (dist > innerUpperBound) {
                    xRestrict = center[0] + innerUpperBound * Math.sin(angleInRadians);
                    yRestrict = center[1] - innerUpperBound * Math.cos(angleInRadians);
                }
                else if (dist < innerLowerBound) {
                    xRestrict = center[0] + innerLowerBound * Math.sin(angleInRadians);
                    yRestrict = center[1] - innerLowerBound * Math.cos(angleInRadians);
                }
                return { x: xRestrict, y: yRestrict };
            }
            function confinementOuter(x, y) {
                let xRestrict = x;
                let yRestrict = y;
                const angle = findAngle(55, 20, 55, 55, x, y);
                const angleInRadians = wheel.toRadians(angle);
                const outerLowerBound = 52.5;
                xRestrict = center[0] + outerLowerBound * Math.sin(angleInRadians);
                yRestrict = center[1] - outerLowerBound * Math.cos(angleInRadians);
                return { x: xRestrict, y: yRestrict };
            }
            /** drag: dragEvent for draggable elements */
            function drag(evt) {
                if (selectedElement != null) {
                    evt.preventDefault();
                    let mousePosition = getMousePosition(evt, svg);
                    if (mousePosition != null) {
                        let x;
                        let y;
                        if (selectedElement.classList.contains('cp-inner-thumb')) {
                            let restrict = confinementInner(mousePosition.x, mousePosition.y);
                            x = restrict.x;
                            y = restrict.y;
                            selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.setAttribute('cx', x.toString());
                            selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.setAttribute('cy', y.toString());
                            wheel.updateInnerWheel(selectedElement);
                        }
                        else {
                            x = mousePosition.x;
                            y = mousePosition.y;
                            let restrict = confinementOuter(x, y);
                            x = restrict.x;
                            y = restrict.y;
                            selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.setAttribute('cx', x.toString());
                            selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.setAttribute('cy', y.toString());
                            wheel.changeColor();
                        }
                    }
                }
            }
            /** endDrag: ends the drag event for draggable elements */
            function endDrag(evt) {
                selectedElement = null;
            }
        }
        if (cpWindow) {
            makeDraggable(cpWindow);
        }
    }
    /** updateIncrementApperance: updates the increment button apperance based on which increment is on */
    updateIncrementAppearance() {
        var _a;
        const incrementBtns = document.querySelectorAll('.cp-numbers-btn');
        incrementBtns[0].classList.toggle('cp-numbers-clicked', this.state.showNumbers);
        for (let i = 1; i < incrementBtns.length; i++) {
            const btn = incrementBtns[i];
            // Retrieve the data-increment value
            const incrementValue = parseFloat((_a = btn.getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
            const isSelected = incrementValue === this.state.increment;
            btn.classList.toggle('cp-numbers-clicked', isSelected);
        }
    }
    /** attachEventListeners: Attaches the event listeners to the GridMode body */
    attachEventListeners() {
        const gridBtns = document.querySelectorAll('.cp-numbers-btn');
        // event listener of the numbers button 
        gridBtns[0].addEventListener('click', () => {
            this.setState({ showNumbers: !this.state.showNumbers });
            this.toggleTextVisibility();
            this.updateIncrementAppearance();
        });
        // the increment buttons 
        for (let i = 1; i < gridBtns.length; i++) {
            gridBtns[i].addEventListener('click', () => {
                var _a;
                let increment = parseFloat((_a = gridBtns[i].getAttribute('data-increment')) !== null && _a !== void 0 ? _a : "0");
                this.setState({ increment: increment });
                this.state.increment = increment; // weird bug, did we create a copy of the state?
                this.init();
            });
        }
    }
    /** toggleTextVisibility: toggles the text visibility based on state of numbers */
    toggleTextVisibility() {
        this.state.showNumbers ? this.textElements.forEach((text) => text.setAttribute('visibility', 'visible')) : this.textElements.forEach((text) => text.setAttribute('visibility', 'hidden'));
    }
    /** init: initializes a wheel mode  */
    init() {
        this.toDOM();
        this.updateIncrementAppearance();
        this.attachEventListeners();
        this.setThumbs();
        this.makeDraggable(this);
    }
}

class Slider {
    constructor(parent, startValue, min, max, sliderColor, sliderWidth, text, hasDisplay = true) {
        this.valueDisplayElement = null;
        this.valueBubble = null;
        this.sliderChangedValue = () => {
            this.inputElement.style.setProperty('--value', this.inputElement.value);
            return this.inputElement.value;
        };
        let r = document.querySelector(':root');
        r.style.setProperty('--slider', sliderColor);
        this.parent = parent;
        // Create the slider
        this.inputElement = document.createElement('input');
        this.inputElement.type = 'range';
        this.inputElement.style.width = sliderWidth;
        this.inputElement.value = startValue.toString();
        this.inputElement.min = min.toString();
        this.inputElement.max = max.toString();
        this.inputElement.classList.add('cp-styled-slider');
        this.inputElement.value = startValue + '';
        if (sliderColor === 'alpha') {
            this.inputElement.classList.add('alpha-slider');
        }
        else {
            this.inputElement.classList.add('color-slider');
        }
        // Add color to slider TRACK
        this.inputElement.classList.add(`color-${sliderColor.toLowerCase()}`, 'slider-progress');
        this.inputElement.addEventListener('input', this.rangeSlide.bind(this));
        // Create a div to hold the slider
        let sliderContainer = document.createElement('div');
        sliderContainer.classList.add('cp-slider-container');
        // Create the text element
        if (text !== '') {
            let textElement = document.createElement('div');
            textElement.innerHTML = text;
            textElement.classList.add('cp-slider-text');
            sliderContainer.appendChild(textElement);
        }
        sliderContainer.appendChild(this.inputElement);
        // Create a div to hold slider and display
        let sliderDisplayContainer = document.createElement('div');
        sliderDisplayContainer.classList.add('cp-slider-display-container');
        sliderDisplayContainer.appendChild(sliderContainer);
        if (hasDisplay) {
            this.valueDisplayElement = document.createElement('input');
            this.valueDisplayElement.classList.add('cp-slider-value-display-cont');
            this.valueDisplayElement.type = 'number';
            this.valueDisplayElement.value = startValue.toString();
            sliderDisplayContainer.appendChild(this.valueDisplayElement);
        }
        else {
            let valueBubble = document.createElement('output');
            valueBubble.classList.add('cp-Popover', 'cp-AlphaMsg');
            sliderContainer.appendChild(valueBubble);
            this.valueBubble = valueBubble;
        }
        this.parent.appendChild(sliderDisplayContainer);
        this.finalize();
    }
    rangeSlide(event) {
        const target = event.target;
        let val = target.value;
        if (this.valueDisplayElement !== null) {
            this.valueDisplayElement.value = val;
        }
        else if (this.valueBubble !== null) {
            this.valueBubble.innerHTML = val;
            let min = Number(target.min);
            let max = Number(target.max);
            let newVal = Number(((Number(val) - min) * 100) / (max - min));
            this.valueBubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.25}px))`;
        }
    }
    finalize() {
        let e = this.inputElement;
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min === '' ? '0' : e.min);
        e.style.setProperty('--max', e.max === '' ? '255' : e.max);
        e.addEventListener('input', this.sliderChangedValue.bind(this));
    }
    setValue(value) {
        const min = parseFloat(this.inputElement.min);
        const max = parseFloat(this.inputElement.max);
        value = Math.min(Math.max(value, min), max);
        this.inputElement.value = value.toString();
        if (this.valueDisplayElement !== null) {
            this.valueDisplayElement.value = value.toString();
        }
        this.inputElement.style.setProperty('--value', value.toString());
    }
    getValue() {
        return parseFloat(this.inputElement.value);
    }
}

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='gray' class='bi bi-caret-down-fill' viewBox='0 0 16 16'%3e %3cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3e%3c/svg%3e";

/** GridMode: A mode for the ColorPicker that shows a grid of colors */
class SliderMode extends ColorMode {
    constructor(parent, state, setState, colorPickerInstance) {
        super(parent, state, setState);
        this.isRGB = true; // true if the current mode is RGB, false if it is HSL
        this.HSL = [0, 0, 0];
        this.parent.replaceChildren();
        this.cpInstance = colorPickerInstance;
        this.init();
    }
    /** toDOM: creates the body of the Grid */
    toDOM() {
        this.parent.innerHTML = `
            <div class="cp-slider-cont">
                <div class="cp-slider-color-display"></div>
                <div class="cp-slider-changer">
                    <img src="${img}"></img>
                    <span class="cp-dropdown-text">RGB</span>
                </div>
                <div class="cp-sliders">
                    <div class="cp-slider-change-mode"></div>
                    <!-- part that switches from rgb to hsl -->
                </div>
                <div class="cp-saved-colors-cont">
                    <div class="cp-saved-colors"></div>
                    <div class="cp-saved-colors"></div>
                    <div class="cp-saved-colors"></div>
                    <div class="cp-saved-colors"></div>
                    <div class="cp-saved-color-add"></div>
                </div>
            </div>
        `;
    }
    /** updateColorDisplay: updates the color display to be the current color  */
    updateColorDisplay() {
        const colorDisplay = document.querySelector('.cp-slider-color-display');
        colorDisplay.style.backgroundColor = `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]})`;
    }
    /** setupSavedColors: sets up saved colors by adding event handlers */
    setupSavedColors() {
        // add event handler to the add button
        const addButton = document.querySelector(".cp-saved-color-add");
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
            const savedColors = this.state.savedColors;
            const colorCopy = [...this.state.currentColor];
            savedColors.unshift(colorCopy);
            // if saved colors is length 5, remove the last element
            if (savedColors.length == 5)
                savedColors.pop();
            this.setState({ savedColors });
            this.updateSavedColors();
        });
        // update the appearance of each color grid based on the queue 
        this.updateSavedColors();
        // add event handler to each color button
        const savedButtons = document.querySelectorAll(".cp-saved-colors");
        for (let i = 0; i < savedButtons.length; i++) {
            const button = savedButtons[i];
            button.addEventListener("click", () => {
                if (button.dataset.value) {
                    // has a color so return it 
                    const colorsAsArr = button.dataset.value.split(",");
                    const colorIntArr = [];
                    colorsAsArr.forEach((color) => {
                        colorIntArr.push(Number(color));
                    });
                    this.setState({ currentColor: colorIntArr });
                    //this.state.currentColor = colorIntArr;
                    this.updateColorDisplay();
                }
                else
                    return;
            });
        }
    }
    /** attachEventListeners: attaches the event listeners to the Slider body */
    attachEventListeners() {
        // add event listener to the rgb / hsl swapping 
        const sliderChanger = document.querySelector(".cp-slider-changer");
        const changerText = document.querySelector(".cp-dropdown-text");
        sliderChanger.addEventListener('click', () => {
            if (this.isRGB) {
                // switch to HSL
                this.isRGB = false;
                changerText.innerText = "HSL";
                this.createHSL();
            }
            else {
                this.isRGB = true;
                changerText.innerText = "RGB";
                this.createRGB();
            }
        });
    }
    /** updatedSavedColors: updates the appearance of the saved colors based on the current state of the saved colors array */
    updateSavedColors() {
        const savedColors = this.state.savedColors;
        const savedSquares = document.querySelectorAll(".cp-saved-colors");
        savedSquares.forEach(square => {
            square.style.backgroundColor = '#f1f1f1';
        });
        for (let i = 0; i < savedColors.length; i++) {
            const squareIndex = savedSquares.length - 1 - i;
            if (savedSquares[squareIndex]) {
                const square = savedSquares[squareIndex];
                square.style.backgroundColor = arrToString(savedColors[i]);
                square.setAttribute('data-value', savedColors[i] + "");
            }
        }
    }
    /** createRGB: creates the RGB sliders */
    createRGB() {
        const parent = document.querySelector('.cp-sliders');
        parent.replaceChildren();
        let slider1 = new Slider(parent, this.state.currentColor[0], 0, 255, 'Red', '200px', 'Red', true);
        let slider2 = new Slider(parent, this.state.currentColor[1], 0, 255, 'Green', '200px', 'Green', true);
        let slider3 = new Slider(parent, this.state.currentColor[2], 0, 255, 'Blue', '200px', 'Blue', true);
        /** add event listeners for every slider */
        slider1.inputElement.addEventListener('input', () => {
            this.setState({ currentColor: [slider1.getValue(), this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]] });
            this.updateColorDisplay();
        });
        slider2.inputElement.addEventListener('input', () => {
            this.state.currentColor[1] = slider2.getValue();
            this.updateColorDisplay();
            this.setState({ currentColor: this.state.currentColor });
        });
        slider3.inputElement.addEventListener('input', () => {
            this.state.currentColor[2] = slider3.getValue();
            this.updateColorDisplay();
            this.setState({ currentColor: this.state.currentColor });
        });
    }
    /** createHSL: creates the HSL sliders */
    createHSL() {
        const parent = document.querySelector('.cp-sliders');
        parent.replaceChildren();
        const colorAsHSL = RGBAToHSLA(this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], this.state.currentColor[3]);
        this.HSL = colorAsHSL;
        let slider1 = new Slider(parent, colorAsHSL[0], 0, 360, 'Hue', '200px', 'Hue', true);
        let slider2 = new Slider(parent, colorAsHSL[1], 0, 100, 'Saturation', '200px', 'Saturation', true);
        let slider3 = new Slider(parent, colorAsHSL[2], 0, 100, 'Luminance', '200px', 'Luminance', true);
        /** add event listeners for every slider */
        slider1.inputElement.addEventListener('input', () => {
            this.HSL[0] = slider1.getValue();
            // update the rgb based on the HSL 
            const newRGB = HSLAToRGBA(this.HSL[0], this.HSL[1], this.HSL[2], this.state.currentColor[3]);
            this.state.currentColor = newRGB;
            this.setState({ currentColor: newRGB });
            this.updateColorDisplay();
        });
        slider2.inputElement.addEventListener('input', () => {
            this.HSL[1] = slider2.getValue();
            const newRGB = HSLAToRGBA(this.HSL[0], this.HSL[1], this.HSL[2], this.state.currentColor[3]);
            this.state.currentColor = newRGB;
            this.setState({ currentColor: newRGB });
            this.updateColorDisplay();
        });
        slider3.inputElement.addEventListener('input', () => {
            this.HSL[2] = slider3.getValue();
            const newRGB = HSLAToRGBA(this.HSL[0], this.HSL[1], this.HSL[2], this.state.currentColor[3]);
            this.setState({ currentColor: newRGB });
            this.updateColorDisplay();
        });
    }
    /** init(): initializes the grid  */
    init() {
        this.toDOM();
        this.updateColorDisplay();
        this.createRGB();
        this.setupSavedColors();
        this.attachEventListeners();
    }
}

class ColorPicker {
    /** constructor: creates a Color Picker instance. A color picker has a parent div and a inital color */
    constructor(parent, initColor, onColorSelect) {
        this.state = {
            currentColor: initColor,
            currentMode: 'grid',
            changeModelColor: true,
            increment: 1,
            showNumbers: false,
            savedColors: [], // queue of saved colors 
        };
        this.parent = parent;
        this.onColorSelect = onColorSelect;
        this.init();
    }
    /** setState: used to change the state of the color picker and call all update functions */
    setState(newState) {
        // Directly update properties of the existing state object
        Object.keys(newState).forEach(key => {
            this.state[key] = newState[key];
        });
        // Call update functions to reflect changes
        this.updateColorParameters();
        this.updateModelDisplay();
    }
    /** init: initializes the ColorPicker */
    init() {
        this.toDOM();
        this.updateColorParameters();
        this.attachEventListeners();
        this.initAlphaSlider();
        // click the grid button to start
        document.querySelectorAll('.cp-mode-btn')[0].dispatchEvent(new Event('click'));
    }
    /** updateColorParameters: updates the displayed color parameters to reflect the current Color. Also updates the alpha slider value because I don't know where else to put it  */
    updateColorParameters() {
        let colorParamDisplay = document.querySelectorAll('.cp-values-display');
        colorParamDisplay[0].innerHTML = `(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3]})`;
        colorParamDisplay[1].innerHTML = `${rgbToNetlogo([this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2]])}`;
        this.updateAlphaSlider();
    }
    /** updateAlphaSlider(): updates the appearance of the alpha slider to match the current alpha value */
    updateAlphaSlider() {
        const val = this.state.currentColor[3];
        const alphaSlider = document.querySelector(".cp-alpha-slider");
        if (alphaSlider)
            alphaSlider.value = val.toString();
    }
    /** updateModelDisplay: updates the color of the model/background  */
    updateModelDisplay() {
        var _a, _b;
        if (this.state.changeModelColor)
            (_a = document.querySelector('.cp-model-preview')) === null || _a === void 0 ? void 0 : _a.setAttribute('fill', `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, ${this.state.currentColor[3] / 255})`);
        else
            (_b = document.querySelector('.cp-model-background')) === null || _b === void 0 ? void 0 : _b.setAttribute('fill', `rgba(${this.state.currentColor[0]}, ${this.state.currentColor[1]}, ${this.state.currentColor[2]}, 1)`);
    }
    /** attachEventListeners: Attaches the event listeners to the ColorPicker body */
    attachEventListeners() {
        /** changeButtonColor: Helper function to toggle button color */
        function changeButtonColor(button, isPressed) {
            // Set styles based on isPressed
            button.style.backgroundColor = isPressed ? '#5A648D' : '#E5E5E5';
            button.style.color = isPressed ? 'white' : 'black';
            let image = button.querySelector('.cp-mode-btn-img');
            if (image) {
                image.style.filter = `invert(${isPressed ? '100%' : '0%'})`;
            }
        }
        // attach event listeners to the mode buttons 
        let modeButtons = document.querySelectorAll('.cp-mode-btn');
        modeButtons[0].addEventListener('click', () => {
            // grid button
            this.setState({ currentMode: 'grid' });
            changeButtonColor(modeButtons[0], true);
            changeButtonColor(modeButtons[1], false);
            changeButtonColor(modeButtons[2], false);
            new GridMode(document.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this));
        });
        modeButtons[1].addEventListener('click', () => {
            // wheel button
            this.setState({ currentMode: 'wheel' });
            changeButtonColor(modeButtons[1], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[2], false);
            new WheelMode(document.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this));
        });
        modeButtons[2].addEventListener('click', () => {
            // slider button
            this.setState({ currentMode: 'slider' });
            changeButtonColor(modeButtons[2], true);
            changeButtonColor(modeButtons[0], false);
            changeButtonColor(modeButtons[1], false);
            new SliderMode(document.querySelector('.cp-body-mode-main'), this.state, this.setState.bind(this), this);
        });
        // attach event listener to model indicator button
        let modelIndicatorButton = document.querySelector('.cp-model-indicator');
        modelIndicatorButton === null || modelIndicatorButton === void 0 ? void 0 : modelIndicatorButton.addEventListener('click', () => {
            this.state.changeModelColor = !this.state.changeModelColor; // we don't want to call set state, because it updates the appearance as well 
            modelIndicatorButton.querySelector('.cp-mode-btn-text').innerHTML = this.state.changeModelColor ? ' Model Color Selected ' : ' Background Color Selected ';
            changeButtonColor(modelIndicatorButton, !this.state.changeModelColor);
        });
        //attach event listener to close button
        const closeButton = document.querySelector('.cp-close');
        closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', () => {
            this.parent.replaceChildren();
            this.onColorSelect(this.state.currentColor);
        });
    }
    /** initAlphaSlider: initializes the alpha slider */
    initAlphaSlider() {
        let alphaSlider = document.querySelector('.cp-alpha-slider');
        alphaSlider.addEventListener('input', () => {
            this.setState({ currentColor: [this.state.currentColor[0], this.state.currentColor[1], this.state.currentColor[2], parseInt(alphaSlider.value)] });
            (this.state);
        });
    }
    /** toDOM: creates and attaches the ColorPicker body to parent */
    toDOM() {
        const cpBody = `
        <div class="cp">
            <div class="cp-header">
                <div class="cp-title">
                    <img class="cp-icon" src="${img$6}">
                    <span class="cp-title-text"> Color Swatches </span>
                </div>
                <img class="cp-close" src="${img$5}"/>
            </div>

            <div class="cp-body">
                <div class="cp-body-left">
                    <div class="cp-mode-btn-cont">
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${img$4}"/>
                            <span class="cp-mode-btn-text"> Grid </span> 
                        </button>
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${img$3}"/>
                            <span class="cp-mode-btn-text"> Wheel </span> 
                        </button>
                        <button class="cp-mode-btn">
                            <img class="cp-mode-btn-img" src="${img$2}"/>
                            <span class="cp-mode-btn-text"> Slider </span> 
                        </button>
                    </div>
                    <div class="cp-body-mode-main"></div>
                </div>
                <div class="cp-body-mode-right">
                    <button class="cp-mode-btn cp-model-indicator"> 
                        <img class="cp-mode-btn-img" src="${img$1}"/>
                        <span class="cp-mode-btn-text"> Model Color Selected </span>
                    </button>
                    <div class="cp-color-preview">
                        <svg viewBox="0 0 100 100">
                            <rect x="0" y="0" width="100" height="100" fill="white" class="cp-model-background"/>
                            <path xmlns="http://www.w3.org/2000/svg" class="cp-model-preview" fill="white" d="M 50.069 9.889 L 14.945 89.069 L 50.71 65.458 L 86.458 89.73 L 50.069 9.889 Z"/>
                        </svg>
                    </div>
                    <div class="cp-alpha-cont">
                        <span class="cp-alpha-text"> Alpha </span>
                        <input type="range" min="0" max="255" value="${this.state.currentColor[3]}" class="cp-styled-slider cp-alpha-slider color-alpha slider-progress">
                    </div>
                    <div class="cp-values-display-cont">
                        <span class="cp-color-param-txt"> Color Parameters </span>
                        <div class="cp-values-display"></div>
                        <div class="cp-values-display"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
        this.parent.innerHTML = cpBody;
    }
}

export { ColorPicker as default };
