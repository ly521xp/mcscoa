<template>
  <div>
    <h2>用户信息</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <p>{{formLabelAlign.uname}}</p>
      </el-form-item>
      <el-form-item label="用户密码">
        <p>{{formLabelAlign.pword}}</p>
      </el-form-item>
      <el-form-item label="用户id">
        <p>{{formLabelAlign.pid}}</p>
      </el-form-item>
      <el-form-item label="昵称">
        <p>{{formLabelAlign.nname}}</p>
      </el-form-item>
      <el-form-item label="创建时间">
        <p>{{formLabelAlign.createdAt}}</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="retList()">返回列表</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "fenproden",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        uname: "",
        pword: "",
        pid: "",
        nname: "",
        createdAt: ""
      }
    };
  },
  methods: {
    retList() {
      this.$router.push("/proden");
    }
  },
  mounted() {
    let id = this.$route.params.id;
    //console.log(this.$route);
    api.find(id).then(res => {
      //console.log(res);
      this.formLabelAlign.uname = res.userName;
      this.formLabelAlign.pword = res.password;
      this.formLabelAlign.pid = res._id;
      this.formLabelAlign.nname = res.nickName;
      this.formLabelAlign.createdAt = res.createdAt;
    });
  }
};
</script>

<style>
p {
  font-size: 20px;
}
</style>
