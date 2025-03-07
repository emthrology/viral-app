<template>
  <button :class="`${props.classes}`">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: () => '',
  },
})
</script>

<style lang="scss" scoped></style>
