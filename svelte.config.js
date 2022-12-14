import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {optimizeImports} from "carbon-preprocess-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [optimizeImports()],

	kit: {
		adapter: adapter(),
	}
};

export default config;
