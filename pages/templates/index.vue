<template>
  <div id="main" class="main">
    <div class="inner">
      <Sidebar v-if="menuStore.leftMenuToggle" current-menu-url="/templates" />
      <section class="content-area">
        <article class="content-wrap">
          <div class="content-inner">
            <h3 class="content-title">
              비디오 템플릿 <span>나만의 스타일대로 템플릿을 꾸며보세요! 설정한 템플릿은 숏폼에 반영됩니다.</span>
            </h3>
            <div class="content-item template-item">
              <div class="recent-wrap template-wrap">
                <div class="title">
                  최근 사용한 템플릿<span class="date-view">25. 03. 04</span>
                </div>
                <div class="tamplate-box">
                  <div class="tamplate-edit">
                    <div class="templaete-inner">
                      <div class="templaete-img">
                        <img src="/images/template/recent-img.png" alt="최근 사용한 템플릿" />
                      </div>
                    </div>
                  </div>
                  <div class="bottom-item">
                    <div class="template-title">Dance battle</div>
                    <button class="deletBtn">
                      <img src="/images/template/delet-btn.svg" alt="휴지통 아이콘" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- 지난 템플릿 -->
              <!-- TODO 지난 템플릿은 반복문처리 -->
              <div class="past-wrap template-wrap">
                <div class="past-container">
                  <div class="title">지난 템플릿</div>
                  <!-- 지난 템플릿1 -->
                  <div class="past-item tamplate-box">
                    <span class="date-view">25. 03. 04</span>
                    <a href="#" class="tamplate-edit">
                      <div class="templaete-inner">
                        <div class="templaete-img">
                          <img src="/images/template/past-img1.png" alt="지난 템플릿1" />
                        </div>
                      </div>
                    </a>
                    <div class="bottom-item">
                      <div class="template-title">Dance battle</div>
                      <button class="deletBtn">
                        <img src="/images/template/delet-btn.svg" alt="휴지통 아이콘" />
                      </button>
                    </div>
                  </div>
                  <!-- 지난 템플릿2 -->
                  <div class="past-item tamplate-box">
                    <span class="date-view">25. 03. 04</span>
                    <a href="#" class="tamplate-edit">
                      <div class="templaete-inner">
                        <div class="templaete-img">
                          <img src="/images/template/past-img2.png" alt="지난 템플릿2" />
                        </div>
                      </div>
                    </a>
                    <div class="bottom-item">
                      <div class="template-title">Dance battle</div>
                      <button class="deletBtn">
                        <img src="/images/template/delet-btn.svg" alt="휴지통 아이콘" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="templateBtn-wrap">
            <button type="button" class="templaeteBtn">템플릿 추가하기</button>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue';
import { useUserStore, useMenuStore } from '@/stores'
// const userStore = useUserStore();
const menuStore = useMenuStore();

</script>

<style lang="scss" scoped></style>