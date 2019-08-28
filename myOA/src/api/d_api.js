import * as API from "./index"
export default {
  //订单列表
  dlist: params => {
    return API.GET("/api/v1/admin/orders", params)
  },
  //订单详情
  dfinddetail: id => {
    return API.GET("/api/v1/admin/orders/" + id)
  },
  //修改订单
  // dcha: (params, id) => {
  //   return API.PUT("/api/v1/admin/orders/" + id, params)
  // },
  //删除订单
  ddel: id => {
    return API.DELETE("/api/v1/admin/orders/" + id)
  }
}
