<template>
  <BaseModal v-if="this.$store.getters.modal">
    <p class="fs-5 fw-bold">Are you sure you want to remove the hotel ?</p>

    <template v-slot:handleData>
      <BaseButton variant="primary" @click="handleReserve()" type="submit">
        remove
      </BaseButton>
    </template>
  </BaseModal>
</template>
<script>
import BaseModal from "../ui/BaseModal.vue";
import BaseButton from "../ui/BaseButton.vue";

import { mapActions } from "vuex";
import { toast } from "vue3-toastify";

export default {
  components: {
    BaseModal,
    BaseButton,
  },
  props: {
    visible: Boolean,
    hotelId: String,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["handleRemoveHotel", "handleModal"]),

    handleReserve() {
      // remove modal
      this.handleModal();
      // diapatch action to cancle booking
      this.handleRemoveHotel(this.hotelId);
      toast(`hotel removed successfully`, {
        autoClose: 1000,
      });
    },
  },
};
</script>
