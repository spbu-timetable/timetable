import EducationYear from "../types/EducationYear";

function save(educationYear: EducationYear) {
  localStorage.setItem("educationYear", JSON.stringify(educationYear));
}

function set(): EducationYear {
  const educationYear = localStorage.getItem("steducationYearudyLevel");
  return JSON.parse(educationYear!);
}

function remove() {
  localStorage.removeItem("educationYear");
}

const EducationYearLocalStorage = {
  save: save,
  set: set,
  remove: remove,
};

export default EducationYearLocalStorage;