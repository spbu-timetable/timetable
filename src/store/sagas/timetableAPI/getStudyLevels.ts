import timetableAPI from ".";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../actionCreators/ACTION";
import studyLevelAC from "../../actionCreators/studyLevelAC";

async function getStudyLevels(Alias: string) {
  return await timetableAPI
    .get(`/study/divisions/${Alias}/programs/levels`)
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

function* workerStudyLevels(action: Action) {
  const data = yield call(getStudyLevels, action.payload);
  if (data !== undefined) {
    yield put(studyLevelAC.setStudyLevels(data));
  }
}

function* watchGetStudyLevels() {
  yield takeEvery(ACTION.GET_STUDYLEVELS, workerStudyLevels);
}

export default watchGetStudyLevels;
