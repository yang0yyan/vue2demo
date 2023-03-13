export class StorageManager {
  static ENV = process.env.NODE_ENV;

  static Key = {
    USER_TOKEN: "integratedYq_token",
    USER_INFO: "integratedYq_userInf",
    USER_ROUTER: "integratedYq_userRout",
    DICT_ALL: "integratedYq_dict_all",
  };

  constructor() {}

  static save(key, value = "") {
    if (key) this.#save(key, value);
  }

  static take(key) {
    if (key) return this.#take(key);
    return "";
  }

  static remove(key) {
    if (key) this.#remove(key);
  }

  static #save(key, value) {
    if (this.ENV === "production") {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  static #take(key) {
    try {
      if (this.ENV === "production") {
        return JSON.parse(window.localStorage.getItem(key));
      } else {
        return JSON.parse(window.sessionStorage.getItem(key));
      }
    } catch (err) {
      return "";
    }
  }

  static #remove = (key) => {
    if (this.ENV === "production") {
      window.localStorage.removeItem(key);
    } else {
      window.sessionStorage.removeItem(key);
    }
  };
}
