import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import formatDateToRequest from "../../helpers/formatDateToRequest";
import timetableAC from "../actionCreators/timetable";

async function getClassroomEventsDays(oid: string, fromDateStr: string, toDateDtr: string) {
  return await Axios.get(
    `https://timetable.spbu.ru/api/v1/groups/${oid}/events/${fromDateStr}/${toDateDtr}?timetable=Primary`
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

  for (let i = 0; i < action.payload.selected_ids.length; i++) {
    const data = yield call(
      getClassroomEventsDays,
      action.payload.selected_ids[i],
      startDateStr,
      endDateStr
    );

    if (data !== undefined) {
      console.log(data);
      yield put(timetableAC.setTimetable(data));
    }
  }
}

function* watchGetGroupsTimetable() {
  yield takeEvery(ACTION.GET_GROUPS_TIMETABLE, workerGetClassroomEventsDays);
}

export default watchGetGroupsTimetable;
