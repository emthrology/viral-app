<template>
  <div class="past-item template-box" @click="onClick">
    <div class="template-edit template-100" :class="{ 'b2-show': active }">
      <div class="templaete-img">
        <img class="img-item" :src="props.imgUrl" :alt="props.title" />
      </div>
    </div>
    <div class="my-template-title">{{ props.title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: 'Dance battle',
  },
  imgUrl: {
    type: String,
    default: '/images/template/recent-img.png',
  },
});
const emits = defineEmits(['changeTemplate']);
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
  emits('changeTemplate', props.id);
};
</script>

<style lang="scss" scoped></style>
