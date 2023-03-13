import { BaseInterpolator } from "./BaseInterpolator";

/**
 * 一个内插器，其中更改从后向开始，然后向前抛出并超出目标值，最后返回到最终值。
 */
export class AnticipateOvershootInterpolator extends BaseInterpolator {
  constructor(tension, extraTension) {
    super();
    if (!tension) tension = 2.0;
    if (!extraTension) extraTension = 1.5;
    this.mTension = tension * extraTension;
  }

  a(t, s) {
    return t * t * ((s + 1) * t - s);
  }

  o(t, s) {
    return t * t * ((s + 1) * t + s);
  }

  getInterpolation(t) {
    if (t < 0.5) return 0.5 * this.a(t * 2.0, this.mTension);
    else return 0.5 * (this.o(t * 2.0 - 2.0, this.mTension) + 2.0);
  }
}
