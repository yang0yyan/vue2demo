/**
 * 弹出信息提示，在短暂的时间停留后显示，只用于展示信息，用户无法进行交互
 * 建设中，未来可以方便使用
 */

export class Toast {
  static LENGTH_SHORT = 0;
  static LENGTH_LONG = 1;

  mDuration;
  mText;

  constructor() {}

  static makeText(text = "", duration = this.LENGTH_SHORT) {
    console.log(text, duration);
    let result = new Toast();
    result.mText = text;
    result.mDuration = duration;
    return result;
  }

  show() {
    if (!this.mText) {
      console.log("You must either set a text or a view");
      return;
    }
  }

  // private static Context context;
  // private static Activity activity;

  // public static void init(Context context) {
  //     ToastUtil.context = context;
  // }
  // public static void init(Activity activity) {
  //     ToastUtil.activity = activity;
  // }

  // public static void showToast(String msg) {
  //     Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
  // }
  // public static void showToastAsync(String msg) {
  //     activity.runOnUiThread(new Runnable() {
  //         @Override
  //         public void run() {
  //             Toast.makeText(activity, msg, Toast.LENGTH_SHORT).show();
  //         }
  //     });
  // }
}
