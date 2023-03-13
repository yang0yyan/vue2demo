import { AuthManager } from "../utils/AuthManager";
import { Api } from "./Api";

export class OkHttpHolder {
  static #instance = null;
  #service = null;
  #api = null;

  constructor() {
    this.#initOkHttp();
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new OkHttpHolder();
    }
    return this.#instance;
  }

  #initOkHttp() {
    let axios = require("axios");

    this.#service = axios.create({
      timeout: 20000,
    });
    // 全局设置重试时长和重试间隔
    this.#service.defaults.retry = 0;
    this.#service.defaults.retryDelay = 1000;
    this.#setInterceptors();
    this.#api = new Api();
  }

  getService() {
    return this.#service;
  }

  getApi() {
    return this.#api;
  }

  #setInterceptors() {
    let thiz_ = this;
    // 添加请求拦截器
    this.#service.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        // config.headers["Business-Name"] = "CCTEG";
        if (!config.headers.noToken) {
          // 只要请求URL不是指向登录地址，那么统一在请求头中添加Token身份令牌
          config.headers["Authorization"] =
            "Bearer " + "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";
        }
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    this.#service.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        // 检查授权情况
        let auth = AuthManager.authCheck(error);
        if (auth) {
          // 重试失败的请求
          let obj = thiz_.postDelayRetry(error);
          if (obj) return obj;
        }
        return Promise.reject(error);
      }
    );
  }
  // 异步 重试失败的请求
  postDelayRetry(err) {
    var config = err.config;
    // 如果配置不存在或未设置重试选项，则拒绝
    if (!config || !config.retry) return null;

    // 设置变量以跟踪重试次数
    config.__retryCount = config.__retryCount || 0;

    // 判断是否超过总重试次数
    if (config.__retryCount >= config.retry) {
      // 返回错误并退出自动重试
      return null;
    }

    // 增加重试次数
    config.__retryCount += 1;

    //打印当前重试次数
    console.log(config.url + " 自动重试第" + config.__retryCount + "次");

    // 创建新的Promise
    var backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1);
    });

    // 返回重试请求
    return backoff.then(() => {
      return this.#service(config);
    });
  }
}
