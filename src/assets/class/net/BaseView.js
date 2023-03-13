export class BaseView {
  baseView(...fs) {
    this.pushFunction(fs);
  }

  pushFunction(fs) {
    fs.forEach((f) => {
      let name = this.getFunctionName(f);
      if (name) this[name] = f;
    });
  }

  getFunctionName(f) {
    if (f instanceof Function) {
      let name = f.name;
      let names = name.split(" ");
      return names[1];
    } else {
      return "";
    }
  }
}
