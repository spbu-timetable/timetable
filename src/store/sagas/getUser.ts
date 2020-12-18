import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import accessTokenLocalStorage from "../../localStorage/accessToken";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";
import authAC from "../actionCreators/authAC";

async function getUser(id: string) {
  console.log(accessTokenLocalStorage.set());

  return await Axios.get("https://spbu-timetable-api.herokuapp.com/user/get", {
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
    const data = yield call(getUser, action.payload);
    if (data !== "error") {
      yield put(authAC.setUser(data.user));
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
