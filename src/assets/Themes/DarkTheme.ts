import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const DarkTheme = createMuiTheme({
	palette: {
		type: "dark",

		primary: {
			dark: "#121212",
			main: "#222222",
			light: "#272727",
		},

		secondary: {
			main: "#F94400",
			dark: "#BD0000",
			light: "#FF793A",
		},

		background: {
			paper: "#222222",
			default: "#121212",
		},

		text: {
			primary: "#fff",
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			hint: "rgba(255, 255, 255, 0.5)",
		},
	},
});

export default DarkTheme;
