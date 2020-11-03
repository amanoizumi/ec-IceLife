<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
    <h1
      class="navbar-brand text-light font-weight-bold mb-0"
    >IceLife 後台管理系統</h1>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            class="nav-link text-light"
            :to="{ name: '產品頁面'}"
          >
            產品列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link text-light"
            :to="{ name: '優惠券頁面'}"
          >
            優惠券列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link text-light"
            :to="{ name: '圖片頁面'}"
          >
            圖片頁面
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link text-light"
            :to="{ name: '訂單列表'}"
          >
            訂單列表
          </router-link>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-light"
            href="#"
            @click.prevent="signOut"
          >
            登出
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
    };
  },
  methods: {
    signOut() {
      document.cookie = 'hexToken=;expires=;';
      this.$bus.$emit('message:push',
        '登出成功!',
        'success');

      this.$router.push('/login');
    },
  },
};
</script>
