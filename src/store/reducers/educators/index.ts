import { AnyAction } from "redux";
import Educators from "../../../types/pages/Educators";

import ACTION from "../../ac/ACTION";
import initialState from "../../states/educators";

import set from "./set";
import select from "./select";
import deselect from "./deselect";
import filter from "./filter";

function educators(state: Educators = initialState, action: AnyAction): Educators {
	switch (action.type) {
		case ACTION.SET_EDUCATORS:
			return set(action.payload, state);

		case ACTION.SELECT_EDUCATOR:
			return select(action.payload, state);

		case ACTION.DESELECT_EDUCATOR:
			return deselect(action.payload, state);

		case ACTION.UPD_EDUCATORS_FILTER: {
			return filter(action.payload, state);
		}
	}

	return state;
}

export default educators;
