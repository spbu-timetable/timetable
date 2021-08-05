import { AnyAction } from "redux";
import Faculty from "../../types/Faculty";
import ACTION from "./ACTION";

function get(): AnyAction {
	return { type: ACTION.GET_FACULTIES };
}

function set(faculties: Faculty[]): AnyAction {
	return {
		type: ACTION.SET_FACULTIES,
		payload: faculties,
	};
}

function updFilter(filter: string): AnyAction {
	return {
		type: ACTION.FILTER_FACULTIES,
		payload: filter,
	};
}

const faculties = {
	get,
	set,
	updFilter,
};

export default faculties;
