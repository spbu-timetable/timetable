import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../actionCreators/ACTION";
import educatorAC from "../../actionCreators/educatorAC";
import api_address from "./apiAddress";

async function getEducators(filter: string) {
  if (filter.trim() !== "") {
    return await Axios.get(api_address + `/educators/search/${filter}`)
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
}

function* workerGetEducators(action: Action) {
  const data = yield call(getEducators, action.payload);

  if (data !== undefined) {
    yield put(educatorAC.setEducators(data.Educators));
  }
}

function* watchGetEducators() {
  setTimeout(() => {}, 1000);

  yield takeLatest(ACTION.FILTER_EDUCATORS, workerGetEducators);
}

export default watchGetEducators;
