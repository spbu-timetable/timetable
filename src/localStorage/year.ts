import EducationYear from "../types/EducationYear";

const key: string = "educationYear";

function save(educationYear: EducationYear) {
  localStorage.setItem(key, JSON.stringify(educationYear));
}

function set(): EducationYear {
  const educationYear = localStorage.getItem(key);
  return JSON.parse(educationYear!);
}

function remove() {
  localStorage.removeItem(key);
}

const EducationYearLocalStorage = {
  save: save,
  set: set,
  remove: remove,
};

export default EducationYearLocalStorage;
