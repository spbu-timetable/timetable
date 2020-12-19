import { purple } from "@material-ui/core/colors";
import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../actionCreators/ACTION";
import appAC from "../../actionCreators/appAC";

async function register(name: string, email: string, password: string) {
  const data = {
    name: name,
    email: email,
    password: password,
  };

  return await Axios.post(`https://spbu-timetable-api.herokuapp.com/auth/registration`, data)
    .then((response) => {
      if (response.status === 200) {
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
  }
}

function* watchRegister() {
  yield takeEvery(ACTION.REGISTER, workerRegister);
}

export default watchRegister;
