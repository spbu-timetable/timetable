import { AnyAction } from "redux";
import Addresses from "../../../types/pages/Addresses";

import initialState from "../../states/addresses";
import ACTION from "../../ac/ACTION";

import set from "./set";
import filter from "./filter";

function addresses(state: Addresses = initialState, action: AnyAction): Addresses {
	switch (action.type) {
		case ACTION.SET_ADDRESSES:
			return set(action.payload, state);

		case ACTION.FILTER_ADDRESSES:
			return filter(action.payload, state);
	}

	return state;
}

export default addresses;
