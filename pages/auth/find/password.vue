<template>
  <div id="main" class="user-auth">
    <FindComponent classes="find-pw" title="비밀번호 찾기">
      <template v-if="!certificated">
        <div class="guide-title">
          등록된 휴대폰 번호로 찾기
          <span>
            가입 당시 입력한 휴대전화번호를 통해 인증 후<br class="mob-br" />새
            비밀번호로 변경해주세요.
          </span>
        </div>
        <div class="input_wrap">
          <div class="input_container">
            <label for="id" class="input_title">
              <input id="id" v-model="id" type="text" placeholder="아이디" />
            </label>
          </div>
          <div class="input_container m-top20">
            <label for="phone" class="input_title">
              <input
                id="phone"
                v-model="phone"
                type="tel"
                placeholder="휴대전화"
              />
            </label>
            <CertButton :initial-time="180" @request-code="() => {}" />
          </div>
          <div class="input_container m-top20">
            <label for="code" class="password_container">
              <input
                id="code"
                v-model="code"
                type="text"
                placeholder="인증번호"
              />
            </label>
            <button class="n-focusBtn" type="button">확인</button>
          </div>
        </div>
        <div class="btn_wrap">
          <button type="button" class="finishBtn" @click="findPw">
            비밀번호 찾기
          </button>
        </div>
      </template>
      <template v-else>
        <div class="guide-title">새 비밀번호 설정 후, 로그인해 주세요.</div>
        <div class="input_wrap">
          <div class="input_container">
            <label for="new-pw" class="input_title">
              <input
                id="newPw"
                v-model="newPw"
                type="password"
                placeholder="새 비밀번호"
              />
            </label>
          </div>
          <div class="input_container m-top20">
            <label for="check-pw" class="input_title">
              <input
                id="checkPw"
                v-model="checkPw"
                type="password"
                placeholder="비밀번호 확인"
              />
            </label>
          </div>
        </div>
        <div class="btn_wrap">
          <button
            type="button"
            class="finishBtn"
            onclick="location.href='index.html'"
          >
            비밀번호 변경하기
          </button>
        </div>
      </template>
    </FindComponent>
  </div>
</template>

<script setup>
import FindComponent from '~/components/auth/FindComponent.vue';
import CertButton from '~/components/common/CertButton.vue';
definePageMeta({
  title: 'Viral',
  description: '비밀번호 찾기',
  middleware: ['sanctum:guest'],
});
const id = ref('');
const phone = ref('');
const code = ref('');
const newPw = ref('');
const checkPw = ref('');
const certificated = ref(false);
const findPw = () => {
  certificated.value = true;
};
</script>

<style lang="scss" scoped></style>
