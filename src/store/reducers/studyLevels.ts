import StudyLevelLocalStorage from "../../localStorage/studyLevel";
import Action from "../../types/Action";
import StudyLevel from "../../types/StudyLevel";
import StudyLevelPage from "../../types/pages/StudyLevelPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/studyLevels";
import sortList from "../../helpers/sortList";
import filterSearch from "../../helpers/searchFilter";

function studyLevels(state: StudyLevelPage = initialState, action: Action): StudyLevelPage {
  switch (action.type) {
    case ACTION.SET_STUDYLEVELS:
      return {
        ...state,
        didGet: true,
        studyLevels: [...action.payload].sort((a: StudyLevel, b: StudyLevel) => sortList(a.StudyLevelName, b.StudyLevelName)),
      };
    case ACTION.SET_STUDYLEVEL:
      StudyLevelLocalStorage.save(action.payload);
      return {
        ...state,
        selected_studyLevel: action.payload,
      };

    case ACTION.FILTER_STUDYLEVELS:
      return {
        ...state,
        filter_value: action.payload,
        filtered_studyLevels: filterSearch(state.studyLevels, action.payload),
      };
  }

  return state;
}

export default studyLevels;
