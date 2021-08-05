import { AnyAction } from "redux";
import Educator from "../../types/Educator";
import ACTION from "./ACTION";

function selectEducator(educator: Educator): AnyAction {
	return {
		type: ACTION.SELECT_EDUCATOR,
		payload: educator,
	};
}

function deselectEducator(educator: Educator): AnyAction {
	return {
		type: ACTION.DESELECT_EDUCATOR,
		payload: educator,
	};
}

function setEducators(educators: Educator[]): AnyAction {
	return {
		type: ACTION.SET_EDUCATORS,
		payload: educators,
	};
}

function updFilter(filter_value: string): AnyAction {
	return {
		type: ACTION.FILTER_EDUCATORS,
		payload: filter_value,
	};
}

function updFilterValue(filter_value: string): AnyAction {
	return {
		type: ACTION.UPD_FILTER_VALUE,
		payload: filter_value,
	};
}

function getEducatorTimetable(selected_educators: Educator[], fromDate: Date, toDate: Date): AnyAction {
	return {
		type: ACTION.GET_EDUCATORS_TIMETABLE,
		payload: {
			selected_educators: selected_educators,
			fromDate: fromDate,
			toDate: toDate,
		},
	};
}

const educators = {
	get: updFilter,
	updFilter: updFilterValue,

	select: selectEducator,
	deselect: deselectEducator,

	setEducators: setEducators,

	getTimetable: getEducatorTimetable,
};

export default educators;
