<template>
  <div class="container">
    <el-container>
      <el-header>
        <h1>美菜商城后台管理</h1>
        <div>
          <el-button type="primary" @click="tuichu">退出</el-button>
          <span>admin</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>
                <span @click="tab()">人员管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <span @click="addu()">添加用户</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span @click="tap()">商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <span @click="addp()">添加商品</span>
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-2">
                  <span @click="list()">商品分类</span>
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-2">
                  <span @click="spfllb()">商品分类列表</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span @click="din()">订单管理</span>
              </template>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    tuichu() {
      this.$router.push("/login");
    },
    tap() {
      this.$router.push("/product");
    },
    tab() {
      this.$router.push("/proden");
    },
    addu() {
      this.$router.push("/addproden");
    },
    addp() {
      this.$router.push("/addproduct");
    },
    list() {
      this.$router.push("/addprolist");
    },
    spfllb() {
      this.$router.push("/spfllb");
    },
    din() {
      this.$router.push("/dingdanlist");
    }
  }
};
</script>
<style scoped>
/* .container {
  height: 100%;
} */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
