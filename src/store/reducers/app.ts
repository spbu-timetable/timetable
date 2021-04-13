import { AnyAction } from "redux";
import App from "../../types/pages/App";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/app";

function cabinets(state: App = initialState, action: AnyAction): App {
	switch (action.type) {
		case ACTION.SET_LOADER:
			return {
				...state,
				isLoader: true,
			};
		case ACTION.STOP_LOADER:
			return {
				...state,
				isLoader: false,
			};
	}

	return state;
}

export default cabinets;
