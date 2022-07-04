module.exports = {
	content: ['./pages/**/*.vue', './components/**/*.vue', './layouts/**/*.vue'],
	darkMode: 'class', // or 'media' or 'class'
	mode:'jit',
	theme: {
		extend: {
			
		},
		colors:{
			black:'#000000',
			blacked:'#121212',
			white:'#ffffff',
			grayBlue:'#626262',
			grayHead:'#525252',
			grayBody:'#414141',
			grayFoot:'#313131',
			purple:'#D8BFD8'


		}
	},
	variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
        borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
        textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
    },
	plugins: []
};
