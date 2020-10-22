import AppBar from "@material-ui/core/AppBar/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import React from "react";
import style from "./style.module.css";

import Typography from "@material-ui/core/Typography";
import Picker from "./DatePicker";

type Props = {
  week: string;
  isRussian: boolean;
  fromDateStr: string;
  toDateStr: string;

  setWeek: (date: Date) => void;
  setLang: (isRussian: boolean) => void;
};

const Header = (props: Props) => {
  return (
    <AppBar position="static" className={style.header}>
      <Toolbar>
        <Typography className={style.title}>Расписание СПбГУ</Typography>
        <Picker
          className={style.date_picker}
          fromDateStr={props.fromDateStr}
          toDateStr={props.toDateStr}
          setWeek={props.setWeek}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
