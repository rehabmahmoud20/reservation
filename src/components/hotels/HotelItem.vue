<template >
  <div class="position-relative">
    <img class="w-100 mb-2 rounded" :src="hotelItem.img" :alt="hotelItem.name" />

    <div
      class="rate-container position-absolute top-0 end-0 bg-primary text-light d-flex justify-content-center align-items-center"
    >
      <p>{{ hotelItem.rate }}</p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="info">
        <p class="mb-2 fw-bold text-capitalize">{{ hotelItem.name }}</p>
        <p class="mb-2">{{ hotelItem.adress }}</p>
      </div>
      <button
        class="btn bg-primary text-light text-capitalize h-25 "
        @click="OpenCloseFun"
      >
        reserve
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["hotelItem"],
  data() {
    return {
      hote: [...this.$store.getters.hotels],
    };
  },
  methods: {
    OpenCloseFun() {
      this.$store.commit("handleModal");
      this.$store.commit("setHotel", this.hotelItem);
    },
  },
};
</script>
<style scoped>
.rate-container {
  width: 50px;
  height: 50px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
