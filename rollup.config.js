import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const plugins = [
  commonjs(),
  json()
];
export default [
  {
    input: 'src/is-cson.ts',
    output: {
      file: 'dist/is-cson.cjs',
      format: 'cjs'
    },
    plugins: [
      ...plugins,
      typescript()
    ]
  },
  {
    input: 'src/is-cson.ts',
    output: {
      file: 'dist/is-cson.mjs',
      format: 'esm'
    },
    plugins: [
      ...plugins,
      typescript({
        module: 'ES2020',
        moduleResolution: 'node'
      })
    ]
  }
];
