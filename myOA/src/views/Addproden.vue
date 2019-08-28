<template>
  <div>
    <h2>添加用户</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="formLabelAlign.nname"></el-input>
      </el-form-item>

      <el-form-item label="头像">
        <el-upload
          action="http://api.cat-shop.penkuoer.com/api/v1/common/file_upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "addproden",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        uname: "",
        password: "",
        nname: ""
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    add() {
      let params = {
        userName: this.formLabelAlign.uname,
        password: this.formLabelAlign.password,
        nickName: this.formLabelAlign.nname,
        avatar: this.dialogImageUrl
      };
      api.addproden(params).then(res => {
        // console.log(res);
      });
      this.$router.push("/proden");
    }
  }
};
</script>

<style>
</style>
