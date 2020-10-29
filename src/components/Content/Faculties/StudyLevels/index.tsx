import React from "react";
import SearchListPage from "../../../../hocs/SearchListPage";

import StudyLevel from "../../../../types/StudyLevel";

type Props = {
  oid: string | undefined;
  didGet: boolean;
  filter_value: string;
  studyLevels: StudyLevel[];
  filtered_studyLevels: StudyLevel[];

  getStudyLevels: (oid: string | undefined) => void;
  setStudyLevel: (studyLevel: StudyLevel) => void;
  updFilter: (filterStr: string) => void;
};

const StudyLevels = (props: Props) => {
  return (
    <SearchListPage
      didGet={props.didGet}
      oid={props.oid}
      url_to_push={"/faculties/groups"}
      items={props.studyLevels}
      filtered_items={props.filtered_studyLevels}
      filter_value={props.filter_value}
      header_text={"Выберите степень образования"}
      banner_main_text={"Степень не найдена"}
      banner_secondary_text={"Попробуйте ввести иначе или найти в списке"}
      getItems={props.getStudyLevels}
      setItem={props.setStudyLevel}
      updFilter={props.updFilter}
    />
  );
};

export default StudyLevels;
