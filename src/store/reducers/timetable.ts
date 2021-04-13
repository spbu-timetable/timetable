import { AnyAction } from "redux";
import TimetablePage from "../../types/pages/TimetablePage";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/timetable";

function timetable(state: TimetablePage = initialState, action: AnyAction): TimetablePage {
	switch (action.type) {
		case ACTION.SET_TIMETABLE:
			return {
				...state,
				timetable: action.payload,
			};

		case ACTION.SET_TIMETABLE_ITEMS:
			return {
				...state,
				items: action.payload,
				headers: action.headers,
			};

		case ACTION.FINISH_FETCHING_TIMETABLE:
			return {
				...state,
				didGet: true,
			};

		case ACTION.CLEAN_TIMETABLE:
			return {
				...state,
				didGet: false,
			};
	}

	return state;
}

export default timetable;
