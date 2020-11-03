<template>
  <div class="navbarcontent  bg-primary">
    <div class="container">
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <h2>
              <router-link
                class="nav-link text-light"
                :to="{ name: '首頁'}"
              >
                <a class="logo text-decoration-none" href="#">IceLife</a>
              </router-link>
            </h2>
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
              <ul class="navbar-nav font-weight-bold ml-auto">
                <li class="nav-item mr-2">
                  <router-link
                    class="nav-link text-light"
                    :to="{ name: '前台產品頁面'}"
                  >
                    產品列表
                  </router-link>
                </li>
                <li class="nav-item mr-2">
                  <router-link
                    class="nav-link text-light"
                    :to="{ name: '品牌故事'}"
                  >
                    品牌故事
                  </router-link>
                </li>
                <li class="nav-item mr-2">
                  <router-link
                    class="nav-link text-light"
                    :to="{ name: '願望清單'}"
                  >
                  <i class="fas fa-heart"></i>
                  </router-link>
                </li>
                <li class="nav-item mr-2">
                  <router-link
                    class="nav-link text-light"
                    :to="{ name: '前台購物車'}"
                  >
                    <CartIcon />
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartIcon from '@/components/frontend/CartIcon.vue';

export default {
  name: 'Navbar',
  components: {
    CartIcon,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  color: #fff;
  font-family: 'Fugaz One', cursive;
  margin-right: 15px;
}
</style>
