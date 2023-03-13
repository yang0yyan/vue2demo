import { BaseView } from "../BaseView";

export class ViewMap extends BaseView {
  constructor() {
    super();
  }

  ordinaryView(...fs) {
    this.pushFunction(fs);
  }
}
