import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import GitHub from "../../assets/icons/github";
import style from "./style.module.css";

const Footer = () => {
	return (
		<Paper className={style.wrapper} component="footer" elevation={0} square>
			<Typography>
				<a href="https://github.com/spbu-timetable" target="_blank" className={style.github}>
					<GitHub /> &nbsp; Посмотреть на GitHub
				</a>
			</Typography>
		</Paper>
	);
};

export default Footer;
