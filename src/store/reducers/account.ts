import accessTokenLocalStorage from "../../localStorage/accessToken";
import refreshTokenLocalStorage from "../../localStorage/refreshToken";
import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/account";

function account(state: AccountPage = initialState, action: Action): AccountPage {
  switch (action.type) {
    case ACTION.SET_USER:
      return {
        ...state,
        user: action.payload,
        accessToken: accessTokenLocalStorage.set(),
        refreshToken: refreshTokenLocalStorage.set(),
      };
    case ACTION.SET_ACCESS_TOKEN:
      accessTokenLocalStorage.save(action.payload);
      return {
        ...state,
        accessToken: action.payload,
      };
    case ACTION.SET_CABINET:
      return {
        ...state,
        user: {
          ...state.user!,
          savedCabinets: [...state.user!.savedCabinets, action.payload],
        },
      };
  }

  return state;
}

export default account;
