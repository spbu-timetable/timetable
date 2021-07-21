import { AnyAction } from "redux";
import Cabinet from "../../types/Cabinet";
import ACTION from "./ACTION";

function setAddressID(id: string): AnyAction {
	return {
		type: ACTION.SET_ADDRESS_ID,
		payload: id,
	};
}

function get(oid: string): AnyAction {
	return {
		type: ACTION.GET_CABINETS,
		payload: oid,
	};
}

function set(addressID: string, cabinets: Cabinet[]): AnyAction {
	return {
		type: ACTION.SET_CABINETS,
		payload: {
			addressID,
			cabinets,
		},
	};
}

function select(cabinet: Cabinet): AnyAction {
	return {
		type: ACTION.SELECT_CABINET,
		payload: cabinet,
	};
}

function deselect(cabinet: Cabinet): AnyAction {
	return {
		type: ACTION.DESELECT_CABINET,
		payload: cabinet,
	};
}

function getTimetable(selected_cabinets: Cabinet[], fromDate?: Date, toDate?: Date): AnyAction {
	return {
		type: ACTION.GET_CABINETS_TIMETABLE,
		payload: {
			selected_cabinets,
			fromDate,
			toDate,
		},
	};
}

function updFilter(filter: string, address: string): AnyAction {
	return {
		type: ACTION.FILTER_CABINETS,
		payload: {
			filter,
			address,
		},
	};
}

function clean(): AnyAction {
	return {
		type: ACTION.CLEAN_CABINETS,
	};
}

const cabinets = {
	setAddressID,

	get,
	set,
	clean,

	select,
	deselect,

	getTimetable,

	updFilter,
};

export default cabinets;
