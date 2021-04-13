import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "@material-ui/lab/themeAugmentation";

const DarkTheme = createMuiTheme({
	palette: {
		mode: "dark",

		primary: {
			main: "#222222",
		},

		secondary: {
			main: "#F94400",
		},

		background: {
			paper: "#222222",
			default: "#121212",
		},

		grey: {
			"50": "#212121",
			"100": "#424242",
			"200": "#616161",
			"300": "#757575",
			"400": "#9e9e9e",
			"500": "#bdbdbd",
			"600": "#e0e0e0",
			"700": "#eeeeee",
			"800": "#f5f5f5",
			"900": "#fafafa",
		},
	},
});

export default DarkTheme;
