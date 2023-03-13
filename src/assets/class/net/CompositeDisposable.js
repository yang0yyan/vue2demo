export class CompositeDisposable {
  constructor() {}

  setController(controller) {
    this.controller = controller;
  }

  add(axios, observer) {
    observer.onStart();
    axios
      .then((res) => {
        observer.onNext(res);
        observer.onComplete();
      })
      .catch((e) => {
        observer.onError(e);
        observer.onComplete();
      });
  }

  dispose() {
    this.controller.abort();
  }
}
