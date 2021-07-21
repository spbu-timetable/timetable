import { AnyAction } from "redux";
import filterSearch from "../../helpers/searchFilter";
import sortList from "../../helpers/sortList";
import Cabinet from "../../types/Cabinet";
import CabinetsPage from "../../types/pages/CabinetsPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/cabinets";

function cabinets(state: CabinetsPage = initialState, action: AnyAction): CabinetsPage {
	switch (action.type) {
		case ACTION.SET_CABINETS:
			const sortedCabinets = [...action.payload.cabinets].sort((a: Cabinet, b: Cabinet) =>
				sortList(a.DisplayName1, b.DisplayName1)
			);
			return {
				...state,
				received: state.received.set(action.payload.addressID, true),
				cabinets: state.cabinets.set(action.payload.addressID, [...sortedCabinets]),
				filtered: [...sortedCabinets],
			};

		case ACTION.SET_ADDRESS_ID:
			return {
				...state,
				addressID: action.payload,
			};

		case ACTION.SELECT_CABINET:
			if (!state.selected.includes(action.payload)) {
				return {
					...state,
					selected: [...state.selected, action.payload].sort((a: Cabinet, b: Cabinet) =>
						sortList(a.DisplayName1, b.DisplayName1)
					),
				};
			}
			break;

		case ACTION.DESELECT_CABINET:
			const selected = [...state.selected];
			for (let i = 0; i < selected.length; i++) if (action.payload === selected[i]) selected.splice(i, 1);

			return {
				...state,
				selected: [...selected],
			};

		case ACTION.FILTER_CABINETS:
			return {
				...state,
				filterValue: action.payload.filter,
				filtered: filterSearch(state.cabinets.get(action.payload.address), action.payload.filter),
			};
	}

	return state;
}

export default cabinets;
