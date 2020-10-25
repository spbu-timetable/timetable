import AddressLocalStorage from "../../localStorage/address";
import Action from "../../types/Action";
import Address from "../../types/Address";
import AddressesPage from "../../types/AddressesPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/addresses";

function addresses(state: AddressesPage = initialState, action: Action): AddressesPage {
  switch (action.type) {
    case ACTION.SET_ADDRESSES:
      return {
        ...state,
        didGet: true,
        addresses: [...action.payload].sort((a: Address, b: Address) => {
          let name1 = a.DisplayName1.toLowerCase();
          let name2 = b.DisplayName1.toLowerCase();
          if (name1 < name2) {
            return -1;
          } else if (name1 > name2) {
            return 1;
          }
          return 0;
        }),
      };
    case ACTION.SET_ADDRESS:
      AddressLocalStorage.save(action.payload);
      return {
        ...state,
        selected_address: action.payload,
      };

    case ACTION.FILTER_ADDRESSES:
      const filtered_addresses: Address[] = [];
      for (let i = 0; i < state.addresses.length; i++) {
        const name: string = state.addresses[i].DisplayName1.toLowerCase();
        if (name.search(action.payload) !== -1) {
          filtered_addresses.push(state.addresses[i]);
        }
      }
      return {
        ...state,
        filter_value: action.payload,
        filtered_addresses: [...filtered_addresses],
      };
  }

  return state;
}

export default addresses;
