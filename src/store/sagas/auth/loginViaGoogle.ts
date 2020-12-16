import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../../actionCreators/ACTION";

async function loginViaGoogle() {
  return await Axios.get(`http://localhost:8000/google`, {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8000",
    },
  })
    .then((response) => {
      if (response.status === 304) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err);
    });
}

function* workerLoginViaGoogle() {
  const data = yield call(loginViaGoogle);
  console.log(data);
  if (data !== undefined) {
    // yield put(studyLevelAC.setStudyLevels(data));
  }
}

function* watchLoginViaGoogle() {
  yield takeEvery(ACTION.LOGIN_VIA_GOOGLE, workerLoginViaGoogle);
}

export default watchLoginViaGoogle;
