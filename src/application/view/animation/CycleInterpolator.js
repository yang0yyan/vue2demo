import { BaseInterpolator } from "./BaseInterpolator";
/**
 * 在指定的周期数内重复动画。变化率遵循正弦曲线。
 */
export class CycleInterpolator extends BaseInterpolator {
  constructor(cycles) {
    super();
    this.mCycles = cycles;
  }

  getInterpolation(input) {
    return Math.sin(2 * this.mCycles * Math.PI * input);
  }
}
