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
    case ACTION.SELECT_SAVED_CABINET:
      return {
        ...state,
        selectedCabinets: [...state.selectedCabinets, action.payload],
      };
    case ACTION.DESELECT_SAVED_CABINET:
      for (let i = 0; i < state.selectedCabinets.length; i++) {
        if (action.payload === state.selectedCabinets[i]) {
          state.selectedCabinets.splice(i, 1);
        }
      }
      return {
        ...state,
      };
    case ACTION.SELECT_SAVED_EDUCATOR:
      return {
        ...state,
        selectedCabinets: [...state.selectedCabinets, action.payload],
      };
    case ACTION.DESELECT_SAVED_EDUCATOR:
      for (let i = 0; i < state.selectedCabinets.length; i++) {
        if (action.payload === state.selectedCabinets[i]) {
          state.selectedCabinets.splice(i, 1);
        }
      }
      return {
        ...state,
      };
  }

  return state;
}

export default account;
