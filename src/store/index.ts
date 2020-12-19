import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import Action from "../types/Action";
import AppPage from "../types/pages/AppPage";
import LoginPage from "../types/pages/LoginPage";
import RegistrationPage from "../types/pages/RegisterPage";
import AccountPage from "../types/pages/AccountPage";
import Header from "../types/Header";
import AddressesPage from "../types/pages/AddressesPage";
import CabinetsPage from "../types/pages/CabinetsPage";
import EducatorsPage from "../types/pages/EducatorsPage";
import FacultiesPage from "../types/pages/FacultiesPage";
import StudyLevelPage from "../types/pages/StudyLevelPage";
import EducationalProgramPage from "../types/pages/EducationalProgramPage";
import EducationYearsPage from "../types/pages/EducationYearsPage";

import app from "./reducers/app";
import login from "./reducers/login";
import register from "./reducers/register";
import account from "./reducers/account";
import header from "./reducers/header";
import addresses from "./reducers/addresses";
import cabinets from "./reducers/cabinets";
import educators from "./reducers/educators";
import faculties from "./reducers/faculties";
import educationYears from "./reducers/educationYears";
import studyLevels from "./reducers/studyLevels";
import educationalPrograms from "./reducers/educationalPrograms";
import groups from "./reducers/groups";

import watchGetAddresses from "./sagas/timetableAPI/getAddresses";
import watchGetCabinets from "./sagas/timetableAPI/getCabinets";
import watchGetCabinetsTimetable from "./sagas/timetableAPI/getCabinetTimetable";
import watchGetFaculties from "./sagas/timetableAPI/getFaculties";
import watchGetEducators from "./sagas/timetableAPI/getEducators";
import watchGetStudyLevels from "./sagas/timetableAPI/getStudyLevels";
import GroupsPage from "../types/pages/GroupsPage";
import watchGetGroups from "./sagas/timetableAPI/getGroups";
import timetable from "./reducers/timetable";
import TimetablePage from "../types/pages/TimetablePage";
import watchGetGroupsTimetable from "./sagas/timetableAPI/getGroupsTimetable";
import watchGetEducatorsTimetable from "./sagas/timetableAPI/getEducatorTimetable";

import watchLogin from "./sagas/auth/login";
import watchLoginViaGoogle from "./sagas/auth/googleLogin";
import watchGapiInit from "./sagas/auth/gapiInit";
import watchRefreshToken from "./sagas/auth/refreshToken";
import watchGetUser from "./sagas/getUser";
import watchSaveEducator from "./sagas/educator/save";
import watchSaveCabinet from "./sagas/cabinet/save";
import watchRegister from "./sagas/auth/registration";
import watchRemoveCabinet from "./sagas/cabinet/remove";
import watchRemoveEducator from "./sagas/educator/remove";
import watchSaveGroup from "./sagas/group/save";
import watchRemoveGroup from "./sagas/group/remove";

const reducers = combineReducers({
  app: app,
  login: login,
  register: register,
  account: account,
  header: header,
  addresses: addresses,
  cabinets: cabinets,
  educators: educators,
  faculties: faculties,
  studyLevels: studyLevels,
  educationalPrograms: educationalPrograms,
  educationYears: educationYears,
  groups: groups,
  timetable: timetable,
});

const saga = createSagaMiddleware();

let store: Store<
  CombinedState<{
    app: AppPage;
    login: LoginPage;
    register: RegistrationPage;
    account: AccountPage;
    header: Header;
    addresses: AddressesPage;
    cabinets: CabinetsPage;
    educators: EducatorsPage;
    faculties: FacultiesPage;
    studyLevels: StudyLevelPage;
    educationalPrograms: EducationalProgramPage;
    educationYears: EducationYearsPage;
    groups: GroupsPage;
    timetable: TimetablePage;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

saga.run(watchGetAddresses);
saga.run(watchGetCabinets);
saga.run(watchGetCabinetsTimetable);
saga.run(watchGetFaculties);
saga.run(watchGetEducators);
saga.run(watchGetStudyLevels);
saga.run(watchGetGroups);
saga.run(watchGetGroupsTimetable);
saga.run(watchGetEducatorsTimetable);

saga.run(watchLogin);
saga.run(watchGapiInit);
saga.run(watchLoginViaGoogle);
saga.run(watchRefreshToken);
saga.run(watchGetUser);
saga.run(watchRegister);

saga.run(watchSaveCabinet);
saga.run(watchRemoveCabinet);

saga.run(watchSaveEducator);
saga.run(watchRemoveEducator);

saga.run(watchSaveGroup);
saga.run(watchRemoveGroup);

export default store;
