import AppBar from "@material-ui/core/AppBar/AppBar";
import { makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";

import React from "react";
import style from "./style.module.css";

import NavigationDrawer from "./NavigationDrawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
	header: {
		borderBottom: `1px solid ${theme.palette.grey[300]}`,
	},
}));

type Props = {
	week: string;
	fromDateStr: string;
	toDateStr: string;

	setWeek: (date: Date) => void;
	setLang: (isRussian: boolean) => void;
};

const Header = (props: Props) => {
	const classes = useStyles();
	const isLight = useMediaQuery("(prefers-color-scheme: light)") ? true : false;

	const history = useHistory();
	const goHome = () => history.push("/");

	return (
		<AppBar
			className={isLight ? classes.header : ""}
			component="header"
			position={"fixed"}
			elevation={0}
			color="primary"
		>
			<Toolbar>
				<Grid container alignItems="center" spacing={2}>
					<Grid item>
						<NavigationDrawer />
					</Grid>

					<Grid item>
						<Typography variant="h6" onClick={goHome}>
							Расписание СПбГУ
						</Typography>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
