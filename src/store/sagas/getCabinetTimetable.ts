import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../actionCreators/ACTION";
import formatDateToRequest from "../../helpers/formatDateToRequest";
import timetableAC from "../actionCreators/timetable";
import getObjectID from "../../helpers/getObjectID";
import getObjectName from "../../helpers/getObjectName";
import sortTimetableDays from "../../helpers/sortTimetableDays";
import api_address from "./apiAddress";
import { AnyAction } from "redux";

async function getClassroomEventsDays(oid: string, fromDateStr: string, toDateDtr: string) {
	console.log(`https://timetable.spbu.ru/api/v1/classrooms/${oid}/events/${fromDateStr}/${toDateDtr}`);

	return await Axios.get(api_address + `/classrooms/${oid}/events/${fromDateStr}/${toDateDtr}`)
		.then((response) => {
			if (response.status === 200) {
				return response.data.ClassroomEventsDays;
			} else {
				return "error";
			}
		})
		.catch((err) => {
			alert(err.response.data);
		});
}

function* workerGetClassroomEventsDays(action: AnyAction) {
	yield put(timetableAC.cleanTimetable());

	const startDateStr: string = formatDateToRequest(action.payload.fromDate, true);
	const endDateStr: string = formatDateToRequest(action.payload.toDate, false);

	const cabinet_names: string[] = [];
	action.payload.selected_cabinets.forEach((element: any) => {
		cabinet_names.push(getObjectName(element));
	});
	yield put(timetableAC.setTimetableItems(cabinet_names, ["Кабинет", "Кабинеты"]));

	const classRoomEventDays = [];
	for (let i = 0; i < cabinet_names.length; i++) {
		const data = yield call(
			getClassroomEventsDays,
			getObjectID(action.payload.selected_cabinets[i]),
			startDateStr,
			endDateStr
		);

		if (data !== undefined) classRoomEventDays.push(data);
	}

	const week = sortTimetableDays(classRoomEventDays, "cabinet");
	yield put(timetableAC.setTimetable(week));

	yield put(timetableAC.finisFetchingData());
}

function* watchGetCabinetsTimetable() {
	yield takeEvery(ACTION.GET_CABINETS_TIMETABLE, workerGetClassroomEventsDays);
}

export default watchGetCabinetsTimetable;
