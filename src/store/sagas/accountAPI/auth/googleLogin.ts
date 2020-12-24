import accountAPI from "..";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../../../actionCreators/ACTION";

import "gapi";
import authAC from "../../../actionCreators/authAC";
import refreshTokenLocalStorage from "../../../../localStorage/refreshToken";
import accessTokenLocalStorage from "../../../../localStorage/accessToken";
import appAC from "../../../actionCreators/appAC";

async function loginViaGoogle() {
  const googleAuth = gapi.auth2.getAuthInstance();
  const user = await googleAuth.signIn({ scope: "profile email" });

  accessTokenLocalStorage.save(user.getAuthResponse().id_token);
  refreshTokenLocalStorage.save(user.getAuthResponse().id_token);

  if (user) {
    return accountAPI
      .get("/auth/google", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          authorization: user.getAuthResponse().id_token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch((err) => {
        return err.response.data;
      });
  }
}

function* workerLoginViaGoogle() {
  const data = yield call(loginViaGoogle);

  console.log(data);

  if (data !== undefined) {
    if (data === "need to register") {
      accessTokenLocalStorage.remove();
      refreshTokenLocalStorage.remove();
      yield put(authAC.needToRegister());
      yield put(appAC.setAlert({ message: "Необходимо зарегистрироваться", severity: "info" }));
      return;
    } else {
      yield put(authAC.setUser(data));
    }
  }
}

function* watchLoginViaGoogle() {
  yield takeEvery(ACTION.LOGIN_VIA_GOOGLE, workerLoginViaGoogle);
}

export default watchLoginViaGoogle;
