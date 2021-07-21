import EducationYearLocalStorage from "../../localStorage/year";
import EducationalYearsPage from "../../types/pages/EducationYearsPage";

const EducationalPrograms: EducationalYearsPage = {
  didGet: false,
  filter_value: "",

  years: [],
  filtered: [],

  selected: EducationYearLocalStorage.set(),
};

export default EducationalPrograms;
