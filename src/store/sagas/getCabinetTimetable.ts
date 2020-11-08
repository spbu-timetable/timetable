import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import formatDateToRequest from "../../helpers/formatDateToRequest";
import timetableAC from "../actionCreators/timetable";
import createTimeIntervals from "../../helpers/createTimeIntervals";

async function getClassroomEventsDays(oid: string, fromDateStr: string, toDateDtr: string) {
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
  const startDateStr: string = formatDateToRequest(action.payload.fromDate, true);
  const endDateStr: string = formatDateToRequest(action.payload.toDate, false);

  const classRoomEventDays = [];

  for (let i = 0; i < action.payload.selected_ids.length; i++) {
    const data = yield call(
      getClassroomEventsDays,
      action.payload.selected_ids[i],
      startDateStr,
      endDateStr
    );

    if (data !== undefined) {
      classRoomEventDays.push(data);
      yield put(timetableAC.setTimetable(data));
    }

    if (i === action.payload.selected_ids.length - 1) {
      const timeIntervals = createTimeIntervals(classRoomEventDays);
      yield put(timetableAC.createTimeIntervals(timeIntervals));
      yield put(timetableAC.finisFetchingData());
    }
  }
}

function* watchGetCabinetsTimetable() {
  yield takeEvery(ACTION.GET_CABINETS_TIMETABLE, workerGetClassroomEventsDays);
}

export default watchGetCabinetsTimetable;
