import { TypeEvaluator } from "./TypeEvaluator";

export class ArgbEvaluator extends TypeEvaluator {
  hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  constructor() {
    super();
  }

  hexToString(n) {
    let l = parseInt(n / 16);
    let r = n % 16;
    return this.hex[l] + this.hex[r];
  }

  evaluate(fraction, startValue, endValue) {
    let startInt = startValue;
    let startR = (startInt >> 24) & 0xff;
    let startG = (startInt >> 16) & 0xff;
    let startB = (startInt >> 8) & 0xff;
    let startA = startInt & 0xff;

    let endInt = endValue;
    let endR = (endInt >> 24) & 0xff;
    let endG = (endInt >> 16) & 0xff;
    let endB = (endInt >> 8) & 0xff;
    let endA = endInt & 0xff;

    let r = parseInt(startR + parseInt(fraction * (endR - startR)));
    let g = parseInt(startG + parseInt(fraction * (endG - startG)));
    let b = parseInt(startB + parseInt(fraction * (endB - startB)));
    let a = parseInt(startA + parseInt(fraction * (endA - startA)));
    return (
      "#" +
      (this.hexToString(r) +
        this.hexToString(g) +
        this.hexToString(b) +
        this.hexToString(a))
    );
  }
}
