import AppBar from "@material-ui/core/AppBar/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import { useHistory, useLocation } from "react-router-dom";

import React from "react";
import style from "./style.module.css";

import Picker from "./DatePicker";
import Link from "@material-ui/core/Link";

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

	React.useEffect(() => {
		if (location.pathname === "/timetable") {
		}
	});

	return (
		<AppBar position={"fixed"} elevation={0} color="primary">
			<Toolbar>
				<Link
					underline="none"
					className={style.title}
					onClick={() => {
						history.push("/");
					}}
				>
					Расписание СПбГУ
				</Link>
				<Picker
					isDisabled={location.pathname === "/timetable" ? true : false}
					className={style.date_picker}
					fromDateStr={props.fromDateStr}
					toDateStr={props.toDateStr}
					setWeek={props.setWeek}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
