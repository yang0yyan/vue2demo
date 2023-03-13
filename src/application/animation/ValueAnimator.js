import { LinearInterpolator } from "@/application/view/animation/LinearInterpolator";
import { IntEvaluator } from "./IntEvaluator";
// import { PropertyValuesHolder } from "./PropertyValuesHolder";

export class ValueAnimator {
  mDuration = 0;
  mDelay = 0;
  timestamp = 0;
  mUpdateListeners = null;
  mInterpolator = new LinearInterpolator();
  mEvaluator = new IntEvaluator();

  mValues = []; // PropertyValuesHolder[] ---> IntPropertyValuesHolder
  keyFrames = [];
  // mValuesMap; // HashMap<String, PropertyValuesHolder>

  // framesDelay = Math.round(1000 / 60);

  constructor() {}

  static ofInt(values) {
    let anim = new ValueAnimator();
    anim.setIntValues(values);
    return anim;
  }

  setIntValues(values) {
    if (!values || !(values instanceof Array) || values.length == 0) return;
    this.mValues = values;
    let delay = 1 / (values.length - 1);
    this.keyFrames = [];
    values.forEach((item, index) => {
      this.keyFrames.push({
        key: delay * index,
        value: item,
      });
    });

    // if (this.mValues == null || this.mValues.length == 0) {
    //   this.setValues(PropertyValuesHolder.ofInt("", values)); // IntPropertyValuesHolder
    // } else {
    //   let valuesHolder = this.mValues[0]; // PropertyValuesHolder
    //   valuesHolder.setIntValues(values);
    // }
  }

  setKeyFrames(keyFrames) {
    this.keyFrames = keyFrames;
  }
  /**
   * @param {PropertyValuesHolder...} values
   */
  setValues(values) {
    // let numValues = values.length;
    this.mValues = values;
    // this.mValuesMap = {}; // String, PropertyValuesHolder
    // for (let i = 0; i < numValues; ++i) {
    //   let valuesHolder = values[i]; // PropertyValuesHolder
    //   this.mValuesMap.put(valuesHolder.getPropertyName(), valuesHolder);
    // }
    // New property/values/target should cause re-initialization prior to starting
    // mInitialized = false;
  }

  setDuration(duration) {
    if (duration < 0) {
      return null;
    }
    this.mDuration = duration;
    return this;
  }
  setDelay(delay) {
    if (delay < 0) {
      return null;
    }
    this.mDelay = delay;
    return this;
  }

  setEvaluator(value) {
    if (value) {
      this.mEvaluator = value;
    }

    // if (value != null && this.mValues != null && this.mValues.length > 0) {
    //   this.mValues[0].setEvaluator(value);
    // }
  }

  setInterpolator(value) {
    if (value !== null) {
      this.mInterpolator = value;
    } else {
      this.mInterpolator = new LinearInterpolator();
    }
  }

  start() {
    this.timestamp = new Date().getTime();
    this.timeFunc2();
  }

  // timeFunc() {
  //   let timeDelay = 33;

  //   let currentTimeMillis1 = new Date().getTime();
  //   // console.log(currentTimeMillis1);
  //   let delay = currentTimeMillis1 - this.timestamp;
  //   this.animateBasedOnPlayTime(delay);
  //   let currentTimeMillis2 = new Date().getTime();
  //   timeDelay =
  //     this.framesDelay - (currentTimeMillis2 - currentTimeMillis1) - 9;
  //   if (timeDelay < 0) timeDelay = 0;
  //   // console.log(timeDelay);
  //   if (delay < this.mDuration) {
  //     setTimeout(() => {
  //       this.timeFunc();
  //     }, timeDelay);
  //     // requestAnimationFrame(this.timeFunc); //请求再次执行渲染函数render
  //   }
  // }

  timeFunc2() {
    let currentTimeMillis1 = new Date().getTime();
    let delay = currentTimeMillis1 - this.timestamp;
    delay -= this.mDelay;
    if (delay >= 0) this.animateBasedOnPlayTime(delay);
    if (delay < this.mDuration) {
      this.time_id = requestAnimationFrame(this.timeFunc2.bind(this)); //请求再次执行渲染函数render
    } else {
      cancelAnimationFrame(this.time_id);
    }
  }

  animateBasedOnPlayTime(currentPlayTime) {
    let fraction = currentPlayTime / this.mDuration;
    if (fraction > 1) fraction = 1;
    // fraction = getCurrentIterationFraction(fraction, inReverse);
    this.animateValue(fraction);
  }

  frameSection(fraction) {
    for (let i = 0; i < this.keyFrames.length; i++) {
      const item = this.keyFrames[i];
      if (item.key <= fraction) {
        const item2 = this.keyFrames[i + 1];
        if (item2.key >= fraction) {
          return [fraction / item2.key, item.value, item2.value];
        }
      }
    }
    return [fraction, 0, 0];
  }

  animateValue(fraction) {
    fraction = this.mInterpolator.getInterpolation(fraction);
    let mValues = this.frameSection(fraction);
    let value = this.mEvaluator.evaluate(mValues[0], mValues[1], mValues[2]);
    if (this.mUpdateListeners !== null) this.mUpdateListeners(value);
  }

  addUpdateListener(listener) {
    this.mUpdateListeners = listener;
  }
}
