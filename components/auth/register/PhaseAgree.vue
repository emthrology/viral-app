<template>
  <div>
    <!-- 전체 동의 체크박스 -->
    <Checkbox
      classes="all-check keep-wrap"
      title="약관 전체동의"
      label="all-agree"
      :prop-checked="agreements.all"
      @on-check="handleAllChange"
    />
    <!-- 개별 동의 체크박스들 -->
    <div class="separate-check keep-wrap m-top20">
      <div class="separate-item">
        <Checkbox
          classes="separate-agree"
          title="이용약관 동의 (필수)"
          label="terms-agree"
          :prop-checked="agreements.termsOfUse"
          @on-check="handleIndividualChange('termsOfUse')"
        />
        <div class="terms-content">
          <p>제1조(목적 등)</p>
          <p>
            <span>&#9312;</span> Acts29비전빌리지 서비스 약관(이하 "본 약관"이라
            합니다)은 이용자가 Acts29비전빌리지에서 제공하는 인터넷 관련
            서비스(이하 "서비스"라 합니다)를 이용함에 있어 이용자와
            "Acts29비전빌리지"의 권리·의무 및 책임사항을 규정함을 목적으로
            합니다.
          </p>
          <p>
            <span>&#9313;</span> 이용자가 되고자 하는 자가 "Acts29비전빌리지"이
            정한 소정의 절차를 거쳐서 "등록하기" 단추를 누르면 본 약관에
            동의하는 것으로 간주합니다. 본 약관에 정하는 이외의 이용자와 "Acts
            29비전빌리지"의 권리, 의무 및 책임사항에 관해서는 전기통신사업법
            기타 대한민국의 관련 법령과 상관습에 의합니다.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            maiores molestiae minus voluptates nam debitis corrupti mollitia
            possimus aspernatur quia, dolorem, dignissimos assumenda rem porro
            totam quam quae laborum? Expedita? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Exercitationem rerum iste minima
            voluptas consequatur assumenda consequuntur earum. Molestiae
            corporis earum accusamus repellendus esse quia reiciendis at, velit
            enim quo mollitia. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Exercitationem rerum iste minima voluptas
            consequatur assumenda consequuntur earum. Molestiae corporis earum
            accusamus repellendus esse quia reiciendis at, velit enim quo
            mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem rerum iste minima voluptas consequatur assumenda
            consequuntur earum. Molestiae corporis earum accusamus repellendus
            esse quia reiciendis at, velit enim quo mollitia.
          </p>
        </div>
      </div>

      <div class="separate-item">
        <Checkbox
          classes="separate-agree"
          title="개인정보 수집 및 이용 동의 (필수)"
          label="privacy-agree"
          :prop-checked="agreements.personalInform"
          @on-check="handleIndividualChange('personalInform')"
        />
        <div class="terms-content">
          <p>제1조(목적 등)</p>
          <p>
            <span>&#9312;</span> Acts29비전빌리지 서비스 약관(이하 "본 약관"이라
            합니다)은 이용자가 Acts29비전빌리지에서 제공하는 인터넷 관련
            서비스(이하 "서비스"라 합니다)를 이용함에 있어 이용자와
            "Acts29비전빌리지"의 권리·의무 및 책임사항을 규정함을 목적으로
            합니다.
          </p>
          <p>
            <span>&#9313;</span> 이용자가 되고자 하는 자가 "Acts29비전빌리지"이
            정한 소정의 절차를 거쳐서 "등록하기" 단추를 누르면 본 약관에
            동의하는 것으로 간주합니다. 본 약관에 정하는 이외의 이용자와 "Acts
            29비전빌리지"의 권리, 의무 및 책임사항에 관해서는 전기통신사업법
            기타 대한민국의 관련 법령과 상관습에 의합니다.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            maiores molestiae minus voluptates nam debitis corrupti mollitia
            possimus aspernatur quia, dolorem, dignissimos assumenda rem porro
            totam quam quae laborum? Expedita? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Exercitationem rerum iste minima
            voluptas consequatur assumenda consequuntur earum. Molestiae
            corporis earum accusamus repellendus esse quia reiciendis at, velit
            enim quo mollitia. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Exercitationem rerum iste minima voluptas
            consequatur assumenda consequuntur earum. Molestiae corporis earum
            accusamus repellendus esse quia reiciendis at, velit enim quo
            mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem rerum iste minima voluptas consequatur assumenda
            consequuntur earum. Molestiae corporis earum accusamus repellendus
            esse quia reiciendis at, velit enim quo mollitia.
          </p>
        </div>
      </div>

      <div class="separate-item">
        <Checkbox
          classes="separate-agree"
          title="만 14세 이상입니다. (필수)"
          label="age-agree"
          :prop-checked="agreements.over14"
          @on-check="handleIndividualChange('over14')"
        />
        <div class="terms-content">
          <p>제1조(목적 등)</p>
          <p>
            <span>&#9312;</span> Acts29비전빌리지 서비스 약관(이하 "본 약관"이라
            합니다)은 이용자가 Acts29비전빌리지에서 제공하는 인터넷 관련
            서비스(이하 "서비스"라 합니다)를 이용함에 있어 이용자와
            "Acts29비전빌리지"의 권리·의무 및 책임사항을 규정함을 목적으로
            합니다.
          </p>
          <p>
            <span>&#9313;</span> 이용자가 되고자 하는 자가 "Acts29비전빌리지"이
            정한 소정의 절차를 거쳐서 "등록하기" 단추를 누르면 본 약관에
            동의하는 것으로 간주합니다. 본 약관에 정하는 이외의 이용자와 "Acts
            29비전빌리지"의 권리, 의무 및 책임사항에 관해서는 전기통신사업법
            기타 대한민국의 관련 법령과 상관습에 의합니다.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            maiores molestiae minus voluptates nam debitis corrupti mollitia
            possimus aspernatur quia, dolorem, dignissimos assumenda rem porro
            totam quam quae laborum? Expedita? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Exercitationem rerum iste minima
            voluptas consequatur assumenda consequuntur earum. Molestiae
            corporis earum accusamus repellendus esse quia reiciendis at, velit
            enim quo mollitia. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Exercitationem rerum iste minima voluptas
            consequatur assumenda consequuntur earum. Molestiae corporis earum
            accusamus repellendus esse quia reiciendis at, velit enim quo
            mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem rerum iste minima voluptas consequatur assumenda
            consequuntur earum. Molestiae corporis earum accusamus repellendus
            esse quia reiciendis at, velit enim quo mollitia.
          </p>
        </div>
      </div>

      <div class="separate-item">
        <Checkbox
          classes="separate-agree"
          title="마케팅 활용 동의 (선택)"
          label="age-agree"
          :prop-checked="agreements.pushInform"
          @on-check="handleIndividualChange('pushInform')"
        />
        <div class="terms-content">
          <p>제1조(목적 등)</p>
          <p>
            <span>&#9312;</span> Acts29비전빌리지 서비스 약관(이하 "본 약관"이라
            합니다)은 이용자가 Acts29비전빌리지에서 제공하는 인터넷 관련
            서비스(이하 "서비스"라 합니다)를 이용함에 있어 이용자와
            "Acts29비전빌리지"의 권리·의무 및 책임사항을 규정함을 목적으로
            합니다.
          </p>
          <p>
            <span>&#9313;</span> 이용자가 되고자 하는 자가 "Acts29비전빌리지"이
            정한 소정의 절차를 거쳐서 "등록하기" 단추를 누르면 본 약관에
            동의하는 것으로 간주합니다. 본 약관에 정하는 이외의 이용자와 "Acts
            29비전빌리지"의 권리, 의무 및 책임사항에 관해서는 전기통신사업법
            기타 대한민국의 관련 법령과 상관습에 의합니다.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            maiores molestiae minus voluptates nam debitis corrupti mollitia
            possimus aspernatur quia, dolorem, dignissimos assumenda rem porro
            totam quam quae laborum? Expedita? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Exercitationem rerum iste minima
            voluptas consequatur assumenda consequuntur earum. Molestiae
            corporis earum accusamus repellendus esse quia reiciendis at, velit
            enim quo mollitia. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Exercitationem rerum iste minima voluptas
            consequatur assumenda consequuntur earum. Molestiae corporis earum
            accusamus repellendus esse quia reiciendis at, velit enim quo
            mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem rerum iste minima voluptas consequatur assumenda
            consequuntur earum. Molestiae corporis earum accusamus repellendus
            esse quia reiciendis at, velit enim quo mollitia.
          </p>
        </div>
      </div>
    </div>
    <div class="btn_wrap">
      <button type="button" class="finishBtn" @click="next">다음</button>
    </div>
  </div>
