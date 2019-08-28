<template>
  <div>
    <h2>修改商品信息</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="商品名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="商品简介">
        <el-input v-model="formLabelAlign.descriptions"></el-input>
      </el-form-item>
      <el-form-item label="商品id">
        <el-input v-model="formLabelAlign.p_id"></el-input>
      </el-form-item>
      <el-form-item label="商品库存">
        <el-input v-model="formLabelAlign.quantity"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="formLabelAlign.price"></el-input>
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
import api from "../api/p_api";
export default {
  name: "chanproduct",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        price: "",
        p_id: "",
        descriptions: "",
        updatedAt: "",
        quantity: ""
      }
    };
  },
  methods: {
    resFind() {
      let id = this.$route.params.id;
      this.$router.push("/detailproduct/" + id);
    },
    retList() {
      this.$router.push("/product");
    },
    cha() {
      let id = this.$route.params.id;
      let params = {
        name: this.formLabelAlign.name,
        price: this.formLabelAlign.price,
        p_id: this.formLabelAlign.p_id,
        descriptions: this.formLabelAlign.descriptions,
        updatedAt: this.formLabelAlign.updatedAt,
        quantity: this.formLabelAlign.quantity
      };
      api.changeproduct(params, id).then(res => {
        console.log(res);
        this.$router.push("/product");
      });
      this.$message({
        type: "success",
        message: "修改成功!"
      });
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
      this.formLabelAlign.updatedAt = res.updatedAt;
      this.formLabelAlign.quantity = res.quantity;
    });
  }
};
</script>

<style scoped>
.el-input {
  width: 50%;
}
</style>
