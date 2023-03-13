export class Keyframe {
  mFraction;
  mValueType;
  #mInterpolator = null;
  mHasValue = false;

  constructor() {}

  static ofInt(var0, var1) {
    if (var1 === undefined) {
      return new IntKeyframe(var0);
    }
    return new IntKeyframe(var0, var1);
  }

  getInterpolator() {
    return this.#mInterpolator;
  }

  setInterpolator(var1) {
    this.#mInterpolator = var1;
  }

  getFraction() {
    return this.mFraction;
  }
}

export class IntKeyframe extends Keyframe {
  mValue = 0;
  constructor(var1, var2) {
    super();
    if (var2 === undefined) {
      super.mFraction = var1;
      super.mValueType = "int";
    } else {
      super.mFraction = var1;
      this.mValue = var2;
      super.mValueType = "int";
      super.mHasValue = true;
    }
  }

  getIntValue() {
    return this.mValue;
  }

  getValue() {
    return this.mValue;
  }
}
