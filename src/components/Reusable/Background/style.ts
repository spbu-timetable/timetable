import { Theme } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
	background: {
		"& .MuiPaper-elevation0": {
			borderTop: `1px solid red`,
			borderBottom: `1px solid ${theme.palette.divider}`,
			border: "none",
		},

		"@media (max-width: 600px)": {
			border: "none",
		},
	},
}));

export default useStyles;
