<template>
  <div class="order">
     <Loading :active.sync="isLoading">
      <div class="loadingio-spinner-ripple-icelifeloading">
        <div class="ldio-icelifeloading-style">
          <div></div><div></div></div>
        </div>
    </Loading>
    <!-- 訂單頁面 start -->
    <div class="container">
      <div class="my-5 row justify-content-center">
        <div class="col-sm-12 col-md-6">
          <h3 class="text-primary">購買人資料</h3>
        <validation-observer v-slot="{ invalid }" class="col-md-6">
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <!-- 使用驗證插件驗證整個表單 -->
              <validation-provider v-slot="{ errors, classes }" rules="required">
                <label for="username">收件人姓名</label>
                <input name="收件人姓名"
                      id="username"
                      v-model="form.name"
                      type="text"
                      placeholder="請填入姓名"
                      class="form-control"
                      :class="classes" />
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes }" rules="required">
                <label for="email">Email</label>
                <input name="Email"
                      id="email"
                      v-model="form.email"
                      type="email"
                      placeholder="請填入email"
                      class="form-control"
                      :class="classes" />
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider  v-slot="{ errors, classes }" rules="required|min:8">
                <label for="tel">聯絡電話</label>
                <input name="聯絡電話"
                      id="tel"
                      v-model="form.tel"
                      type="tel"
                      placeholder="請填入連絡電話"
                      class="form-control"
                      :class="classes" />
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes }" rules="required">
                <label for="address">地址</label>
                <input name="地址"
                      id="address"
                      v-model="form.address"
                      type="text"
                      placeholder="請填入運送地址"
                      class="form-control"
                      :class="classes" />
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="payment">付款方式</label>
              <select id="payment"
                      class="form-control"
                      v-model="form.payment"
                      required>
                <option value="" disabled>請選擇付款方式</option>
                <option value="WebATM">WebATM</option>
                <option value="ATM">ATM轉帳</option>
                <option value="ApplePay">ApplePay</option>
                <option value="LinePay">LinePay</option>
                <option value="CreditCard">信用卡付款</option>
              </select>
            </div>
            <div class="text-right">
              <button type="submit"
                      class="btn btn-primary"
                      @click.prevent="creatOrder"
                      :disabled="invalid">
                送出訂單
              </button>
            </div>
          </form>
        </validation-observer>
        </div>

        <div class="col-sm-12 col-md-6">
          <h3 class="text-primary">購物明細</h3>
          <div class="row border-bottom border-gray" v-for="item in cart" :key="item.id">
            <div class="col-3 d-flex align-items-center py-3">
              <div class="pic-td align-middle"
                  style="
                        width: 100px;
                        height:100px;
                        background-size: cover;
                        background-position: center;"
                  :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }
              ">
              </div>
            </div>
            <div class="col-3  d-flex align-items-center ml-3">{{ item.product.title }}</div>
            <div class="col-2 d-flex align-items-center">
              X {{ item.quantity }}
            </div>
            <div class="col-3 d-flex justify-content-between align-items-center">
              <div class="text-center">
                NT{{ (item.product.price * item.quantity) | currency }}元
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-check mt-4 mb-2">
                <input class="form-check-input" type="checkbox" value=""
                        id="orderCheck1" :checked="is_checked" @click="changeDisabled">
                <label class="form-check-label" for="orderCheck1">
                  使用優惠券
                </label>
              </div>
              <div class="input-group mb-3 mr-sm-2">
                <input type="text"
                        class="form-control"
                        id="couponCode"
                        v-model="coupon_code"
                        placeholder="請輸入優惠券碼"
                      :disabled="is_disabled">
                <div class="input-group-prepend">
                  <button type="button" class="btn btn-primary" @click.prevent="useCouponCode">
                    <i class="fas fa-check-circle"></i> 套用
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h4 class="mb-3" v-if="coupon.enabled">
                總金額 {{ cartTotal * (coupon.percent / 100) | currency }} 元
              </h4>
              <h4 v-else>
                總金額 NT{{ cartTotal | currency}} 元
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- 訂單頁面 end -->
  </div>
</template>

<script>
import SweetAlert from '@/utils/SweetAlert';

export default {
  name: 'Order',
  data() {
    return {
      cart: {},
      cartTotal: 0,
      form: {
        email: '',
        name: '',
        tel: '',
        address: '',
        payment: 'WebATM',
      },
      coupon_code: '',
      coupon: {},
      isLoading: false,
      is_checked: false,
      is_disabled: true,
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/shopping`;
      this.$http.get(url).then((response) => {
        this.cart = response.data.data;
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
    changeDisabled() {
      this.is_disabled = !(this.is_disabled);
    },
    useCouponCode() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/coupon/search`;
      this.$http.post(url, { code: this.coupon_code })
        .then((res) => {
          this.getCart();
          this.coupon = res.data.data;
          this.isLoading = false;
          SweetAlert.fire({
            text: '成功套入優惠卷',
            icon: 'success',
          });
        })
        .catch((err) => {
          const errorData = err.response.data.errors;
          if (errorData) {
            errorData.code.forEach((errmsg) => {
              SweetAlert.fire({
                text: `${errmsg}`,
                icon: 'error',
              });
            });
            this.isLoading = false;
          } else {
            const { message } = err.response.data;
            SweetAlert.fire({
              title: `${message}`,
              icon: 'error',
            });
            this.isLoading = false;
          }
        });
    },
    creatOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/orders`;
      const order = { ...this.form };
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }
      this.$http.post(url, order)
        .then((res) => {
          this.$bus.$emit('update-total');
          SweetAlert.fire({
            text: '成功送出訂單',
            icon: 'success',
          });
          this.getCart();
          this.$router.push(`/checkout/${res.data.data.id}`);
          this.isLoading = false;
        })
        .catch(() => {
          SweetAlert.fire({
            text: '訂單送出失敗',
            icon: 'error',
          });
          this.isLoading = true;
        });
    },
  },
};

</script>

<style scope>
/* * {
  outline: 1px solid black;
} */
.order {
  min-height: 100vh;
}
</style>
