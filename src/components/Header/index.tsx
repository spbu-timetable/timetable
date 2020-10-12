import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import ExpandMore from "@material-ui/icons/ExpandMore";

import React from "react";
import style from "./style.module.css";
import Search from "../Reusable/Search";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button endIcon={<ExpandMore />}>Кабинеты</Button>
        <div className={style.search}>
          <Search />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
