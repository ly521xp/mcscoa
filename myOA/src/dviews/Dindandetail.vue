<template>
  <div>
    <h2>订单详情</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="订单号">
        <p>{{formLabelAlign.no}}</p>
      </el-form-item>
      <el-form-item label="收件人">
        <p>{{formLabelAlign.receiver}}</p>
      </el-form-item>
      <el-form-item label="地址">
        <p>{{formLabelAlign.address}}</p>
      </el-form-item>
      <el-form-item label="地区">
        <p>{{formLabelAlign.regions}}</p>
      </el-form-item>
      <el-form-item label="订单金额">
        <p>{{formLabelAlign.price}}</p>
      </el-form-item>
      <el-form-item label="支付状态">
        <p>{{formLabelAlign.isPayed|isPay}}</p>
      </el-form-item>
      <el-form-item label="创建日期">
        <p>{{formLabelAlign.updatedAt}}</p>
      </el-form-item>
      <el-form-item label="用户ID">
        <p>{{formLabelAlign._id}}</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="retList()">返回列表</el-button>
        <el-button type="primary" @click="retun()">返回上一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../api/d_api";
export default {
  name: "dindandetail",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        no: "",
        receiver: "",
        address: "",
        regions: "",
        price: "",
        updatedAt: "",
        _id: "",
        isPayed: ""
      }
    };
  },
  filters: {
    isPay(is) {
      return is ? "成功" : "未支付";
    }
  },
  methods: {
    retList() {
      this.$router.push("/dingdanlist");
    },
    retun() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let id = this.$route.params.id;
    api.dfinddetail(id).then(res => {
      console.log(res);
      this.formLabelAlign.no = res.no;
      this.formLabelAlign.receiver = res.receiver;
      this.formLabelAlign.address = res.address;
      this.formLabelAlign.regions = res.regions;
      this.formLabelAlign.price = res.price;
      this.formLabelAlign.updatedAt = res.updatedAt;
      this.formLabelAlign._id = res._id;
      this.formLabelAlign.isPayed = res.isPayed;
    });
  }
};
</script>

<style scoped>
</style>
