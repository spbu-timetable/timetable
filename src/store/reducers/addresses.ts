import AddressLocalStorage from "../../localStorage/address";
import Action from "../../types/Action";
import AddressesPage from "../../types/AddressesPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/addresses";

function addresses(state: AddressesPage = initialState, action: Action): AddressesPage {
  switch (action.type) {
    case ACTION.SET_ADDRESSES:
      return {
        didGet: true,
        addresses: [...action.payload],
      };
    case ACTION.SET_ADDRESS:
      AddressLocalStorage.save(action.payload);
      return {
        ...state,
        selected_address: action.payload,
      };

    default:
      break;
  }

  return state;
}

export default addresses;
