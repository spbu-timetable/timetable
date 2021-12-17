import { createTheme, responsiveFontSizes } from "@mui/material";

const Dark = responsiveFontSizes(
	createTheme({
		shape: {
			borderRadius: 8,
		},
		palette: {
			mode: "dark",

			primary: {
				main: "#222222",
			},

			secondary: {
				main: "#F94400",
			},

			background: {
				paper: "#121212",
				default: "#121212",
			},
		},
	})
);

export default Dark;