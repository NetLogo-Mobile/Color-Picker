import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
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
    ],
  },
];
