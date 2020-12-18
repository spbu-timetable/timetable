import React from "react";
import style from "./style.module.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Google from "../../assets/icons/google";

import { useHistory } from "react-router-dom";

type Props = {
  name: string;
  email: string;
  password: string;
  password2: string;

  updForm: (key: string, value: string) => void;
  register: (name: string, email: string, password: string) => void;
};

const Register = (props: Props) => {
  const history = useHistory();

  const nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  const emailRef: React.RefObject<HTMLInputElement> = React.createRef();
  const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();
  const password2Ref: React.RefObject<HTMLInputElement> = React.createRef();
  const body = (
    <>
      <Typography className={style.header} align="center" variant="h5">
        Регистрация
      </Typography>

      <Button className={style.item + " " + style.google_btn} variant="outlined" startIcon={<Google />}>
        Войти через Google
      </Button>

      <div className={style.divider}>
        <span className={style.divider_line}></span>
        <div className={style.divider_text}>или</div>
        <div className={style.divider_line}></div>
      </div>

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
        autoComplete="email"
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

      <TextField
        className={style.item}
        type="password"
        variant="outlined"
        label="Повторите пароль"
        inputRef={password2Ref}
        value={props.password2}
        onChange={() => props.updForm("password2", password2Ref.current!.value)}
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