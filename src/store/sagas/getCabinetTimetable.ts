import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import formatDateToRequest from "../../helpers/formatDateToRequest";
import timetableAC from "../actionCreators/timetable";
import createTimeIntervals from "../../helpers/createTimeIntervals";
import getObjectId from "../../helpers/getObjectId";
import getObjectName from "../../helpers/getObjectName";
import sortTimetableDays from "../../helpers/sortTimetableDays";

async function getClassroomEventsDays(
  oid: string,
  fromDateStr: string,
  toDateDtr: string
) {
  console.log(
    `https://timetable.spbu.ru/api/v1/classrooms/${oid}/events/${fromDateStr}/${toDateDtr}`
  );

  return await Axios.get(
    `https://timetable.spbu.ru/api/v1/classrooms/${oid}/events/${fromDateStr}/${toDateDtr}`
  )
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
  const startDateStr: string = formatDateToRequest(
    action.payload.fromDate,
    true
  );
  const endDateStr: string = formatDateToRequest(action.payload.toDate, false);

  const classRoomEventDays = [];
  const cabinet_names = [];

  let data: any;
  for (let i = 0; i < action.payload.selected_cabinets.length; i++) {
    cabinet_names.push(getObjectName(action.payload.selected_cabinets[i]));

    data = yield call(
      getClassroomEventsDays,
      getObjectId(action.payload.selected_cabinets[i]),
      startDateStr,
      endDateStr
    );

    if (data !== undefined) classRoomEventDays.push(data);
  }

  const week = sortTimetableDays(classRoomEventDays);
  yield put(timetableAC.setTimetable(week));

  yield put(timetableAC.setTimetableItems(cabinet_names));
  yield put(timetableAC.finisFetchingData());
}

function* watchGetCabinetsTimetable() {
  yield takeEvery(ACTION.GET_CABINETS_TIMETABLE, workerGetClassroomEventsDays);
}

export default watchGetCabinetsTimetable;
