<template>
  <div class="products">
    <Loading :active.sync="isLoading">
      <div class="loadingio-spinner-ripple-icelifeloading">
        <div class="ldio-icelifeloading-style">
          <div></div><div></div></div>
        </div>
    </Loading>
    <section class="products-banner mb-md-9 mb-5">
    </section>
    <div class="container">
      <div class="row"
           v-if="products.length > 0">
        <!-- 篩選器開始 -->
        <div class="col-md-3 mb-4">
          <div class="card font-weight-bold">
            <ul class="list-group list-group-flush text-center">
                <a href="#"
                   class="list-group-item list-group-item-action ext-decoration-none"
                   @click.prevent="filterCategory = ''"
                   :class="{ active: filterCategory === '' }">
                  全部商品
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action text-decoration-none"
                   @click.prevent="filterCategory = item"
                   :class="{ active: item === filterCategory }"
                   v-for="item in categories"
                   :key="item">
                  {{ item }}
                </a>
            </ul>
          </div>
        </div>
      <!-- 篩選器結束  -->
      <!-- 商品卡片開始 -->
        <div class="col-md-9">
          <div class="row">
            <div v-for="item in filterCategories" :key="item.id" class="col-lg-4 mb-4">
               <div  class="card shadow-sm">
                  <img :src="item.imageUrl[0]" class="card-img-top">
                  <div class="card-body">
                    <span class="badge badge-cyan float-right ml-2">
                      {{ item.category }}
                    </span>
                    <router-link :to="`/product/${ item.id }`">
                      <h4 class="card-title font-weight-bold text-primary">
                        {{ item.title }}
                      </h4>
                    </router-link>
                    <p class="card-text">{{ item.content }}</p>
                    <p class="originprice card-text">原價：{{ item.origin_price }} 元</p>
                    <h4>特價：{{ item.price }} 元</h4>
                  </div>
                  <button type="button"
                          class="addbtn btn-sm bg-primary text-light border-0"
                          :disabled="status.loadingItem === item.id"
                          @click.prevent="addToCart(item.id)">
                    <i v-if="status.loadingItem === item.id"
                       class="spinner-grow spinner-grow-sm"></i>
                    加到購物車
                </button>
                </div>
            </div>
          </div>
          <!-- 分頁 -->
          <Pagination
              :pages="pagination"
              @emitPages="getProducts"
              class="mb-5"
            />
        </div>
        <!-- 商品卡片結束 -->
      </div>
    </div>
    <!-- 前往頂部 -->
    <ScrollTopArrow></ScrollTopArrow>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import ScrollTopArrow from '@/components/ScrollTopArrow.vue';
import SweetAlert from '@/utils/SweetAlert';

export default {
  name: 'Products',
  components: {
    Pagination,
    ScrollTopArrow,
  },
  data() {
    return {
      pagination: {},
      products: [],
      carts: [],
      categories: ['水果滋味', '甜入你心', '成熟午後'],
      filterCategory: '',
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.data;
        const { categoryName } = this.$route.params;
        if (categoryName) {
          this.filterCategory = categoryName;
        }
        this.pagination = response.data.meta.pagination;
        this.isLoading = false;
      })
        .catch(() => {
          SweetAlert.fire({
            title: '取得商品列表失敗',
            icon: 'error',
          });
        });
    },
    addToCart(id, quantity = 1) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(url, cart)
        .then(() => {
          // 變更購物車 icon 的數字
          this.$bus.$emit('update-total');
          this.status.loadingItem = '';
          SweetAlert.fire({
            title: '已加入購物車!',
            icon: 'success',
          });
        })
        .catch((err) => {
          const errorData = err.response.data.errors;
          if (errorData) {
            SweetAlert.fire({
              title: `${errorData}`,
              icon: 'warning',
            });
            this.status.loadingItem = '';
          }
        });
    },
  },
  computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(this.filterCategory.toLowerCase());
          return data;
        });
      }
      return this.products;
    },
  },
};
</script>

<style lang="scss" scope>
.products {
  min-height: 100vh;
  &-banner {
    background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/EtR5zBXuBxoBrSIFoU3WWUUDjGSwlnv2VAsto3EKF8IMMqW0zwvF5Y3zLiU1cw0l60N2k7rJqZ5tz4iEfcjwIClnSmFdHq1s9fObWkEzQvjJj4kAXOL2RRISDOgWUO1T.jpg);
    height: 300px;
    background-position: 50%;
    background-size: cover;
  }
}
.originprice {
  text-decoration: line-through;
  color: gray;
}
.addbtn{
  font-size: 20px;
}
.list-group-item.active {
  background-color: #C2185B;
}
</style>
