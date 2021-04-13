import { AnyAction } from "redux";
import Cabinet from "../../types/Cabinet";
import ACTION from "./ACTION";

function getCabinets(oid: string): AnyAction {
	return {
		type: ACTION.GET_CABINETS,
		payload: oid,
	};
}

function setCabinets(cabinets: Cabinet[]): AnyAction {
	return {
		type: ACTION.SET_CABINETS,
		payload: cabinets,
	};
}

function selectCabinet(cabinet: Cabinet): AnyAction {
	return {
		type: ACTION.SELECT_CABINET,
		payload: cabinet,
	};
}

function deselectCabinet(cabinet: Cabinet): AnyAction {
	return {
		type: ACTION.DESELECT_CABINET,
		payload: cabinet,
	};
}

function getCabinetTimetable(selected_cabinets: Cabinet[], fromDate?: Date, toDate?: Date): AnyAction {
	return {
		type: ACTION.GET_CABINETS_TIMETABLE,
		payload: {
			selected_cabinets: selected_cabinets,
			fromDate: fromDate,
			toDate: toDate,
		},
	};
}

function updFilter(filterStr: string | undefined): AnyAction {
	return {
		type: ACTION.FILTER_CABINETS,
		payload: filterStr!,
	};
}

function cleanCabinets(): AnyAction {
	return {
		type: ACTION.CLEAN_CABINETS,
	};
}

const cabinetAC = {
	getCabinets: getCabinets,
	setCabinets: setCabinets,
	cleanCabinets: cleanCabinets,

	selectCabinet: selectCabinet,
	deselectCabinet: deselectCabinet,

	getCabinetTimetable: getCabinetTimetable,

	updFilter: updFilter,
};

export default cabinetAC;
