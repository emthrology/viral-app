<template>
  <div class="delet-check-pop pop-wrap">
    <div class="pop-inner">
      <p class="pop-text">선택하신 컨텐츠를 정말로 삭제하시겠습니까?</p>
      <div class="popBtn-wrap">
        <div class="popBtn01 popBtn-item">
          <button class="noBtn" type="button">아니오</button>
        </div>
        <div class="popBtn02 popBtn-item ">
          <button class="yesBtn" type="button">예</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => '모달 제목'
  },
  yea: {
    type: String,
    default: () => 'yea'
  },
  nay: {
    type: String,
    default: () => 'nay'
  }
})
const emit = defineEmits(['clickYea', 'clickNay'])
</script>

<style lang="scss" scoped></style>