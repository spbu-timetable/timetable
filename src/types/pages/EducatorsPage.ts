import Educator from "../Educator";

type EducatorsPage = {
  didGet: boolean;
  filter_value: string;

  filtered_educators: any;
  selected_educator?: Educator;
};

export default EducatorsPage;
