import AppBar from "@material-ui/core/AppBar/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import React from "react";
import style from "./style.module.css";
import Search from "../Reusable/Search";

import CategoryBtnContainer from "./CategoryBtn/container";
import WeekSwitcher from "./WeekSwitcher";
import Typography from "@material-ui/core/Typography";

type Props = {
  week: string;

  setWeek: (index: number) => void;
};

const Header = (props: Props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CategoryBtnContainer />
        <Search className={style.search} />
        <WeekSwitcher
          className={style.switcher}
          setPrevWeek={() => props.setWeek(1)}
          setNextWeek={() => props.setWeek(2)}
        />
        <Typography className={style.week}>{props.week}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
