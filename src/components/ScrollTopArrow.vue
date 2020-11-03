<template>
  <ScrollTopComponent>
      <div class="btn-scroll btn-cyan text-light border-0 shadow">
        <i class="fas fa-chevron-up d-flex" ></i>
      </div>
  </ScrollTopComponent>
</template>

<script>

import ScrollTopComponent from '@/components/ScrollTopComponent.vue';

export default {
  components: {
    ScrollTopComponent,
  },
};
</script>

<style lang="scss">
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
