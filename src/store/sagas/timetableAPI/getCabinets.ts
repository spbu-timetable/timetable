import timetableAPI from ".";
import { call, put, takeLatest } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../actionCreators/ACTION";
import cabinetAC from "../../actionCreators/cabinetAC";

async function getCabinets(oid: string) {
  return await timetableAPI
    .get(`/addresses/${oid}/classrooms`)
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

function* workerGetCabinets(action: Action) {
  const data = yield call(getCabinets, action.payload);

  if (data !== undefined) {
    yield put(cabinetAC.setCabinets(data));
  }
}

function* watchGetCabinets() {
  yield takeLatest(ACTION.GET_CABINETS, workerGetCabinets);
}

export default watchGetCabinets;
