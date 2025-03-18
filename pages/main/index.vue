<template>
  <div id="main" class="main">
    <div class="inner">
      <section class="content-area">
        <article class="content-wrap">
          <div class="content-inner intro-inner">
            <div class="intro">
              <section class="section sec1">
                <div class="cont-wrapper">
                  <div class="cont-inner">
                    <div class="cont1">
                      <h1>
                        매력적인 숏폼을 <br />
                        빠르게 만들어드려요.
                      </h1>
                      <div class="sub-cont">
                        짧고 핵심적인 숏폼, <br class="mob-br" />
                        함께 스포트라이트를 받아볼까요?
                      </div>
                    </div>
                    <div class="cont2">
                      <p>
                        AI 메이커로 여러분만의 <br class="mob-br2" />
                        숏폼 컨텐츠를 만들어보세요!
                      </p>
                      <input
                        v-model="targetUrl"
                        type="text"
                        placeholder="https://www.youtube.com/watch?v="
                      />
                      <button @click="router.push('/auth/login')">
                        변환하기
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 14"
                          class="icon"
                        >
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M2.82051 0C2.07247 0 1.35506 0.289731 0.826109 0.805456C0.29716 1.32118 0 2.02065 0 2.75V11.25C0 11.9793 0.29716 12.6788 0.826109 13.1945C1.35506 13.7103 2.07247 14 2.82051 14H11.5385C12.2865 14 13.0039 13.7103 13.5329 13.1945C14.0618 12.6788 14.359 11.9793 14.359 11.25V9.656L17.8656 12.701C18.6913 13.418 20 12.846 20 11.767V1.865C20 0.785 18.6913 0.214 17.8656 0.931L14.359 3.976V2.75C14.359 2.02065 14.0618 1.32118 13.5329 0.805456C13.0039 0.289731 12.2865 0 11.5385 0H2.82051Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section class="sec2 m-top140" style="margin: 0 auto">
                <div class="img-wrapper">
                  <div class="lottie-player">
                    <div class="lottie-item">
                      <DotLottieVue
                        src="https://lottie.host/8fab4f6c-a525-49a5-89ab-e7c8883ed75d/aAzZ0gwVBL.lottie"
                        background="transparent"
                        :speed="0.2"
                        autoplay
                      />
                    </div>
                    <div class="lottie-item">
                      <DotLottieVue
                        src="https://lottie.host/7675dbaf-b928-47e6-9d71-c8b940fc5302/DymP2K9R9u.lottie"
                        background="transparent"
                        :speed="0.2"
                        autoplay
                      />
                    </div>
                    <div class="lottie-item">
                      <DotLottieVue
                        src="https://lottie.host/e0631de2-2926-42ed-8f85-71fd8ba81712/yFTDJEaEtJ.lottie"
                        background="transparent"
                        :speed="0.2"
                        autoplay
                      />
                    </div>
                    <div class="lottie-item">
                      <DotLottieVue
                        src="https://lottie.host/6a3974cf-cb55-44ce-919f-8b970e064ad6/ipAmL83v7z.lottie"
                        background="transparent"
                        :speed="0.2"
                        autoplay
                      />
                    </div>
                    <div class="lottie-item">
                      <DotLottieVue
                        src="https://lottie.host/940ccf76-55de-45e5-a271-88c7bef9e6ac/qNUCwcDO0O.lottie"
                        background="transparent"
                        :speed="1"
                        autoplay
                      />
                    </div>
                  </div>
                </div>
              </section>
              <TriggerObserver
                :threshold="0.2"
                root-m-argin="-50px"
                @toggle-active="toggleSec3"
              >
                <section class="section sec3 m-top140 m-btm22vw">
                  <div class="cont-wrapper">
                    <div class="f-text">
                      <p class="main-text">
                        바이럴 AI로 영상 편집, <br class="mob-br" />
                        더 쉽고 빠르게
                      </p>
                      <p class="sub-text">10배 빠른 숏폼제작</p>
                    </div>
                    <div class="image-wrapper">
                      <img
                        src="/images/main/wave4.png"
                        alt="Wave Image"
                        class="wave-img"
                        :class="sec3Active ? 'active' : ''"
                      />
                      <img
                        src="/images/main/arrow.png"
                        alt="Arrow Image"
                        class="arrow-img"
                        :class="sec3Active ? 'active' : ''"
                      />
                      <div class="content-wrapper">
                        <div
                          class="l-container"
                          :class="sec3Active ? 'active' : ''"
                        >
                          <div
                            class="box one"
                            :class="sec3Active ? 'active' : ''"
                          >
                            <div class="small-box left">
                              <img src="/images/main/img1.png" alt="이미지1" />
                            </div>
                            <div class="small-box right">
                              <div class="s-title">
                                게스트 방의 짜임새 있는 가구 배치
                              </div>
                              <div class="s-time">00:34</div>
                              <div class="s-star">
                                <img src="/images/main/star.png" alt="star" />
                              </div>
                            </div>
                          </div>
                          <div
                            class="box two"
                            :class="sec3Active ? 'active' : ''"
                          >
                            <div class="small-box left">
                              <img src="/images/main/img2.png" alt="이미지2" />
                            </div>
                            <div class="small-box right">
                              <div class="s-title">
                                신발장에 숨어있는 힐링템의 정체는?
                              </div>
                              <div class="s-time">00:34</div>
                              <div class="s-star">
                                <img src="/images/main/star.png" alt="star" />
                              </div>
                            </div>
                          </div>
                          <div
                            class="box three"
                            :class="sec3Active ? 'active' : ''"
                          >
                            <div class="small-box left">
                              <img src="/images/main/img3.png" alt="이미지3" />
                            </div>
                            <div class="small-box right">
                              <div class="s-title">
                                신발장에 숨어있는 힐링템의 정체는?
                              </div>
                              <div class="s-time">00:34</div>
                              <div class="s-star">
                                <img src="/images/main/star.png" alt="star" />
                              </div>
                            </div>
                          </div>
                          <div
                            class="box four"
                            :class="sec3Active ? 'active' : ''"
                          >
                            <div class="small-box left">
                              <img src="/images/main/img4.png" alt="이미지4" />
                            </div>
                            <div class="small-box right">
                              <div class="s-title">
                                버려진 캡슐통의 화려한 변신!
                              </div>
                              <div class="s-time">00:34</div>
                              <div class="s-star">
                                <img src="/images/main/star.png" alt="star" />
                              </div>
                            </div>
                          </div>
                          <div
                            class="box five"
                            :class="sec3Active ? 'active' : ''"
                          >
                            <div class="small-box left">
                              <img src="/images/main/img5.png" alt="이미지5" />
                            </div>
                            <div class="small-box right">
                              <div class="s-title">
                                납득할 수 밖에 없는 복층 선택의 이유
                              </div>
                              <div class="s-time">00:34</div>
                              <div class="s-star">
                                <img src="/images/main/star.png" alt="star" />
                              </div>
                            </div>
                          </div>
                          <div
                            class="box six"
                            :class="sec3Active ? 'active' : ''"
                          >
                            <div class="small-box left">
                              <img src="/images/main/img6.png" alt="이미지6" />
                            </div>
                            <div class="small-box right">
                              <div class="s-title">
                                납득할 수 밖에 없는 복층 선택의 이유
                              </div>
                              <div class="s-time">00:34</div>
                              <div class="s-star">
                                <img src="/images/main/star.png" alt="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button :class="sec3Active ? 'active' : ''">
                          자세히 보러가기
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </TriggerObserver>
              <TriggerObserver
                :threshold="0.5"
                root-m-argin="0px"
                @toggle-active="toggleSec4"
              >
                <section
                  class="section sec4"
                  :class="sec4Active ? 'active' : ''"
                >
                  <div class="cont-wrapper">
                    <div class="r-text">
                      <p class="main-text">
                        바이럴 AI 리뷰와 별점으로 <br class="mob-br" />
                        쇼폼 퀄리티 UP!
                      </p>
                      <p class="sub-text">
                        영상 제작부터 리뷰까지, 바이럴이 다 해준다!
                      </p>
                    </div>
                    <div class="review-box">
                      <img
                        src="/images/main/sec4-1.png"
                        alt="이미지1"
                        class="img img1"
                      />
                      <img
                        src="/images/main/sec4-2.png"
                        alt="이미지2"
                        class="img img2"
                      />
                      <img
                        src="/images/main/sec4-3.png"
                        alt="이미지3"
                        class="img img3"
                      />
                      <img
                        src="/images/main/sec4-4.png"
                        alt="이미지4"
                        class="img img4"
                      />
                    </div>
                  </div>
                </section>
              </TriggerObserver>

              <section class="section sec5 m-top140">
                <div class="cont-wrapper">
                  <div class="c-text">
                    <p class="main-text">
                      원하는대로 100% 커스터마이징<br />
                      독보적인 콘텐츠 제작
                    </p>
                    <p class="sub-text">
                      제목부터 자막,편집까지 당신의 취향 그대로,
                      <br class="mob-br" />
                      개인 크리에이터부터 기업 브랜드까지
                    </p>
                    <TriggerObserver
                      :threshold="0.5"
                      root-m-argin="0px"
                      @toggle-active="toggleSec5"
                    >
                      <div class="custom-box">
                        <img
                          src="/images/main/sec5-1.png"
                          alt="이미지1"
                          class="img img1"
                          :class="sec5Active ? 'visible' : ''"
                        />
                        <img
                          src="/images/main/sec5-2.png"
                          alt="이미지2"
                          class="img img2"
                          :class="sec5Active ? 'visible' : ''"
                        />
                      </div>
                    </TriggerObserver>
                  </div>
                </div>
              </section>
              <TriggerObserver
                :threshold="0.5"
                root-m-argin="0px"
                @toggle-active="toggleSec6"
              >
                <section
                  class="section sec6 m-top140"
                  :class="sec6Active ? 'active' : ''"
                >
                  <div class="cont-wrapper">
                    <div class="cont1">
                      <img
                        src="/images/main/sec6-1.png"
                        alt="Icon"
                        class="img-main"
                      />
                      <img
                        src="/images/main/sec6-2.png"
                        alt="Trand"
                        class="img-top-left"
                      />
                      <img
                        src="/images/main/sec6-4.png"
                        alt="Click"
                        class="img-bottom-right"
                      />
                      <img
                        src="/images/main/sec6-3.png"
                        alt="Video"
                        class="img-bottom-right-offset"
                      />
                    </div>
                    <div class="cont2">
                      <h1 class="main-text">고품질 숏폼을 빠르게 제작하고,</h1>
                      <h1 class="sub-text">
                        지금 바로 <strong>콘텐츠 혁신</strong>의
                        <br class="mob-br2" />
                        주인공이 되세요!
                      </h1>
                      <button @click="router.push('/auth/login')">
                        무료로 시작하기
                      </button>
                    </div>
                  </div>
                </section>
              </TriggerObserver>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from '@/stores';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
// const userStore = useUserStore();
await preloadComponents('DotLottieVue');
definePageMeta({
  title: '메인',
  description: '메인 페이지',
  middleware: ['sanctum:guest'],
});
const router = useRouter();
const targetUrl = ref('');
const sec3Active = ref(false);
const sec4Active = ref(false);
const sec5Active = ref(false);
const sec6Active = ref(false);
const menuStore = useMenuStore();
const toggleSec3 = active => {
  sec3Active.value = active;
};
const toggleSec4 = active => {
  sec4Active.value = active;
};
const toggleSec5 = active => {
  sec5Active.value = active;
};
const toggleSec6 = active => {
  sec6Active.value = active;
};

// const generateVideo = () => {
//   if (!targetUrl.value) {
//     alert('URL을 입력해주세요.');
//     return;
//   }
//   const regExp = /^https?:\/\/[^\s]+$/;
//   if (!regExp.test(targetUrl.value)) {
//     alert('URL 형식이 올바르지 않습니다.');
//     return;
//   }
//   const videoId = targetUrl.value.split('v=')[1];
//   router.push(`/generate?videoId=${videoId}`);
// };
onMounted(() => {
  menuStore.leftMenuToggle = true;
});
</script>

<style lang="scss" scoped></style>
