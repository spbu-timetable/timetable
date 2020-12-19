import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../localStorage/accessToken";
import refreshTokenLocalStorage from "../../../localStorage/refreshToken";
import ACTION from "../../actionCreators/ACTION";
import authAC from "../../actionCreators/authAC";

async function logout() {
  return await Axios.get(`https://spbu-timetable-api.herokuapp.com/auth/logout`, {
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
      console.log(err);
    });
}

function* workerLogout() {
  yield call(logout);

  accessTokenLocalStorage.remove();
  refreshTokenLocalStorage.remove();

  yield put(authAC.setUser(undefined));
}

function* watchLogout() {
  yield takeEvery(ACTION.LOGOUT, workerLogout);
}

export default watchLogout;
