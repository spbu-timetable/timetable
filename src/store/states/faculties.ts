import FacultyLocalStorage from "../../localStorage/faculty";
import FacultiesPage from "../../types/FacultiesPage";

const faculties: FacultiesPage = {
  didGet: false,
  filter_value: "",

  faculties: [],
  filtered_faculties: [],

  selected_faculty: FacultyLocalStorage.set(),
};

export default faculties;