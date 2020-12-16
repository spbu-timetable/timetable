import Action from "../../types/Action";
import ACTION from "./ACTION";

function login(email: string, password: string): Action {
  return {
    type: ACTION.LOGIN,
    payload: {
      email: email,
      password: password,
    },
  };
}

function loginViaGoogle(): Action {
  return {
    type: ACTION.LOGIN_VIA_GOOGLE,
  };
}

function register(name: string, email: string, password: string): Action {
  return {
    type: ACTION.REGISTER,
    payload: {
      name: name,
      email: email,
      password: password,
    },
  };
}

function updLoginForm(key: string, value: string): Action {
  return {
    type: ACTION.UPD_LOGIN_FORM,
    payload: {
      key: key,
      value: value,
    },
  };
}

function updRegisterForm(key: string, value: string): Action {
  return {
    type: ACTION.UPD_REGISTER_FORM,
    payload: {
      key: key,
      value: value,
    },
  };
}

const authAC = {
  login: login,
  loginViaGoogle: loginViaGoogle,
  updLoginForm: updLoginForm,

  register: register,
  updRegisterForm: updRegisterForm,
};

export default authAC;
