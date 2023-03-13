import { TypeEvaluator } from "./TypeEvaluator";

export class CharEvaluator extends TypeEvaluator {
  constructor() {
    super();
  }

  evaluate(fraction, startValue, endValue) {
    let startInt = startValue.charCodeAt();
    let endInt = endValue.charCodeAt();
    let curInt = parseInt(startInt + fraction * (endInt - startInt));
    let result = curInt;
    return String.fromCharCode(result);
  }
}
