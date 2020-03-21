<template>
  <div class="row">
    <div class="list-group">
      <router-link to="/heroes" class="list-group-item">英雄列表</router-link>
      <router-link to="/zb" class="list-group-item">装备列表</router-link>
      <router-link to="/jn" class="list-group-item">技能列表</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-aside"
};
</script>

<style>
</style>