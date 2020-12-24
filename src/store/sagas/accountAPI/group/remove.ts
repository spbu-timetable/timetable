import accountAPI from "..";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../../localStorage/accessToken";
import Action from "../../../../types/Action";
import { SavedItem } from "../../../../types/User";
import ACTION from "../../../actionCreators/ACTION";
import appAC from "../../../actionCreators/appAC";
import authAC from "../../../actionCreators/authAC";

async function removeGroup(educator: SavedItem) {
  return await accountAPI
    .post("/groups/remove", educator, {
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

function* workerRemoveGroup(action: Action) {
  const data = yield call(removeGroup, action.payload);
  if (data !== undefined) {
    yield put(appAC.setAlert({ message: "Группа успешно удалена", severity: "success" }));
    yield put(authAC.getUser());
  } else {
    yield put(appAC.setAlert({ message: "Ошибка удаления группы", severity: "error" }));
  }
}

function* watchRemoveGroup() {
  yield takeEvery(ACTION.REMOVE_GROUP, workerRemoveGroup);
}

export default watchRemoveGroup;
