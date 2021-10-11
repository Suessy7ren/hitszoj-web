import request from "@/utils/request";
//该文件用于前端向后端发送数据


export function sendFiledata2Backend(data) {
  return request({
    //url 接口，请根据实际修改网址
    url: 'files/uploadFile',
    method: 'post',
    data

  })
}