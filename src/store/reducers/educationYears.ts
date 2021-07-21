import ACTION from "../actionCreators/ACTION";
import initialState from "../states/EducationYears";
import sortList from "../../helpers/sortList";
import filterSearch from "../../helpers/searchFilter";
import EducationYearsPage from "../../types/pages/EducationYearsPage";
import EducationYear from "../../types/EducationYear";
import EducationYearLocalStorage from "../../localStorage/year";
import { AnyAction } from "redux";

function educationYears(state: EducationYearsPage = initialState, action: AnyAction): EducationYearsPage {
	switch (action.type) {
		case ACTION.GET_EDUCATIONYEARS:
			return {
				...state,
				didGet: true,
				years: action.payload.AdmissionYears.sort((a: EducationYear, b: EducationYear) =>
					sortList(a.YearName, b.YearName)
				),
			};
		case ACTION.SET_EDUCATIONYEARS:
			return {
				...state,
				didGet: true,
				years: [...action.payload].sort((a: EducationYear, b: EducationYear) => sortList(a.YearName, b.YearName)),
			};
		case ACTION.SET_EDUCATIONYEAR:
			EducationYearLocalStorage.save(action.payload);
			return {
				...state,
				selected: action.payload,
			};

		case ACTION.FILTER_EDUCATIONYEARS:
			return {
				...state,
				filter_value: action.payload,
				filtered: filterSearch(state.years, action.payload),
			};
	}

	return state;
}

export default educationYears;
