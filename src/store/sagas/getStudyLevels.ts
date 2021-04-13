import Axios from "axios";
import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../actionCreators/ACTION";
import studyLevelAC from "../actionCreators/studyLevelAC";
import api_address from "./apiAddress";

async function getStudyLevels(Alias: string) {
	return await Axios.get(api_address + `/study/divisions/${Alias}/programs/levels`)
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

function* workerStudyLevels(action: AnyAction) {
	const data = yield call(getStudyLevels, action.payload);
	if (data !== undefined) {
		yield put(studyLevelAC.setStudyLevels(data));
	}
}

function* watchGetStudyLevels() {
	yield takeEvery(ACTION.GET_STUDYLEVELS, workerStudyLevels);
}

export default watchGetStudyLevels;
