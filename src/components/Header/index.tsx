import { Fade, LinearProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import React from "react";

import NavigationDrawer from "./NavigationDrawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import header from "../../store/header";

const Header = () => {
	const classes = useStyles();

	const history = useHistory();
	const goHome = () => history.push("/");

	return (
		<Grid className={classes.header} component="header">
			<Grid container className={classes.tools}>
				<Grid item>
					<NavigationDrawer />
				</Grid>

				<Grid item>
					<Typography variant="h6" onClick={goHome}>
						Расписание СПбГУ
					</Typography>
				</Grid>
			</Grid>

			<Grid item className={classes.progressWrapper}>
				<Fade in={header.loading}>
					<LinearProgress color="secondary" />
				</Fade>
			</Grid>
		</Grid>
	);
};

export default Header;
