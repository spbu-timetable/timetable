import { ListItem } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AccountCircle, CalendarToday, ExitToApp } from "@material-ui/icons";
import React from "react";
import AboutProject from "./AboutProject";
import SelectedWeek from "./SelectedWeek/container";

type Props = {
	fromDateStr: string;
	toDateStr: string;
};

const NavigationList: React.FC<Props> = (props: Props) => {
	const ListData = [
		{ title: "Аккаунт", icon: <AccountCircle /> },
		{ title: "Выйти", icon: <ExitToApp /> },
	];

	return (
		<List>
			<SelectedWeek />

			<Divider />

			{ListData.map((item) => (
				<ListItem button>
					<ListItemIcon>{item.icon}</ListItemIcon>
					<ListItemText primary={item.title} />
				</ListItem>
			))}

			<Divider />

			<AboutProject />
		</List>
	);
};

export default NavigationList;
