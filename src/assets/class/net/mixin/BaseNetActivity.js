import { LoadingManager } from "@/assets/class/utils/LoadingManager";

export default {
  name: "test",
  data() {
    return {
      mPresenter: null,
      view: null,
      loading: null,

      loadingCount: 0,
      messageShowTime: 0,

      showDialog: false,
      showSelfDialog: false,
    };
  },
  mounted() {},
  created() {
    this.mPresenter = this.createPresenter(); // 调用上级初始化
    this.view.baseView(
      this.showLoading,
      this.hideLoading,
      this.showError,
      this.showSuccess,
      this.onErrorCode,
      this.showProgress,
      this.hideProgress,
      this.onProgress
    ); // 设置响应回调

    this.loading = new LoadingManager();
    this.loading.setSelfDialog(this.$options.name);
  },
  beforeDestroy() {
    if (this.mPresenter != null) {
      this.mPresenter.detachView();
    }
  },
  methods: {
    showLoading() {
      if (!this.showDialog) return;
      if (this.showSelfDialog) {
        this.loading.showLoading();
      } else {
        LoadingManager.getInstance().showLoading();
      }
    },
    hideLoading() {
      if (!this.showDialog) return;
      if (this.showSelfDialog) {
        this.loading.hideLoading();
      } else {
        LoadingManager.getInstance().hideLoading();
      }
    },
    showError(msg) {
      let currentTime = new Date().getTime();
      // 两秒内最多显示一条错误信息
      if (currentTime - this.messageShowTime > 2000) {
        this.messageShowTime = currentTime;
        this.$message.warning(msg);
        // this.$mytoast.showEditSuccess(msg);
      }
    },
    showSuccess(msg) {
      let currentTime = new Date().getTime();
      // 两秒内最多显示一条错误信息
      if (currentTime - this.messageShowTime > 2000) {
        this.messageShowTime = currentTime;
        this.$message.success(msg);
        // this.$mytoast.showEditSuccess(msg);
      }
    },
    onErrorCode() {},
    showProgress() {
      // this.$mytoast.showEditSuccess();
    },
    hideProgress() {
      // this.$mytoast.hide();
    },
    onProgress() {},

    setDialogOption(show = false, showSelf = false) {
      this.showDialog = show;
      this.showSelfDialog = showSelf;
    },
  },
};
