<template>
  <div v-if="products.length > 0">
    <div class="card-group" v-for="item in related" :key="item.id">
      <div class="card">
        <div style="
                    min-height: 200px;
                    background-size: cover;
                    background-position: center;
                    cursor: pointer
                    "
            :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }"
            @click.prevent="getDetail(item.id)">
        </div>
        <div class="card-body">
          <h6 class="card-title">
            {{ item.title }}
          </h6>
          <div class="text-right pr-2">
            {{ item.price | currency }} 元
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SweetAlert from '@/utils/SweetAlert';

export default {
  name: 'RelatedProducts',
  data() {
    return {
      products: [],
      props: {
        product: {
          type: Object,
        },
      },
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/products`;
      this.$http.get(url).then((response) => {
        this.products = response.data.data;
      })
        .catch(() => {
          SweetAlert.fire({
            title: '取得商品列表失敗',
            icon: 'error',
          });
        });
    },
    getDetail(id) {
      this.$router.push(`/product/${id}`);
      this.$emit('update');
    },
  },
};
</script>
