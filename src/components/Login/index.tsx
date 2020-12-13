import React from "react";
import style from "./style.module.css";

import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Google from "../../assets/icons/google";
import { Link } from "react-router-dom";
import MuiLink from "@material-ui/core/Link";

type Props = {};

const Login = () => {
  const body = (
    <>
      <Typography className={style.item} align="center" variant="h5">
        Вход
      </Typography>

      <Button className={style.item + " " + style.google_btn} variant="outlined" startIcon={<Google />}>
        Войти через Google
      </Button>

      <div className={style.divider}>
        <span className={style.divider_line}></span>
        <div className={style.divider_text}>или</div>
        <div className={style.divider_line}></div>
      </div>

      <TextField className={style.item} variant="outlined" label="Почта" />

      <TextField className={style.item} variant="outlined" label="Пароль" />

      <Button className={style.item} disableElevation variant="contained" color="primary">
        Войти
      </Button>

      <div className={style.link_wrapper}>
        <Typography color="textSecondary" align="center">
          Еще не зарегистрированы? перейдите по этой
        </Typography>
        <MuiLink color="primary">
          <Link className={style.link} to="#">
            ссылочке
          </Link>
        </MuiLink>
      </div>
    </>
  );

  return (
    <div>
      {window.innerWidth > 500 ? (
        <Paper className={style.form}>{body}</Paper>
      ) : (
        <div className={style.form}>{body}</div>
      )}
    </div>
  );
};

export default Login;
