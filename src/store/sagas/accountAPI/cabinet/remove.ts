import accountAPI from "..";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../../localStorage/accessToken";
import Action from "../../../../types/Action";
import { SavedItem } from "../../../../types/User";
import ACTION from "../../../actionCreators/ACTION";
import appAC from "../../../actionCreators/appAC";
import authAC from "../../../actionCreators/authAC";

async function removeCabinet(cabinet: SavedItem) {
  return await accountAPI
    .post("/cabinets/remove", cabinet, {
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

function* workerRemoveCabinet(action: Action) {
  const data = yield call(removeCabinet, action.payload);
  if (data !== undefined) {
    yield put(appAC.setAlert({ message: "Кабинет успешно удален", severity: "success" }));
    yield put(authAC.getUser());
  } else {
    yield put(appAC.setAlert({ message: "Ошибка удаления кабинета", severity: "error" }));
  }
}

function* watchRemoveCabinet() {
  yield takeEvery(ACTION.REMOVE_CABINET, workerRemoveCabinet);
}

export default watchRemoveCabinet;
