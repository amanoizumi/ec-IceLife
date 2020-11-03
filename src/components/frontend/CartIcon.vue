<template>
  <div>
    <i class="fa fa-shopping-cart text-light fa-1x"
       style="font-size: 1rem"
       aria-hidden="true"></i>
    <span class="badge badge-pill badge-cyan"
          style="transform: translateX(-5px) translateY(5px)">
      {{ cartTotal }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'CartIcon',
  data() {
    return {
      cartTotal: 0,
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('update-total', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UID}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.cartTotal = res.data.data.length;
      });
    },
  },
};
</script>
