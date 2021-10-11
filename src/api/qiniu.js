import request from '@/utils/request'

export function getToken(fileName, account, path) {
  return request({
    url: 'files/getToken', // 假地址 自行替换
    method: 'get',
    params:{
      fileName:fileName,
      account: account,
      path: path
    }
  })
}

