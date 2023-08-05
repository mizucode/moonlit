/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			fontFamily: {
				inter: ["Inter"],
			},
			colors: {
				main: "#282828",
				"main-yellow": "#FFDC84",
				"main-ungu": "#9B57F2",
				"main-dark": "#3E3E3E",
			},
		},
	},
	plugins: [],
};
