import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login'),
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/Proden',
      component: () => import('../views/Index.vue'),
      children: [
        //人员管理
        {
          path: '/proden',
          name: 'proden',
          component: () => import('../views/Proden.vue'),
        },
        {
          path: '/addproden',
          name: 'addproden',
          component: () => import('../views/Addproden.vue'),
        },
        {
          path: '/ChanProden/:id',
          name: 'chanproden',
          component: () => import('../views/ChanProden.vue'),
        },
        {
          path: '/FendProden/:id',
          name: 'fendproden',
          component: () => import('../views/FendProden.vue'),
        },
        //商品管理
        {
          path: '/product',
          name: 'product',
          component: () => import('../pviews/Product.vue'),
        },
        {
          path: '/addproduct',
          name: 'addproduct',
          component: () => import('../pviews/Addproduct.vue'),
        },
        {
          path: '/detailproduct/:id',
          name: 'detailproduct',
          component: () => import('../pviews/Detailproduct.vue'),
        },
        {
          path: '/chanproduct/:id',
          name: 'chanproduct',
          component: () => import('../pviews/Chanproduct.vue'),
        },
        {
          path: '/addprolist',
          name: 'addprolist',
          component: () => import('../pviews/addprolist.vue'),
        },
        {
          path: '/spfllb',
          name: 'spfllb',
          component: () => import('../pviews/spfllb.vue'),
        },
        //订单管理
        {
          path: '/dingdanlist',
          name: 'dingdanlist',
          component: () => import('../dviews/dingdanlist.vue'),
        },
        {
          path: '/dindandetail/:id',
          name: 'dindandetail',
          component: () => import('../dviews/dindandetail.vue'),
        },
      ]
    }
  ]
})
