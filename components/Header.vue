<template>
  <div id="header" class="header sub-header">
    <div class="inner">
      <div class="content">
        <div class="left-content">
          <button
            v-if="userStore.isAuthenticated"
            type="button"
            class="offcanvas-open"
            @click="toggleLeftMenu"
          >
            <span />
            <span />
            <span />
          </button>
          <h1 class="logo">
            <LinkButton classes="logo-img" url="/main">
              <img
                class="logo-img"
                src="/images/offcanvas-logo.svg"
                alt="viral-main-logo"
              />
            </LinkButton>
          </h1>
          <span class="beta-badge">Beta</span>
        </div>

        <!-- 로그인 전 보여짐 -->
        <ul v-if="!userStore.isAuthenticated" class="right-content">
          <li>
            <LinkButton classes="loginBtn" url="/auth/login">
              로그인
            </LinkButton>
          </li>
          <li>
            <LinkButton classes="signupBtn" url="/auth/register">
              회원가입
            </LinkButton>
          </li>
        </ul>
        <!-- 로그인 후 보여짐 -->
        <ul v-else class="right-content log-after">
          <li>
            <LinkButton classes="guideBtn after-item" url="/guide">
              <img src="/images/hd-guide.svg" alt="사용가이드 아이콘" />
              사용 가이드
            </LinkButton>
          </li>
          <li>
            <!-- TODO userStore.userData로부터 남은 카운트 받아와야함 그리고 구독자는 이거 표시되면 안됨 -->
            <LinkButton classes="countBadge after-item" url="/">
              <img src="/images/time-count.svg" alt="무료 횟수 카운트" /> 5/5
            </LinkButton>
          </li>
          <li class="add-icon">
            <div class="circle" @click="toggleRightSubMenu">
              <span />
              <span />
              <span />
            </div>
            <div v-if="menuStore.rightMenuToggle" class="add-item">
              <div class="item">
                <a href="subscrib-info.html">구독정보</a>
              </div>
              <div class="item">
                <a href="info.html">내 정보</a>
              </div>
              <div class="item">
                <a href="index.html">로그아웃</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkButton from './common/LinkButton.vue';
import { useUserStore, useMenuStore } from '@/stores';
const userStore = useUserStore();
const menuStore = useMenuStore();

const toggleRightSubMenu = () => {
  menuStore.toggleRightMenu();
};
const toggleLeftMenu = () => {
  menuStore.toggleLeftMenu();
};
</script>

<style lang="scss" scoped></style>
