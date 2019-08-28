<template>
  <div class="container">
    <div class="btn">
      <el-input v-model="search" placeholder="根据商品分类搜索" class="ipt"></el-input>
    </div>
    <div>
      <el-table :data="asd" border style="width: 100%">
        <el-table-column prop="_id" label="商品ID"></el-table-column>
        <el-table-column prop="descriptions" label="商品简介"></el-table-column>
        <el-table-column prop="name" label="商品分类"></el-table-column>
        <el-table-column prop="coverImg" label="商品图片">
          <template slot-scope="scope">
            <img :src="scope.row.coverImg" style="width:100px;height:100px" />
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
  name: "spfllb",
  data() {
    return {
      input: "",
      checked: true,
      tableData: [],
      url: [],
      search: ""
    };
  },
  methods: {
    current_change: function(currentPage) {
      this.currentPage = currentPage;
      //console.log(11);
      let params = {
        page: this.currentPage
      };
      //console.log(this.currentPage);
      api.fenproducts(params).then(res => {
        this.tableData = res.categories;
        this.url = res.categories.coverImg;
        //console.log(res.products);
      });
    }
  },
  computed: {
    asd() {
      let arrs = this.tableData.filter(v => v.name.indexOf(this.search) != -1);
      return arrs;
    }
  },
  mounted() {
    api.fenproducts().then(res => {
      this.tableData = res.categories;
      this.url = res.categories.coverImg;
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
  width: 20%;
}
</style>
