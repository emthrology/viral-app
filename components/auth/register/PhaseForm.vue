<template>
  <div>
    <div class="input_wrap">
      <div class="input_container">
        <label for="nickname" class="input_title">
          <input
            id="nickname"
            v-model="nickname"
            type="text"
            placeholder="닉네임"
          />
        </label>
        <button
          :class="`${nickname ? 'focusBtn' : 'n-focusBtn'}`"
          type="button"
        >
          중복 확인
        </button>
      </div>
      <div class="input_container m-top20">
        <label for="loginId" class="input_title">
          <input
            id="loginId"
            v-model="loginId"
            type="text"
            placeholder="아이디"
          />
        </label>
        <button :class="`${loginId ? 'focusBtn' : 'n-focusBtn'}`" type="button">
          중복 확인
        </button>
      </div>
      <div class="input_container m-top20">
        <label for="password" class="password_container">
          <input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="비밀번호"
          />
          <span class="eyeBtn" @click="toggleShowPassword">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99997 0.25C5.91882 0.25 2.36847 2.51686 0.542558 5.85557C0.152487 6.56882 0.15248 7.43102 0.54254 8.14428C2.36843 11.4831 5.91882 13.75 10 13.75C14.0812 13.75 17.6315 11.4831 19.4574 8.14443C19.8475 7.43118 19.8475 6.56898 19.4575 5.85572C17.6316 2.51694 14.0812 0.25 9.99997 0.25ZM10 4.75C8.75736 4.75 7.75 5.75736 7.75 7C7.75 8.24264 8.75736 9.25 10 9.25C10.6805 9.25 11.2904 8.94794 11.7029 8.47059C11.0168 8.33275 10.5 7.72673 10.5 7C10.5 6.27327 11.0168 5.66725 11.7029 5.52941C11.2904 5.05206 10.6805 4.75 10 4.75ZM6.25 7C6.25 4.92893 7.92893 3.25 10 3.25C12.0711 3.25 13.75 4.92893 13.75 7C13.75 9.07107 12.0711 10.75 10 10.75C7.92893 10.75 6.25 9.07107 6.25 7Z"
                :fill="showPassword ? '#222' : '#999'"
              />
            </svg>
          </span>
        </label>
      </div>
      <div class="input_container m-top20">
        <label for="check-password" class="password_container">
          <input
            id="check-password"
            v-model="passwrodCheck"
            :type="showPassword ? 'text' : 'password'"
            placeholder="비밀번호 확인"
          />
          <span class="eyeBtn" @click="toggleShowPassword">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99997 0.25C5.91882 0.25 2.36847 2.51686 0.542558 5.85557C0.152487 6.56882 0.15248 7.43102 0.54254 8.14428C2.36843 11.4831 5.91882 13.75 10 13.75C14.0812 13.75 17.6315 11.4831 19.4574 8.14443C19.8475 7.43118 19.8475 6.56898 19.4575 5.85572C17.6316 2.51694 14.0812 0.25 9.99997 0.25ZM10 4.75C8.75736 4.75 7.75 5.75736 7.75 7C7.75 8.24264 8.75736 9.25 10 9.25C10.6805 9.25 11.2904 8.94794 11.7029 8.47059C11.0168 8.33275 10.5 7.72673 10.5 7C10.5 6.27327 11.0168 5.66725 11.7029 5.52941C11.2904 5.05206 10.6805 4.75 10 4.75ZM6.25 7C6.25 4.92893 7.92893 3.25 10 3.25C12.0711 3.25 13.75 4.92893 13.75 7C13.75 9.07107 12.0711 10.75 10 10.75C7.92893 10.75 6.25 9.07107 6.25 7Z"
                :fill="showPassword ? '#222' : '#999'"
              />
            </svg>
          </span>
        </label>
      </div>

      <!-- <div class="m-top40">주민번호 입력</div>
      <div class="input_container m-top20 residentNum-input">
        <label for="fist-residentNum" class="resident-label">
          <input
            id="before-residentNum"
            class="fist-residentNum"
            type="text"
            placeholder="주민번호 앞자리 6자"
            maxlength="6"
            inputmode="numeric"
            pattern="[0-9]*"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          />
        </label>
        <span> - </span>
        <label for="after-residentNum" class="resident-label">
          <input
            id="after-residentNum"
            class="after-residentNum"
            type="password"
            maxlength="1"
            inputmode="numeric"
            pattern="[0-9]*"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          />
        </label>
        <span>******</span>
      </div> -->
    </div>
    <div class="btn_wrap">
      <button type="button" class="finishBtn" @click="next">회원가입</button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['handleNext']);
const nickname = ref('');
const loginId = ref('');
const password = ref('');
const passwrodCheck = ref('');
const showPassword = ref(false);

const formValid = computed(() => {
  return (
    nickname.value !== '' &&
    loginId.value !== '' &&
    password.value !== '' &&
    passwrodCheck.value !== '' &&
    password.value === passwrodCheck.value
  );
});
const next = () => {
  if (!formValid.value) {
    alert('정보를 올바르게 입력해주세요');
    return;
  }
  emit('handleNext', {
    nextPhase: '4',
    data: {
      nickname: nickname.value,
      loginId: loginId.value,
      password: password.value,
    },
  });
};

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});
</script>

<style lang="scss" scoped></style>
