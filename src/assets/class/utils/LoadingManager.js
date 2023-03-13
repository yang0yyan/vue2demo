import { Loading } from "element-ui";

export class LoadingManager {
  loadingCount = 0;
  option = {};
  optionTarget = "";

  constructor() {
    this.#initDialog();
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new LoadingManager();
    }
    return this.instance;
  }

  #initDialog() {
    this.option = {
      text: "加载中……",
      background: "rgba(0, 0, 0, 0.7)",
    };
  }

  setSelfDialog(optionTarget) {
    this.optionTarget = optionTarget;
  }

  showLoading() {
    this.#startLoading();
  }

  hideLoading() {
    this.#endLoading();
  }

  #startLoading() {
    if (this.loadingCount === 0) {
      if (this.optionTarget) this.option.target = "#" + this.optionTarget;
      this.loading = Loading.service(this.option);
    }
    this.loadingCount += 1;
  }

  #endLoading() {
    if (this.loadingCount <= 0) {
      return;
    }
    this.loadingCount -= 1;
    if (this.loadingCount === 0) {
      this.loading.close();
    }
  }
}
