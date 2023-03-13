export class UrlUtil {
  constructor() {}

  /**
   * 是否是链接
   * @param {String} url
   * @returns 符合链接格式返回true,反之false
   */
  static isUrl(url) {
    if (!url) return false;
    var regular =
      /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_*|!:,.;]+[-A-Za-z0-9+&@#/%=~_*|]$/i;
    return regular.test(url);
  }

  /**
   * 如果是链接，打开新的标签页并访问当前链接
   * @param {String} url
   */
  static jumpUrl(url) {
    if (UrlUtil.isUrl(url)) {
      window.open(url);
    }
  }
}
