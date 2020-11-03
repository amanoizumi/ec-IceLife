<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right shadow">
    <i class="fas fa-chevron-up d-flex" ></i>
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
  color: #ffffff;
  position: fixed;
  bottom: 45%;
  right: 20px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #C2185B;
  padding: 25px;
  font-size: 30px;
  &:hover {
    color: #ffffff;
    background-color: #17A2B8;
    text-decoration: none;
  }
  @media (max-width: 576px) {
    display: none;
  }
}

</style>
