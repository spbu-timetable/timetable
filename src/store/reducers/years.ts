import ACTION from "../ac/ACTION";
import initialState from "../states/years";
import sortList from "../../helpers/sortList";
import filterSearch from "../../helpers/searchFilter";
import EducationYears from "../../types/pages/EducationYears";
import EducationYear from "../../types/EducationYear";
import { AnyAction } from "redux";

function years(state: EducationYears = initialState, action: AnyAction): EducationYears {
	switch (action.type) {
		case ACTION.SET_YEARS:
			const years = action.payload.years.sort((a: EducationYear, b: EducationYear) => sortList(a.YearName, b.YearName));

			return {
				...state,
				received: state.received.set(action.payload.program, true),
				items: state.items.set(action.payload.program, [...years]),
				filtered: state.filtered.set(action.payload.program, [...years]),
			};

		case ACTION.SET_PROGRAM:
			return {
				...state,
				program: action.payload,
			};

		case ACTION.FILTER_YEARS:
			const items = [...state.items.get(state.program)!];

			return {
				...state,
				filter: action.payload,
				filtered: state.filtered.set(state.program, filterSearch(items, action.payload)),
			};
	}

	return state;
}

export default years;
