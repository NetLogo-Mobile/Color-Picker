import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';

export default [
  {
    input: './src/ColorPicker.ts',
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
    input: './src/ColorPicker.ts',
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
];
