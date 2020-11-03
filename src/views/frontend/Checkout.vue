<template>
  <div class="checkout">
     <Loading :active.sync="isLoading">
      <div class="loadingio-spinner-ripple-icelifeloading">
        <div class="ldio-icelifeloading-style">
          <div></div><div></div></div>
        </div>
    </Loading>
    <section class="checkout-banner mb-md-9 mb-5">
    </section>
    <div class="container mb-5">
      <div class="row mt-5">
        <div class="col mb-3">
          <h3 class="text-center">感謝您的訂購，以下為您的訂單。</h3>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="card" style="width: 20rem;">
            <div class="card-body">
              <h5 class="card-title">訂單內容</h5>
              <ul class="list-group list-group-flush">
                <li v-for="( product, i ) in order.products"
                    :key="i"
                    class="list-group-item px-0">
                  <div class="d-flex mt-2">
                    <img :src="product.product.imageUrl[0]"
                         alt=""
                         class="mr-2"
                         style="width: 60px; height: 60px; object-fit: cover">
                    <div class="w-100 d-flex flex-column">
                      <div class="d-flex justify-content-between font-weight-bold">
                        <h5>{{ product.product.title }}</h5>
                        <p class="mb-0">x{{ product.quantity }}</p>
                      </div>
                      <div class="text-right">
                        <p class="mb-0">
                          {{ product.product.price | currency }}/{{ product.product.unit }}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0 pb-0">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 font-weight-normal">Email</th>
                        <td class="text-right border-0 px-0">
                          {{ order.user.email }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人姓名</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.name }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人電話</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.tel }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人地址</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.address }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li class="list-group-item px-0 pb-0">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 font-weight-normal">
                          付款金額
                        </th>
                        <td class="text-right border-0 px-0">
                          {{ order.amount | currency }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.payment }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">付款狀態
                        </th>
                        <td class="text-right border-0 px-0 pt-0">
                          <span v-if="!order.paid">尚未付款</span>
                          <strong v-else
                                  class="text-success">付款完成</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="text-right"
                       v-if="order.paid === false">
                    <button class="btn btn-danger"
                            @click.prevent="payOrder"
                            >
                      確認付款
                    </button>
                  </div>
                </li>
              </ul>
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
  name: 'Checkout',
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  created() {
    this.orderId = this.$route.params.id;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/orders/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.order = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          SweetAlert.fire({
            title: '無法取得資料',
            icon: 'error',
          });
          this.isLoading = false;
        });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/orders/${this.orderId}/paying`;
      this.isLoading = true;
      this.$http.post(url)
        .then((res) => {
          if (res.data.data.paid) {
            this.getOrder();
            SweetAlert.fire({
              text: '已付款',
              icon: 'success',
            });
          }
          this.isLoading = false;
        })
        .catch(() => {
          SweetAlert.fire({
            text: '付款失敗',
            icon: 'error',
          });
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .checkout {
    min-height: 80vh;
    &-banner {
      background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/EtR5zBXuBxoBrSIFoU3WWUUDjGSwlnv2VAsto3EKF8IMMqW0zwvF5Y3zLiU1cw0l60N2k7rJqZ5tz4iEfcjwIClnSmFdHq1s9fObWkEzQvjJj4kAXOL2RRISDOgWUO1T.jpg);
      height: 300px;
      background-position: 50%;
      background-size: cover;
    }
  }
</style>
