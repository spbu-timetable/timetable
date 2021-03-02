import { styled } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import React from "react";
import style from "./style.module.css";

const MyButton = styled(Button)({
	color: "black !important",
	backgroundColor: "white !important",
	marginTop: 16,

	border: "1px solid var(--level3)",

	width: window.innerWidth > 500 ? 500 : 400,
	maxWidth: "90vw",

	height: window.innerWidth > 500 ? 80 : 60,

	fontSize: "1.2em",

	"&:hover": {
		boxShadow:
			"0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2); !important",
	},
});

type Props = {
	title: string;
	link: string;
};

const HugeButton = (props: Props) => {
	return (
		<MyButton disableElevation variant="contained">
			<Link className={style.link} to={props.link}>
				{props.title}
			</Link>
		</MyButton>
	);
};

export default HugeButton;
