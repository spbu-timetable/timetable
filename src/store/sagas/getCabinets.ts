import Axios from "axios";
import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import Cabinet from "../../types/Cabinet";

import ACTION from "../actionCreators/ACTION";
import cabinets from "../actionCreators/cabinets";
import api_address from "./apiAddress";

async function getCabinets(oid: string) {
	return await Axios.get(api_address + `/addresses/${oid}/classrooms`)
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

function* workerGetCabinets(action: AnyAction) {
	const data = yield call(getCabinets, action.payload);

	if (data !== undefined) {
		yield put(cabinets.set(action.payload, data));
	}
}

function* watchGetCabinets() {
	yield takeEvery(ACTION.GET_CABINETS, workerGetCabinets);
}

export default watchGetCabinets;
