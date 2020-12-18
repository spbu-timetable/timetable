import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../localStorage/accessToken";
import Action from "../../types/Action";
import ACTION from "../actionCreators/ACTION";

async function saveEducator(educator_id: string) {
  return await Axios.post(
    `http://localhost:8000/educator/save`,
    { id: educator_id },
    {
      headers: {
        authorization: accessTokenLocalStorage.set(),
      },
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerSaveEducator(action: Action) {
  const data = yield call(saveEducator, action.payload);
  if (data !== undefined) {
  }
}

function* watchSaveEducator() {
  yield takeEvery(ACTION.SAVE_EDUCATOR, workerSaveEducator);
}

export default watchSaveEducator;
