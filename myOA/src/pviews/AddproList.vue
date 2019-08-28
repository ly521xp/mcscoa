<template>
  <div>
    <h2>商品分类</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="商品简介">
        <el-input v-model="formLabelAlign.descriptions"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-input v-model="formLabelAlign.coverImg"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="label" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../api/p_api";
export default {
  name: "addprolist",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        descriptions: "",
        coverImg: ""
      },
      options: [
        {
          value: "美莱@箱包",
          label: "美莱@箱包"
        },
        {
          value: "美莱@电脑",
          label: "美莱@电脑"
        },
        {
          value: "美莱@家电",
          label: "美莱@家电"
        },
        {
          value: "美莱@家具",
          label: "美莱@家具"
        },
        {
          value: "美莱@数码",
          label: "美莱@数码"
        },
        {
          value: "美莱@衣服",
          label: "美莱@衣服"
        },
        {
          value: "美莱@其他",
          label: "美莱@其他"
        }
      ],
      value: "",
      label: ""
    };
  },
  methods: {
    add() {
      let params = {
        name: this.label,
        descriptions: this.formLabelAlign.descriptions,
        coverImg: this.formLabelAlign.coverImg
      };
      console.log(this.label);
      api.addfenproducts(params).then(res => {
        console.log(res);
        this.$router.push("/spfllb");
      });
    }
  }
};
</script>

<style scoped>
.el-input {
  width: 50%;
}
</style>
