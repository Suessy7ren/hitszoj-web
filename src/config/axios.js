import axios from "axios";

const service = axios.create({
    baseURL: 'http://47.97.202.211:16667',
    timeout: 5000
})

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log('request-error: ' + error); //for debug
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (!response.data.success) {
        // 将错误通过自定义消息告知用户
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.log('response-error: ' + error); //for debug
    return Promise.reject(error);
});

export default service;