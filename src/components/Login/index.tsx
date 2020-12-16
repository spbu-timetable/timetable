import React from "react";
import style from "./style.module.css";

import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "gapi";

import Google from "../../assets/icons/google";

import { useHistory } from "react-router-dom";

type Props = {
  email: string;
  password: string;

  updForm: (key: string, value: string) => void;
  login: (email: string, password: string) => void;

  loginViaGoogle: () => void;
};

const Login = (props: Props) => {
  React.useEffect(() => {
    gapi.load("auth2", function () {
      gapi.auth2
        .init({
          client_id: "38199711621-go08p6i21jnoekoappboa0r2at93mjmt.apps.googleusercontent.com",
        })
        .then(
          () => console.log("OK"),
          () => console.log("Error")
        );
    });
  }, []);

  const history = useHistory();

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
          const googleAuth = (window as any).gapi.auth2.getAuthInstance();
          googleAuth.signIn({ scope: "profile email" }).then((user: any) => console.log("User ", user));
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
        variant="outlined"
        label="Почта"
        inputRef={emailRef}
        value={props.email}
        onChange={() => props.updForm("email", emailRef.current!.value)}
      />

      <TextField
        className={style.item}
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
          history.replace("/register");
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
