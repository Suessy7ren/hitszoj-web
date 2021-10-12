import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'


Vue.config.productionTip = false

import GlobalMessage from "./components/GlobalMsgbar/api";
Vue.prototype.$message = GlobalMessage;

/* Ant-Design文件上传组件 */
import { Upload } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
/*引入antd的按钮组件 */
import Button from 'ant-design-vue/lib/button';
/*引入antd的Space */
import Space from 'ant-design-vue/lib/space';
import Progress from 'ant-design-vue/lib/progress';
Vue.use(Upload);
Vue.use(Button);
Vue.use(Space)
Vue.use(Progress)


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
