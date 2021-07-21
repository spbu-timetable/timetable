import { Theme } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";

import React from "react";

type Props = {
	className?: string;
	value: string;

	updFilter: (filterStr: string) => void;
	updFilterValue?: (filterStr: string) => void;
};

const useStyles = makeStyles((theme) => ({
	textField: {
		width: 700,
		maxWidth: "calc(100vw - 32px)",
		borderWidth: 1,
		borderRadius: 4,
		borderStyle: "solid",
		borderColor: "var(--level3)",
	},

	input: {
		borderRadius: 4,
		borderStyle: "solid",
		borderColor: "var(--level3)",
		marginLeft: "var(--inset1) !important",
	},

	icon: {
		color: "var(--icon-fill)",
	},
}));

const StyledTextField = withStyles(({ palette, shadows }) => ({
	root: {
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderWidth: 1,
				borderColor: palette.grey[300],
			},
			"&:hover fieldset": {
				borderWidth: 1,
				borderColor: palette.grey[300],
			},
			"&.Mui-focused fieldset": {
				borderWidth: 1,
				borderColor: palette.grey[300],
			},
		},
	},
}))(TextField);

const Search = (props: Props) => {
	const classes = useStyles();
	const search_ref: React.RefObject<HTMLInputElement> = React.createRef();

	return (
		<StyledTextField
			inputRef={search_ref}
			className={classes.textField}
			placeholder="Поиск..."
			value={props.value}
			margin="normal"
			variant="outlined"
			type="search"
			inputProps={{
				className: classes.input,
			}}
			InputProps={{
				startAdornment: <SearchIcon className={classes.icon} />,
			}}
			onChange={() => {
				props.updFilter(search_ref.current!.value);
				if (props.updFilterValue !== undefined) {
					props.updFilterValue!(search_ref.current!.value);
				}
			}}
		/>
	);
};

export default Search;
