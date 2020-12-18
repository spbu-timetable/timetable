import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../localStorage/accessToken";
import Action from "../../../types/Action";
import ACTION from "../../actionCreators/ACTION";
import appAC from "../../actionCreators/appAC";
import userAC from "../../actionCreators/userAC";

async function saveCabinet(cabinet_id: string) {
  return await Axios.post(
    `https://spbu-timetable-api.herokuapp.com/cabinets/save`,
    { id: cabinet_id },
    {
      headers: {
        authorization: accessTokenLocalStorage.set(),
      },
    }
  )
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
    yield put(userAC.setCabinet(data));
    yield put(appAC.setAlert({ message: "Кабинет успешно добавлен", severity: "success" }));
  } else {
    yield put(appAC.setAlert({ message: "Ошибка добавления кабинета", severity: "error" }));
  }
}

function* watchSaveCabinet() {
  yield takeEvery(ACTION.SAVE_CABINET, workerSaveCabinet);
}

export default watchSaveCabinet;
