import Faculty from "../types/Faculty";

function save(faculty: Faculty) {
  localStorage.setItem("faculty", JSON.stringify(faculty));
}

function set(): Faculty {
  const faculty = localStorage.getItem("faculty");
  return JSON.parse(faculty!);
}

function remove() {
  localStorage.removeItem("faculty");
}

const FacultyLocalStorage = {
  save: save,
  set: set,
  remove: remove,
};

export default FacultyLocalStorage;
