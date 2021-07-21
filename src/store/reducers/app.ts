import { AnyAction } from "redux";
import App from "../../types/pages/App";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/app";

function cabinets(state: App = initialState, action: AnyAction): App {
	switch (action.type) {
		case ACTION.SET_LOADER:
			return {
				...state,
				isLoading: true,
			};
		case ACTION.STOP_LOADER:
			return {
				...state,
				isLoading: false,
			};
		case ACTION.SET_LAYOUT:
			return {
				...state,
				isMobile: action.payload,
			};
	}

	return state;
}

export default cabinets;
