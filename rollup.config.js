import svelte from 'rollup-plugin-svelte';
import typescript from 'rollup-plugin-typescript';
import tscompile from 'typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const production = false; // !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.ts',	
	output: {
		sourcemap: false,	
		format: 'iife',
		file: 'public/js/bundle.min.js'
	},
	name: 'bundle',
	plugins: [
		typescript({typescript: tscompile}),
		svelte({
			dev: !production,
			css: css => {
				css.write( 'public/css/bundle.min.css', false );
			},
			cascade: true
		}),
		resolve({
			jsnext: true,
			main: true,
			browser: true
		}),
		commonjs(),
		production && buble({ exclude: 'node_modules/**' }),
		production && uglify()
	]
};
