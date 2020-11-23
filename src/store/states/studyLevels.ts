import StudyLevelLocalStorage from "../../localStorage/studyLevel";
import StudyLevelPage from "../../types/pages/StudyLevelPage";

const studyLevels: StudyLevelPage = {
  didGet: false,
  filter_value: "",

  studyLevels: [],
  filtered_studyLevels: [],

  selected_studyLevel: StudyLevelLocalStorage.set(),
};

export default studyLevels;
