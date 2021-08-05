import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "@material-ui/lab/themeAugmentation";

const Dark = createMuiTheme({
	shape: {
		borderRadius: 8,
	},
	palette: {
		mode: "dark",

		text: {
			primary: "white",
		},

		primary: {
			main: "#222222",
		},

		secondary: {
			main: "#F94400",
		},

		background: {
			default: "#042525",
		},

		grey: {
			"50": "#021212",
			"100": "#042525",
			"200": "#063737",
			"300": "#084949",
			"400": "#0A5C5C",
			"500": "#0C6E6E",
			"600": "#0E8181",
			"700": "#109393",
			"800": "#12A5A5",
			"900": "#109393",
		},
	},
});

export default Dark;
