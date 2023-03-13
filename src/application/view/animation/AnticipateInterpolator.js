import { BaseInterpolator } from "./BaseInterpolator";

/**
 * 一个内插器，其中更改开始向后，然后向前抛出。
 */
export class AnticipateInterpolator extends BaseInterpolator {
  constructor(tension) {
    super();
    if (!tension) tension = 2.0;
    this.mTension = tension;
  }

  getInterpolation(t) {
    return t * t * ((this.mTension + 1) * t - this.mTension);
  }
}
