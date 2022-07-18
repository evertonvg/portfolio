export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'project',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@700&display=swap"}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{src:'~/plugins/flags.js'},
		{src:'~/plugins/icons.js'},
		{src:'~/plugins/particles.js',mode:'client'},
		
	],


	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/i18n',
	],
	i18n: {
		locales: [{
			code: 'en',
      		iso: 'en-US',
			file: 'en.js'
		},{
			code: 'es',
      		iso: 'es-ES',
			file: 'es.js'
		},{
			code: 'pt',
      		iso: 'pt-BR',
			file: 'pt.js'
		}],
		lazy: true,
		defaultLocale: 'pt',
		langDir: 'static/langs/',
		vueI18n: {
			fallbackLocale: 'pt',
		}
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
};
