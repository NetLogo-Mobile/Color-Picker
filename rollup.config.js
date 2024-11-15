import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';

// bundle ES module 
export default [
  {
    input: './src/color-picker.ts',
    output: {
      file: './dist/ColorPicker.bundle.js',
      format: 'es',
    },
    plugins: [
      postcss({
        extensions: ['.css'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      nodeResolve(),
      image(),
    ],
  },
  {
    input: './src/color-picker.ts',
    output: [
      {
        file: './dist/ColorPicker.bundle.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts(),
      postcss({
        extensions: ['.css'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),],
  },
  {
    input: './src/helpers/colors.ts',
    output: [
      {
        file: './dist/helpers/colors.d.ts',
        format: 'es',
      },
    ],
    plugins: [
      dts(),
    ],
  },
  // UMD bundle, with standalone color picker 
  {
    input: 'src/color-picker.ts',
    output: {
      file: 'dist/ColorPicker.standalone.js',
      format: 'umd',
      name: 'ColorPicker'
    },
    plugins: [
      typescript(),
      image(),
      postcss()
    ]
  }
];
