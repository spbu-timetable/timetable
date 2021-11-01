import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
	app: {
		width: "100vw",
		height: "100vh",
		backgroundColor: theme.palette.background.default,
	},
}));

export default useStyles;
