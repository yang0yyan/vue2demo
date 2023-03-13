import { StorageManager } from "./StorageManager";

export class DictHolder {
  instance = null;
  #dictData = [];
  #dictTypeMap = {};
  constructor() {
    this.#init();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new DictHolder();
    }
    return this.instance;
  }
  #init() {
    this.#dictData = StorageManager.take(StorageManager.Key.DICT_ALL);
    this.#dictData.forEach((item) => {
      if (!this.#dictTypeMap[item.dictType])
        this.#dictTypeMap[item.dictType] = [];
      this.#dictTypeMap[item.dictType].push(item);
    });
  }

  // reload() {
  //   this.#init();
  // }

  getDictData() {
    return this.#dictData;
  }

  getDictType(dictType) {
    let data = this.#dictTypeMap[dictType];
    return data ? data : [];
  }
}
