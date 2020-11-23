import Faculty from "../Faculty";

type FacultiesPage = {
  didGet: boolean;
  filter_value: string;

  faculties: Faculty[];
  filtered_faculties: Faculty[];
  selected_faculty?: Faculty;
};

export default FacultiesPage;
