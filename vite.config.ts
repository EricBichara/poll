import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['@carbon/charts', 'carbon-components']
	},
	build:{
		sourcemap: true
	}
};

export default config;
