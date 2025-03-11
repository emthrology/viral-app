<template>
  <div id="main" class="user-auth">
    <FindComponent classes="" title="아이디 찾기">
      <template v-if="!certificated">
        <div class="guide-title">
          등록된 휴대폰 번호로 찾기
          <span>
            가입 당시 입력한 휴대전화번호를 통해 인증 후<br
              class="mob-br"
            />아이디를 찾아주세요.
          </span>
        </div>
        <div class="input_wrap">
          <div class="input_container">
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
          <button type="button" class="finishBtn" @click="fineId">
            아이디 찾기
          </button>
        </div>
      </template>
      <template v-else>
        <div class="guide-title">아래의 아이디로 로그인 해주세요.</div>
        <div class="id-result">
          회원님의 아이디는 <b>{{ userId }}</b> 입니다.
        </div>
        <div class="btn_wrap">
          <button
            type="button"
            class="finishBtn"
            @click="router.push('/auth/login')"
          >
            로그인 페이지로 이동하기
          </button>
        </div>
      </template>
    </FindComponent>
  </div>
</template>

<script setup>
import FindComponent from '~/components/auth/FindComponent.vue';
import CertButton from '~/components/common/CertButton.vue';
const router = useRouter();
const userId = ref('000100');
const phone = ref('');
const code = ref('');

const certificated = ref(false);
const fineId = () => {
  certificated.value = true;
};
</script>

<style lang="scss" scoped></style>
