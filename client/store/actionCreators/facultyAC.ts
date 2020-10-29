import Action from "../../types/Action";
import Faculty from "../../types/Faculty";
import ACTION from "./ACTION";

function getFaculties(): Action {
  return { type: ACTION.GET_FACULTIES };
}

function setFaculties(faculties: Faculty[]): Action {
  return {
    type: ACTION.SET_FACULTIES,
    payload: faculties,
  };
}

function setFaculty(faculties: Faculty): Action {
  return {
    type: ACTION.SET_FACULTY,
    payload: faculties,
  };
}

function updFilter(filterStr: string): Action {
  return {
    type: ACTION.FILTER_FACULTIES,
    payload: filterStr,
  };
}

const facultyAC = {
  getFaculties: getFaculties,
  setFaculties: setFaculties,
  setFaculty: setFaculty,
  updFilter: updFilter,
};

export default facultyAC;
