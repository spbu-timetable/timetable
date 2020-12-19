import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../localStorage/accessToken";
import Action from "../../../types/Action";
import { SavedItem } from "../../../types/User";
import ACTION from "../../actionCreators/ACTION";
import appAC from "../../actionCreators/appAC";
import authAC from "../../actionCreators/authAC";

async function saveCabinet(cabinet: SavedItem) {
  return await Axios.post(`https://spbu-timetable-api.herokuapp.com/cabinets/save`, cabinet, {
    headers: {
      authorization: accessTokenLocalStorage.set(),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return "success";
      }
    })
    .catch((err) => {
      return;
    });
}

function* workerSaveCabinet(action: Action) {
  const data = yield call(saveCabinet, action.payload);
  if (data !== undefined) {
    yield put(appAC.setAlert({ message: "Кабинет успешно добавлен", severity: "success" }));
    yield put(authAC.getUser());
  } else {
    yield put(appAC.setAlert({ message: "Ошибка добавления кабинета", severity: "error" }));
  }
}

function* watchSaveCabinet() {
  yield takeEvery(ACTION.SAVE_CABINET, workerSaveCabinet);
}

export default watchSaveCabinet;
