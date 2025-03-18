<template>
  <section class="menu-area">
    <div class="content">
      <div class="offcanvas-wrap active">
        <div class="offcanvas">
          <div class="offcanvas-body">
            <nav id="nav">
              <ul class="gnb">
                <li
                  v-for="(item, index) in menuItem"
                  :key="index"
                  class="gnb-item"
                >
                  <template v-if="item.url == props.currentMenuUrl">
                    <LinkButton :url="item.url" classes="focusGnb">
                      <span class="gnb-txt-cont">
                        <div class="gnb-txt gnb-focus-txt">
                          <img :src="item.iconActiveUrl" alt="템플릿" />
                          {{ item.title }}
                        </div>
                      </span>
                    </LinkButton>
                  </template>
                  <template v-else>
                    <LinkButton :url="item.url" classes="">
                      <span class="gnb-txt">
                        <img :src="item.iconUrl" alt="템플릿" />
                        {{ item.title }}
                      </span>
                    </LinkButton>
                  </template>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import LinkButton from './common/LinkButton.vue';

const props = defineProps({
  currentMenuUrl: {
    type: String,
    default: '/',
  },
});

//TODO active, inactive svg 요청하기
const menuItem = ref([
  {
    title: '내 프로젝트',
    iconUrl: '/images/menu/my-project.svg',
    iconActiveUrl: '/images/menu/my-project-atv.svg',
    url: '/myproject',
  },
  {
    title: '탬플릿',
    iconUrl: '/images/menu/template.svg',
    iconActiveUrl: '/images/menu/template-atv.svg',
    url: '/templates',
  },
  {
    title: '구독하기',
    iconUrl: '/images/menu/subscribe.svg',
    iconActiveUrl: '/images/menu/subscribe-atv.svg',
    url: '/subscribe',
  },
  {
    title: '공지사항',
    iconUrl: '/images/menu/notice.svg',
    iconActiveUrl: '/images/menu/notice-atv.svg',
    url: '/notice',
  },
  {
    title: '고객센터',
    iconUrl: '/images/menu/service-center.svg',
    iconActiveUrl: '/images/menu/service-center-atv.svg',
    url: '/service',
  },
  {
    title: '사용 가이드',
    iconUrl: '/images/menu/guide-icon.svg',
    iconActiveUrl: '/images/menu/guide-icon-atv.svg',
    url: '/guide',
  },
]);
</script>

<style lang="css" scoped>
.menu-area {
  transform: translateX(0%);
  display: block !important;
}

.offcanvas-wrap {
  height: 100vh;
}

.offcanvas {
  transform: translateX(0%);
}

.drop-arrow.active .drop-left {
  transform: rotate(-45deg);
}

.drop-arrow.active .drop-right {
  transform: rotate(45deg);
}
</style>
