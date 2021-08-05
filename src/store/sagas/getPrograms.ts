import store from "../index";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../ac/ACTION";
import { AnyAction } from "redux";
import programs from "../ac/programs";
import studyLevels from "../ac/studyLevels";
import sleep from "sleep";

import StudyLevel from "../../types/StudyLevel";
import EducationalProgram from "../../types/Program";

const getPrograms = (levelName: string, levels: StudyLevel[]) => {
	const p = levels.find((l: StudyLevel) => l.StudyLevelName === levelName)?.StudyProgramCombinations;

	console.log(levels);
	console.log(p);
	return p;
};

function* work(action: AnyAction) {
	if (!store.getState().studyLevels.items.get(action.payload.faculty))
		yield put(studyLevels.get(action.payload.faculty));

	const p: EducationalProgram[] = yield call(
		getPrograms,
		action.payload.level,
		store.getState().studyLevels.items.get(action.payload.faculty) || []
	);

	yield put(programs.set(action.payload.level, p));
}

function* watch() {
	yield takeEvery(ACTION.GET_PROGRAMS, work);
}

export default watch;
