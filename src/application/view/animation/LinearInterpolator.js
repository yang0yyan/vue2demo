import { BaseInterpolator } from "./BaseInterpolator";

export class LinearInterpolator extends BaseInterpolator {
  constructor() {
    super();
  }

  getInterpolation(t) {
    return t;
  }
}
