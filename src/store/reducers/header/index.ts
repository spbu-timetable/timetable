import { AnyAction } from "redux";
import Header from "../../../types/pages/Header";
import ACTION from "../../ac/ACTION";

import initialState from "../../states/header";

import setWeek from "./setWeek";

function header(state: Header = initialState, action: AnyAction): Header {
	switch (action.type) {
		case ACTION.SET_WEEK:
			return setWeek(action.payload, state);

		case ACTION.START_LOADING:
			return { ...state, isLoading: true };

		case ACTION.STOP_LOADING:
			return { ...state, isLoading: false };
	}

	return state;
}

export default header;
