const key = "refreshToken";

function save(token: string) {
  localStorage.setItem(key, token);
}

function set(): string | undefined {
  return localStorage.getItem(key)! || undefined;
}

function remove() {
  localStorage.removeItem(key);
}

const refreshTokenLocalStorage = {
  save: save,
  set: set,
  remove: remove,
};

export default refreshTokenLocalStorage;
