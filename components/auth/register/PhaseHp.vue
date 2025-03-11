<template>
  <div>
    <div class="input_wrap">
      <div class="input_container">
        <label for="name" class="input_title">
          <input id="name" type="text" placeholder="이름" />
        </label>
      </div>
      <div class="input_container m-top20">
        <label for="phone" class="input_title">
          <input id="phone" v-model="phone" type="tel" placeholder="휴대전화" />
        </label>
        <CertButton :initial-time="180" @request-code="() => {}" />

        <!-- <button class="focusBtn" type="button">인증번호 전송</button> -->
      </div>
      <div class="input_container m-top20">
        <label for="code" class="password_container">
          <input id="code" v-model="code" type="text" placeholder="인증번호" />
        </label>
        <button class="n-focusBtn" type="button">확인</button>
      </div>
    </div>
    <div class="btn_wrap">
      <button type="button" class="finishBtn" @click="next">다음</button>
    </div>
  </div>
</template>

<script setup>
import CertButton from '~/components/common/CertButton.vue';
const emit = defineEmits(['handleNext']);
const next = () => {
  emit('handleNext', {
    nextPhase: '2',
    data: {
      phone: phone.value,
    },
  });
};
const phone = ref('');
const code = ref('');
</script>

<style lang="scss" scoped></style>
