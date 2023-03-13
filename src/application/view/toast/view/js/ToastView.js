export default {
  name: "ToastView",
  data() {
    return {
      showDelayTimer: "",
      hideDelayTimer: "",
      opacity: 0,
      level: -1,
      bg: "",
      editSuccessBgImg: require("@/assets/images/global/notify_locked_bg.png"),
      lockedImg: require("@/assets/images/global/notify_locked_bg.png"),
      unlockImg: require("@/assets/images/global/notify_unlock_bg.png"),

      message: "",
    };
  },
  computed: {
    style() {
      return (
        "opacity:" +
        this.opacity +
        ";z-index:" +
        this.level +
        ";background-image: url('" +
        this.editSuccessBgImg +
        "');"
      );
    },
  },
  mounted() {
    this.fn1(2);
  },
  created() {
    // this.$nextTick(() => {
    //   const body = document.querySelector("body");
    //   if (body.append) {
    //     body.append(this.$el);
    //   } else {
    //     body.appendChild(this.$el);
    //   }
    // });
  },
  methods: {
    // 定时器执行的方法
    showFunctions() {
      // this.hide();
    },
    hideFunctions() {
      this.level = -1;
    },
    // 定时器
    startShowInterval() {
      if (this.showDelayTimer) this.stopShowInterval();

      this.showDelayTimer = setInterval(this.showFunctions, 1000);
    },
    stopShowInterval() {
      if (this.showDelayTimer) {
        clearInterval(this.showDelayTimer);
        this.showDelayTimer = "";
      }
    },
    startHideInterval() {
      if (this.hideDelayTimer) this.stopHideInterval();

      this.hideDelayTimer = setInterval(this.hideFunctions, 300);
    },
    stopHideInterval() {
      if (this.hideDelayTimer) {
        clearInterval(this.hideDelayTimer);
        this.hideDelayTimer = "";
      }
    },
    show() {
      this.level = 99;
      this.opacity = 1;
      this.stopHideInterval();
      this.startShowInterval();
    },
    hide() {
      this.level = -1;
      this.opacity = 0;
      this.startHideInterval();
    },
    showEditSuccess(msg) {
      this.bg = this.editSuccessBgImg;
      this.message = msg ? msg : "修改成功";
      this.show();
    },
    showLock() {
      this.bg = this.lockedImg;
      this.message = "该账号已锁定";
      this.show();
    },
    showUnlock() {
      this.bg = this.unlockImg;
      this.message = "该账号已解锁";
      this.show();
    },
  },
};
