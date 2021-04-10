import AppBar from "@material-ui/core/AppBar/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import { useHistory, useLocation } from "react-router-dom";

import React from "react";
import style from "./style.module.css";

import Picker from "./DatePicker";
import MoreMenu from "./MoreMenu";
import Typography from "@material-ui/core/Typography";

type Props = {
	week: string;
	fromDateStr: string;
	toDateStr: string;

	setWeek: (date: Date) => void;
	setLang: (isRussian: boolean) => void;
};

const Header = (props: Props) => {
	const history = useHistory();
	let location = useLocation();

	let isDisabled = false;
	React.useEffect(() => {
		if (location.pathname === "/timetable") {
			isDisabled = true;
		}
	});

	return (
		<AppBar className={style.header} component="header" position={"fixed"} elevation={0} color="primary">
			<Toolbar>
				<Typography
					className={style.title}
					onClick={() => {
						history.push("/");
					}}
				>
					Расписание СПбГУ
				</Typography>

				<Picker
					isDisabled={location.pathname === "/timetable" ? true : false}
					className={style.date_picker}
					fromDateStr={props.fromDateStr}
					toDateStr={props.toDateStr}
					setWeek={props.setWeek}
				/>

				<MoreMenu
					setWeek={props.setWeek}
					fromDateStr={props.fromDateStr}
					toDateStr={props.toDateStr}
					isDisabled={isDisabled}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
