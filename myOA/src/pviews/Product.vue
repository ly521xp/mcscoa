<template>
  <div class="container">
    <div class="btn">
      <el-input v-model="search" placeholder="根据商品名搜索" class="ipt"></el-input>
      <!-- <el-button type="primary" @click="btn()">搜索</el-button> -->
    </div>
    <div>
      <el-table :data="asd" border style="width: 100%">
        <el-table-column prop="name" label="商品名"></el-table-column>
        <el-table-column prop="_id" label="商品ID"></el-table-column>

        <el-table-column prop="descriptions" label="商品简介"></el-table-column>

        <el-table-column prop="coverImg" label="商品图片">
          <template slot-scope="scope">
            <img :src="scope.row.coverImg" style="width:100px;height:100px" />
          </template>
        </el-table-column>
        <el-table-column prop="price" label="商品价格"></el-table-column>
        <el-table-column prop="quantity" label="商品数量"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="del(scope.row._id)" type="text" size="small">删除</el-button>
            <el-button @click="cha(scope.row._id)" type="text" size="small">修改</el-button>
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
import api from "../api/p_api";
export default {
  name: "product",
  inject: ["reload"],
  data() {
    return {
      input: "",
      checked: true,
      tableData: [],
      url: [],
      search: "",
      searchData: []
    };
  },
  methods: {
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          api.delproduct(id).then(res => {
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
    cha(id) {
      this.$router.push("/chanproduct/" + id);
    },
    find(id) {
      this.$router.push("/detailproduct/" + id);
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
      //console.log(11);
      let params = {
        page: this.currentPage
      };
      console.log(this.currentPage);
      api.products(params).then(res => {
        this.tableData = res.products;
        this.url = res.products.coverImg;
        //console.log(res.products);
      });
    }
    // btn() {
    //   //console.log(11);
    //   var search = this.search;
    //   console.log(this.search);
    //   // if (search != "") {
    //   this.searchData = this.tableData.filter(
    //     v => v.name.indexOf(search) != -1
    //   );
    //   this.tableData = this.searchData;
    //   console.log(this.searchData);
    //   //console.log(this.search);
    //   // } else {
    //   // }
    // }
  },
  computed: {
    asd() {
      let arrs = this.tableData.filter(v => v.name.indexOf(this.search) != -1);
      return arrs;
    }
  },
  mounted() {
    api.products().then(res => {
      this.tableData = res.products;
      this.url = res.products.coverImg;
      //console.log(res.products);
    });
  }
};
</script>
<style scoped>
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
