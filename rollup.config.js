import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/app.bundle.js',
    format: 'iife',
  },
  plugins: [resolve(), babel({ exclude: 'node_modules/**' }), commonjs()],
};
