import { TypeEvaluator } from "./TypeEvaluator";

export class IntEvaluator extends TypeEvaluator {
  constructor() {
    super();
  }

  evaluate(fraction, startValue, endValue) {
    let startInt = startValue;
    return parseInt(startInt + fraction * (endValue - startInt));
  }
}
