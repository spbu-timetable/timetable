import StudyLevelLocalStorage from "../../localStorage/studyLevel";
import StudyLevel from "../../types/StudyLevel";
import StudyLevelPage from "../../types/pages/StudyLevelPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/studyLevels";
import sortList from "../../helpers/sortList";
import searchFilter from "../../helpers/searchFilter";
import { AnyAction } from "redux";

function studyLevels(state: StudyLevelPage = initialState, action: AnyAction): StudyLevelPage {
	switch (action.type) {
		case ACTION.SET_STUDYLEVELS:
			return {
				...state,
				didGet: true,
				levels: [...action.payload].sort((a: StudyLevel, b: StudyLevel) =>
					sortList(a.StudyLevelName, b.StudyLevelName)
				),
			};
		case ACTION.SET_STUDYLEVEL:
			StudyLevelLocalStorage.save(action.payload);
			return {
				...state,
				selected: action.payload,
			};
		case ACTION.CLEAN_STUDYLEVELS:
			return {
				...state,
				didGet: false,
				levels: [],
				selected: undefined,
			};
		case ACTION.FILTER_STUDYLEVELS:
			return {
				...state,
				filter_value: action.payload,
				filtered: searchFilter(state.levels, action.payload),
			};
	}

	return state;
}

export default studyLevels;
