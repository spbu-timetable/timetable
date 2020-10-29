import StudyLevel from "../types/StudyLevel";

function save(studyLevel: StudyLevel) {
  localStorage.setItem("studyLevel", JSON.stringify(studyLevel));
}

function set(): StudyLevel {
  const studyLevel = localStorage.getItem("studyLevel");
  return JSON.parse(studyLevel!);
}

function remove() {
  localStorage.removeItem("studyLevel");
}

const StudyLevelLocalStorage = {
  save: save,
  set: set,
  remove: remove,
};

export default StudyLevelLocalStorage;