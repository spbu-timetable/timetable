import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "@material-ui/lab/themeAugmentation";

const Light = createMuiTheme({
	shape: {
		borderRadius: 8,
	},
	palette: {
		primary: {
			main: "#FFFFFF",
		},

		background: {
			default: "red",
			paper: "red",
		},

		secondary: {
			main: "#F94400",
			contrastText: "#FFFFFF",
		},
	},
});

export default Light;