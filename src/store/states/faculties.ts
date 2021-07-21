import FacultyLocalStorage from "../../localStorage/faculty";
import FacultiesPage from "../../types/pages/FacultiesPage";

const faculties: FacultiesPage = {
  didGet: false,
  filter_value: "",

  faculties: [],
  filtered: [],

  selected: FacultyLocalStorage.set(),
};

export default faculties;
