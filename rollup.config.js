import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import typescript from '@rollup/plugin-typescript';

const defaults = {
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    filesize(),
    json(),
    nodePolyfills(),
    nodeResolve(),
    typescript({
      "lib": [
          "dom",
          "esnext"
      ],
      "module": "commonjs",
      "moduleResolution": "node"
    })
  ]
};

export default [
  {
    ...defaults,
    input: 'src/index.ts',
  }
];
