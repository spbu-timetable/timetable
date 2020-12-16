import Action from "../../types/Action";
import LoginPage from "../../types/pages/LoginPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/login";

function login(state: LoginPage = initialState, action: Action): LoginPage {
  switch (action.type) {
    case ACTION.UPD_LOGIN_FORM:
      return {
        ...state,
        email: action.payload.key === "email" ? action.payload.value : state.email,
        password: action.payload.key === "password" ? action.payload.value : state.password,
      };
  }

  return state;
}

export default login;
