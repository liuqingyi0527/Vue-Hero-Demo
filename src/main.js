// 导入vue核心代码
import Vue from 'vue'
// 导入APP组件配置对象
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
// 侧边栏的组件
import HeroesList from './views/HeroesList.vue'
import ZbList from './views/ZbList.vue'
import JnList from './views/JnList.vue'
// 注册路由
Vue.use(VueRouter)
// 是否开启产品（上线）级别的提示
Vue.config.productionTip = false;
// 路由规则
const routes = [
  { path: '/', redirect: '/heroes' },
  { path: '/heroes', component: HeroesList },
  { path: '/zb', component: ZbList },
  { path: '/jn', component: JnList }
]
// 初始化路由
const router = new VueRouter({ routes })
// 创建根实例
new Vue({
  // 解析APP组件的内容
  render: h => h(App),
  router
}).$mount('#app')
// 把reader函数解析的APP组件的内容，渲染到  #app容器上
// #app容器 index.html中