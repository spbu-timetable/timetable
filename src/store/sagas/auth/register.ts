import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../actionCreators/ACTION";

async function register(name: string, email: string, password: string) {
  const data = {
    name: name,
    email: email,
    password: password,
  };

  return await Axios.post(`https://spbu-timetable-api.herokuapp.com/auth/register`, data)
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

function* workerRegister(action: Action) {
  const data = yield call(register, action.payload.name, action.payload.email, action.payload.password);
  console.log(data);
  if (data !== undefined) {
    // yield put(studyLevelAC.setStudyLevels(data));
  }
}

function* watchRegister() {
  yield takeEvery(ACTION.REGISTER, workerRegister);
}

export default watchRegister;
