import { createTheme, responsiveFontSizes } from "@mui/material";

const Light = responsiveFontSizes(
	createTheme({
		shape: {
			borderRadius: 8,
		},
		palette: {
			primary: {
				main: "#FFFFFF",
			},

			secondary: {
				main: "#F94400",
				contrastText: "#FFFFFF",
			},
		},
	})
);

export default Light;
