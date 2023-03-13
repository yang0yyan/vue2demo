import Vue from "vue";
import myToast from "./view/ToastView.vue";
export class ToastWidget {
  constructor() {
    this.#init();
  }

  #init() {
    const MsgConstructor = Vue.extend(myToast);
    const instance = new MsgConstructor();
    console.log(instance);
    // document.body.appendChild(instance.$el);
    this.instance = instance;
  }

  getView() {
    return this.instance;
  }
}
