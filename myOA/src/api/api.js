import * as API from "./index"
export default {

  //登录
  login: params => {
    return API.POST("/api/v1/auth/manager_login", params)
  },

  //获取用户列表
  users: params => {
    return API.GET("/api/v1/admin/users", params)
  },
  //删除用户
  delete: id => {
    return API.DELETE("/api/v1/admin/users/" + id)
  },
  //修改用户
  change: (params, id) => {
    return API.PUT("/api/v1/admin/users/" + id, params)
  },
  //查看用户
  find: id => {
    return API.GET("/api/v1/admin/users/" + id)
  },
  //新增用户
  addproden: params => {
    return API.POST("/api/v1/admin/users", params)
  },
}
