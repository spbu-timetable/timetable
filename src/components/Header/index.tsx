import { Fade, LinearProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import React from "react";

import NavigationDrawer from "./NavigationDrawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";

type Props = {
	isLoading: boolean;

	week: string;
	fromDateStr: string;
	toDateStr: string;

	setWeek: (date: Date) => void;
	setLang: (isRussian: boolean) => void;
};

const Header = (props: Props) => {
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
				<Fade in={props.isLoading}>
					<LinearProgress color="secondary" />
				</Fade>
			</Grid>
		</Grid>
	);
};

export default Header;
