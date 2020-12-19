import React from "react";
import style from "./style.module.css";

import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "gapi";

import Google from "../../assets/icons/google";

import { Redirect, useHistory } from "react-router-dom";

type Props = {
  needToRegister: boolean;

  accessToken?: string;
  refreshToken?: string;

  email: string;
  password: string;

  updForm: (key: string, value: string) => void;
  login: (email: string, password: string) => void;

  gapiInit: () => void;
  loginViaGoogle: () => void;

  refreshAccessToken: () => void;

  hideLoginBtn: () => void;
};

const Login = (props: Props) => {
  const history = useHistory();

  props.hideLoginBtn();

  React.useEffect(() => {
    props.gapiInit();
  }, []);

  if (!props.accessToken) {
    props.refreshAccessToken();
  }

  if (props.needToRegister) {
    return <Redirect to="/registration" />;
  }

  if (props.refreshToken) {
    return <Redirect to="/" />;
  }

  const emailRef: React.RefObject<HTMLInputElement> = React.createRef();
  const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();
  const body = (
    <>
      <Typography className={style.header} align="center" variant="h5">
        Вход
      </Typography>

      <Button
        className={style.item + " " + style.google_btn}
        variant="outlined"
        startIcon={<Google />}
        onClick={() => {
          props.loginViaGoogle();
        }}
      >
        Войти через Google
      </Button>

      <div className={style.divider}>
        <span className={style.divider_line}></span>
        <div className={style.divider_text}>или</div>
        <div className={style.divider_line}></div>
      </div>

      <TextField
        className={style.item}
        type="email"
        variant="outlined"
        label="Почта"
        inputRef={emailRef}
        value={props.email}
        onChange={() => props.updForm("email", emailRef.current!.value)}
      />

      <TextField
        className={style.item}
        type="password"
        variant="outlined"
        label="Пароль"
        inputRef={passwordRef}
        value={props.password}
        onChange={() => props.updForm("password", passwordRef.current!.value)}
      />

      <Button
        className={style.item}
        disableElevation
        variant="contained"
        color="primary"
        onClick={() => props.login(props.email, props.password)}
      >
        Войти
      </Button>

      <Button
        className={style.item + " " + style.registration_btn}
        disableElevation
        variant="outlined"
        color="primary"
        onClick={() => {
          history.replace("/registration");
        }}
      >
        Зарегистрироваться
      </Button>
    </>
  );

  return (
    <div>
      {window.innerWidth > 500 ? (
        <Paper className={style.form} variant="outlined">
          {body}
        </Paper>
      ) : (
        <div className={style.form}>{body}</div>
      )}
    </div>
  );
};

export default Login;
