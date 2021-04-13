import { AnyAction, applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import App from "../types/pages/App";
import Header from "../types/Header";
import AddressesPage from "../types/pages/AddressesPage";
import CabinetsPage from "../types/pages/CabinetsPage";
import EducatorsPage from "../types/pages/EducatorsPage";
import FacultiesPage from "../types/pages/FacultiesPage";
import StudyLevelPage from "../types/pages/StudyLevelPage";
import EducationalProgramPage from "../types/pages/EducationalProgramPage";
import EducationYearsPage from "../types/pages/EducationYearsPage";

import app from "./reducers/app";
import header from "./reducers/header";
import addresses from "./reducers/addresses";
import cabinets from "./reducers/cabinets";
import educators from "./reducers/educators";
import faculties from "./reducers/faculties";
import educationYears from "./reducers/educationYears";
import studyLevels from "./reducers/studyLevels";
import educationalPrograms from "./reducers/educationalPrograms";
import groups from "./reducers/groups";

import watchGetAddresses from "./sagas/getAdresses";
import watchGetCabinets from "./sagas/getCabinets";
import watchGetCabinetsTimetable from "./sagas/getCabinetTimetable";
import watchGetFaculties from "./sagas/getFaculties";
import watchGetEducators from "./sagas/getEducators";
import watchGetStudyLevels from "./sagas/getStudyLevels";
import GroupsPage from "../types/pages/GroupsPage";
import watchGetGroups from "./sagas/getGroups";
import timetable from "./reducers/timetable";
import TimetablePage from "../types/pages/TimetablePage";
import watchGetGroupsTimetable from "./sagas/getGroupsTimetable";
import watchGetEducatorsTimetable from "./sagas/getEducatorTimetable";

const reducers = combineReducers({
	app: app,
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
		app: App;
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
	AnyAction
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
export default store;
