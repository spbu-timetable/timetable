import React from "react";
import style from "./style.module.css";

import Content from "../Content";
import Header from "../Header/container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LinearProgress from "@material-ui/core/LinearProgress";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import DarkTheme from "../../assets/Themes/DarkTheme";
import LightTheme from "../../assets/Themes/LightTheme";
import { ThemeProvider } from "@material-ui/core";
import Box from "@material-ui/core/Box";

type Props = {
	isLoader: boolean;
};

const App: React.FC<Props> = (props: Props) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const theme = React.useMemo(() => createMuiTheme(prefersDarkMode ? DarkTheme : LightTheme), [prefersDarkMode]);

	return (
		<ThemeProvider theme={theme}>
			<div className={style.app}>
				<Header />
				{props.isLoader ? <LinearProgress color="secondary" /> : <></>}
				<Content />
			</div>
		</ThemeProvider>
	);
};

export default App;
