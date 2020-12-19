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

function logout(): Action {
  return {
    type: ACTION.LOGOUT,
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

function setUser(user: User | undefined): Action {
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

function hideLoginBtn(): Action {
  return {
    type: ACTION.HIDE_LOGIN_BUTTON,
  };
}

function showLoginBtn(): Action {
  return {
    type: ACTION.SHOW_LOGIN_BUTTON,
  };
}

const authAC = {
  login: login,
  logout: logout,

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

  hideLoginBtn: hideLoginBtn,
  showLoginBtn: showLoginBtn,
};

export default authAC;
