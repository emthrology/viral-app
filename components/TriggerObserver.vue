<template>
  <div ref="triggerDiv">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  threshold: {
    type: Number,
    default: 0.2,
  },
  rootMargin: {
    type: String,
    default: '0px',
  },
});
const emits = defineEmits(['toggleActive']);
const triggerDiv = ref(null);
const observer = ref(null);
const option = {
  rootMargin: props.rootMargin,
  threshold: props.threshold,
  root: null,
};

const handleIntersect = target => {
  if (target.isIntersecting) {
    // transparent 이벤트 발생
    emits('toggleActive', true);
  } else {
    emits('toggleActive', false);
    // transparent 이벤트 발생 (현재 동일한 이벤트 발생)
  }
};

onMounted(() => {
  observer.value = new IntersectionObserver(entries => {
    handleIntersect(entries[0]);
  }, option);
  observer.value.observe(triggerDiv.value);
});
</script>

<style scoped>
div {
  opacity: 1;
}
</style>
