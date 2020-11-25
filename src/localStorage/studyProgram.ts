const key: string = "faculty";

function save(id: string) {
  localStorage.setItem(key, JSON.stringify(id));
}

function set(): string {
  const faculty = localStorage.getItem(key);
  return JSON.parse(faculty!);
}

function remove() {
  localStorage.removeItem(key);
}

const studyProgramLocalStorage = {
  save: save,
  set: set,
  remove: remove,
};

export default studyProgramLocalStorage;
