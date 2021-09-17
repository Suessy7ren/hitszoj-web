# hitszoj-web
> 每次 commit 的时候不要勾选 `package-lock.json`

## 项目结构
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

## API

### 全局消息提示

```javascript
this.$message.success('msg');
this.$message.info('msg');
this.$message.warning('msg');
this.$message.error('msg');
```

## 其他

### Icons

使用方法：

1.访问 [https://materialdesignicons.com/](https://materialdesignicons.com/)

2.找到希望使用的图标名，如 `account`

3.带上 `mdi-` 前缀，插入以下标签
```
<v-icon>mdi-account</v-icon>
```
