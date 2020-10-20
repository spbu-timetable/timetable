import AppBar from "@material-ui/core/AppBar/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import React from "react";
import style from "./style.module.css";
import Search from "../Reusable/Search";

import WeekSwitcher from "./WeekSwitcher";
import Typography from "@material-ui/core/Typography";
import LangSwitcher from "./LangSwitcher";

type Props = {
  week: string;
  isRussian: boolean;

  setWeek: (index: number) => void;
  setLang: (isRussian: boolean) => void;
};

const Header = (props: Props) => {
  return (
    <AppBar position="static" className={style.header}>
      <Toolbar>
        <Search className={style.search} />
        <WeekSwitcher
          className={style.switcher}
          setPrevWeek={() => props.setWeek(1)}
          setNextWeek={() => props.setWeek(2)}
        />
        <Typography className={style.week}>{props.week}</Typography>
        <LangSwitcher className={style.lang} isRussian={props.isRussian} setLang={props.setLang} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
