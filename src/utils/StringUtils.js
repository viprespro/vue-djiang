export default {
  /**
   * 获取字符串字节长度
   * @param {*} str 字符串
   */
  getStringByteLen(str) {
    var length = 0;
    var reg = /[\u4e00-\u9fa5]/;
    for (var i = 0; i < str.length; i++) {
      if (reg.test(str.charAt(i))) {
        length += 2;
      } else {
        length++;
      }
    }
    return length;
  }
};
