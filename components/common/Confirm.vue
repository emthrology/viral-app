<template>
  <div class="delet-check-pop pop-wrap">
    <div class="pop-inner">
      <p class="pop-text">{{ props.title }}</p>
      <div class="popBtn-wrap">
        <div class="popBtn01 popBtn-item">
          <button class="noBtn" @click="handleClickNay">{{ props.nay }}</button>
        </div>
        <div class="popBtn02 popBtn-item">
          <button class="yesBtn" @click="handleClickYea">
            {{ props.yea }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => '제목',
  },
  yea: {
    type: String,
    default: () => 'yea',
  },
  nay: {
    type: String,
    default: () => 'nay',
  },
});
const emit = defineEmits(['clickYea', 'clickNay']);
const handleClickYea = () => {
  emit('clickYea');
};
const handleClickNay = () => {
  emit('clickNay');
};
</script>

<style lang="css" scoped></style>
