<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right">
    <div class="btn-scroll btn-cyan text-light border-0 shadow">
      <i class="fas fa-chevron-up d-flex" ></i>
    </div>
  </a>
</template>

<script>

export default {
  name: 'ScrollTopArrow',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 10);
    },
    scrollListener() {
      this.visible = window.scrollY > 150;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  },
};
</script>

<style lang="scss">
.bottom-right {
  position: fixed;
  bottom: 45%;
  right: 20px;
  cursor: pointer;
  text-decoration: none;
}
.btn-scroll {
    border-radius: 50%;
    background-color: #C2185B;
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    font-size: 30px;
    @media (max-width: 576px) {
      display: none;
    }
}
</style>
