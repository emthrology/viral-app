<template>
  <div id="main" class="main">
    <div class="inner">
      <Sidebar v-if="menuStore.leftMenuToggle" current-menu-url="/myproject" />
      <!-- 컨텐츠 영역 -->
      <section class="content-area">
        <article class="content-wrap">
          <div class="content-inner my-project">
            <div class="hello">
              <span class="hello-icon">
                <img src="/images/projectV/hello.svg" alt="hello" />
              </span>
              <span class="edit-title font-IBM">
                반가워요 <strong> OOO님!</strong> <br />숏폼 만들기 바로
                시작해보세요!
              </span>
            </div>
            <h3 class="content-title font-IBM">
              쇼츠 제작하기
              <span class="title-descript">
                유튜브 영상 링크를 입력하시거나, 파일을 넣어주세요.
                <br class="mob-br" />자동으로 짧고 임팩트 있는 쇼츠로
                변환됩니다!
                <br />
                (링크나 파일 중 나중에 입력된 데이터가 변환됩니다.)
              </span>
            </h3>
            <div class="f_container">
              <div class="input_container">
                <label for="y_link" class="link">
                  <input
                    id="y_link"
                    v-model="targetUrl"
                    type="text"
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                </label>
                <button class="changeBtn" type="button" @click="generateVideo">
                  변환시작
                </button>
              </div>
              <Uploadzone @file-change="changeVideoFile" />
            </div>

            <!-- TODO 영상 리스트가 생긴 후 다루기 -->
            <h3 class="content-title font-IBM">
              나의 영상
              <span class="title-descript">
                생성된 영상은 30일 이후 자동으로 만료되며,
                <br class="mob-br" />
                60일 이후 대시보드에서 자동 삭제됩니다.
              </span>
            </h3>
            <div class="m_container">
              <div class="video_container">
                <div class="item-wrapper">
                  <div class="item">
                    <button class="deletBtn">
                      <img
                        src="/images/template/delet-btn.svg"
                        alt="휴지통 아이콘"
                      />
                    </button>
                  </div>
                  <div class="label top-right end">
                    <img src="/images/projectV/end.svg" alt="end" />
                    영상변환완료
                  </div>
                  <div class="label bottom-left">2024.10.23</div>
                  <div class="label bottom-right">
                    자동삭제 <strong>D-29</strong>
                  </div>
                </div>

                <div class="item-wrapper">
                  <div class="item">
                    <button class="deletBtn">
                      <img
                        src="/images/template/delet-btn.svg"
                        alt="휴지통 아이콘"
                      />
                    </button>
                  </div>
                  <div class="label top-right end">
                    <img src="/images/projectV/end.svg" alt="end" />
                    영상변환완료
                  </div>
                  <div class="label bottom-left">2024.10.24</div>
                  <div class="label bottom-right">
                    자동삭제 <strong>D-29</strong>
                  </div>
                </div>

                <div class="item-wrapper">
                  <div class="item">
                    <button class="deletBtn">
                      <img
                        src="/images/template/delet-btn.svg"
                        alt="휴지통 아이콘"
                      />
                    </button>
                  </div>
                  <div class="label top-right ing">
                    <img src="/images/projectV/ing.svg" alt="ing" />영상변환중
                  </div>
                  <div class="label bottom-left">2024.10.25</div>
                  <div class="label bottom-right">
                    자동삭제 <strong>D-29</strong>
                  </div>
                </div>

                <div class="item-wrapper">
                  <div class="item">
                    <button class="deletBtn">
                      <img
                        src="/images/template/delet-btn.svg"
                        alt="휴지통 아이콘"
                      />
                    </button>
                  </div>
                  <div class="label top-right ing">
                    <img src="/images/projectV/ing.svg" alt="ing" />영상변환중
                  </div>
                  <div class="label bottom-left">2024.10.26</div>
                  <div class="label bottom-right">
                    자동삭제 <strong>D-29</strong>
                  </div>
                </div>

                <div class="item-wrapper">
                  <div class="item">
                    <button class="deletBtn">
                      <img
                        src="/images/template/delet-btn.svg"
                        alt="휴지통 아이콘"
                      />
                    </button>
                  </div>
                  <div class="label top-right ing">
                    <img src="/images/projectV/ing.svg" alt="ing" />영상변환중
                  </div>
                  <div class="label bottom-left">2024.10.27</div>
                  <div class="label bottom-right">
                    자동삭제 <strong>D-29</strong>
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
definePageMeta({
  title: 'Viral',
  description: '내 프로젝트',
  middleware: ['sanctum:auth'],
});
const router = useRouter();
const menuStore = useMenuStore();
const projectStore = useProjectStore();
const targetUrl = ref('');
const targetFile = ref(null);
const generateVideo = () => {
  if (!projectStore.file) {
    if (!targetUrl.value) {
      alert('URL을 입력해주세요.');
      return;
    }
    const regExp = /^https?:\/\/[^\s]+$/;
    if (!regExp.test(targetUrl.value)) {
      alert('URL 형식이 올바르지 않습니다.');
      return;
    }
    const videoId = targetUrl.value.split('v=')[1];
    router.push(`/generate?videoId=${videoId}`);
  } else {
    router.push('/generate');
  }
};

const changeVideoFile = file => {
  targetFile.value = file;
  projectStore.setFile(file);
};
</script>

<style lang="scss" scoped></style>
