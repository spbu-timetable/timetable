import EducationalProgram from "../EducationalProgram";

type EducationalProgramPage = {
  didGet: boolean;
  filter_value: string;

  programs: EducationalProgram[];
  filtered: EducationalProgram[];
  selected?: EducationalProgram;
};

export default EducationalProgramPage;
