import { BaseInterpolator } from "./BaseInterpolator";

/**
 * 更改在终点反弹的插值器。
 */
export class BounceInterpolator extends BaseInterpolator {
  constructor() {
    super();
  }

  bounce(t) {
    return t * t * 8.0;
  }

  getInterpolation(t) {
    t *= 1.1226;
    if (t < 0.3535) return this.bounce(t);
    else if (t < 0.7408) return this.bounce(t - 0.54719) + 0.7;
    else if (t < 0.9644) return this.bounce(t - 0.8526) + 0.9;
    else return this.bounce(t - 1.0435) + 0.95;
  }
}
