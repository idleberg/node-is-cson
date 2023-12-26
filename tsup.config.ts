import { defineConfig } from 'tsup';

export default defineConfig({
	target: 'esnext',
  clean: true,
  dts: true,
  entry: ['src/is-cson.ts'],
  minify: true,
  treeshake: 'recommended'
});
