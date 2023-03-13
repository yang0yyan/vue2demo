import { BaseInterpolator } from "./BaseInterpolator";
/**
 * 一种插值器，其变化率开始和结束缓慢，但通过中间加速。
 */
export class AccelerateDecelerateInterpolator extends BaseInterpolator {
  constructor() {
    super();
  }

  getInterpolation(input) {
    return Math.cos((input + 1) * Math.PI) / 2.0 + 0.5;
  }
}
