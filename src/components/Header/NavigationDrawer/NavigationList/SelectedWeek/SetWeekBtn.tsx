import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	button: {
		border: `1px solid ${theme.palette.grey[300]}`,
		borderRadius: 4,
		color: theme.palette.primary.contrastText,
		textAlign: "center",
		padding: theme.spacing(1),
		margin: theme.spacing(1),

		"&:hover, &:focus": {
			cursor: "pointer",
			backgroundColor: theme.palette.grey[200],
		},
	},
}));

type Props = {
	onClick: (...args: any[]) => void;
	fromDateStr: string;
	toDateStr: string;
};

const SetWeekBtn: React.FC<Props> = (props: Props) => {
	const classes = useStyles();

	return (
		<Container className={classes.button} onClick={props.onClick}>
			<Typography variant="button">{props.fromDateStr + " — " + props.toDateStr}</Typography>
		</Container>
	);
};

export default SetWeekBtn;
