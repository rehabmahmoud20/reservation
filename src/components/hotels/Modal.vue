<template>
  <BaseModal v-if="this.$store.getters.modal">
    <div class="mb-3">
      <label for="username" class="form-label text-capitalize">user name</label>
      <input
        type="text"
        class="form-control"
        id="username"
        v-model="formVals.username"
        placeholder="please enter your name"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label text-capitalize">password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="formVals.password"
        placeholder="please enter your password"
      />
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label text-capitalize">phone number</label>
      <input
        type="tel"
        class="form-control"
        id="phone"
        v-model="formVals.tel"
        placeholder="please enter your phone number"
      />
    </div>

    <template v-slot:handleData>
      <BaseButton variant="primary" @click="handleReserve()" type="submit">
        reserve
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
  },
  data() {
    return {
      formVals: {
        username: "",
        password: "",
        tel: "",
      },
    };
  },
  methods: {
    ...mapActions(["handleAddToHotels", "handleModal"]),
    OpenCloseFun() {
      this.$store.commit("handleModal");
    },
    handleReserve() {
      function toastValidationHandler(val) {
        toast(val, {
          autoClose: 1000,
        });
      }

      // form validation
      if (
        !this.formVals.username ||
        !this.formVals.password ||
        !this.formVals.tel
      ) {
        toastValidationHandler("please fill all fields");
      } else if (this.formVals.password < 6) {
        toastValidationHandler("Password must be at least 6 numbers");
      } else if (this.formVals.tel.length >  11  || this.formVals.tel.length <  11) {
        toastValidationHandler("Phone number must be 11 number");
      } else {
        // remove modal
        this.handleModal();
        toast(`Thank you for booking with us`, {
          autoClose: 1000,
        });
        //  dispatch the action to add the hotel
        this.handleAddToHotels(this.$store.getters.hotel);

        // reset form vals after submit
        this.formVals.username = "";
        this.formVals.password = "";
        this.formVals.tel = "";
      }
    },
  },
};
</script>
<style lang=""></style>
