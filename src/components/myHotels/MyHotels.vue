<template lang="">
  <div>
    <section class="container min-vh-100">
      <div v-if="this.$store.getters.hotels.length > 0">
        <div v-for="hotel in this.$store.getters.hotels" :key="hotel.id">
          <MyHotel :hotelItem="hotel" @data-sent="handleData" />
        </div>
      </div>
      <div v-else class="text-center">
        <h2 class="text-capitalize">no hotels yet</h2>
        <button
          class="text-decoration-underline btn text-primary text-capitalize"
          @click="handleRedirectHome"
        >
          please go and check our hotels
        </button>
      </div>
    </section>
    <DelHotelModal :hotelId="hotelId" />
  </div>
</template>
<script>
import MyHotel from "./Myhotel.vue";
import DelHotelModal from "./RemoveHotelModal.vue";
export default {
  components: {
    MyHotel,
    DelHotelModal,
  },
  data() {
    return {
      hotelId: ''
    };
  },

  methods: {
    handleRedirectHome() {
      this.$router.push("/");
    },
    handleData(data) {
      this.hotelId = data;
    },
  },
};
</script>
