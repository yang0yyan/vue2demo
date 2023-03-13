import { Keyframe } from "./Keyframe";

export class KeyframeSet {
  mNumKeyframes;
  mKeyframes;
  mEvaluator;
  constructor(keyframes) {
    this.mNumKeyframes = keyframes.length;
    this.mKeyframes = keyframes;
  }
  static ofInt(values) {
    let numKeyframes = values.length;
    let keyframes = new Array(Math.max(numKeyframes, 2)); // IntKeyframe
    if (numKeyframes == 1) {
      keyframes[0] = Keyframe.ofInt(0);
      keyframes[1] = Keyframe.ofInt(1, values[0]);
    } else {
      keyframes[0] = Keyframe.ofInt(0, values[0]);
      for (let i = 1; i < numKeyframes; ++i) {
        keyframes[i] = Keyframe.ofInt(i / (numKeyframes - 1), values[i]);
      }
    }
    return new IntKeyframeSet(keyframes);
  }
  setEvaluator(evaluator) {
    this.mEvaluator = evaluator;
  }
}

export class IntKeyframeSet extends KeyframeSet {
  constructor(keyframes) {
    super(keyframes);
  }

  getIntValue(fraction) {
    if (fraction <= 0) {
      const prevKeyframe = this.mKeyframes.get(0);
      const nextKeyframe = this.mKeyframes.get(1);
      let prevValue = prevKeyframe.getIntValue();
      let nextValue = nextKeyframe.getIntValue();
      let prevFraction = prevKeyframe.getFraction();
      let nextFraction = nextKeyframe.getFraction();
      const interpolator = nextKeyframe.getInterpolator();
      if (interpolator != null) {
        fraction = interpolator.getInterpolation(fraction);
      }
      let intervalFraction =
        (fraction - prevFraction) / (nextFraction - prevFraction);
      return this.mEvaluator == null
        ? prevValue + parseInt(intervalFraction * (nextValue - prevValue))
        : parseInt(
            this.mEvaluator.evaluate(intervalFraction, prevValue, nextValue)
          );
    } else if (fraction >= 1) {
      const prevKeyframe = this.mKeyframes.get(this.mNumKeyframes - 2);
      const nextKeyframe = this.mKeyframes.get(this.mNumKeyframes - 1);
      let prevValue = prevKeyframe.getIntValue();
      let nextValue = nextKeyframe.getIntValue();
      let prevFraction = prevKeyframe.getFraction();
      let nextFraction = nextKeyframe.getFraction();
      const interpolator = nextKeyframe.getInterpolator();
      if (interpolator != null) {
        fraction = interpolator.getInterpolation(fraction);
      }
      let intervalFraction =
        (fraction - prevFraction) / (nextFraction - prevFraction);
      return this.mEvaluator == null
        ? prevValue + parseInt(intervalFraction * (nextValue - prevValue))
        : parseInt(
            this.mEvaluator.evaluate(intervalFraction, prevValue, nextValue)
          );
    }
    let prevKeyframe = this.mKeyframes.get(0);
    for (let i = 1; i < this.mNumKeyframes; ++i) {
      let nextKeyframe = this.mKeyframes.get(i);
      if (fraction < nextKeyframe.getFraction()) {
        const interpolator = nextKeyframe.getInterpolator();
        let intervalFraction =
          (fraction - prevKeyframe.getFraction()) /
          (nextKeyframe.getFraction() - prevKeyframe.getFraction());
        let prevValue = prevKeyframe.getIntValue();
        let nextValue = nextKeyframe.getIntValue();
        // Apply interpolator on the proportional duration.
        if (interpolator != null) {
          intervalFraction = interpolator.getInterpolation(intervalFraction);
        }
        return this.mEvaluator == null
          ? prevValue + parseInt(intervalFraction * (nextValue - prevValue))
          : parseInt(
              this.mEvaluator.evaluate(intervalFraction, prevValue, nextValue)
            );
      }
      prevKeyframe = nextKeyframe;
    }
    // shouldn't get here
    return parseInt(this.mKeyframes.get(this.mNumKeyframes - 1).getValue());
  }
}
