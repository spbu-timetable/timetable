import AppBar from "@material-ui/core/AppBar/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";

import React from "react";
import style from "./style.module.css";

import Picker from "./DatePicker";
import Link from "@material-ui/core/Link";

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
    <AppBar position="fixed">
      <Toolbar>
        <Link
          color="initial"
          underline="none"
          className={style.title}
          onClick={() => {
            history.push("/");
          }}
        >
          Расписание <br /> СПбГУ
        </Link>
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
