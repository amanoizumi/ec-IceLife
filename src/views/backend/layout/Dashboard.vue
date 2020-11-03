<template>
  <div>
    <Sidebar />
    <div class="container-fluid">
      <div class="row">
        <main
          role="main"
          class="col-md-12 ml-sm-auto px-4"
        >
          <router-view
            v-if="checkSuccess"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/backend/Sidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
  },
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

    const url = `${process.env.VUE_APP_APIPATH}/api/auth/check`;

    this.$http.post(url, { api_token: this.token })
      .then((response) => {
        if (!response.data.success) {
          this.$router.push({
            path: 'login',
          });

          this.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
              ${response.data.message}`,
            'danger');
        }
        this.checkSuccess = true;
      });
    // Axios 預設值 放在驗證之後
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
  },
};
</script>
