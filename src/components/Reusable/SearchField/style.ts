import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
	search: {
		"& .MuiInput-underline:after": {
			borderBottomColor: "rgba(0, 0, 0, 0.0)",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "rgba(0, 0, 0, 0.0)",
			},
			"&:hover fieldset": {
				borderColor: "rgba(0, 0, 0, 0.0)",
			},
			"&.Mui-focused fieldset": {
				borderColor: "rgba(0, 0, 0, 0.0)",
			},
		},
	},
}));

export default useStyles;
