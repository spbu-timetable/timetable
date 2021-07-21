import ACTION from "../actionCreators/ACTION";
import initialState from "../states/EducationalProgram";
import sortList from "../../helpers/sortList";
import filterSearch from "../../helpers/searchFilter";
import EducationalProgramPage from "../../types/pages/EducationalProgramPage";
import EducationalProgram from "../../types/EducationalProgram";
import EducationalProgramLocalStorage from "../../localStorage/EducationalProgram";
import { AnyAction } from "redux";

function educationalPrograms(state: EducationalProgramPage = initialState, action: AnyAction): EducationalProgramPage {
	switch (action.type) {
		case ACTION.GET_EDUCTIONALPROGRAMS:
			return {
				...state,
				didGet: true,
				programs: action.payload.StudyProgramCombinations.sort((a: EducationalProgram, b: EducationalProgram) =>
					sortList(a.Name, b.Name)
				),
			};
		case ACTION.SET_EDUCTIONALPROGRAMS:
			return {
				...state,
				didGet: true,
				programs: [...action.payload].sort((a: EducationalProgram, b: EducationalProgram) =>
					sortList(a.Name, b.Name)
				),
			};
		case ACTION.CLEAN_EDUCATIONALPROGRAMS:
			return {
				...state,
				didGet: false,
				programs: [],
				selected: undefined,
			};
		case ACTION.SET_EDUCTIONALPROGRAM:
			EducationalProgramLocalStorage.save(action.payload);
			return {
				...state,
				selected: action.payload,
			};

		case ACTION.FILTER_EDUCATIONALPROGRAMS:
			return {
				...state,
				filter_value: action.payload,
				filtered: filterSearch(state.programs, action.payload),
			};
	}

	return state;
}

export default educationalPrograms;
