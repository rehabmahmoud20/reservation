<template >
  <div>
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import NavBar from "./components/shared/NavBar.vue";
import Footer from "./components/shared/Footer.vue"
import 'vue3-toastify/dist/index.css';

export default {
  components: {
    NavBar,
    Footer
  },
};
</script>
