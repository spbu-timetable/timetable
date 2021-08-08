import React from "react";
import app from "../../store/app";

import Content from "../Content";
import Header from "../Header";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dark from "../../assets/Themes/Dark";
import Light from "../../assets/Themes/Light";
import { Grid, makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		flexDirection: "column",
		maxWidth: "100vw",
		alignItems: "center",
	},
}));

const App = () => {
	const style = useStyles();

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const theme = React.useMemo(() => createMuiTheme(prefersDarkMode ? Dark : Light), [prefersDarkMode]);

	const isMobile = useMediaQuery("(max-width <= 700px)");

	React.useEffect(() => {
		app.isMobile = isMobile;
	}, [isMobile]);

	return (
		<ThemeProvider theme={theme}>
			<Grid className={style.wrapper} container>
				<Header />
				<Content />
			</Grid>
		</ThemeProvider>
	);
};

export default App;
