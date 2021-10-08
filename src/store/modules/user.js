// eslint-disable-next-line no-unused-vars
import loginPwd, {getUserInfo, loginAccount, logout} from "../../api/auth/user";
import PasswordService from "../../api/auth/password";
import {removeLocalToken, setLocalToken} from "../../utils/token";
import ResponseExtractor from "../../utils/response-extractor";
import {filterAsyncRoutes} from "../../api/auth/permission";
import router, {asyncRoutes, defaultRoutes} from "../../router";

const user = {
    namespaced: true,

    state: {
        account: '',
        username: '',
        role: null,
        permittedRouteList: [],
        avatarPath: '',
    },

    mutations: {
        SET_USERNAME: (state, username) => {
            state.username = username;
        },
        REMOVE_USERNAME: (state) => {
            state.username = null;
        },
        SET_ACCOUNT: (state, account) => {
            state.account = account;
        },
        REMOVE_ACCOUNT: (state) => {
            state.account = null;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        REMOVE_TOKEN: (state) => {
            state.token = null;
        },
        SET_ROLE: (state, role) => {
            state.role = role;
        },
        REMOVE_ROLE: (state) => {
            state.role = null;
        },
        SET_ROUTE_LIST: (state, permittedRouteList) => {
            state.permittedRouteList = permittedRouteList;
        },
        REMOVE_ROUTE_LIST: (state) => {
            state.permittedRouteList = [];
        },
        SET_AVATAR: (state, avatarPath) => {
            state.avatarPath = avatarPath;
        },
        REMOVE_AVATAR: (state) => {
            state.avatarPath = null;
        },
    },

    actions: {
        userLogin({commit}, user) {
            return new Promise((resolve, reject) => {
                loginAccount(user.account).then(resp => {
                    commit('SET_ACCOUNT', user.account);
                    const data = ResponseExtractor.getData(resp);
                    const id = data.id;
                    const random = data.random;
                    console.log('accountfinished')
                    loginPwd(id, PasswordService.encryptPassword(user.password, random)).then(resp => {
                        const data = ResponseExtractor.getData(resp);
                        setLocalToken(data);
                        resolve();
                    }).catch(error => {
                        reject(error);
                    })
                }).catch(error => {
                    reject(error);
                })
            })
        },
        userLogout({commit}) {
            return new Promise((resolve, reject) => {
                logout().then(() => {
                    commit('REMOVE_ACCOUNT');
                    commit('REMOVE_USERNAME');
                    commit('REMOVE_ROLE');
                    commit('REMOVE_ROUTE_LIST');
                    removeLocalToken();
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        getInfo({commit}) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(resp => {
                    const data = ResponseExtractor.getData(resp);
                    commit('SET_ACCOUNT', data.account);
                    commit('SET_ROLE', data.identity);
                    commit('SET_USERNAME', data.username);
                    commit('SET_AVATAR', data.avatarPath);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        generatePermittedRouteList({ commit }, roleType) {
            return new Promise(resolve => {
                const filteredRouteList = filterAsyncRoutes(asyncRoutes, roleType);
                const fullRouteList = defaultRoutes.concat(filteredRouteList);
                commit('SET_ROUTE_LIST', fullRouteList);
                router.addRoutes(filteredRouteList);
                resolve();
            })
        },
        resetToken() {
            return new Promise(resolve => {
                removeLocalToken();
                resolve();
            })
        }
    }
}

export default user;