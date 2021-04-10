import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const LightTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#FFFFFF",
		},

		secondary: {
			main: "#F94400",
			dark: "#BD0000",
			light: "#FF793A",
		},
	},
});

export default LightTheme;
