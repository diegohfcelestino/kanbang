const _storage = localStorage;

const set = (key, value) => {
  _storage.setItem(key, value);
};
const get = (value) => {
  _storage.getItem(value);
};

const remove = (value) => {
  _storage.removeItem(value);
};

const LocalStorage = {
  get,
  set,
  remove,
};

export { LocalStorage };
