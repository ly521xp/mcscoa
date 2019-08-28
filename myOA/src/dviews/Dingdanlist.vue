<template>
  <div class="container">
    <h2>订单列表</h2>
    <div class="btn">
      <el-input v-model="search" placeholder="根据收件人搜索" class="ipt"></el-input>
    </div>
    <div>
      <el-table :data="asd" border style="width: 100%">
        <el-table-column prop="no" label="订单ID"></el-table-column>
        <el-table-column prop="isPayed" label="支付状态">
          <template slot-scope="scope">{{scope.row.isPayed|isPay}}</template>
        </el-table-column>
        <el-table-column prop="price" label="订单金额"></el-table-column>
        <el-table-column prop="regions" label="地区"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="receiver" label="收件人"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="del(scope.row._id)" type="text" size="small">删除</el-button>
            <el-button @click="find(scope.row._id)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="500"
        @current-change="current_change"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import api from "../api/d_api";
export default {
  name: "dingdanlist",
  inject: ["reload"],
  data() {
    return {
      input: "",
      checked: true,
      tableData: [],
      search: ""
    };
  },
  methods: {
    //查看订单信息
    find(id) {
      this.$router.push("/dindandetail/" + id);
    },
    //删除订单
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          api.ddel(id).then(res => {
            //console.log(res);
            this.reload();
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //分页
    current_change: function(currentPage) {
      this.currentPage = currentPage;
      //console.log(11);
      let params = {
        page: this.currentPage
      };
      // console.log(this.currentPage);
      api.dlist(params).then(res => {
        this.tableData = res.orders;
        //console.log(res.products);
      });
    }
    //搜索
    // btn() {
    //   //console.log(11);
    //   var search = this.search;
    //   console.log(this.search);
    //   // if (search != "") {
    //   this.searchData = this.tableData.filter(
    //     v => v.receiver.indexOf(search) != -1
    //   );
    //   this.tableData = this.searchData;
    //   console.log(this.searchData);
    //   //console.log(this.search);
    //   // } else {
    //   // }
    // }
  },
  filters: {
    isPay(is) {
      return is ? "成功" : "未支付";
    }
    // issearch: function(item) {
    //   return (item = this.tableData.filter(
    //     v => v.receiver.indexOf(search) > -1
    //   ));
    // }
  },
  computed: {
    asd() {
      let arrs = this.tableData.filter(
        v => v.receiver.indexOf(this.search) != -1
      );
      return arrs;
    }
  },
  mounted() {
    api.dlist().then(res => {
      //console.log(res.orders);
      this.tableData = res.orders;
    });
  }
};
</script>

<style>
.btn {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
}
.ipt {
  width: 50%;
  margin-right: 10px;
}
</style>
