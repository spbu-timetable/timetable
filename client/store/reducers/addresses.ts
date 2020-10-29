import filterSearch from "../../helpers/searchFilter";
import sortList from "../../helpers/sortList";
import AddressLocalStorage from "../../localStorage/address";
import Action from "../../types/Action";
import Address from "../../types/Address";
import AddressesPage from "../../types/pages/AddressesPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/addresses";

function addresses(state: AddressesPage = initialState, action: Action): AddressesPage {
  switch (action.type) {
    case ACTION.SET_ADDRESSES:
      return {
        ...state,
        didGet: true,
        addresses: [...action.payload].sort((a: Address, b: Address) =>
          sortList(a.DisplayName1, b.DisplayName1)
        ),
      };
    case ACTION.SET_ADDRESS:
      AddressLocalStorage.save(action.payload);
      return {
        ...state,
        selected_address: action.payload,
      };

    case ACTION.FILTER_ADDRESSES:
      return {
        ...state,
        filter_value: action.payload,
        filtered_addresses: filterSearch(state.addresses, action.payload),
      };
  }

  return state;
}

export default addresses;
