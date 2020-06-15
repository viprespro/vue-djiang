
/**
 *    方法名                                 说明
 * isArray                          判断元素 o 是否为 Array
 * thousandPoints                   千分位
 * dateFormat                       时间格式化
 * formatData                       根据 rule 解析 d ,把 {key:1} 根据 [{id:1,desc:'是'}] 解析为 {key:1,KeyStr:'是'}
 */

export const resolveStream2File = (data, fileName) => {
  let blob = new Blob([data], { type: 'octets/stream' })

  if ('download' in document.createElement('a')) {
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = window.URL.createObjectURL(blob)
    // 配置下载的文件名
    link.download = fileName || dateFormat(new Date(), 'yyyymmddhhiiss' + '.xls')
    document.body.appendChild(link)
    link.click()
    window.URL.revokeObjectURL(link.href)
  } else {
    window.navigator.msSaveBlob(blob, fileName || dateFormat(new Date(), 'yyyymmddhhiiss' + '.xls'))
  }
}

/**
 * 判断元素 o 是否为 Array
 * @param o
 * @returns {boolean}
 */
export const isArray = (o) => {
  return Object.prototype.toString.call(o) === '[object Array]'
}

/**
 * 千分位
 * @param s
 * @param n
 * @returns {string}
 */
export const thousandPoints = (s, n = 2, e = '-') => {
  if (parseFloat(s) + '' === 'NaN') {
    return e
  }
  n = n >= 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  var l = s.split('.')[0].split('').reverse(),
    r = s.split('.')[1]
  var t = ''
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }

  var decimal = n === 0 ? '' : '.' + r
  return t.split('').reverse().join('') + decimal
}




/**
 * 获取 blob
 * @param  {String} url 目标文件地址
 * @return {Promise} 
 */
export function getBlob(url) {
  var eleLink = document.createElement('a');
    eleLink.download = '';
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    // var blob = new Blob([content]);
    eleLink.href = url;
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  // return new Promise((resolve,reject)=> {
  //     const xhr = new XMLHttpRequest();

  //     xhr.open('GET', url, true);
  //     xhr.responseType = 'blob';
  //     xhr.onload = () => {
  //       console.log(xhr)
  //         if (xhr.status === 200) {
  //             resolve(xhr.response);
  //         }
  //     };
  //     xhr.send();
  // });
}

/**
* 保存
* @param  {Blob} blob     
* @param  {String} filename 想要保存的文件名称
*/
export function saveAs(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename);
  } else {
      const link = document.createElement('a');
      const body = document.querySelector('body');

      link.href = window.URL.createObjectURL(blob);
      link.download = filename?filename:'excel.xls';

      // fix Firefox
      link.style.display = 'none';
      body.appendChild(link);
      
      link.click();
      body.removeChild(link);

      window.URL.revokeObjectURL(link.href);
  }
}

