import { NotificationManager } from "../app/NotificationManager";

export class Toast {
  static LENGTH_SHORT = 0;
  static LENGTH_LONG = 1;

  mDuration;
  mText;

  constructor() {}

  static makeText(text = "", duration = this.LENGTH_SHORT) {
    console.log(text, duration);
    let result = new Toast();
    result.mText = text;
    result.mDuration = duration;
    return result;
  }

  show() {
    if (!this.mText) {
      console.log("You must either set a text or a view");
      return;
    }
    NotificationManager.getInstance().toastInstance().showEditSuccess();
  }
}
