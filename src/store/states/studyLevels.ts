import StudyLevelLocalStorage from "../../localStorage/studyLevel";
import StudyLevelPage from "../../types/pages/StudyLevelPage";

const studyLevels: StudyLevelPage = {
  didGet: false,
  filter_value: "",

  levels: [],
  filtered: [],

  selected: StudyLevelLocalStorage.set(),
};

export default studyLevels;
