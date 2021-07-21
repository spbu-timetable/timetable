import { AnyAction } from "redux";
import EducatorsPage from "../../types/pages/EducatorsPage";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/educators";

function educators(state: EducatorsPage = initialState, action: AnyAction): EducatorsPage {
	switch (action.type) {
		case ACTION.SET_EDUCATORS:
			return {
				...state,
				didGet: true,
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
			for (let i = 0; i < state.selected.length; i++) {
				if (action.payload === state.selected[i]) {
					state.selected.splice(i, 1);
				}
			}
			return {
				...state,
			};

		case ACTION.UPD_FILTER_VALUE: {
			return {
				...state,
				filter_value: action.payload,
			};
		}
	}

	return state;
}

export default educators;
