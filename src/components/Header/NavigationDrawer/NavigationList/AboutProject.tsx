import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Info } from "@material-ui/icons";
import React from "react";

const AboutProject = () => {
	return (
		<ListItem component={"a"} button target="_blank" href="https://github.com/spbu-timetable">
			<ListItemIcon>
				<Info />
			</ListItemIcon>
			<ListItemText primary={"О проекте"} />
		</ListItem>
	);
};

export default AboutProject;
