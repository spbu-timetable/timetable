import store from "../index";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../ac/ACTION";
import { AnyAction } from "redux";

function* work(action: AnyAction) {
	console.log(store.getState().studyLevels);
}

function* watch() {
	yield takeEvery(ACTION.GET_YEARS, work);
}

export default watch;
