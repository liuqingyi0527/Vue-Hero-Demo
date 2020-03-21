<template>
  <div class="list-container">
    <router-link to="/heroes/add" class="btn btn-primary">添加英雄</router-link>
    <hr />
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>英雄名称</th>
          <th>英雄性别</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.hName}}</td>
          <td>{{item.hGender}}</td>
          <td>{{item.cTime|formaTime}}</td>
          <td>
            <!-- 点击编辑按钮 -->
            <router-link :to="'/heroes/edit/'+item.id" class="btn btn-success">编辑</router-link>&nbsp;
            <button class="btn btn-danger" @click="delHeroes(item.id)">删除</button>
          </td>
        </tr>
        <tr v-if="list.length===0">
          <td colspan="5">暂无数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 导入axios(在main里加原型的方法替换成$http)

// 导入时间处理的moment
import moment from "moment";
export default {
  data() {
    return { list: [] };
  },
  created() {
    this.getList();
  },
  // 过滤器
  filters: {
    formaTime(value) {
      return moment(value).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
    // 删除英雄按钮
    delHeroes(id) {
      if (confirm("是否删除英雄")) {
        this.$http
          .delete(`/heroes/${id}`)
          .then(() => {
            this.getList();
          })
          .catch(() => {
            alert("删除失败");
          });
      }
    },
    getList() {
      this.$http.get("/heroes").then(res => {
        this.list = res.data;

        // console.log(this.list);
      });
    }
  }
};
</script>

<style>
</style>