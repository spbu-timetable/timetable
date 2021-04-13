import Axios from "axios";
import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../actionCreators/ACTION";
import groupAC from "../actionCreators/groupAC";
import api_address from "./apiAddress";

async function getGroups(oid: string) {
	return await Axios.get(api_address + `/progams/${oid}/groups`)
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

function* workerGetGroups(action: AnyAction) {
	const data = yield call(getGroups, action.payload);
	console.log("got smth");
	if (data !== undefined) {
		yield put(groupAC.setGroups(data));
	}
}

function* watchGetGroups() {
	yield takeEvery(ACTION.GET_GROUPS, workerGetGroups);
}

export default watchGetGroups;
