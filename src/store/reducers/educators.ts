import { AnyAction } from "redux";
import Educator from "../../types/Educator";
import EducatorsPage from "../../types/pages/EducatorsPage";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/educators";

function educators(state: EducatorsPage = initialState, action: AnyAction): EducatorsPage {
	switch (action.type) {
		case ACTION.SET_EDUCATORS:
			return {
				...state,
				received: true,
				filtered: action.payload,
			};
		case ACTION.SELECT_EDUCATOR:
			if (!state.selected.includes(action.payload) /* && state.selected_educators.length < 4*/) {
				return {
					...state,
					selected: [...state.selected, action.payload],
				};
			}
			break;
		case ACTION.DESELECT_EDUCATOR:
			return {
				...state,
				selected: [...state.selected.filter((e: Educator) => e !== action.payload)],
			};

		case ACTION.UPD_FILTER_VALUE: {
			return {
				...state,
				filter: action.payload,
			};
		}
	}

	return state;
}

export default educators;
