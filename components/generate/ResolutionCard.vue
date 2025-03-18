<template>
  <li
    class="sdBtn resolutionBtn flex"
    :class="{ 'b2-show': active }"
    type="button"
    @click="onClick"
  >
    <span class="font-IBM">{{ props.resTitle }}</span>
    <div class="resolution-text">
      <span class="resolution-numb block">{{ props.resNum }}p</span>
      <span class="resolution-cap block">{{ props.resSubtitle }}</span>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  resTitle: {
    type: String,
    default: 'SD',
  },
  resNum: {
    type: String,
    default: '360',
  },
  resSubtitle: {
    type: String,
    default: '표준화질, 빠른 변환',
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['changeResolution']);
const active = ref(false);
watch(
  () => props.selected,
  value => {
    active.value = value;
  },
  { immediate: true },
);
const onClick = () => {
  active.value = true;
  emits('changeResolution', props.resNum);
};
</script>

<style lang="scss" scoped></style>
