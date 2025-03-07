<template>
  <!-- <a :class="`${props.classes}`">
    <slot />
  </a> -->
  <NuxtLink :class="`${props.classes}`" :to="`${props.url}`">
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: () => '',
  },
  url: {
    type: String,
    default: () => '',
  },
})
</script>

<style lang="scss" scoped></style>
