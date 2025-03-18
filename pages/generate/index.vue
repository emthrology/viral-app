<template>
  <!-- main 또는 myProjects에서 '생성하기' 버튼 누르면 넘어오는 화면 -->
  <div id="main" class="main">
    <div class="inner">
      <Sidebar v-if="menuStore.leftMenuToggle" current-menu-url="/myproject" />
      <section class="content-area">
        <article class="content-wrap">
          <div class="content-inner making2-inner">
            <!-- 비디오 재생 및 해상도 선택 -->
            <div class="media-frame flex">
              <div class="vedio-thum media-item">
                <img
                  v-if="!query.videoId"
                  class="user-video"
                  :src="videoThumbnail"
                />
                <img
                  v-else
                  :src="getThumbnail"
                  class="user-video"
                  alt="비디오 썸네일"
                />
              </div>
              <div class="resolution-container media-item">
                <ul class="resolution-wrap flex">
                  <GenerateResolutionCard
                    v-for="(option, index) in resulutionOptions"
                    :key="index"
                    :res-title="option.title"
                    :res-num="option.num"
                    :res-subtitle="option.subtitle"
                    :selected="selectedResolution === option.num"
                    @change-resolution="seletReolution"
                  />
                </ul>
              </div>
            </div>
            <div v-if="phase == 'cut'" class="cut-wrap">
              <!-- 자르기 방법 선택 -->
              <div class="cut-way-wrap flex">
                <GenerateCutwayCard
                  v-model="selectedCutway"
                  icon-src="/images/videoMaking/cut-ai.svg"
                  cut-title="AI"
                  cut-cap="시청자의 관심을 살 수 있는 구간을 AI가 찾아내어 편집합니다."
                  :selected="selectedCutway === 'AI'"
                  @change-cutway="selectCutway"
                />
                <GenerateCutwayCard
                  v-model="selectedCutway"
                  icon-src="/images/videoMaking/cut-self.svg"
                  cut-title="셀프"
                  cut-cap="시청자에게 보일 내용을 목적에 맞게 구간을 설정시킵니다. (최대 5개)"
                  :selected="selectedCutway === '셀프'"
                  @change-cutway="selectCutway"
                />
              </div>
              <!-- 변환구간 -->
              <div class="cut-panel-wrap">
                <div class="pannel-title">
                  변환 구간
                  <span class="block"
                    >숏폼으로 변환시킬 영상의 시간을 설정해주세요.</span
                  >
                </div>
                <div class="pannel-container">
                  <!-- ai 자르기 변환 구간 -->
                  <GenerateClipTimePanel
                    v-if="selectedCutway === 'AI'"
                    warn-text="최소 5분 이상의 구간을 설정해주세요."
                    :delete-button="false"
                    :duration="duration"
                  />

                  <!-- 셀프 자르기 변환 구간 -->
                  <div v-else class="slef-pannel">
                    <component
                      :is="GenerateClipTimePanel"
                      v-for="(component, index) in components.list"
                      :id="component.id"
                      :key="index"
                      :warn-text="component.warnText"
                      :delete-button="component.deleteButton"
                      :duration="duration"
                      @delete="deleteClipPanel"
                    />

                    <!-- 설정 추가하기 버튼 // 클릭시 pannel-box가 나타남-->
                    <div class="addBtn-container">
                      <button
                        class="addBtn b2-show flex"
                        type="button"
                        @click="addComponent"
                      >
                        <span>
                          <img
                            src="/images/add-icon.svg"
                            alt="추가하기 아이콘"
                          />
                        </span>
                        설정 추가하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 내가 만든 템플릿 -->
            <div v-if="phase == 'template'" class="past-wrap template-wrap">
              <div class="past-container">
                <div class="title">내가 만든 템플릿</div>
                <div class="past-item-container flex">
                  <GenerateTemplateCard
                    v-for="(item, index) in templateItems"
                    :id="item.id"
                    :key="index"
                    :selected="template?.id === item.id"
                    :title="item.title"
                    :img-url="item.imageUrl"
                    @change-template="changeTemplate"
                  />
                </div>
              </div>
            </div>

            <div class="templateBtn-wrap flex">
              <div v-if="phase !== 'cut'" class="templateBtn-item">
                <button
                  type="button"
                  class="templaeteBtn backBtn"
                  @click="prevPhase"
                >
                  이전
                </button>
              </div>
              <div class="templateBtn-item">
                <button
                  type="button"
                  class="templaeteBtn nextBtn"
                  @click="nextPhase"
                >
                  다음
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
import { GenerateClipTimePanel } from '#components';
definePageMeta({
  title: 'Viral',
  description: '영상 생성',
  middleware: ['sanctum:auth'],
});
const projectStore = useProjectStore();
const menuStore = useMenuStore();
const router = useRouter();
const { query } = useRoute();
// youtube 링크를 기준으로 작성함
const getThumbnail = computed(() => {
  //url 에서 v= 뒤에 있는 값이 videoId
  return `https://img.youtube.com/vi/${query.videoId}/maxresdefault.jpg`;
});
const resulutionOptions = ref([
  {
    title: 'SD',
    num: '360',
    subtitle: '표준화질, 빠른 변환',
  },
  {
    title: 'HD',
    num: '720',
    subtitle: '고화질, 더 선명한 영상',
  },
  {
    title: 'FHD',
    num: '1080',
    subtitle: '최고화질 (구독서비스)',
  },
]);
const templateItems = ref([
  {
    id: 1,
    title: 'Dance battle1',
    imageUrl: '/images/template/recent-img.png',
  },
  {
    id: 2,
    title: 'Dance battle2',
    imageUrl: '/images/template/past-img2.png',
  },
  {
    id: 3,
    title: 'Dance battle3',
    imageUrl: '/images/template/past-img2.png',
  },
]);

