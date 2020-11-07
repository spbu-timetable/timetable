import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import cabinetAC from "../actionCreators/cabinetAC";
import formatDateToRequest from "../../helpers/formatDateToRequest";

async function getClassroomEventsDays(oid: string, fromDateStr: string, toDateDtr: string) {
  return await Axios.get(
    `https://timetable.spbu.ru/api/v1/classrooms/${oid}/events/${fromDateStr}/${toDateDtr}`
  )
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerGetClassroomEventsDays(action: Action) {
  const startDateStr: string = formatDateToRequest(action.payload.startDate, true);
  const endDateStr: string = formatDateToRequest(action.payload.endDate, false);

  const data = yield call(
    getClassroomEventsDays,
    action.payload.cabinetOid,
    startDateStr,
    endDateStr
  );

  if (data !== undefined) {
    yield put(cabinetAC.setCabinetTimetable(data));
  }
}

function* watchGetClassroomEventsDays() {
  yield takeEvery(ACTION.GET_TIMETABLE, workerGetClassroomEventsDays);
}

export default watchGetClassroomEventsDays;
