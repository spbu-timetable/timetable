import accountAPI from ".";
import { call, put, takeLatest } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../localStorage/accessToken";

import ACTION from "../../actionCreators/ACTION";
import authAC from "../../actionCreators/authAC";

async function getUser() {
  return await accountAPI
    .get("/user/get", {
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

function* workerGetUser() {
  yield put(authAC.refreshToken());
  const data = yield call(getUser);

  if (data !== "error") {
    yield put(authAC.setUser(data));
  }
}

function* watchGetUser() {
  yield takeLatest(ACTION.GET_USER, workerGetUser);
}

export default watchGetUser;
