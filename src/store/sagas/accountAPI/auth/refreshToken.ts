import accountAPI from "..";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../../../actionCreators/ACTION";

import "gapi";
import authAC from "../../../actionCreators/authAC";
import refreshTokenLocalStorage from "../../../../localStorage/refreshToken";
import accessTokenLocalStorage from "../../../../localStorage/accessToken";

async function refreshToken() {
  return accountAPI
    .get("/token/refresh", {
      headers: {
        authorization: refreshTokenLocalStorage.set(),
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((err) => {
      return "error";
    });
}

function* workerRefreshToken() {
  const data = yield call(refreshToken);

  console.log(data);

  if (data === "error") {
    refreshTokenLocalStorage.remove();
  } else {
    accessTokenLocalStorage.save(data);
    yield put(authAC.setAccessToken(data));
  }
}

function* watchRefreshToken() {
  yield takeEvery(ACTION.REFRESH_TOKEN, workerRefreshToken);
}

export default watchRefreshToken;