//클립 구간 생성하기 위한 데이터
const duration = ref(0);
const { fetchVideoDuration, youtubeThumbnailToFile } = useYoutubeApi();

const getYoutubeDuration = async () => {
  const runtimeConfig = useRuntimeConfig();
  const youtubeApiKey = runtimeConfig.public.youtubeApiKey;
  const videoId = query.videoId;
  if (videoId) {
    duration.value = await fetchVideoDuration(videoId, youtubeApiKey);
  } else {
    alert('유효하지 않은 URL입니다.');
    duration.value = 0;
  }
};
const getYoutubeThumbnailFile = async () => {
  const videoId = query.videoId;
  const thumbnailFile = await youtubeThumbnailToFile(videoId);
  projectStore.setThumbnail(thumbnailFile);
  console.log('thumbnailFile:', projectStore.thumbnail);
};
const { getVideoDuration, getVideoThumbnail, base64ToBlob, blobToFile } =
  useVideoApi();
const videoThumbnail = ref('');
const getVideoInfos = async () => {
  const file = projectStore.file;
  if (file) {
    const videoDuration = await getVideoDuration(file);
    const thumbnail = await getVideoThumbnail(file);
    duration.value = Math.floor(videoDuration);
    videoThumbnail.value = thumbnail;

    const thumbnailBlob = base64ToBlob(thumbnail);
    const thumbnailFile = blobToFile(thumbnailBlob);
    projectStore.setThumbnail(thumbnailFile);
  }
};
//생성시 필요한 데이터들
const selectedCutway = ref('AI');
const selectedResolution = ref('360');
const template = ref(null);
const components = reactive({
  list: [], // 셀프 컷 시 사용할 클립 구간들을 저장하는 배열
});
const seletReolution = resolution => {
  selectedResolution.value = resolution;
};
const selectCutway = cutway => {
  selectedCutway.value = cutway;
};
const addComponent = () => {
  if (components.list.length == 5) {
    alert('최대 5개 구간 생성 가능합니다.');
    return;
  }
  components.list.push({
    id: components.list.length + 1,
    warnText: '3분 미반의 시간을 설정해주세요',
    deleteButton: true,
  });
};
const deleteClipPanel = id => {
  components.list.splice(id, 1);
};
const changeTemplate = id => {
  template.value = templateItems.value.find(item => item.id === id);
};

//하단 생성 단계 관리
const phase = ref('cut');
const nextPhase = () => {
  if (phase.value === 'cut') {
    phase.value = 'template';
  } else if (phase.value === 'template') {
    // TODO : 영상 생성 API 호출
    projectStore.file = null;
    router.replace({ path: '/generate/wait', query: { waitTime: 300 } });
  }
};
const prevPhase = () => {
  if (phase.value === 'template') {
    phase.value = 'cut';
  } else {
    phase.value = 'template';
  }
};
onMounted(() => {
  if (projectStore.file == null) {
    getYoutubeDuration();
    getYoutubeThumbnailFile();
  } else {
    getVideoInfos();
  }
});
</script>

<style lang="scss" scoped></style>
