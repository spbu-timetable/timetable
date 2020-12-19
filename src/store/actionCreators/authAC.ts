import Action from "../../types/Action";
import User, { SavedItem } from "../../types/User";
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

function gapiInit(): Action {
  return {
    type: ACTION.GAPI_INIT,
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

function needToRegister(): Action {
  return {
    type: ACTION.NEED_TO_REGISTER,
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

function setUser(user: User): Action {
  return {
    type: ACTION.SET_USER,
    payload: user,
  };
}

function getUser(): Action {
  return {
    type: ACTION.GET_USER,
  };
}

function setAccessToken(accessToken: string): Action {
  return {
    type: ACTION.SET_ACCESS_TOKEN,
    payload: accessToken,
  };
}

function refreshToken(): Action {
  return {
    type: ACTION.REFRESH_TOKEN,
  };
}

const authAC = {
  login: login,
  gapiInit: gapiInit,
  loginViaGoogle: loginViaGoogle,

  updLoginForm: updLoginForm,

  register: register,
  needToRegister: needToRegister,
  updRegisterForm: updRegisterForm,

  setUser: setUser,
  setAccessToken: setAccessToken,
  refreshToken: refreshToken,

  getUser: getUser,
};

export default authAC;
