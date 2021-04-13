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
				filtered_educators: action.payload,
			};
		case ACTION.SELECT_EDUCATOR:
			if (!state.selected_educators.includes(action.payload) /* && state.selected_educators.length < 4*/) {
				return {
					...state,
					selected_educators: [...state.selected_educators, action.payload],
				};
			}
			break;
		case ACTION.DESELECT_EDUCATOR:
			for (let i = 0; i < state.selected_educators.length; i++) {
				if (action.payload === state.selected_educators[i]) {
					state.selected_educators.splice(i, 1);
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
