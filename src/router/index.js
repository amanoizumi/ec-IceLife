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
        meta: { requiresAuth: true },
      },
      {
        path: 'products',
        name: '前台產品頁面',
        component: () => import('../views/frontend/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'wishlist',
        name: '願望清單',
        component: () => import('../views/frontend/WishList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'product/:id',
        name: '前台單一產品頁面',
        component: () => import('../views/frontend/Product.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'checkout/:id',
        name: '訂單完成頁面',
        component: () => import('../views/frontend/Checkout.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'story',
        name: '品牌故事',
        component: () => import('../views/frontend/Story.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'cart',
        name: '前台購物車',
        component: () => import('../views/frontend/Cart.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'order',
        name: '訂單頁面',
        component: () => import('../views/frontend/Order.vue'),
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
      },
      {
        path: 'Storages',
        name: '圖片頁面',
        component: () => import('../views/backend/Storages.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'Coupons',
        name: '優惠券頁面',
        component: () => import('../views/backend/Coupons.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/backend/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'storages',
        name: '圖片列表',
        component: () => import('../views/backend/Storages.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
