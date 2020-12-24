import timetableAPI from ".";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../actionCreators/ACTION";
import formatDateToRequest from "../../../helpers/formatDateToRequest";
import timetableAC from "../../actionCreators/timetable";
import getObjectId from "../../../helpers/getObjectId";
import getObjectName from "../../../helpers/getObjectName";
import sortTimetableDays from "../../../helpers/sortTimetableDays";

async function getClassroomEventsDays(oid: string, fromDateStr: string, toDateDtr: string) {
  return await timetableAPI
    .get(`/classrooms/${oid}/events/${fromDateStr}/${toDateDtr}`)
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

function* workerGetClassroomEventsDays(action: Action) {
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
      getObjectId(action.payload.selected_cabinets[i]),
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
