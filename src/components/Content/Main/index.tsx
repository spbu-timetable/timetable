import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import React from "react";
import style from "./style.module.css";
import styled from "@material-ui/core/styles/styled";

const MyButton = styled(Button)({
  color: "black !important",
  backgroundColor: "white !important",
  marginTop: 16,

  border: "1px solid var(--level2)",

  width: 500,
  maxWidth: "90vw",

  height: 80,

  fontSize: "1.2em",
});

const Main = () => {
  return (
    <div className={style.main}>
      <h1 className={style.title}>Расписание СПбГУ</h1>
      <MyButton variant="contained">
        <Link className={style.link} to="/addresses">
          Кабинеты
        </Link>
      </MyButton>
      <MyButton variant="contained">
        <Link className={style.link} to="/teachers">
          Преподаватели
        </Link>
      </MyButton>
      <MyButton variant="contained">
        <Link className={style.link} to="/faculties">
          Группы
        </Link>
      </MyButton>
    </div>
  );
};

export default Main;
