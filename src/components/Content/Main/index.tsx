import Button from "@material-ui/core/Button";

import React from "react";
import style from "./style.module.css";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className={style.main}>
      <h1>Расписание СПбГУ</h1>
      <Button variant="outlined" className={style.btn}>
        Кабинеты
      </Button>
      <Button variant="outlined" className={style.btn}>
        Преподаватели
      </Button>
      <Button variant="outlined" className={style.btn}>
        Группы
      </Button>
    </div>
  );
};

export default Main;
