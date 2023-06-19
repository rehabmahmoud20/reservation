<template>
  <button :class="'text-capitalize text-light btn btn-' + variant" :type="type">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  width: 80px;
}
</style>
