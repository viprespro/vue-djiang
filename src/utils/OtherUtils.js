import appConfig from "@/resources/appConfig";

export default {
  /**
   * 线程睡眠,await this.$utils.sleep(3000)
   * @param {*} ms 睡眠毫秒数
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  /**
   * 代理路径处理
   * @param {*} url
   */
  getProxyUrl(url) {
    return (
      (process.env.NODE_ENV === "development"
        ? appConfig.devProxyUrl
        : appConfig.prodProxyUrl) + url
    );
  },
  /**
   * 返回失败承诺
   */
  PromiseReject(data) {
    return new Promise((resolve, reject) => {
      reject(data);
    });
  },
  /**
   * 返回成功承诺
   */
  PromiseResolve(data) {
    return new Promise(resolve => {
      resolve(data);
    });
  }
};
