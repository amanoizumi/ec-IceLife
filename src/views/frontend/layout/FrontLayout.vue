<template>
  <div class="layout">
    <Navbar />
      <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/frontend/Navbar.vue';
import Footer from '@/components/frontend/Footer.vue';

export default {
  name: 'FrontLayout',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
    };
  },
};
</script>
