import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import style from "./style.module.css";

const Search = () => {
  const search_ref: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div className={style.search_wrapper}>
      <div className={style.icon}>
        <SearchIcon />
      </div>
      <InputBase placeholder="Search…" className={style.search} />
    </div>
  );
};

export default Search;
