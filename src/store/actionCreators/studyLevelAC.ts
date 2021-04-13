import { AnyAction } from "redux";
import StudyLevel from "../../types/StudyLevel";
import ACTION from "./ACTION";

function getStudyLevels(Alias: string): AnyAction {
	return {
		type: ACTION.GET_STUDYLEVELS,
		payload: Alias,
	};
}

function setStudyLevels(studyLevels: StudyLevel[]): AnyAction {
	return {
		type: ACTION.SET_STUDYLEVELS,
		payload: studyLevels,
	};
}

function setStudyLevel(studyLevel: StudyLevel): AnyAction {
	return {
		type: ACTION.SET_STUDYLEVEL,
		payload: studyLevel,
	};
}

function updFilter(filterStr: string): AnyAction {
	return {
		type: ACTION.FILTER_STUDYLEVELS,
		payload: filterStr,
	};
}

function cleanStudyLevels(): AnyAction {
	return {
		type: ACTION.CLEAN_STUDYLEVELS,
	};
}

const studyLevelAC = {
	getStudyLevels: getStudyLevels,
	setStudyLevels: setStudyLevels,
	setStudyLevel: setStudyLevel,
	cleanStudyLevels: cleanStudyLevels,
	updFilter: updFilter,
};

export default studyLevelAC;
