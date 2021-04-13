import { AnyAction } from "redux";
import Group from "../../types/Group";
import ACTION from "./ACTION";

function getGroups(oid: string): AnyAction {
	return {
		type: ACTION.GET_GROUPS,
		payload: oid,
	};
}

function setGroups(groups: Group[]): AnyAction {
	return {
		type: ACTION.SET_GROUPS,
		payload: groups,
	};
}

function selectGroup(group: Group): AnyAction {
	return {
		type: ACTION.SELECT_GROUP,
		payload: group,
	};
}

function deselectGroup(group: Group): AnyAction {
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

function cleanGroups(): AnyAction {
	return {
		type: ACTION.CLEAN_GROUPS,
	};
}

function getGroupsTimetable(selected_groups: Group[], fromDate: Date, toDate: Date): AnyAction {
	return {
		type: ACTION.GET_GROUPS_TIMETABLE,
		payload: {
			selected_groups: selected_groups,
			fromDate: fromDate,
			toDate: toDate,
		},
	};
}

const groupAC = {
	getGroups: getGroups,
	setGroups: setGroups,
	cleanGroups: cleanGroups,

	selectGroup: selectGroup,
	deselectGroup: deselectGroup,

	updFilter: updFilter,

	getGroupsTimetable: getGroupsTimetable,
};

export default groupAC;
