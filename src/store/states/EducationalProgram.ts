import EducationalProgramLocalStorage from "../../localStorage/EducationalProgram";
import EducationalProgramPage from "../../types/pages/EducationalProgramPage";

const EducationalPrograms: EducationalProgramPage = {
  didGet: false,
  filter_value: "",

  programs: [],
  filtered: [],

  selected: EducationalProgramLocalStorage.set(),
};

export default EducationalPrograms;
