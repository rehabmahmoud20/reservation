<template>
  <div>
    <div
      v-if="this.$store.getters.modal"
      class="modal fade show"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-modal="true"
      role="dialog"
      style="display: block"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              @click="handleModal"
              class="btn-close"
            ></button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="handleData"></slot>
            <BaseButton variant="danger" type="button" @click="handleModal">
              close
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
import { mapActions } from "vuex";

export default {
  components: {
    BaseButton,
  },

  methods: {
    ...mapActions(["handleModal"]),
  },
};
</script>
