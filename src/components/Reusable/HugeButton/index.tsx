import { useHistory } from "react-router-dom";
import React from "react";
import style from "./style.module.css";
import Typography from "@material-ui/core/Typography";

type Props = {
	className?: string;
	title: string;
	link: string;
};

const HugeButton = (props: Props) => {
	const history = useHistory();

	return (
		<div className={style.wrapper + " " + props.className} onClick={() => history.push(props.link)}>
			<Typography className={style.title} color="textPrimary">
				{props.title}
			</Typography>
		</div>
	);
};

export default HugeButton;
