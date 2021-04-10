import React from "react";
import style from "./style.module.css";

import Content from "../Content";
import Header from "../Header/container";
import Footer from "../Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import DarkTheme from "../../assets/Themes/DarkTheme";
import LightTheme from "../../assets/Themes/LightTheme";
import { ThemeProvider } from "@material-ui/core";

function App() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const theme = React.useMemo(() => createMuiTheme(prefersDarkMode ? DarkTheme : LightTheme), [prefersDarkMode]);

	return (
		<ThemeProvider theme={theme}>
			<div className={style.app}>
				<Header />
				<Content />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
