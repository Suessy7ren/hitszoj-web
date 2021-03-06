# hitszoj-web
> 每次 commit 的时候不要勾选 `package-lock.json`

## 1. 项目结构
```
└─src
    ├─api            // 请求、功能封装
    ├─assets         // 静态素材如logo等
    ├─components     // 存放封装好的通用组件
    ├─config         // 配置文件
    ├─plugins        // 一般不动
    ├─router         // 存放路由表
    ├─scss           // 存放全局SCSS变量配置，会被Vuetify自动识别
    ├─store          // 全局状态相关
    │  └─modules
    └─views          // 界面和视图
        ├─admin
        ├─common
        ├─stu
        └─teacher
```



## 2. 模块

### 2.1 网络请求收发

所有向服务端发送的 HTTP 请求必须使用已经封装好的 `HttpService` 来发送，其中已经配置好请求和响应的拦截器（用于进行异常处理和信息提示），具体配置项代码见 `@/config/axios.js`

```javascript
import HttpService from "@/config/axios";
HttpService({
  url: 'http://localhost....',
  method: 'get',
  data: {
    ...
  }
})
```

从后端服务器提取响应体数据，统一用 `ResponseExtractor`，以屏蔽响应体结构和提取操作的具体细节，方便日后维护

```javascript
import ResponseExtractor from "@/utils/response-extractor";
ResponseExtractor.getCode(resp);
ResponseExtractor.getData(resp);
ResponseExtractor.getMsg(resp);
ResponseExtractor.isSuccessful(resp);
```



### 2.2 登录与用户权限

#### 整体思路

1. 登录分两次请求，第一次验用户名，第二次验密码
2. 登录成功后，再发请求拉取用户信息
3. 根据拉取到的用户信息生成路由表，加到 Vue Router 中

#### 关于 Token

考虑到全局状态在页面每次被手动刷新都会丢失，目前从服务端取到的 token 都是放在浏览器的 `localStorage` 中，没有使用 vuex 的全局状态存放，存取 token 的方法都放在 `@/utils/token.js` 中

#### 修改密码

用户界面已完成，与后端联调未完成，待补充

### 2.3 七牛云上传

目前暂时是使用 Ant Design Vue 的文件上传组件配合七牛云的上传地址和上传凭证实现上传的功能

#### 文件上传

根据七牛云的官方文档，上传文件需要填写上传地址并给出上传凭证，其中上传地址是固定的 URL，上传凭证则需要根据 `accessKey` 和 `secretKey` 加以当前时间戳来动态生成，这部分代码目前写在前端，位于 `@/utils/upload-token-generator.js` ，后面需要迁移到后端

#### 头像上传

将头像上传对话框单独封装成了组件 `AvatarUpload.vue`，用户操作流程：

1. 用户选择图片
2. 对图片限定 1:1 的比例进行裁剪
3. 点击确定，上传到七牛云


### 2.4 全局消息提示

自定义组件 `GlobalMsgbar` 已在 `main.js` 中绑定了原型 `Vue.prototype.message`，所以在形如 `xxx.Vue` 这种组件内可以直接通过 `this.$message` 来调用全局消息提示

```javascript
this.$message.success('msg');
this.$message.info('msg');
this.$message.warning('msg');
this.$message.error('msg');
```

但若是在非 Vue 组件（如外置的 js 脚本中）内，则需要使用如下方法

```javascript
import GlobalMessage from "@/components/GlobalMsgbar/api";
GlobalMessage.success('This is a success message');
```

## 3.样式

### 阴影重置

鉴于 Vuetify 的阴影设计太丑（指各级 `elevation` 的预设阴影值），我修改了从 `elevation-0` 到 `elevation-4` 的样式，而 `elevation-5` 及以上的阴影效果都与 `elevation-4` 相同。换句话说，现在只有 5 种阴影层级样式，示例已经放在测试页面.

### 文章展示页

使用了 `marked.js` 将 Markdown 格式数据渲染成 HTML 元素，然后用 `github-markdown-css` 进行样式渲染

代码高亮和数学公式部分尚未完成，待补充

## 4.其他

### 4.1 示例页面

点击导航栏的“测试页面”项可进入测试页面，所有自定义组件或样式实例都在该页面

### 4.2 Icons

使用方法：

1.访问 [https://materialdesignicons.com/](https://materialdesignicons.com/)

2.找到希望使用的图标名，如 `account`

3.带上 `mdi-` 前缀，插入以下标签
```
<v-icon>mdi-account</v-icon>
```
