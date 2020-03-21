<template>
  <form @submit.prevent="update()">
    <legend>编辑英雄</legend>
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
    <button type="submit" class="btn btn-success">修改</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      heroesForm: {
        hName: "",
        hGender: ""
      }
    };
  },
  created() {
    this.getHeroes();
  },
  methods: {
    // 提交修改
    update() {
      const id = this.$route.params.id;
      this.$http
        .patch(`/heroes/${id}`, this.heroesForm)
        .then(() => {
          // 修改成功  跳转到列表
          this.$router.push("/heroes");
        })
        .catch(() => {
          alert("修改失败");
        });
    },
    // 获取单个数据英雄，并回填
    getHeroes() {
      const id = this.$route.params.id;
      this.$http.get(`/heroes/${id}`).then(res => {
        this.heroesForm.hName = res.data.hName;
        this.heroesForm.hGender = res.data.hGender;
      });
    }
  }
};
</script>

<style>
</style>