import Educator from "../Educator";

type EducatorsPage = {
  filter_value: string;

  filtered_educators: Educator[];
  selected_educator?: Educator;
};

export default EducatorsPage;
