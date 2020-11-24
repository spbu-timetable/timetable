import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../actionCreators/ACTION";
import facultyAC from "../actionCreators/facultyAC";
import api_address from "./apiAddress";

async function getFaculties() {
  return await Axios.get(api_address + "/study/divisions")
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

function* workerGetFaculties() {
  const data = yield call(getFaculties);
  if (data !== undefined) {
    yield put(facultyAC.setFaculties(data));
  }
}

function* watchGetFaculties() {
  yield takeEvery(ACTION.GET_FACULTIES, workerGetFaculties);
}

export default watchGetFaculties;
