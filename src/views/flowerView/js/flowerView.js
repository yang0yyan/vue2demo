import { IntEvaluator } from "@/application/animation/IntEvaluator";
import { ValueAnimator } from "@/application/animation/ValueAnimator";
import { AccelerateDecelerateInterpolator } from "@/application/view/animation/AccelerateDecelerateInterpolator";

export default {
  name: "flowerView",
  data() {
    return {
      width: 108,
      height: 32,
      currentWidth: 108,
      currentHeight: 32,

      type: "no", // long short big no
      duration: 500,
    };
  },
  mounted() {
    this.initAnimation();
  },
  created() {},
  methods: {
    initAnimation() {
      this.anim = new ValueAnimator();
      this.anim.setInterpolator(new AccelerateDecelerateInterpolator());
      this.anim.setEvaluator(new IntEvaluator());
      this.anim.setDuration(this.duration);
      this.anim.addUpdateListener((value) => {
        this.height = value;
        this.currentHeight = value;
      });

      this.anim2 = new ValueAnimator();
      this.anim2.setInterpolator(new AccelerateDecelerateInterpolator());
      this.anim2.setEvaluator(new IntEvaluator());
      this.anim2.setDuration(this.duration);
      this.anim2.addUpdateListener((value) => {
        this.width = value;
        this.currentWidth = value;
      });
    },
    _longMessage() {
      this.type = "long";
      let keyFrames = [];
      keyFrames.push({ key: 0, value: this.currentWidth });
      keyFrames.push({ key: 1, value: 208 });
      this.anim2.setKeyFrames(keyFrames);
      this.anim2.start();
    },
    _shortMssage() {
      this.type = "short";
      let keyFrames = [];
      keyFrames.push({ key: 0, value: this.currentWidth });
      keyFrames.push({ key: 1, value: 158 });
      this.anim2.setKeyFrames(keyFrames);
      this.anim2.start();
    },
    _bigMessage() {
      this.type = "big";
      let keyFrames = [];
      keyFrames.push({ key: 0, value: 32 });
      keyFrames.push({ key: 0.7, value: 110 });
      keyFrames.push({ key: 1, value: 100 });
      this.anim.setKeyFrames(keyFrames);
      this.anim.start();

      let keyFrames2 = [];
      keyFrames2.push({ key: 0, value: this.currentWidth });
      keyFrames2.push({ key: 0.7, value: 318 });
      keyFrames2.push({ key: 1, value: 308 });
      this.anim2.setKeyFrames(keyFrames2);
      this.anim2.start();
    },
    _noMessage() {
      let keyFrames = [];
      keyFrames.push({ key: 0, value: this.currentHeight });
      keyFrames.push({ key: 1, value: 32 });
      this.anim.setKeyFrames(keyFrames);
      this.anim.start();
    },
    _noMessage2() {
      let keyFrames2 = [];
      keyFrames2.push({ key: 0, value: this.currentWidth });
      keyFrames2.push({ key: 1, value: 108 });
      this.anim2.setKeyFrames(keyFrames2);
      this.anim2.start();
    },
    _transition() {
      let keyFrames = [];
      keyFrames.push({ key: 0, value: this.currentHeight });
      keyFrames.push({ key: 0.5, value: 42 });
      keyFrames.push({ key: 1, value: 32 });
      this.anim.setKeyFrames(keyFrames);
      this.anim.start();
    },
    longMessage() {
      if (this.type === "big") {
        this._longMessage();
        this._noMessage();
        this.type = "big";
        setTimeout(() => {
          this.type = "long";
        }, this.duration);
      } else {
        this._longMessage();
      }
    },
    shortMssage() {
      if (this.type === "big") {
        this._shortMssage();
        this._noMessage();
        this.type = "big";
        setTimeout(() => {
          this.type = "short";
        }, this.duration);
      } else {
        this._shortMssage();
      }
    },
    bigMessage() {
      this._bigMessage();
    },
    noMessage() {
      this._noMessage();
      this._noMessage2();
      if (this.type === "big") {
        setTimeout(() => {
          this.type = "no";
        }, this.duration);
      } else {
        this.type = "no";
      }
    },
  },
};
