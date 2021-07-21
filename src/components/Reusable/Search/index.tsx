import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import React from "react";
import useStyles from "./style";

type Props = {
	className?: string;
	value: string;

	updFilter: (filterStr: string) => void;
	updFilterValue?: (filterStr: string) => void;
};

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
	const style = useStyles();
	const search_ref: React.RefObject<HTMLInputElement> = React.createRef();

	return (
		<StyledTextField
			inputRef={search_ref}
			className={style.textField}
			placeholder="Поиск..."
			value={props.value}
			margin="normal"
			variant="outlined"
			type="search"
			inputProps={{
				className: style.input,
			}}
			InputProps={{
				startAdornment: <SearchIcon className={style.icon} />,
			}}
			onChange={() => {
				props.updFilter(search_ref.current!.value);
			}}
		/>
	);
};

export default Search;
