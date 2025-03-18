<template>
  <div id="main" class="main">
    <div class="inner">
      <Sidebar v-if="menuStore.leftMenuToggle" current-menu-url="/templates" />
      <section class="content-area">
        <article class="content-wrap">
          <div class="alert">
            비디오 템플릿은 최대 3개까지 생성이 가능합니다.
          </div>

          <article class="content-inner video-inner">
            <h3 class="content-title m-top50">
              비디오 템플릿 스타일
              <span class="title-descript"
                >나만의 스타일대로 템플릿을 꾸며보세요! 설정한 템플릿은 숏폼에
                반영됩니다.</span
              >
            </h3>

            <div class="content-item template-item">
              <!-- 최근 사용한 템플릿 -->
              <RecentTemplateCard
                :is-recent="true"
                classes="recent-wrap template-wrap"
                title="최근 사용한 템플릿"
                date="25.03.04"
                @on-delete="openDeleteModal"
              />
              <!-- 지난 템플릿 -->
              <div class="past-wrap template-wrap">
                <div class="past-container">
                  <div class="title">지난 템플릿</div>
                  <!-- 지난 템플릿1 -->
                  <PastTemplateCard
                    classes="past-item template-box"
                    date="25.03.04"
                    template-image="/images/template/past-img1.png"
                    @on-delete="openDeleteModal"
                  />
                  <!-- 지난 템플릿2 -->
                  <PastTemplateCard
                    classes="past-item template-box"
                    date="25.03.04"
                    template-image="/images/template/past-img2.png"
                    @on-delete="openDeleteModal"
                  />
                </div>
              </div>
            </div>
          </article>
          <div class="templateBtn-wrap">
            <button
              type="button"
              class="templaeteBtn"
              onclick="location.href='video-making.html'"
            >
              템플릿 추가하기
            </button>
          </div>
        </article>
      </section>
    </div>
    <Confirm
      v-if="toggleModal"
      title="선택하신 템플릿을 정말로 삭제하시겠습니까?"
      yea="예"
      nay="아니오"
      @click-yea="deleteTemplate('param \'id\' is supposed to be here')"
      @click-nay="closeDeleteModal"
    />
  </div>
</template>

<script setup>
import RecentTemplateCard from '~/components/templates/RecentTemplateCard.vue';
import PastTemplateCard from '~/components/templates/PastTemplateCard.vue';
// import Button from '~/components/common/Button.vue';
import Confirm from '~/components/common/Confirm.vue';
import Sidebar from '~/components/Sidebar.vue';
import { useMenuStore } from '@/stores';
definePageMeta({
  title: 'Viral',
  description: '탬플릿',
  middleware: ['sanctum:auth'],
});
// const userStore = useUserStore();
const menuStore = useMenuStore();
const toggleModal = ref(false);
const openDeleteModal = () => {
  toggleModal.value = true;
};
const closeDeleteModal = () => {
  toggleModal.value = false;
};
// TODO delete template throuth api
const deleteTemplate = id => {
  console.log(`delete temlate ${id}`);
};
</script>

<style lang="css" scoped></style>
