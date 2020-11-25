import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import formatDateToRequest from "../../helpers/formatDateToRequest";
import timetableAC from "../actionCreators/timetable";
import getObjectId from "../../helpers/getObjectId";
import getObjectName from "../../helpers/getObjectName";
import sortTimetableDays from "../../helpers/sortTimetableDays";
import api_address from "./apiAddress";

async function getEducatorEventsDays(oid: string) {
  return await Axios.get(api_address + `/educators/${1426}/events`)
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

function* workerGetEducatorEventsDays(action: Action) {
  yield put(timetableAC.cleanTimetable());

  const educatorEventDays = [];
  const cabinet_names: string[] = [];
  action.payload.selected_cabinets.forEach((element: any) => {
    cabinet_names.push(getObjectName(element));
  });

  yield put(timetableAC.setTimetableItems(cabinet_names, ["Кабинет", "Кабинеты"]));

  let data: any;
  for (let i = 0; i < cabinet_names.length; i++) {
    data = yield call(getEducatorEventsDays, getObjectId(action.payload.selected_cabinets[i]));

    if (data !== undefined) educatorEventDays.push(data);
  }

  // const week = sortTimetableDays(educatorEventDays);
  // yield put(timetableAC.setTimetable(week));

  yield put(timetableAC.finisFetchingData());
}

function* watchGetEducatorsTimetable() {
  yield takeEvery(ACTION.GET_EDUCATORS_TIMETABLE, workerGetEducatorEventsDays);
}

export default watchGetEducatorsTimetable;
