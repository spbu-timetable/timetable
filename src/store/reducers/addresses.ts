import { AnyAction } from "redux";
import filterSearch from "../../helpers/searchFilter";
import sortList from "../../helpers/sortList";

import Address from "../../types/Address";
import AddressesPage from "../../types/pages/AddressesPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/addresses";

function addresses(state: AddressesPage = initialState, action: AnyAction): AddressesPage {
	switch (action.type) {
		case ACTION.SET_ADDRESSES:
			return {
				...state,
				received: true,
				addresses: [...action.payload].sort((a: Address, b: Address) => sortList(a.DisplayName1, b.DisplayName1)),
				filtered: [...action.payload].sort((a: Address, b: Address) => sortList(a.DisplayName1, b.DisplayName1)),
			};
		case ACTION.SET_ADDRESS:
			return {
				...state,
				selected: action.payload,
			};

		case ACTION.FILTER_ADDRESSES:
			return {
				...state,
				filterValue: action.payload,
				filtered: filterSearch(state.addresses, action.payload),
			};
	}

	return state;
}

export default addresses;
