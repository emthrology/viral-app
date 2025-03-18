<template>
  <div
    class="cut-ai cut-item flex"
    :class="active ? 'b2-show' : ''"
    @click="onClick"
  >
    <span class="cut-icon">
      <img class="cut-img" :src="props.iconSrc" :alt="props.cutTitle" />
    </span>
    <ul class="cut-text">
      <li class="cut-title cut-text-item">{{ props.cutTitle }} 자르기</li>
      <li class="cut-cap cut-text-item">
        {{ props.cutCap }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  iconSrc: {
    type: String,
    default: '/images/videoMaking/cut-ai.svg',
  },
  cutTitle: {
    type: String,
    default: 'AI',
  },
  cutCap: {
    type: String,
    default: '시청자의 관심을 살 수 있는 구간을 AI가 찾아내어 편집합니다.',
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['changeCutway']);
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
  emits('changeCutway', props.cutTitle);
};
</script>

<style lang="scss" scoped></style>
