import Action from "../../types/Action";
import StudyLevel from "../../types/StudyLevel";
import ACTION from "./ACTION";

function getStudyLevels(Alias: string): Action {
  return { 
    type: ACTION.GET_STUDYLEVELS,
    payload:  Alias};
}

function setStudyLevels(studyLevels: StudyLevel[]): Action {
  return {
    type: ACTION.SET_STUDYLEVELS,
    payload: studyLevels,
  };
}

function setStudyLevel(studyLevel: StudyLevel): Action {
  return {
    type: ACTION.SET_STUDYLEVEL,
    payload: studyLevel,
  };
}

function updFilter(filterStr: string): Action {
  return {
    type: ACTION.FILTER_STUDYLEVELS,
    payload: filterStr,
  };
}

function cleanStudyLevels(): Action {
  return {
    type: ACTION.CLEAN_STUDYLEVELS,
  };
}

const studyLevelAC = {
  getStudyLevels: getStudyLevels,
  setStudyLevels: setStudyLevels,
  setStudyLevel: setStudyLevel,
  cleanStudyLevels: cleanStudyLevels,
  updFilter: updFilter,
};

export default studyLevelAC;
