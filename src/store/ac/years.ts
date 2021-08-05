import { AnyAction } from "redux";
import EducationYear from "../../types/EducationYear";
import ACTION from "./ACTION";

function set(program: string, years: EducationYear[]): AnyAction {
	return {
		type: ACTION.SET_YEARS,
		payload: {
			program,
			years,
		},
	};
}

function setProgram(program: string): AnyAction {
	return {
		type: ACTION.SET_PROGRAM,
		payload: program,
	};
}

function updFilter(filterStr: string): AnyAction {
	return {
		type: ACTION.FILTER_YEARS,
		payload: filterStr,
	};
}

const years = {
	set,
	updFilter,
	setProgram,
};

export default years;
