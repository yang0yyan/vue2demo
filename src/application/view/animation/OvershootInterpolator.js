import { BaseInterpolator } from "./BaseInterpolator";

/**
 * 一个插值器，其中更改向前抛出并超出最后一个值，然后返回。
 */
export class OvershootInterpolator extends BaseInterpolator {
  constructor(tension) {
    super();
    if (!tension) tension = 2.9;
    this.mTension = tension;
  }

  getInterpolation(t) {
    // _o(t) = t * t * ((tension + 1) * t + tension)
    // o(t) = _o(t - 1) + 1
    t -= 1.0;
    return t * t * ((this.mTension + 1) * t + this.mTension) + 1.0;
  }
}
