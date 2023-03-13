import router from "@/router/index";
import { StorageManager } from "./StorageManager";

export class AuthManager {
  static authCheck(response) {
    if (response.response && response.response.data) {
      let auth = AuthManager.hasAuth(response.response.data);
      if (!auth) {
        AuthManager.logout();
      }
      return auth;
    }
    return true;
  }

  static hasAuth(data) {
    if ([401, 403, 405, 406].indexOf(data.code) > -1) {
      return false;
    }
    return true;
  }

  static logout() {
    StorageManager.remove(StorageManager.Key.USER_TOKEN);
    StorageManager.remove(StorageManager.Key.USER_ROUTER);
    StorageManager.remove(StorageManager.Key.USER_INFO);
    router.replace("/loginView");
  }
}
