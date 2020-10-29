import React from "react";
import SearchListPage from "../../../hocs/SearchListPage";
import EducationalProgram from "../../../types/EducationalProgram";

import StudyLevel from "../../../types/StudyLevel";

type Props = {
  didGet: boolean;

  selected_studyLevel: StudyLevel | undefined;
  filter_value: string;
  educational_programs: EducationalProgram[];
  filtered_educational_programs: EducationalProgram[];

  getEducationalPrograms: (selected_studyLevel: StudyLevel | undefined) => void;
  setEducationalProgram: (educationalProgram: EducationalProgram) => void;
  updFilter: (filterStr: string) => void;
};

const EducationalPrograms = (props: Props) => {
  return (
    <SearchListPage
      didGet={props.didGet}
      selected_item = {props.selected_studyLevel}
      url_to_push={"/faculties/groups"}
      items={props.educational_programs}
      filtered_items={props.filtered_educational_programs}
      filter_value={props.filter_value}
      header_text={"Выберите образовательную программу"}
      banner_main_text={"образовательная программа не найдена"}
      banner_secondary_text={"Попробуйте ввести иначе или найти в списке"}
      getSelectedItems={props.getEducationalPrograms}
      setItem={props.setEducationalProgram}
      updFilter={props.updFilter}
    />
  );
};

export default EducationalPrograms;