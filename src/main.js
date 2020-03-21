// 导入vue核心代码
import Vue from 'vue'
// 导入APP组件配置对象
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// 导入路由实例
import router from './router'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:3000'
Vue.prototype.$http = axios;
// 是否开启产品（上线）级别的提示
Vue.config.productionTip = false;


// 创建根实例
new Vue({
  // 解析APP组件的内容
  render: h => h(App),
  // 挂载路由实例
  router
}).$mount('#app')
// 把reader函数解析的APP组件的内容，渲染到  #app容器上
// #app容器 index.html中