</template>

<script setup>
import Checkbox from '~/components/common/Checkbox.vue';
const emit = defineEmits(['handleNext']);
const next = () => {
  const valid =
    agreements.termsOfUse && agreements.personalInform && agreements.over14;
  if (valid) {
    emit('handleNext', {
      nextPhase: '3',
      data: {
        termsOfUse: agreements.termsOfUse,
        personalInform: agreements.personalInform,
        over14: agreements.over14,
        pushInform: agreements.pushInform,
      },
    });
  } else {
    alert('필수사항에 모두 동의해주세요');
  }
};

const agreements = reactive({
  all: false,
  termsOfUse: false,
  personalInform: false,
  over14: false,
  pushInform: false,
});
const handleAllChange = () => {
  const newState = !agreements.all;
  agreements.all = newState;
  agreements.termsOfUse = newState;
  agreements.personalInform = newState;
  agreements.over14 = newState;
  agreements.pushInform = newState;
  if (agreements.all) {
    window.scrollTo({ top: 900, left: 0, behavior: 'smooth' });
  }
};

// 개별 동의 핸들러
const handleIndividualChange = key => {
  agreements[key] = !agreements[key];
  agreements.all =
    agreements.termsOfUse &&
    agreements.personalInform &&
    agreements.over14 &&
    agreements.pushInform;
};
</script>

<style lang="scss" scoped></style>
