import accountAPI from "..";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../../localStorage/accessToken";
import Action from "../../../../types/Action";
import { SavedItem } from "../../../../types/User";
import ACTION from "../../../actionCreators/ACTION";
import appAC from "../../../actionCreators/appAC";
import authAC from "../../../actionCreators/authAC";

async function removeEducator(educator: SavedItem) {
  return await accountAPI
    .post("/educators/remove", educator, {
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

function* workerRemoveEducator(action: Action) {
  const data = yield call(removeEducator, action.payload);
  if (data !== undefined) {
    yield put(appAC.setAlert({ message: "Преподаватель успешно удален", severity: "success" }));
    yield put(authAC.getUser());
  } else {
    yield put(appAC.setAlert({ message: "Ошибка удаления преподавателя", severity: "error" }));
  }
}

function* watchRemoveEducator() {
  yield takeEvery(ACTION.REMOVE_EDUCATOR, workerRemoveEducator);
}

export default watchRemoveEducator;
