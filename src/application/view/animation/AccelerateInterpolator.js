import { BaseInterpolator } from "./BaseInterpolator";

/**
 * 一种插值器，其变化速率开始缓慢，然后加速。
 */
export class AccelerateInterpolator extends BaseInterpolator {
  constructor(factor) {
    super();
    if (!factor) {
      this.mFactor = 1.0;
      this.mDoubleFactor = 2.0;
    } else {
      this.mFactor = factor;
      this.mDoubleFactor = 2 * this.mFactor;
    }
  }

  getInterpolation(input) {
    if (this.mFactor == 1.0) {
      return input * input;
    } else {
      return Math.pow(input, this.mDoubleFactor);
    }
  }
}
