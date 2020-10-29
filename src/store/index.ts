import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import Action from "../types/Action";
import Header from "../types/Header";
import AddressesPage from "../types/pages/AddressesPage";
import CabinetsPage from "../types/pages/CabinetsPage";
import EducatorsPage from "../types/pages/EducatorsPage";
import FacultiesPage from "../types/pages/FacultiesPage";
import StudyLevelPage from "../types/pages/StudyLevelPage";

import header from "./reducers/header";
import addresses from "./reducers/addresses";
import cabinets from "./reducers/cabinets";
import educators from "./reducers/educators";
import faculties from "./reducers/faculties";
import studyLevels from "./reducers/studyLevels";

import watchGetAddresses from "./sagas/getAdresses";
import watchGetCabinets from "./sagas/getCabinets";
import watchGetClassroomEventsDays from "./sagas/getClassroomEventsDays";
import watchGetFaculties from "./sagas/getFaculties";
import watchGetEducators from "./sagas/getEducators";
import watchGetStudyLevels from "./sagas/getStudyLevels";
import educationalPrograms from "./reducers/educationalPrograms";
import EducationalProgramPage from "../types/pages/EducationalProgramPage";

const reducers = combineReducers({
  header: header,
  addresses: addresses,
  cabinets: cabinets,
  educators: educators,
  faculties: faculties,
  studyLevels: studyLevels,
  educationalPrograms: educationalPrograms,
});

const saga = createSagaMiddleware();

let store: Store<
  CombinedState<{
    header: Header;
    addresses: AddressesPage;
    cabinets: CabinetsPage;
    educators: EducatorsPage;
    faculties: FacultiesPage;
    studyLevels: StudyLevelPage;
    educationalPrograms: EducationalProgramPage;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

saga.run(watchGetAddresses);
saga.run(watchGetCabinets);
saga.run(watchGetClassroomEventsDays);
saga.run(watchGetFaculties);
saga.run(watchGetEducators);
saga.run(watchGetStudyLevels);

export default store;
