import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../actionCreators/ACTION";
import addresses from "../actionCreators/addresses";
import api_address from "./apiAddress";

async function getAddresses() {
	return await Axios.get(api_address + "/addresses")
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

function* workerGetAddresses() {
	const data = yield call(getAddresses);

	if (data !== undefined) {
		yield put(addresses.setAddresses(data));
	}
}

function* watchGetAddresses() {
	yield takeEvery(ACTION.GET_ADDRESSES, workerGetAddresses);
}

export default watchGetAddresses;
