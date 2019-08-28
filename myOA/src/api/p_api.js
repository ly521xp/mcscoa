import * as API from "./index"
export default {
  //商品列表
  products: params => {
    return API.GET("/api/v1/admin/products", params)
  },
  //添加商品
  addproducts: params => {
    return API.POST("/api/v1/admin/products", params)
  },
  //查看商品详情
  findproducts: id => {
    return API.GET("/api/v1/admin/products/" + id)
  },
  //修改商品信息
  changeproduct: (params, id) => {
    return API.PUT("/api/v1/admin/products/" + id, params)
  },
  //删除商品
  delproduct: id => {
    return API.DELETE("/api/v1/admin/products/" + id)
  },
  //获取商品分类列表
  fenproducts: params => {
    return API.GET('/api/v1/admin/product_categories', params)
  },
  //新增商品分类
  addfenproducts: params => {
    return API.POST('/api/v1/admin/product_categories', params)
  },
}
