import { BaseObserver } from "../BaseObserver";
import { BasePresenter } from "../BasePresenter";

export class ChatGPTViewPresenter extends BasePresenter {
  constructor(baseView) {
    super(baseView);
  }

  models(model) {
    this.addDisposable(
      this.apiServer.models(model),
      new BaseObserver(
        this.baseView,
        function success(data) {
          if (data.object === "list") this.baseView.modelsSuccess(data.data);
          else this.baseView.modelSuccess(data.data);
        },
        function error(msg) {
          console.log(msg);
        }
      )
    );
  }

  completions(data) {
    this.addDisposable(
      this.apiServer.completions(data),
      new BaseObserver(
        this.baseView,
        function success(data) {
          console.log(data);
        },
        function error(msg) {
          console.log(msg);
        }
      )
    );
  }
}
