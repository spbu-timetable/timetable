import EducationalProgram from "../types/EducationalProgram";

function save(educationalProgram: EducationalProgram) {
  localStorage.setItem("educationalProgram", JSON.stringify(educationalProgram));
}

function set(): EducationalProgram {
  const educationalProgram = localStorage.getItem("educationalProgram");
  return JSON.parse(educationalProgram!);
}

function remove() {
  localStorage.removeItem("educationalProgram");
}

const EducationalProgramLocalStorage = {
  save: save,
  set: set,
  remove: remove,
};

export default EducationalProgramLocalStorage;