import React from "react";
import SearchListPage from "../../../../../../hocs/SearchListPage";
import EducationalProgram from "../../../../../../types/EducationalProgram";
import EducationYear from "../../../../../../types/EducationYear";


type Props = {
  didGet: boolean;

  selected_ed_program: EducationalProgram | undefined;
  filter_value: string;
  ed_years: EducationYear[];
  filtered_ed_years: EducationYear[];

  getEducationYears: (selected_ed_program: EducationalProgram | undefined) => void;
  setEducationYear: (educationYear: EducationYear) => void;
  updFilter: (filterStr: string) => void;
};

const EducationYears = (props: Props) => {
  return (
    <SearchListPage
      didGet={props.didGet}
      selected_item = {props.selected_ed_program}
      url_to_push={"/faculties/studyLevels/educationalPrograms/educationYears/Groups"}
      items={props.ed_years}
      filtered_items={props.filtered_ed_years}
      filter_value={props.filter_value}
      header_text={"Выберите год начала обучения"}
      banner_main_text={"год начала обучения не найдена"}
      banner_secondary_text={"Попробуйте ввести иначе или найти в списке"}
      getSelectedItems={props.getEducationYears}
      setItem={props.setEducationYear}
      updFilter={props.updFilter}
    />
  );
};

export default EducationYears;