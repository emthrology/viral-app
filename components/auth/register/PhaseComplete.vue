<template>
  <div>
    <div class="user-auth-wrap login-wrap">
      <div class="img_wrap">
        <img
          class="img"
          src="/images/user-auth/register.png"
          alt="바이럴 로고2"
        />
      </div>
      <div class="textContainer">
        회원가입이 완료되었습니다 <br />
        바이럴 서비스를 이용해보세요
      </div>
      <div class="btn_wrap">
        <div class="btn-container">
          <button
            type="button"
            class="homeBtn"
            onclick="location.href='home-after.html'"
          >
            홈으로
          </button>
        </div>
        <div class="btn-container">
          <button
            type="button"
            class="finishBtn"
            onclick="location.href='login.html'"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
