import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const plugins = [
  commonjs(),
  json()
];

const compilerOptions = {
  allowSyntheticDefaultImports: true,
  moduleResolution: "node",
  strictNullChecks: true,
  typeRoots: ['./types', './node_modules/@types']
};

export default [
  {
    input: 'src/is-cson.ts',
    output: {
      file: 'dist/is-cson.cjs',
      format: 'cjs'
    },
    plugins: [
      ...plugins,
      typescript(compilerOptions)
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
        ...compilerOptions,
        module: "ES2020",
        moduleResolution: "node"
      })
    ]
  }
];
