import Educator from "../Educator";

type EducatorsPage = {
  didGet: boolean;
  filter_value: string;

  filtered_educators: any;
  selected_educators: Educator[];
};

export default EducatorsPage;
