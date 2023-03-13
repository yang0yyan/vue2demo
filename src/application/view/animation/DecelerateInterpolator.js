import { BaseInterpolator } from "./BaseInterpolator";

/**
 * 一种插值器，其变化率开始很快，然后减速。
 */
export class DecelerateInterpolator extends BaseInterpolator {
  constructor(factor) {
    super();
    if (!factor) factor = 1.0;
    this.mFactor = factor;
  }

  getInterpolation(input) {
    let result;
    if (this.mFactor == 1.0) {
      result = 1.0 - (1.0 - input) * (1.0 - input);
    } else {
      result = 1.0 - Math.pow(1.0 - input, 2 * this.mFactor);
    }
    return result;
  }
}
