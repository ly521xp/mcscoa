<template>
  <div>
    <h2>修改用户信息</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.uname"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="formLabelAlign.pword"></el-input>
      </el-form-item>
      <el-form-item label="用户id">
        <el-input v-model="formLabelAlign.pid"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="formLabelAlign.nname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="cha()">提交</el-button>
        <el-button @click="retList()">返回列表</el-button>
        <el-button type="primary" @click="resFind()">查看信息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "ChanProduct",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        uname: "",
        pword: "",
        pid: "",
        nname: ""
      }
    };
  },
  methods: {
    //返回
    retList() {
      this.$router.push("/proden");
    },
    resFind() {
      let id = this.$route.params.id;
      this.$router.push("/fendproden/" + id);
    },
    //修改
    cha() {
      let id = this.$route.params.id;
      let params = {
        userName: this.formLabelAlign.uname,
        nickName: this.formLabelAlign.nname
      };

      api.change(params, id).then(res => {
        //console.log(res);
        this.value = this.formLabelAlign.uname;
        this.$router.push("/proden");
      });
      this.$message({
        type: "success",
        message: "修改成功!"
      });
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
    });
  }
};
</script>

<style scope>
.el-input {
  width: 50%;
}
</style>
