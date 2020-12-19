import { purple } from "@material-ui/core/colors";
import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import accessTokenLocalStorage from "../../../localStorage/accessToken";
import refreshTokenLocalStorage from "../../../localStorage/refreshToken";
import Action from "../../../types/Action";
import ACTION from "../../actionCreators/ACTION";
import appAC from "../../actionCreators/appAC";
import authAC from "../../actionCreators/authAC";

async function register(name: string, email: string, password: string) {
  const data = {
    name: name,
    email: email,
    password: password,
  };

  return await Axios.post(`https://spbu-timetable-api.herokuapp.com/auth/registration`, data)
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      return { error: true, message: err.response.data };
    });
}

function* workerRegister(action: Action) {
  const data = yield call(register, action.payload.name, action.payload.email, action.payload.password);
  console.log(data);
  if (data.error) {
    yield put(appAC.setAlert({ message: data.message, severity: "error" }));
  } else {
    accessTokenLocalStorage.save(data.accessToken);
    refreshTokenLocalStorage.save(data.refreshToken);

    yield put(authAC.setUser(data.user));
  }
}

function* watchRegister() {
  yield takeEvery(ACTION.REGISTER, workerRegister);
}

export default watchRegister;
