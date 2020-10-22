import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import React from "react";
import style from "./style.module.css";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className={style.main}>
      <h1>Расписание СПбГУ</h1>
      <Button variant="outlined" className={style.btn}>
        <Link className={style.link} to="/address">
          Кабинеты
        </Link>
      </Button>
      <Button variant="outlined" className={style.btn}>
        <Link className={style.link} to="/teachers">
          Преподаватели
        </Link>
      </Button>
      <Button variant="outlined" className={style.btn}>
        <Link className={style.link} to="/groups">
          Группы
        </Link>
      </Button>
    </div>
  );
};

export default Main;
