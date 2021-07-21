import Educator from "../Educator";

type EducatorsPage = {
  received: boolean;
  filter: string;

  filtered: any;
  selected: Educator[];
};

export default EducatorsPage;
