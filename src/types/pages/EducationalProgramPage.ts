import EducationalProgram from "../EducationalProgram";

type EducationalProgramPage = {
  didGet: boolean;
  filter_value: string;

  ed_programs: EducationalProgram[];
  filtered_ed_programs: EducationalProgram[];
  selected_ed_program?: EducationalProgram;
};

export default EducationalProgramPage;
