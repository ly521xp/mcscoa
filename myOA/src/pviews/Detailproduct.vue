<template>
  <div>
    <h2>商品详情</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="商品名">
        <p>{{formLabelAlign.name}}</p>
      </el-form-item>
      <el-form-item label="商品价格">
        <p>{{formLabelAlign.price}}</p>
      </el-form-item>
      <el-form-item label="商品id">
        <p>{{formLabelAlign.p_id}}</p>
      </el-form-item>
      <el-form-item label="商品描述">
        <p>{{formLabelAlign.descriptions}}</p>
      </el-form-item>
      <el-form-item label="商品创建时间">
        <p>{{formLabelAlign.createdAt}}</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="retList()">返回列表</el-button>
        <el-button type="primary" @click="retun()">返回上一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../api/p_api";
export default {
  name: "detailproduct",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        price: "",
        p_id: "",
        descriptions: "",
        createdAt: ""
      }
    };
  },
  methods: {
    retList() {
      this.$router.push("/product");
    },
    retun() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let id = this.$route.params.id;
    api.findproducts(id).then(res => {
      //console.log(res);
      this.formLabelAlign.name = res.name;
      this.formLabelAlign.price = res.price;
      this.formLabelAlign.p_id = res._id;
      this.formLabelAlign.descriptions = res.descriptions;
      this.formLabelAlign.createdAt = res.createdAt;
    });
  }
};
</script>

<style>
</style>
