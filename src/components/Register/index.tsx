import React from "react";
import style from "./style.module.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Redirect, useHistory } from "react-router-dom";

type Props = {
  name: string;
  email: string;
  password: string;

  refreshToken: string;

  updForm: (key: string, value: string) => void;
  register: (name: string, email: string, password: string) => void;
};

const Register = (props: Props) => {
  const history = useHistory();

  if (props.refreshToken) {
    return <Redirect to="/" />;
  }

  const nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  const emailRef: React.RefObject<HTMLInputElement> = React.createRef();
  const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();
  const password2Ref: React.RefObject<HTMLInputElement> = React.createRef();
  const body = (
    <>
      <Typography className={style.header} align="center" variant="h5">
        Регистрация
      </Typography>

      <TextField
        className={style.item}
        type="text"
        name="fname"
        variant="outlined"
        label="Имя"
        inputRef={nameRef}
        value={props.name}
        onChange={() => props.updForm("name", nameRef.current!.value)}
      />

      <TextField
        type="email"
        className={style.item}
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
        onClick={() => props.register(props.name, props.email, props.password)}
      >
        Зарегистрироваться
      </Button>

      <Button
        className={style.item + " " + style.registration_btn}
        disableElevation
        variant="outlined"
        color="primary"
        onClick={() => {
          console.log("click");
          history.replace("/login");
        }}
      >
        Войти
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

export default Register;
