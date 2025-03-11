<template>
  <div class="inner register-finish">
    <div class="user-auth-wrap login-wrap">
      <h3 class="main-title font-IBM">{{ props.title }}</h3>
      <div class="guide-title">
        <span>{{ props.subTitle }}</span>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped></style>
