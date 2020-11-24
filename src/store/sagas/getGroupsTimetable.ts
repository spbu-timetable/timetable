import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import formatDateToGroupsRequest from "../../helpers/formatDateToGroupsRequest";
import timetableAC from "../actionCreators/timetable";
import getObjectName from "../../helpers/getObjectName";
import sortTimetableDays from "../../helpers/sortTimetableDays";
import checkDays from "../../helpers/checkDays";
import api_address from "./apiAddress";

async function getGroupEventsDays(oid: string, fromDateStr: string, toDateDtr: string) {
  return await Axios.get(api_address + `/groups/${oid}/events/${fromDateStr}/${toDateDtr}?timetable=Primary`)
    .then((response) => {
      if (response.status === 200) {
        return response.data.Days;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerGetClassroomEventsDays(action: Action) {
  const startDateStr: string = formatDateToGroupsRequest(action.payload.fromDate);
  const endDateStr: string = formatDateToGroupsRequest(action.payload.toDate);

  const groupEventDays = [];
  const group_names = [];

  let data: any;
  for (let i = 0; i < action.payload.selected_groups.length; i++) {
    group_names.push(getObjectName(action.payload.selected_groups[i]));

    data = yield call(getGroupEventsDays, action.payload.selected_groups[i].StudentGroupId, startDateStr, endDateStr);

    if (data !== undefined) groupEventDays.push(data);

    console.log("HEY !");
    console.log(groupEventDays);
  }

  const checkedGroupEventDays = checkDays(groupEventDays);
  console.log("HEY 2!");
  console.log(checkedGroupEventDays);
  const week = sortTimetableDays(checkedGroupEventDays);
  console.log("HEY 3!");
  console.log(week);
  yield put(timetableAC.setTimetable(week));

  yield put(timetableAC.setTimetableItems(group_names, ["Группа", "Группы"]));
  yield put(timetableAC.finisFetchingData());
}

function* watchGetGroupsTimetable() {
  yield takeEvery(ACTION.GET_GROUPS_TIMETABLE, workerGetClassroomEventsDays);
}

export default watchGetGroupsTimetable;
