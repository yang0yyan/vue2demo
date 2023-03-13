export class Api {
  static httpsUrlCetc = "/service-Ccteg";
  static httpFastDFS = "/integratedYq/fastdfs";
  static sso_service = "/integratedYq/service-login";
  static BUSINESS_SERVICES = "/integratedYq/jsIntegratedClosedLoop";
  static SERVICE_USER_OPEN = "/integratedYq/serviceUserOpen";

  constructor() {
    this.httpsUrlCetc = "/service-Ccteg";
  }

  /**
   * post请求
   * @param {Object} data
   * @returns Object
   */
  addCategory(data) {
    let config = this.#get(data);
    config.url = "/api/v1/todo/newreport/query";
    return config;
  }

  // 获取验证码
  mathCaptcha() {
    let config = this.#get();
    config.baseURL = Api.sso_service;
    config.headers.noToken = true; // 不传token请求
    config.url = "/api/v1/math/captcha";
    return config;
  }

  login(data) {
    let config = this.#post(data);
    config.baseURL = Api.sso_service;
    config.headers.noToken = true;
    config.url = "/api/v1/login";
    return config;
  }

  userInfo() {
    let config = this.#get();
    config.baseURL = Api.sso_service;
    config.url = "/api/v1/user";
    return config;
  }

  userRouter() {
    let config = this.#post();
    config.baseURL = Api.sso_service;
    config.url = "/api/v1/function/tree";
    return config;
  }

  #get(data) {
    let config = this.#configData();
    config.method = "GET";
    data && (config.params = data);
    return config;
  }

  #post(data) {
    let config = this.#configData();
    config.method = "POST";
    data && (config.data = data);
    return config;
  }

  /**
   *
   * @returns { url: "", method: "", baseURL: "", headers: {}, params: {}, data: {} }
   */
  #configData() {
    return {
      url: "",
      method: "",
      baseURL: this.httpsUrlCetc,
      headers: {},
      params: undefined, // query 传参
      data: undefined, // budy 传参
    };
  }
}

export class Builder {
  constructor() {}
}
