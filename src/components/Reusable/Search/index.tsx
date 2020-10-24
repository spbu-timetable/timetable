import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import style from "./style.module.css";

type Props = {
  className?: string;
};

const Search = (props: Props) => {
  const search_ref: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <Paper className={style.search_wrapper + " " + props.className}>
      <SearchIcon className={style.icon} />
      <InputBase
        inputRef={search_ref}
        className={style.search}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};

export default Search;
