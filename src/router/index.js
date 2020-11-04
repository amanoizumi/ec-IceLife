import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/frontend/layout/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/frontend/HomePage.vue'),
      },
      {
        path: 'products',
        name: '前台產品頁面',
        component: () => import('../views/frontend/Products.vue'),
      },
      {
        path: 'wishlist',
        name: '願望清單',
        component: () => import('../views/frontend/WishList.vue'),
      },
      {
        path: 'product/:id',
        name: '前台單一產品頁面',
        component: () => import('../views/frontend/Product.vue'),
      },
      {
        path: 'checkout/:id',
        name: '訂單完成頁面',
        component: () => import('../views/frontend/Checkout.vue'),
      },
      {
        path: 'story',
        name: '品牌故事',
        component: () => import('../views/frontend/Story.vue'),
      },
      {
        path: 'festival',
        name: '優惠活動進行中',
        component: () => import('../views/frontend/Festival.vue'),
      },
      {
        path: 'cart',
        name: '前台購物車',
        component: () => import('../views/frontend/Cart.vue'),
      },
      {
        path: 'order',
        name: '訂單頁面',
        component: () => import('../views/frontend/Order.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/frontend/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Admin 頁面',
    component: () => import('../views/backend/layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '產品頁面',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'Storages',
        name: '圖片頁面',
        component: () => import('../views/backend/Storages.vue'),
      },
      {
        path: 'Coupons',
        name: '優惠券頁面',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        path: 'storages',
        name: '圖片列表',
        component: () => import('../views/backend/Storages.vue'),
      },
    ],
  },
  {
    path: '*', redirect: '/', // redirect 的功能是當使用者輸入不存在的路徑時，會自動導向至指定路徑。
  },
];

const router = new VueRouter({
  routes,
});

export default router;
