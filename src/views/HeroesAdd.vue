<template>
  <form @submit.prevent="submit()" method="post" role="form">
    <legend>添加英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input v-model="heroesForm.hName" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input v-model="heroesForm.hGender" type="radio" name="gender" value="男" /> 男
        <input v-model="heroesForm.hGender" type="radio" name="gender" value="女" /> 女
      </div>
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
  </form>
</template>

<script>
// 导入axios,已经在main里设置原型

export default {
  data() {
    return {
      heroesForm: {
        hName: "",
        hGender: "男"
      }
    };
  },
  methods: {
    submit() {
      this.$http
        .post("/heroes", {
          cTime: new Date(),
          ...this.heroesForm
        })
        .then(() => {
          //   编程式导航（跳转）
          this.$router.push("/heroes");
        })
        .catch(() => {
          alert("添加失败");
        });
    }
  }
};
</script>

<style>
</style>