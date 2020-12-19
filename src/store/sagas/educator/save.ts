import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../localStorage/accessToken";
import Action from "../../../types/Action";
import { SavedItem } from "../../../types/User";
import ACTION from "../../actionCreators/ACTION";
import appAC from "../../actionCreators/appAC";
import authAC from "../../actionCreators/authAC";

async function saveEducator(educator: SavedItem) {
  return await Axios.post(`http://localhost:8000/educators/save`, educator, {
    headers: {
      authorization: accessTokenLocalStorage.set(),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return "success";
      }
    })
    .catch(() => {
      return;
    });
}

function* workerSaveEducator(action: Action) {
  const data = yield call(saveEducator, action.payload);
  if (data !== undefined) {
    yield put(appAC.setAlert({ message: "Преподаватель успешно добавлен", severity: "success" }));
    yield put(authAC.getUser());
  } else {
    yield put(appAC.setAlert({ message: "Ошибка добавления преподавателя", severity: "error" }));
  }
}

function* watchSaveEducator() {
  yield takeEvery(ACTION.SAVE_EDUCATOR, workerSaveEducator);
}

export default watchSaveEducator;
