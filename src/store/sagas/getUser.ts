import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import accessTokenLocalStorage from "../../localStorage/accessToken";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import authAC from "../actionCreators/authAC";

async function getUser() {
  return await Axios.get("http://localhost:8000/user/get", {
    headers: {
      authorization: accessTokenLocalStorage.set(),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(() => {
      return "error";
    });
}

function* workerGetUser(action: Action) {
  for (let i = 0; i < 2; i++) {
    const data = yield call(getUser);
    if (data !== "error") {
      yield put(authAC.setUser(data));
      break;
    } else {
      yield put(authAC.refreshToken());
    }
  }
}

function* watchGetUser() {
  yield takeLatest(ACTION.GET_USER, workerGetUser);
}

export default watchGetUser;
