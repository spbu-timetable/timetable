import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../../actionCreators/ACTION";

import "gapi";
import authAC from "../../actionCreators/authAC";
import refreshTokenLocalStorage from "../../../localStorage/refreshToken";
import accessTokenLocalStorage from "../../../localStorage/accessToken";

async function loginViaGoogle() {
  const googleAuth = gapi.auth2.getAuthInstance();
  const user = await googleAuth.signIn({ scope: "profile email" });

  accessTokenLocalStorage.save(user.getAuthResponse().id_token);
  refreshTokenLocalStorage.save(user.getAuthResponse().id_token);

  if (user) {
    return Axios.get("https://spbu-timetable-api.herokuapp.com/token/signin", {
      headers: {
        authorization: user.getAuthResponse().id_token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
}

function* workerLoginViaGoogle() {
  const data = yield call(loginViaGoogle);

  if (data !== undefined) {
    yield put(authAC.setUser(data));
  }
}

function* watchLoginViaGoogle() {
  yield takeEvery(ACTION.LOGIN_VIA_GOOGLE, workerLoginViaGoogle);
}

export default watchLoginViaGoogle;
