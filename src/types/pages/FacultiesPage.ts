import Faculty from "../Faculty";

type FacultiesPage = {
  didGet: boolean;
  filter_value: string;

  faculties: Faculty[];
  filtered: Faculty[];
  selected?: Faculty;
};

export default FacultiesPage;
