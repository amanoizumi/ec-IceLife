<template>
  <div class="wishlist">
    <Loading :active.sync="isLoading">
      <div class="loadingio-spinner-ripple-icelifeloading">
        <div class="ldio-icelifeloading-style">
          <div></div><div></div></div>
        </div>
    </Loading>
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- 無商品時顯示畫面開始 -->
          <div v-if="wishProduct.length == 0" class="noneitem text-center mt-5 mb-4">
            <h2 class="font-weight-bold mb-4">您的願望清單還沒有任何商品！</h2>
              <i class="far fa-tired mb-5"></i><br>
              <router-link
                  class="btn btn-lg btn-primary rounded"
                  :to="{ name: '前台產品頁面'}"
                >
                <span>來去逛逛</span>
              </router-link>
          </div>
          <!-- 無商品時顯示畫面結束 -->
          <div class="mt-5" v-if="wishProduct.length > 0">
            <h3 class="text-primary mb-4">我的願望清單</h3>
            <table class="table border-bottom">
              <thead>
                <tr class="table-primary text-center">
                  <th scope="col">產品圖片</th>
                  <th scope="col">產品名稱</th>
                  <th scope="col">分類</th>
                  <th scope="col">價格</th>
                  <th scope="col">放入購物車</th>
                  <th scope="col">刪除</th>
                </tr>
              </thead>
              <tbody class="wishlist-content">
                <tr class="text-center" v-for="item in wishProduct" :key="item.id">
                  <td>
                    <img class="wishlist-image" :src="item.imageUrl[0]" alt="">
                  </td>
                  <td>
                    <router-link :to="`/product/${ item.id }`">
                      <p>
                        <strong>{{ item.title }}</strong>
                      </p>
                    </router-link>
                  </td>
                  <td>{{ item.category }}</td>
                  <td>{{ item.price | currency }}</td>
                  <td>
                    <button type="button"
                            class="btn text-primary"
                            @click.prevent="addToCart(item.id)">
                      <i class="fas fa-spinner fa-spin"
                          v-if="status.loadingItem === item.id">
                      </i>
                      <i v-else
                          class="fa fa-cart-plus"
                          aria-hidden="true"></i>
                    </button>
                  </td>
                  <td>
                    <button type="button"
                            class="btn btn-outline-secondary btn-sm border-0"
                            @click.prevent="delWished(item.id)">
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SweetAlert from '@/utils/SweetAlert';

export default {
  name: 'WishList',
  data() {
    return {
      products: [],
      carts: [],
      wishProduct: [],
      wished: JSON.parse(localStorage.getItem('wishList')) || [],
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/products`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.data;
          console.log(this.products);
          this.getWish();
          this.isLoading = false;
        })
        .catch(() => {
          SweetAlert.fire({
            title: '取不到願望清單資料',
            icon: 'error',
          });
          this.isLoading = false;
        });
    },
    getWish() {
      this.wishProduct = this.products.filter(
        (product) => this.wished.indexOf(product.id) > -1,
      );
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
          this.$bus.$emit('update-total');
          SweetAlert.fire({
            title: '已加入購物車!',
            icon: 'success',
          });
          this.status.loadingItem = '';
        })
        .catch((err) => {
          const errorData = err.response.data.errors;
          if (errorData) {
            SweetAlert.fire({
              title: `${errorData}`,
              icon: 'warning',
            });
          }
          this.status.loadingItem = '';
        });
    },
    delWished(id) {
      const wishId = this.wished.indexOf(id);
      if (wishId !== -1) {
        this.wished.splice(wishId, 1);
        this.getWish();
        SweetAlert.fire({
          title: '已從願望清單刪除',
          icon: 'success',
        });
      }
      localStorage.setItem('wishList', JSON.stringify(this.wished));
    },
  },
};
</script>

<style lang="scss" scoped>
.wishlist {
  min-height: 80vh;
  .fa-tired {
    font-size: 250px;
  }
  &-content td{
    vertical-align: middle;
  }
  &-image {
    max-width: 80px;
  }
}

.noneitem {
  color: #afafaf;
}
</style>
