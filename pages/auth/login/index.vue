<template>
  <div id="main" class="user-auth">
    <div class="inner">
      <div class="user-auth-wrap login-wrap">
        <h3 class="main-title">로그인</h3>
        <div class="input_wrap">
          <div class="input_container">
            <label for="id" class="input_title">
              <input id="id" type="text" placeholder="아이디" />
            </label>
          </div>
          <div class="input_container m-top20">
            <label for="password" class="password_container">
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                oninput="updatePassword()"
              />
              <span class="eyeBtn">
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
                    fill="#999"
                  />
                </svg>
              </span>
            </label>
          </div>
        </div>
        <div class="btn_wrap">
          <!-- <button type="button" class="finishBtn" onclick="location.href='home-after.html'">로그인</button> -->
          <Button classes="finishBtn" @click="testLogin"> 로그인 </Button>
        </div>
        <ul class="user_account">
          <li>
            <LinkButton url="/auth/register"> 회원가입 </LinkButton>
          </li>
          <li>
            <LinkButton url="/auth/find/id"> 아이디 찾기 </LinkButton>
          </li>
          <li>
            <LinkButton url="/auth/find/password"> 비밀번호 찾기 </LinkButton>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkButton from '~/components/common/LinkButton.vue';
import Button from '@/components/common/Button.vue';
import { useUserStore } from '@/stores';
const store = useUserStore();
const router = useRouter();
const testLogin = () => {
  //TODO 스토어 상태값 변경은 fetch로 로그인 성공시에 하기
  store.test_login();
  router.push('/main');
};
</script>

<style lang="scss" scoped></style>
