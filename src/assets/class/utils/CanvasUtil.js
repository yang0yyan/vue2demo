export class CanvasUtil {
  // 保存图片为png格式
  static savePng(id, name) {
    this.savePicture(id, "image/png", name);
  }

  // 保存图片为jpeg格式  (会出现黑色背景)
  static saveJpeg(id, name) {
    this.savePicture(id, "image/jpeg", name);
  }

  static savePicture(id, miniType, fileName) {
    var mycanvas = document.querySelector(id).children[0].children[0];
    var image = mycanvas.toDataURL(miniType);
    mycanvas = this.setupCanvas(mycanvas);
    var $a = document.createElement("a");
    $a.setAttribute("href", image);
    $a.setAttribute("download", fileName);
    $a.click();
  }

  // 解决canvas绘图不清晰的问题
  static setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    return canvas;
  }
}
