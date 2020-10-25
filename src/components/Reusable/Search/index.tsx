import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import React from "react";
import style from "./style.module.css";

type Props = {
  className?: string;
  value: string;
  items: any[];

  updFilter: (filterStr: string) => void;
};

const MyTextField = withStyles({
  root: {
    width: 700,
    maxWidth: "90vw",

    borderRadius: "var(--inset0)",
    margin: 0,

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
})(TextField);

const Search = (props: Props) => {
  const search_ref: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <Paper component="div">
      <MyTextField
        inputRef={search_ref}
        className={style.shadow}
        placeholder="Поиск..."
        value={props.value}
        margin="normal"
        variant="outlined"
        type="search"
        inputProps={{
          style: {
            paddingLeft: "var(--inset1)",
          },
        }}
        InputProps={{
          startAdornment: <SearchIcon className={style.icon} />,
        }}
        onChange={() => props.updFilter(search_ref.current!.value)}
      />
    </Paper>
  );
};

export default Search;
