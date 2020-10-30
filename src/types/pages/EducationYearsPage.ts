import EducationYear from "../EducationYear";

type EducationYearsPage = {
  didGet: boolean;
  filter_value: string;

  ed_years: EducationYear[];
  filtered_ed_years: EducationYear[];
  selected_ed_year?: EducationYear;
};

export default EducationYearsPage;