import { AnyAction } from "redux";
import EducationalProgram from "../../types/EducationalProgram";
import StudyLevel from "../../types/StudyLevel";
import ACTION from "./ACTION";

function getEducationalPrograms(selected_study_level: StudyLevel): AnyAction {
	return {
		type: ACTION.GET_EDUCTIONALPROGRAMS,
		payload: selected_study_level,
	};
}

function setEducationalPrograms(educationalPrograms: EducationalProgram[]): AnyAction {
	return {
		type: ACTION.SET_EDUCTIONALPROGRAMS,
		payload: educationalPrograms,
	};
}

function setEducationalProgram(ed_program: EducationalProgram): AnyAction {
	return {
		type: ACTION.SET_EDUCTIONALPROGRAM,
		payload: ed_program,
	};
}

function updFilter(filterStr: string): AnyAction {
	return {
		type: ACTION.FILTER_EDUCATIONALPROGRAMS,
		payload: filterStr,
	};
}

function cleanEducationalPrograms(): AnyAction {
	return {
		type: ACTION.CLEAN_EDUCATIONALPROGRAMS,
	};
}

const educationalProgramAC = {
	getEducationalPrograms: getEducationalPrograms,
	setEducationalPrograms: setEducationalPrograms,
	setEducationalProgram: setEducationalProgram,
	cleanEducationalPrograms: cleanEducationalPrograms,
	updFilter: updFilter,
};

export default educationalProgramAC;
