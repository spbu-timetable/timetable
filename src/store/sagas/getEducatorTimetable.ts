import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../actionCreators/ACTION";
import timetableAC from "../actionCreators/timetable";
import getObjectName from "../../helpers/getObjectName";
import sortTimetableDays from "../../helpers/sortTimetableDays";
import api_address from "./apiAddress";
import formatDateToGroupsRequest from "../../helpers/formatDateToGroupsRequest";
import checkDays from "../../helpers/checkDays";
import { AnyAction } from "redux";

async function getEducatorEventsDays(oid: string, fromDateStr: string, toDateDtr: string) {
	console.log(api_address + `/educators/${oid}/events/${fromDateStr}/${toDateDtr}`);
	return await Axios.get(api_address + `/educators/${oid}/events/${fromDateStr}/${toDateDtr}`)
		.then((response) => {
			if (response.status === 200) {
				return response.data.EducatorEventsDays;
			} else {
				return "error";
			}
		})
		.catch((err) => {
			alert(err.response.data);
		});
}

function* workerGetEducatorEventsDays(action: AnyAction) {
	yield put(timetableAC.cleanTimetable());

	const startDateStr: string = formatDateToGroupsRequest(action.payload.fromDate);
	const endDateStr: string = formatDateToGroupsRequest(action.payload.toDate);

	const educator_names: string[] = [];
	action.payload.selected_educators.forEach((element: any) => {
		educator_names.push(getObjectName(element));
	});

	yield put(timetableAC.setTimetableItems(educator_names, ["Преподаватель", "Преподаватели"]));

	const educatorEventDays = [];
	for (let i = 0; i < action.payload.selected_educators.length; i++) {
		const data = yield call(getEducatorEventsDays, action.payload.selected_educators[i].Id, startDateStr, endDateStr);

		if (data !== undefined) educatorEventDays.push(data);
	}

	const checkedEducatorEventDays = checkDays(educatorEventDays);
	const week = sortTimetableDays(checkedEducatorEventDays, "cabinet");
	yield put(timetableAC.setTimetable(week));

	yield put(timetableAC.finisFetchingData());
}

function* watchGetEducatorsTimetable() {
	yield takeEvery(ACTION.GET_EDUCATORS_TIMETABLE, workerGetEducatorEventsDays);
}

export default watchGetEducatorsTimetable;
