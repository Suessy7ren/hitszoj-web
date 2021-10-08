import HttpService from "../../config/axios";

/**
 * 发送第一次登录请求
 * @param account 账户名
 * @returns {AxiosPromise}
 */
export function loginAccount(account) {
    return HttpService({
        url: '/usr/loginAccount',
        method: 'post',
        data: {
            account
        },
    })
}

/**
 * 发送第二次登录请求
 * @param id 用户id
 * @param encryptedPassword 加密处理后的密码
 * @returns {AxiosPromise}
 */
export default function loginPwd(id, encryptedPassword) {
    return HttpService({
        url: '/usr/loginPwd',
        method: 'post',
        data: {
            id: id,
            password: encryptedPassword
        }
    })
}

/**
 * 发送登出请求
 * @returns {AxiosPromise}
 */
export function logout() {
    return HttpService({
        url: '/usr/logout',
        method: 'post'
    })
}

/**
 * 拉取用户信息
 * @returns {AxiosPromise}
 */
export function getUserInfo() {
    return HttpService({
        url: '/usr/getUserInfo',
        method: 'get',
    })
}

/**
 * 判断当前全局状态中是否有用户的全局信息
 * @param user 传入vuex中的user对象
 * @returns {boolean}
 */
export function hasCompleteInfo(user) {
    if (!user.account || !user.username || !user.role) return false;
    else return true;
}