import Action from "../../types/Action";
import EducationalProgram from "../../types/EducationalProgram";
import StudyLevel from "../../types/StudyLevel";
import ACTION from "./ACTION";

function getEducationalPrograms(selected_study_level: StudyLevel): Action {
  return { 
    type: ACTION.GET_EDUCTIONALPROGRAMS,
    payload:  selected_study_level,
  };
}

function setEducationalPrograms(educationalPrograms: EducationalProgram[]): Action {
  return {
    type: ACTION.SET_EDUCTIONALPROGRAMS,
    payload: educationalPrograms,
  };
}

function setEducationalProgram(ed_program: EducationalProgram): Action {
  return {
    type: ACTION.SET_EDUCTIONALPROGRAM,
    payload: ed_program,
  };
}

function updFilter(filterStr: string): Action {
  return {
    type: ACTION.FILTER_EDUCATIONALPROGRAMS,
    payload: filterStr,
  };
}

const educationalProgramAC = {
  getEducationalPrograms: getEducationalPrograms,
  setEducationalPrograms: setEducationalPrograms,
  setEducationalProgram: setEducationalProgram,
  updFilter: updFilter,
};

export default educationalProgramAC;
