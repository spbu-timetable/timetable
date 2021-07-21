import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		alignItems: "center",
		flexDirection: "column",
		maxWidth: "100vw",
	},

	chipsWrapper: {
		flexDirection: "row",
		alignItems: "flex-start",
		width: 700,
		maxWidth: 700,
		overflowX: "auto",
	},

	chip: {
		marginRight: `${theme.spacing(1)} !important`,
		marginBottom: `${theme.spacing(1)} !important`,
	},

	item: {
		width: 700,
		flexDirection: "column",
		alignItems: "center",
		marginBottom: theme.spacing(1),
	},

	[`@media (max-width: 700px)`]: {
		item: {
			width: "calc(100vw - 32px)",
		},

		chipsWrapper: {
			width: "calc(100vw - 32px)",
			maxWidth: "calc(100vw - 32px)",
		},
	},
}));

export default useStyles;
