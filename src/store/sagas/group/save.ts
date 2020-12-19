import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../localStorage/accessToken";
import Action from "../../../types/Action";
import { SavedItem } from "../../../types/User";
import ACTION from "../../actionCreators/ACTION";
import appAC from "../../actionCreators/appAC";
import authAC from "../../actionCreators/authAC";

async function saveEducator(educator: SavedItem) {
  return await Axios.post(`http://localhost:8000/groups/save`, educator, {
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
    yield put(appAC.setAlert({ message: "Группа успешно добавлена", severity: "success" }));
    yield put(authAC.getUser());
  } else {
    yield put(appAC.setAlert({ message: "Ошибка добавления группы", severity: "error" }));
  }
}

function* watchSaveGroup() {
  yield takeEvery(ACTION.SAVE_GROUP, workerSaveEducator);
}

export default watchSaveGroup;
