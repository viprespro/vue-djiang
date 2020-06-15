/**
 * zhangbin
 * zhangbin-dc@139.com
 * 文档操作api：上传、下载，加水印，文件类型转换等...
 **/

/**
 * zhangbin
 * zhangbin-dc@139.com
 * 审核流程 公用api
 */

import httpService from '@/lib/ajax'

// import ersEnv from '../../../.aid/envs/ers.env'
// const prefix = ersEnv.envs[1].name || '';

// 文件下载请求
export function fileDownloadApi(url, data) {
  return new Promise((resolve, reject) => {
    httpService.$cloud.get(url, {
      params: data,
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      if (res.status == 200) {
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export function fileDownloadPostApi(url, data) {
  return new Promise((resolve, reject) => {
    httpService.$cloud.post(url, data, {
      responseType: 'blob',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
        responseType: 'arraybuffer'
      }
    }).then(res => {
      if (res.status == 200) {
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

/* export function exportPositionAdjustmentPersonInfo(data) {
    return httpService.$cloud.post('ers/eps/adjust/exportToExcel', data, {
        // 设置响应类型为  arraybuffer
        responseType: 'arraybuffer',
    })
}

let blob = new Blob([res.data], { type: 'octets/stream' })
let link = document.createElement('a')
link.href = window.URL.createObjectURL(blob)
//配置下载的文件名
link.download =  '职级调整名单' + '.xls'
link.click() */

// 创建下载
export function getDownload (data, filename, that) {
    // console.log('data, filename--->', data, filename)
  if (!data) {
    return
  }

  //responseType:blob时对于后台报错信息的捕获兼容
  let fileReader = new FileReader();
  fileReader.onload = function() {
      try {
          let jsonData = JSON.parse(this.result);
          if (jsonData.code) {
              // 说明是普通对象数据，后台转换失败
              console.log('not ok');
              that.resNotice.danger(that,'错误',jsonData.message);
          }
      } catch (err) {
          // 解析成对象失败，说明是正常的文件流
          console.log('ok');
          let blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
          // let blob = new Blob([data])

          if ('download' in document.createElement('a')) {
              let url = window.URL.createObjectURL(blob)
              let link = document.createElement('a')
              link.style.display = 'none'
              link.href = url
              link.setAttribute('download', filename ? filename + '.xlsx' : new Date().getTime() + '.xlsx')
              document.body.appendChild(link)
              link.click()
              // 释放这个临时的对象url
              URL.revokeObjectURL(url)
          } else {
              window.navigator.msSaveBlob(blob, filename ? filename + '.xlsx' : new Date().getTime() + '.xlsx')
          }
      }
  };
  fileReader.readAsText(data);
}

export function downloadFile(data, conditions) {
  try {
    let blob = new Blob([data], { type: 'octets/stream' })

    if ('download' in document.createElement('a')) {
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = window.URL.createObjectURL(blob)
      // 配置下载的文件名
      link.download = conditions.fileName ? conditions.fileName : 'excel.xls'
      document.body.appendChild(link)
      link.click()
      window.URL.revokeObjectURL(link.href)

      // 调用下载成功的回调 : dateFormat(new Date(), 'yyyymmddhhiiss' + '.xls'))
      if (conditions.okCallback instanceof Function) conditions.okCallback()
    } else {
      window.navigator.msSaveBlob(blob, conditions.fileName ? conditions.fileName : 'excel.xls')
    }
  } catch (e) {
    console.error('下载文件出错', e)
    // 调用下载失败的回调
    if (conditions.errorCallback instanceof Function) conditions.errorCallback()
  }
}

