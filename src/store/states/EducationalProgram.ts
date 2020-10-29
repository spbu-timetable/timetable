import EducationalProgramLocalStorage from "../../localStorage/EducationalProgram";
import EducationalProgramPage from "../../types/pages/EducationalProgramPage";

const EducationalPrograms: EducationalProgramPage = {
  didGet: false,
  filter_value: "",

  ed_programs: [],
  filtered_ed_programs: [],

  selected_ed_program: EducationalProgramLocalStorage.set(),
};

export default EducationalPrograms;