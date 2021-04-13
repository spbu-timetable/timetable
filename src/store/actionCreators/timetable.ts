import { AnyAction } from "redux";
import ACTION from "./ACTION";

function setTimetable(timetable: any): AnyAction {
	return {
		type: ACTION.SET_TIMETABLE,
		payload: timetable,
	};
}

function finisFetchingData(): AnyAction {
	return {
		type: ACTION.FINISH_FETCHING_TIMETABLE,
	};
}

function createTimeIntervals(timeIntervals: string[]): AnyAction {
	return {
		type: ACTION.CREATE_TIME_INTERVALS,
		payload: timeIntervals,
	};
}

function setTimetableItems(items: string[], headers: string[]): AnyAction {
	return {
		type: ACTION.SET_TIMETABLE_ITEMS,
		payload: items,
		headers: headers,
	};
}

function cleanTimetable(): AnyAction {
	return {
		type: ACTION.CLEAN_TIMETABLE,
	};
}

const timetableAC = {
	setTimetable: setTimetable,
	finisFetchingData: finisFetchingData,
	createTimeIntervals: createTimeIntervals,
	setTimetableItems: setTimetableItems,
	cleanTimetable: cleanTimetable,
};

export default timetableAC;
