import { IntEvaluator } from "./IntEvaluator";
import { KeyframeSet } from "./KeyframeSet";

export class PropertyValuesHolder {
  mPropertyName; // String
  mValueType;
  mKeyframes = null; // IntKeyframeSet
  mEvaluator = null; // TypeEvaluator

  sIntEvaluator = new IntEvaluator(); // IntEvaluator

  /**
   * @param {String} propertyName
   */
  constructor(propertyName) {
    this.mPropertyName = propertyName;
  }

  init() {
    if (this.mEvaluator == null) {
      // We already handle int and float automatically, but not their Object
      // equivalents
      this.mEvaluator = this.lsIntEvaluator;
    }
    if (this.mEvaluator != null) {
      // KeyframeSet knows how to evaluate the common types - only give it a custom
      // evaluator if one has been set on this class
      this.mKeyframes.setEvaluator(this.mEvaluator);
    }
  }

  /**
   * @param { String } propertyName 属性
   * @param { int... } values
   * @returns IntPropertyValuesHolder
   */
  static ofInt(propertyName, values) {
    return new IntPropertyValuesHolder(propertyName, values);
  }

  setIntValues(values) {
    this.mValueType = "int";
    this.mKeyframes = KeyframeSet.ofInt(values);
  }

  /**
   * @param {TypeEvaluator} evaluator
   */
  setEvaluator(evaluator) {
    this.mEvaluator = evaluator;
    this.mKeyframes.setEvaluator(evaluator);
  }

  getPropertyName() {
    return this.mPropertyName;
  }
}

export class IntPropertyValuesHolder extends PropertyValuesHolder {
  mIntKeyframes; // IntKeyframes

  constructor(propertyName, values) {
    super(propertyName);
    this.setIntValues(values);
  }

  setIntValues(values) {
    super.setIntValues(values);
    this.mIntKeyframes = this.mKeyframes; // IntKeyframes
  }
}
