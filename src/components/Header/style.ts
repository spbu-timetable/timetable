import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
	header: {
		width: "100vw",
		height: "56px",
		borderBottom: `1px solid ${theme.palette.grey[300]}`,
	},

	tools: {
		alignItems: "center",
		marginLeft: "16px",
		marginRight: "16px",
		marginTop: "4px",
		marginBottom: "4x",
		maxWidth: "calc(100vw - 32px)",
	},

	progressWrapper: {
		height: "4px",
		width: "100%",
		clear: "both",
	},
}));
