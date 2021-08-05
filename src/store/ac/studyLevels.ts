import { AnyAction } from "redux";
import StudyLevel from "../../types/StudyLevel";
import ACTION from "./ACTION";

function get(Alias: string): AnyAction {
	return {
		type: ACTION.GET_STUDYLEVELS,
		payload: Alias,
	};
}

function setFacultyAlias(alias: string): AnyAction {
	return {
		type: ACTION.SET_FACULTY_ALIAS,
		payload: alias,
	};
}

function set(faculty: string, levels: StudyLevel[]): AnyAction {
	return {
		type: ACTION.SET_STUDYLEVELS,
		payload: { faculty, levels },
	};
}

function updFilter(filterStr: string): AnyAction {
	return {
		type: ACTION.FILTER_STUDYLEVELS,
		payload: filterStr,
	};
}

const studyLevels = {
	get,
	set,
	setFacultyAlias,
	updFilter,
};

export default studyLevels;
