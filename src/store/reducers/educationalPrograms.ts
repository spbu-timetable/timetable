import Action from "../../types/Action";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/EducationalProgram";
import sortList from "../../helpers/sortList";
import filterSearch from "../../helpers/searchFilter";
import EducationalProgramPage from "../../types/pages/EducationalProgramPage";
import EducationalProgram from "../../types/EducationalProgram";
import EducationalProgramLocalStorage from "../../localStorage/EducationalProgram";

function educationalPrograms(
  state: EducationalProgramPage = initialState,
  action: Action
): EducationalProgramPage {
  switch (action.type) {
    case ACTION.GET_EDUCTIONALPROGRAMS:
      return {
        ...state,
        didGet: true,
        ed_programs: action.payload.StudyProgramCombinations.sort(
          (a: EducationalProgram, b: EducationalProgram) => sortList(a.Name, b.Name)
        ),
      };
    case ACTION.SET_EDUCTIONALPROGRAMS:
      return {
        ...state,
        didGet: true,
        ed_programs: [...action.payload].sort((a: EducationalProgram, b: EducationalProgram) =>
          sortList(a.Name, b.Name)
        ),
      };
    case ACTION.CLEAN_EDUCATIONALPROGRAMS:
      return {
        ...state,
        didGet: false,
        ed_programs: [],
        selected_ed_program: undefined,
      };
    case ACTION.SET_EDUCTIONALPROGRAM:
      EducationalProgramLocalStorage.save(action.payload);
      return {
        ...state,
        selected_ed_program: action.payload,
      };

    case ACTION.FILTER_EDUCATIONALPROGRAMS:
      return {
        ...state,
        filter_value: action.payload,
        filtered_ed_programs: filterSearch(state.ed_programs, action.payload),
      };
  }

  return state;
}

export default educationalPrograms;
