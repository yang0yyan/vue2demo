import { ToastWidget } from "../view/toast/ToastWidget";

export class NotificationManager {
  constructor() {
    this.#init();
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new NotificationManager();
    }
    return this.instance;
  }

  #init() {
    this.toastInstance = new ToastWidget().getView();
  }
}
