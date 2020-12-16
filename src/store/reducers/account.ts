import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/account";

function account(state: AccountPage = initialState, action: Action): AccountPage {
  switch (action.type) {
  }

  return state;
}

export default account;
