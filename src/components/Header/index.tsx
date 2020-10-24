import AppBar from "@material-ui/core/AppBar/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

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
const history = useHistory();
  return (
    <AppBar position="static" className={style.header}>
      <Toolbar>
        <Button className={style.title} disableRipple={true} onClick={() => {history.push("/")}}>Расписание СПбГУ</Button>
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
