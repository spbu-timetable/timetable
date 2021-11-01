import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		width: 500,
		height: 150,

		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		"@media (max-width: 600px)": {
			width: "calc(100vw - 32px)",
		},
	},
}));

export default useStyles;
