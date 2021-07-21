import Educator from "../Educator";

type EducatorsPage = {
  didGet: boolean;
  filter_value: string;

  filtered: any;
  selected: Educator[];
};

export default EducatorsPage;
