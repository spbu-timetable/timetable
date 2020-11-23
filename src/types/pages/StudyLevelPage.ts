import StudyLevel from "../StudyLevel";

type StudyLevelPage = {
  didGet: boolean;
  filter_value: string;

  studyLevels: StudyLevel[];
  filtered_studyLevels: StudyLevel[];
  selected_studyLevel?: StudyLevel;
};

export default StudyLevelPage;
