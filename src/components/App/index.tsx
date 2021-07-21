import React from "react";

import Content from "../Content";
import Header from "../Header/container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DarkTheme from "../../assets/Themes/DarkTheme";
import LightTheme from "../../assets/Themes/LightTheme";
import { Grid, makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		flexDirection: "column",
		maxWidth: "100vw",
		alignItems: "center",
	},
}));

type Props = {
	setLayout: (isMobile: boolean) => void;
};

const App: React.FC<Props> = (props: Props) => {
	const style = useStyles();

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const theme = React.useMemo(() => createMuiTheme(prefersDarkMode ? DarkTheme : LightTheme), [prefersDarkMode]);

	React.useEffect(() => {
		window.addEventListener("resize", () => {
			console.log(window.innerWidth <= 600);
			props.setLayout(window.innerWidth <= 600);
		});
		return () =>
			window.removeEventListener("resize", () => {
				props.setLayout(window.innerWidth <= 600);
			});
	});

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
