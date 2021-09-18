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

## 样式

### elevation 阴影重置

鉴于 Vuetify 的阴影设计太丑（指各级 `elevation` 的预设阴影值），我修改了从 `elevation-0` 到 `elevation-4` 的样式，而 `elevation-5` 及以上的阴影效果都与 `elevation-4` 相同。换句话说，现在只有 5 种阴影层级样式，示例已经放在测试页面.

## API

### 全局消息提示

```javascript
this.$message.success('msg');
this.$message.info('msg');
this.$message.warning('msg');
this.$message.error('msg');
```

## 其他

### 示例页面

点击导航栏的“测试页面”项可进入测试页面，所有自定义组件或样式实例都在该页面

### Icons

使用方法：

1.访问 [https://materialdesignicons.com/](https://materialdesignicons.com/)

2.找到希望使用的图标名，如 `account`

3.带上 `mdi-` 前缀，插入以下标签
```
<v-icon>mdi-account</v-icon>
```
