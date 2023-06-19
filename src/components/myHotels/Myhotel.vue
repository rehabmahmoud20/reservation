<template >
  <section class="border rounded mb-4 p-4 d-md-flex mx-auto">
    <div class="img-container mb-3 mb-md-0">
      <img :src="hotelItem.img" alt="hotelItem.name" />
    </div>
    <div class="text-capitalize d-flex flex-column w-md-25">
      <h2>{{ hotelItem.name }}</h2>
      <p class="text-muted fs-4">{{ hotelItem.adress }}</p>
    </div>
    <div class="w-25 d-flex justify-content-md-end h-25">

      <BaseButton variant="warning" @click="handleRemove()" type="button">
        remove
      </BaseButton>
    </div>
  </section>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  props: ["hotelItem"],
  methods: {
    handleRemove() {
      this.$emit("data-sent", this.hotelItem.id);

      this.$store.commit("handleModal");
    },
  },
};
</script>
<style scoped>
.img-container {
  width: 100%;
}
img {
  width: 100%;
}
@media all and (min-width: 768px) {
  .img-container {
    width: 50%;
  }
  img {
    width: 75%;
  }
}
</style>
