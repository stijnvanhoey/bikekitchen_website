import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	js.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		rules: {
			// news.js and the LocalBusiness JSON-LD are hand-authored by trusted maintainers only,
			// never populated from user input — {@html} here is intentional, not an XSS risk.
			'svelte/no-at-html-tags': 'off',
			// all routes are static and prerendered; there's no client-side router state that
			// resolve() would need to reconcile for a site this size.
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'static/', 'node_modules/', 'package/']
	}
];
