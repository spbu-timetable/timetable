import FacultyLocalStorage from "../../localStorage/faculty";
import Faculty from "../../types/Faculty";
import FacultiesPage from "../../types/pages/FacultiesPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/faculties";
import sortList from "../../helpers/sortList";
import filterSearch from "../../helpers/searchFilter";
import { AnyAction } from "redux";

function faculties(state: FacultiesPage = initialState, action: AnyAction): FacultiesPage {
	switch (action.type) {
		case ACTION.SET_FACULTIES:
			return {
				...state,
				didGet: true,
				faculties: [...action.payload].sort((a: Faculty, b: Faculty) => sortList(a.Name, b.Name)),
			};
		case ACTION.SET_FACULTY:
			FacultyLocalStorage.save(action.payload);
			return {
				...state,
				selected: action.payload,
			};

		case ACTION.FILTER_FACULTIES:
			return {
				...state,
				filter_value: action.payload,
				filtered: filterSearch(state.faculties, action.payload),
			};
	}

	return state;
}

export default faculties;
