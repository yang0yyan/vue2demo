export class Api {
  constructor() {
    this.httpsUrlCetc = "https://api.openai.com";
  }

  models(model) {
    let config = this.#get();
    config.url = model ? `/v1/models/${model}` : "/v1/models";
    config.headers["OpenAI-Organization"] = "org-ia44hDT0ek7bdLFoLTykJ4D0";
    return config;
  }

  /**
   * model
   * prompt
   * suffix
   * max_tokens
   * temperature
   * top_p
   * n
   * stream
   * logprobs
   * echo
   * stop
   * presence_penalty
   * frequency_penalty
   * best_of
   * logit_bias
   * user
   * @param {*} data
   * @returns
   */
  completions(data) {
    let config = this.#post(data);
    config.url = "/v1/chat/completions";
    config.headers["Content-Type"] = "application/json";
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
