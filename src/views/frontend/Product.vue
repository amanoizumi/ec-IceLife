<template>
  <div class="product">
    <Loading :active.sync="isLoading">
      <div class="loadingio-spinner-ripple-icelifeloading">
        <div class="ldio-icelifeloading-style">
          <div></div><div></div></div>
        </div>
    </Loading>
    <div class="container mb-5">
      <div class="row">
        <!-- 麵包屑開始 -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb font-weight-bold pt-5 pb-4 bg-white">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products">全部商品</router-link>
            </li>
            <li class="breadcrumb-item active text-brown"
                aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
        <!-- 麵包屑結束 -->
      </div>
      <div class="row">
        <!-- 商品圖片開始-->
        <div class="col-md-12 col-lg-6">
          <div class="rounded" style="
                      width: 100%;
                      height: 550px;
                      background-size: cover;
                      background-position: center;
                    "
                    :style="{ backgroundImage: `url(${ product.imageUrl[0] })` }">
          </div>
          <!-- 商品圖片結束 -->

          <!-- 商品介紹開始 -->
          <div class="row mt-3">
            <div class="col">
              <div>
                <h4 class="text-primary">商品介紹</h4>
                <hr>
                <p v-html="product.description"></p>
                <hr>
                <h5>有任何問題歡迎在訂購前私訊我們！</h5>
              </div>
            </div>
          </div>
          <!-- 商品介紹結束-->
        </div>

        <div class="col-md-12 col-lg-6">
        <!-- 單一商品購物車開始 -->
            <div class="row mb-3">
              <div class="col">
                <h3 class="font-weight-bold text-primary">{{ product.title }}</h3>
                <span class="text-secondary">─{{ product.category}}─</span>
                <hr>
                <h5 class="mb-4 text-secondary">
                  {{ product.content }}
                </h5>
                <h2 class="text-cyan">NT$ {{ product.price }} 元</h2>
                <p class="originprice">原價：{{ product.origin_price }} 元</p>
                <label for="quantity">請選擇數量：</label>
                <div class="row mb-3">
                  <div class="col-3">
                    <select class="form-control"
                            name="unit"
                            v-model="product.num"
                            >
                      <option :value="num"
                              v-for="num in 10"
                              :key="num">
                        {{ num }} {{ product.unit }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="btn btn-primary btn-block py-3"
                     @click.prevent="addToCart(product, product.num)">
                  <i class="fa fa-shopping-cart text-light"></i>
                  放入購物車
                </div>
                <div class="btn btn-outline-cyan btn-block py-3"
                     @click.prevent="editwish(product.id)">
                  <i class="fas fa-heart"></i>
                  加到我的願望清單
                </div>
              </div>
            </div>
            <!-- 單一商品購物車結束 -->
            <div class="row">
              <div class="col">
                <ul>
                  <li>
                    <p>本商品付款後，從開始製作到寄出商品為 14 個工作天。<br>（不包含假日）</p>
                  </li>
                  <li>
                    <p>紙本電子發票置於外盒包裝內。</p>
                  </li>
                  <li>
                   <p>商品預計 3 個工作天出貨</p>
                  </li>
                </ul>
                <hr>
                <h4 class="text-primary">優惠活動</h4>
                <p>
                  週年慶活動實施中！可於官網首頁取得商品優惠券。
                </p>
                <hr>
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
  data() {
    return {
      status: {
        loadingItem: '',
      },
      product: {
        num: 1,
        imageUrl: [],
      },
      wished: JSON.parse(localStorage.getItem('wishList')) || [],
      isLoading: false,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/product/${id}`;
      this.isLoading = true;

      this.$http.get(url)
        .then((res) => {
          this.status.loadingItem = '';
          this.product = {
            // 淺拷貝
            ...res.data.data,
            num: 1,
          };
          this.isLoading = false;
        })
        .catch(() => {
          SweetAlert.fire({
            title: '取得商品失敗',
            icon: 'error',
          });
          this.isLoading = false;
        });
    },
    addToCart(item, quantity = 1) {
      this.status.loadingItem = item.id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/shopping`;
      const cart = {
        product: item.id,
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
    editwish(id) {
      const wishId = this.wished.indexOf(id);
      if (wishId === -1) {
        this.wished.push(id);
        SweetAlert.fire({
          title: '已加到願望清單!',
          icon: 'success',
        });
      } else {
        this.wished.splice(wishId, 1);
        SweetAlert.fire({
          title: '已從願望清單刪除!',
          icon: 'success',
        });
      }
      localStorage.setItem('wishList', JSON.stringify(this.wished));
    },
  },
};
</script>

<style scope>
.product {
  min-height: 80vh;
}
</style>
