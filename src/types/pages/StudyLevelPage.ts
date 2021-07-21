import StudyLevel from "../StudyLevel";

type StudyLevelPage = {
  didGet: boolean;
  filter_value: string;

  levels: StudyLevel[];
  filtered: StudyLevel[];
  selected?: StudyLevel;
};

export default StudyLevelPage;
