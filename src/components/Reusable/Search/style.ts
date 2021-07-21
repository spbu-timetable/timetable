import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
	textField: {
		width: 700,
		maxWidth: "calc(100vw - 32px)",
		borderWidth: 1,
		borderRadius: 4,
		borderStyle: "solid",
		borderColor: theme.palette.grey[300],
	},

	input: {
		borderRadius: 4,
		borderStyle: "solid",
		borderColor: theme.palette.grey[300],
		marginLeft: "var(--inset1) !important",
	},

	icon: {
		color: "var(--icon-fill)",
	},
}));
