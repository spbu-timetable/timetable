import EducationYear from "../EducationYear";

type EducationYearsPage = {
  didGet: boolean;
  filter_value: string;

  years: EducationYear[];
  filtered: EducationYear[];
  selected?: EducationYear;
};

export default EducationYearsPage;
