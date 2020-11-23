import EducationYearLocalStorage from "../../localStorage/year";
import EducationalYearsPage from "../../types/pages/EducationYearsPage";

const EducationalPrograms: EducationalYearsPage = {
  didGet: false,
  filter_value: "",

  ed_years: [],
  filtered_ed_years: [],

  selected_ed_year: EducationYearLocalStorage.set(),
};

export default EducationalPrograms;
