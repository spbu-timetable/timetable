import { AnyAction } from "redux";
import Group from "../../types/Group";
import ACTION from "./ACTION";

function setProgramID(programID: string): AnyAction {
	return {
		type: ACTION.SET_PROGRAM_ID,
		payload: programID,
	};
}

function get(programID: string): AnyAction {
	return {
		type: ACTION.GET_GROUPS,
		payload: programID,
	};
}

function set(programID: string, groups: Group[]): AnyAction {
	return {
		type: ACTION.SET_GROUPS,
		payload: {
			programID,
			groups,
		},
	};
}

function select(group: Group): AnyAction {
	return {
		type: ACTION.SELECT_GROUP,
		payload: group,
	};
}

function deselect(group: Group): AnyAction {
	return {
		type: ACTION.DESELECT_GROUP,
		payload: group,
	};
}

function updFilter(filterStr: string | undefined): AnyAction {
	return {
		type: ACTION.FILTER_GROUPS,
		payload: filterStr!,
	};
}

function getTimetable(selected_groups: Group[], fromDate: Date, toDate: Date): AnyAction {
	return {
		type: ACTION.GET_GROUPS_TIMETABLE,
		payload: {
			selected_groups: selected_groups,
			fromDate: fromDate,
			toDate: toDate,
		},
	};
}

const groups = {
	get,
	set,

	select,
	deselect,

	updFilter,

	getTimetable,

	setProgramID,
};

export default groups;
