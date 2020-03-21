// 1、导入
import VueRouter from 'vue-router'
//2、 注册路由
import Vue from 'vue'

Vue.use(VueRouter)

// 侧边栏的路由组件
import HeroesList from './views/HeroesList.vue'
import ZbList from './views/ZbList.vue'
import JnList from './views/JnList.vue'
// 添加英雄路由
import HeroesAdd from './views/HeroesAdd.vue'
// 编辑英雄
import HeroesEdit from './views/HeroesEdit.vue'
// 路由规则
const routes = [
    { path: '/', redirect: '/heroes' },
    { path: '/heroes', component: HeroesList },
    { path: '/heroes/add', component: HeroesAdd },
    { path: '/heroes/edit/:id', component: HeroesEdit },
    { path: '/zb', component: ZbList },
    { path: '/jn', component: JnList },


];
// 初始化路由
const router = new VueRouter({ routes, linkExactActiveClass: 'active' })
export default router;