<template>
  <div class="container">
    <div class="btn">
      <el-input v-model="search" placeholder="根据姓名搜索" class="ipt"></el-input>
    </div>
    <div>
      <el-table :data="asd" border style="width: 100%">
        <el-table-column prop="userName" label="姓名"></el-table-column>
        <el-table-column prop="_id" label="ID"></el-table-column>
        <el-table-column prop="nickName" label="昵称"></el-table-column>
        <el-table-column prop="createdAt" label="注册时间"></el-table-column>
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
import api from "../api/api";
export default {
  name: "proden",
  data() {
    return {
      input: "",
      checked: true,
      tableData: [],
      search: ""
    };
  },
  methods: {
    //删除人员信息
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          api.delete(id).then(res => {
            //console.log(res);
            api.users().then(res => {
              this.tableData = res.users;
              // console.log(res);
            });
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
    //编辑更改人员信息
    cha(id) {
      this.$router.push("/chanproden/" + id);
    },
    //查看人员信息
    find(id) {
      this.$router.push("/fendproden/" + id);
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
      //console.log(11);
      let params = {
        page: this.currentPage
      };
      console.log(this.currentPage);
      api.users(params).then(res => {
        //console.log(res);
        this.tableData = res.users;
      });
    }
  },
  computed: {
    asd() {
      let arrs = this.tableData.filter(
        v => v.userName.indexOf(this.search) != -1
      );
      return arrs;
    }
  },
  mounted() {
    api.users().then(res => {
      this.tableData = res.users;
      // console.log(res);
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
