import { call, takeEvery } from "redux-saga/effects";

import "gapi";
import ACTION from "../../actionCreators/ACTION";

function gapiInit() {
  gapi.load("auth2", function () {
    gapi.auth2
      .init({
        client_id: "38199711621-8omdf7ukpnf9i801l0lq12l757vg0meu.apps.googleusercontent.com",
      })
      .then(
        () => console.log("OK"),
        (err) => console.log(err)
      );
  });
}

function* workerGapiInit() {
  yield call(gapiInit);
}

function* watchGapiInit() {
  yield takeEvery(ACTION.GAPI_INIT, workerGapiInit);
}

export default watchGapiInit;
