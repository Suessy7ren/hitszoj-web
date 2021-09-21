import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'


Vue.config.productionTip = false

/* 自定义全局消息组件 */
import GlobalMessage from "./components/GlobalMsgbar/api";
Vue.prototype.$message = GlobalMessage;

/* Ant-Design文件上传组件 */
import { Upload } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Upload);

/* Markdown编辑器组件 */
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
