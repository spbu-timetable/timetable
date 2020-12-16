import Action from "../../types/Action";
import RegisterPage from "../../types/pages/RegisterPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/register";

function register(state: RegisterPage = initialState, action: Action): RegisterPage {
  switch (action.type) {
    case ACTION.UPD_REGISTER_FORM:
      return {
        ...state,
        name: action.payload.key === "name" ? action.payload.value : state.name,
        email: action.payload.key === "email" ? action.payload.value : state.email,
        password: action.payload.key === "password" ? action.payload.value : state.password,
        password2: action.payload.key === "password2" ? action.payload.value : state.password2,
      };
  }

  return state;
}

export default register;
