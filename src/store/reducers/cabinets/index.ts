import { AnyAction } from "redux";
import Cabinets from "../../../types/pages/Cabinets";

import ACTION from "../../ac/ACTION";
import initialState from "../../states/cabinets";
import deselectCabinet from "./deselect";
import filter from "./filter";
import select from "./select";
import set from "./set";
import setAddressID from "./setAddressID";

function cabinets(state: Cabinets = initialState, action: AnyAction): Cabinets {
	switch (action.type) {
		case ACTION.SET_CABINETS:
			return set(action.payload.cabinets, action.payload.addressID, state);

		case ACTION.SET_ADDRESS_ID:
			return setAddressID(action.payload, state);

		case ACTION.SELECT_CABINET:
			return select(action.payload, state);

		case ACTION.DESELECT_CABINET:
			return deselectCabinet(action.payload, state);

		case ACTION.FILTER_CABINETS:
			return filter(action.payload, state);
	}

	return state;
}

export default cabinets;
