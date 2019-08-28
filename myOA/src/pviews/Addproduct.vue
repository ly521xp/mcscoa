<template>
  <div>
    <h2>添加商品</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="商品名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="商品ID">
        <el-input v-model="formLabelAlign.productCategory"></el-input>
      </el-form-item>-->
      <el-form-item label="商品简介">
        <el-input v-model="formLabelAlign.descriptions"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="formLabelAlign.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="formLabelAlign.quantity"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-input v-model="formLabelAlign.coverImg"></el-input>
      </el-form-item>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item._id" :label="item.name" :value="item.name"></el-option>
      </el-select>
      <el-form-item>
        <el-button type="primary" @click="add()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../api/p_api";
export default {
  name: "addproduct",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        descriptions: "",
        quantity: "",
        price: "",
        coverImg: ""
      },
      options: [],
      name: [],
      value: []
    };
  },
  methods: {
    add() {
      let params = {
        name: this.formLabelAlign.name,
        descriptions: this.formLabelAlign.descriptions,
        quantity: this.formLabelAlign.quantity,
        price: this.formLabelAlign.price,
        coverImg: this.formLabelAlign.coverImg
      };
      api.addproducts(params).then(res => {
        console.log(res);
        this.$router.push("/product");
      });
    }
  },
  mounted() {
    api.fenproducts().then(res => {
      this.name = res.categories.filter(v => v.name.indexOf("美莱@") != -1);
      this.options = this.name;
      console.log(this.options);
    });
  }
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
