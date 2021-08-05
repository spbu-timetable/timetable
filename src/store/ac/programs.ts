import { AnyAction } from "redux";
import Program from "../../types/Program";
import ACTION from "./ACTION";

function get(faculty: string, level: string): AnyAction {
	return {
		type: ACTION.GET_PROGRAMS,
		payload: {
			faculty,
			level,
		},
	};
}

function set(level: string, programs: Program[]): AnyAction {
	return {
		type: ACTION.SET_EDUCATIONAL_PROGRAMS,
		payload: {
			levelName: level,
			programs,
		},
	};
}

function setLevel(level: string): AnyAction {
	return {
		type: ACTION.SET_LEVEL,
		payload: level,
	};
}

function updFilter(filterStr: string): AnyAction {
	return {
		type: ACTION.FILTER_PROGRAMS,
		payload: filterStr,
	};
}

const programs = {
	get,
	set,
	updFilter,
	setLevel,
};

export default programs;
