import accountAPI from "..";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../../localStorage/accessToken";
import refreshTokenLocalStorage from "../../../../localStorage/refreshToken";
import Action from "../../../../types/Action";
import ACTION from "../../../actionCreators/ACTION";
import appAC from "../../../actionCreators/appAC";
import authAC from "../../../actionCreators/authAC";

async function login(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };

  return await accountAPI.post("/auth/login", data)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function* workerLogin(action: Action) {
  const data = yield call(login, action.payload.email, action.payload.password);

  if (data !== undefined) {
    accessTokenLocalStorage.save(data.accessToken);
    refreshTokenLocalStorage.save(data.refreshToken);

    yield put(authAC.setUser(data.user));
    yield put(authAC.setAccessToken(data.accessToken));
  } else {
    yield put(appAC.setAlert({ message: "Ошибка входа в приложение", severity: "error" }));
  }
}

function* watchLogin() {
  yield takeEvery(ACTION.LOGIN, workerLogin);
}

export default watchLogin;
