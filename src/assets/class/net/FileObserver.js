import { BaseObserver } from "./BaseObserver";

export class FileObserver extends BaseObserver {
  constructor(baseView, fileName, success, error) {
    super(baseView, success, error);
    this.fileName = fileName;
  }

  // @Override 重写父类方法
  onStart() {
    // super.onStart(); //执行父类方法
    if (this.baseView !== undefined) {
      this.baseView.showProgress();
    }
  }

  // @Override 重写父类方法
  onNext(o) {
    if (o.data.type === "application/json") {
      const file = new FileReader();
      file.readAsText(o.data, "utf-8");
      file.onload = () => {
        o.data = JSON.parse(file.result);
        super.onNext(o);
      };
    } else {
      if (!o.data.code) {
        this.downloadFlieBlob(o, this.fileName);
        this.success();
      } else {
        super.onNext(o);
      }
    }
  }

  // @Override 重写父类方法
  onComplete() {
    // super.onComplete();
    if (this.baseView !== undefined) {
      this.baseView.hideProgress();
    }
  }

  downloadFlieBlob(data, fileName) {
    // const blob = new Blob([data.data]);
    let blob = data.data;
    var a = document.createElement("a");
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(a);
    a.click();
    body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
