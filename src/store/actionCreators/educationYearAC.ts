import { AnyAction } from "redux";
import EducationalProgram from "../../types/EducationalProgram";
import EducationYear from "../../types/EducationYear";
import ACTION from "./ACTION";

function getEducationYears(selected_ed_program: EducationalProgram): AnyAction {
	return {
		type: ACTION.GET_EDUCATIONYEARS,
		payload: selected_ed_program,
	};
}

function setEducationYears(educationYears: EducationYear[]): AnyAction {
	return {
		type: ACTION.SET_EDUCATIONYEARS,
		payload: educationYears,
	};
}

function setEducationYear(ed_year: EducationYear): AnyAction {
	return {
		type: ACTION.SET_EDUCATIONYEAR,
		payload: ed_year,
	};
}

function updFilter(filterStr: string): AnyAction {
	return {
		type: ACTION.FILTER_EDUCATIONALPROGRAMS,
		payload: filterStr,
	};
}

const educationYearAC = {
	getEducationYears: getEducationYears,
	setEducationYears: setEducationYears,
	setEducationYear: setEducationYear,
	etEducationYear: setEducationYear,
	updFilter: updFilter,
};

export default educationYearAC;
