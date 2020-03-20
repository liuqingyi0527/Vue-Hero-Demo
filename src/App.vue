<template>
  <!-- 相当于组件配置对象中的 template, 书写组件html结构的 -->
  <!-- 必须有一个根元素 -->
  <div id="app" class="container">
    <!-- 导航组件 大小写都可以-->
    <nav-bar></nav-bar>
    <!-- 侧边栏 -->
    <div class="col-md-2">
      <!-- 侧边栏组件 -->
      <my-aside></my-aside>
    </div>
    <div class="col-md-10">
      <!-- 路由对应组件显示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import MyAside from "./components/MyAside";
// 除去组件的template外，如果组件还有其他配置选项，就需要导出去
export default {
  // 组件名称
  name: "App",
  // 注册局部组件
  components: { NavBar, MyAside }
};
</script>
<style>
/* 写样式 */
</style>