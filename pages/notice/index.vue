<template>
  <div id="main" class="main">
    <div class="inner">
      <Sidebar v-if="menuStore.leftMenuToggle" current-menu-url="/notice" />
      <section class="content-area">
        <article class="content-wrap">
          <div class="content-inner">
            <h3 class="content-title">
              공지 화면 <span>나만의 스타일대로 템플릿을 꾸며보세요! 설정한 템플릿은 숏폼에 반영됩니다.</span>
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
            </div>
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