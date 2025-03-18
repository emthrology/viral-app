<template>
  <div id="main" class="main user-auth">
    <div class="inner">
      <Sidebar v-if="menuStore.leftMenuToggle" current-menu-url="/myproject" />
      <!-- 컨텐츠 영역 -->
      <section class="content-area">
        <article class="content-wrap">
          <div class="inner wait-inner">
            <div class="user-auth-wrap agree-wrap">
              <div class="project-wait-img">
                <img
                  class="img-item"
                  src="/images/projectV/wait-img.png"
                  alt="비디오 변환 중"
                />
              </div>
              <h3 class="main-title font-IBM">
                예상 소요 시간은
                <span class="highlight-time font-IBM"
                  >{{ formattedTime(time) }}
                </span>
                입니다
              </h3>
              <div class="guide-title">
                <span>
                  이용자 대기순번에 따라 소요 시간이 바뀔 수 있습니다.
                </span>
              </div>
              <div class="btn_wrap">
                <button
                  type="button"
                  class="finishBtn"
                  @click="router.replace('/myproject')"
                >
                  내 프로젝트로 이동
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Viral',
  description: '영상 생성',
  middleware: ['sanctum:auth'],
});
const menuStore = useMenuStore();
const { query } = useRoute();
const router = useRouter();
const timer = ref(null);
const time = ref(query.waitTime || 0); // 쿼리 파라미터로 초기값 설정

const startTimer = () => {
  timer.value = setInterval(() => {
    if (time.value > 0) {
      time.value--;
      localStorage.setItem('timerTime', time.value); // 타이머가 작동할 때마다 저
    } else {
      clearInterval(timer.value);
      localStorage.removeItem('timerTime'); // 타이머가 끝나면 저장된 값을 제거
    }
  }, 1000);
};
const formattedTime = time => {
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;
  return `${String(mins).padStart(2, '0')}분${String(secs).padStart(2, '0')}초`;
};
onMounted(() => {
  // localStorage에 저장된 시간을 불러옴
  if (localStorage.getItem('timerTime')) {
    time.value = parseInt(localStorage.getItem('timerTime'));
  }
  startTimer();
});
</script>

<style lang="scss" scoped></style>
