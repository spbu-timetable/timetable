import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import style from "./style.module.css";

type Props = {
  className?: string;
};

const Search = (props: Props) => {
  const search_ref: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div className={style.search_wrapper + " " + props.className}>
      <div className={style.icon}>
        <SearchIcon />
      </div>
      <InputBase placeholder="Search…" className={style.search} inputRef={search_ref} />
    </div>
  );
};

export default Search;
