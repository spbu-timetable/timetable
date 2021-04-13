import AppBar from "@material-ui/core/AppBar/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";

import React from "react";
import style from "./style.module.css";

import Picker from "./DatePicker";
import NavigationDrawer from "./NavigationDrawer";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

type Props = {
	week: string;
	fromDateStr: string;
	toDateStr: string;

	setWeek: (date: Date) => void;
	setLang: (isRussian: boolean) => void;
};

const Header = (props: Props) => {
	const history = useHistory();

	return (
		<AppBar className={style.header} component="header" position={"fixed"} elevation={0} color="primary">
			<Toolbar>
				<Grid container alignItems="center" spacing={3}>
					<Grid item>
						<NavigationDrawer fromDateStr={props.fromDateStr} toDateStr={props.toDateStr} />
					</Grid>

					<Grid item>
						<Typography
							className={style.title}
							onClick={() => {
								history.push("/");
							}}
						>
							Расписание СПбГУ
						</Typography>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
