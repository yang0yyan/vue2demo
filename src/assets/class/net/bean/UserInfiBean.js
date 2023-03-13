export class UserInfiBean {
  #password = "";
  #username = "";

  constructor() {}

  setPassword(password) {
    this.#password = password;
  }
  getPassword() {
    return this.#password;
  }
  setUsername(username) {
    this.#username = username;
  }
  getUsername() {
    return this.#username;
  }
}
