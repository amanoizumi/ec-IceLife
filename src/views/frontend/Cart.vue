<template>
  <div class="cart">
    <Loading :active.sync="isLoading">
      <div class="loadingio-spinner-ripple-icelifeloading">
        <div class="ldio-icelifeloading-style">
          <div></div><div></div></div>
        </div>
    </Loading>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb font-weight-bold pt-5 pb-4 bg-white">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            購物車
          </li>
        </ol>
      </nav>
      <div class="mt-3 mb-5 row justify-content-center">
        <!-- 麵包屑開始 -->
        <!-- 麵包屑結束 -->
        <div class="col-md-12">
          <!-- 無商品時顯示畫面開始 -->
          <div v-if="cart.length == 0" class="noneitem text-center mb-4">
            <h2 class="font-weight-bold mb-4">您的購物車還沒有任何商品！</h2>
              <i class="far fa-tired mb-5"></i><br>
              <router-link
                  class="btn btn-lg btn-primary rounded"
                  :to="{ name: '前台產品頁面'}"
                >
                <span>來去逛逛</span>
              </router-link>
          </div>
          <!-- 無商品時顯示畫面結束 -->

          <!-- 購物車標題開始 -->
          <div class="d-flex justify-content-between mb-3" v-if="cart.length > 0">
            <div class="h3 text-primary">購物車明細</div>
          </div>
          <!-- 購物車標題結束 -->

          <!-- 購物車內容開始 -->
          <div class="mb-1" v-if="cart.length > 0">
            <div class="row">
              <div class="col-md-8 col-sm-12 mb-4">
                <div class="row font-weight-bold border-bottom border-gray pb-2">
                  <div class="col-4">
                    商品
                  </div>
                  <div class="col-4">
                    數量
                  </div>
                  <div class="col-4">
                    價格
                  </div>
                </div>
                <div class="row border-bottom border-gray" v-for="item in cart" :key="item.id">
                  <div class="col-4 d-flex align-items-center py-3">
                    <div class="pic-td align-middle"
                        style="
                              width: 100px;
                              height:100px;
                              background-size: cover;
                              background-position: center;"
                        :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }
                    ">
                    </div>
                    <p class=" ml-3">{{ item.product.title }}</p>
                  </div>
                  <div class="col-4 d-flex align-items-center">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <!-- 商品數量等於 1 時 - 號按鈕 disabled -->
                        <button class="btn btn-outline-primary"
                        type="button"
                        @click="quantityUpdata(item.product.id, item.quantity - 1)"
                        :disabled="item.quantity === 1">
                        <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <input :id="`${item.product.id}`"
                        type="text"
                        class="form-control text-center"
                        :value="item.quantity"
                        @keyup.enter="quantityUpdata(item.product.id, $event.target.value)">
                      <div class="input-group-append">
                        <button class="btn btn-outline-primary"
                          type="button"
                          @click="quantityUpdata(item.product.id, item.quantity + 1)">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 d-flex justify-content-between align-items-center">
                    <div class="text-center">
                      NT{{ (item.product.price * item.quantity) | currency }}元
                    </div>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item.product.id)">
                    <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4  col-sm-12">
                <div class="order-detail border border-gray flex-column p-3 mb-4">
                  <div class="border-bottom border-gray mb-3">
                    <h3 class="font-weight-bold">訂單細節</h3>
                  </div>
                  <div class="mb-3">
                    <h4>
                      總金額 NT{{ cartTotal | currency}} 元
                    </h4>
                  </div>
                  <router-link
                    class="btn btn-lg btn-block btn-primary"
                    :to="{ name: '訂單頁面'}"
                    v-if="cart.length > 0" >確認訂單
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- 購物車內容結束 -->
          <div class="d-flex justify-content-between">
            <router-link
              class="btn btn-lg btn-outline-cyan"
              :to="{ name: '前台產品頁面'}"
            >
            <i class="fas fa-arrow-circle-left"></i>
            <span> 繼續購物</span>
            </router-link>
            <div class="text-right">
              <button type="button" v-if="cart.length > 0"
                      class="btn btn-lg btn-outline-danger" @click="removeAllCartItem()">
              <i class="far fa-trash-alt"> 刪除所有品項</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SweetAlert from '@/utils/SweetAlert';

export default {
  name: 'Cart',
  data() {
    return {
      cart: {},
      cartTotal: 0,
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/shopping`;
      this.$http.get(url).then((response) => {
        this.cart = response.data.data;
        // 累加總金額，先歸零後重新計算
        this.cartTotal = 0;
        this.cart.forEach((item) => {
          this.cartTotal += (item.product.price * item.quantity);
        });
        this.isLoading = false;
      }).catch(() => {
        SweetAlert.fire({
          title: '取得資料失敗!',
          icon: 'error',
        });
        this.isLoading = false;
      });
    },
    quantityUpdata(id, num) { // 購物車的增減商品
      // 避免數量低於 0 個
      if (num <= 0) return;

      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/shopping`;
      // 設定一個物件放入指定商品與當前此商品數量
      const data = {
        product: id,
        quantity: num,
      };
      // 編輯購物車的資料成功後關掉 loading 並刷新購物車內容
      this.$http.patch(url, data).then(() => {
        this.isLoading = false;
        this.getCart();
      }).catch(() => {
        SweetAlert.fire({
          title: '更新數量失敗!',
          icon: 'error',
        });
        this.isLoading = false;
      });
    },
    removeCartItem(id) { // 刪除購物車內特定商品所以帶入 id
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/shopping/${id}`;
      this.$http.delete(url).then(() => {
        this.isLoading = false;
        this.$bus.$emit('update-total');
        this.getCart();
      }).catch(() => {
        SweetAlert.fire({
          title: '移除商品失敗!',
          icon: 'error',
        });
        this.isLoading = false;
      });
    },
    removeAllCartItem() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/shopping/all/product`;

      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          this.$bus.$emit('update-total');
          this.getCart();
        }).catch(() => {
          SweetAlert.fire({
            title: '移除所有商品失敗!',
            icon: 'error',
          });
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getCart();
  },
};

</script>

<style lang="scss" scope>
.cart {
  min-height: 80vh;
  .fa-tired {
    font-size: 250px;
  }
}
.noneitem {
  color: #afafaf;
}
</style>
