<template>
  <div id="main" class="user-auth">
    <RegisterComponent :title="title" :sub-title="subTitle">
      <component
        :is="currentPhaseComponent"
        v-if="currentPhaseComponent !== PhaseComplete"
        @handle-next="setPhase"
      />
      <component :is="currentPhaseComponent" v-else />
    </RegisterComponent>
  </div>
</template>

<script setup>
import RegisterComponent from '~/components/auth/register/RegisterComponent.vue';
import PhaseHp from '~/components/auth/register/PhaseHp.vue';
import PhaseAgree from '~/components/auth/register/PhaseAgree.vue';
import PhaseForm from '~/components/auth/register/PhaseForm.vue';
import PhaseComplete from '~/components/auth/register/PhaseComplete.vue';
const phaseContainer = ref([
  {
    phase: '1',
    component: PhaseHp,
    title: '본인인증',
    subTitle: '입력한 휴대폰 번호로 인증 후 회원가입이 진행됩니다.',
  },
  {
    phase: '2',
    component: PhaseAgree,
    title: '회원가입',
    subTitle: '회원가입을 위한 서비스 약관에 동의해주세요.',
  },
  {
    phase: '3',
    component: PhaseForm,
    title: '회원가입',
    subTitle: '회원가입을 위한 정보를 작성해주세요..',
  },
  {
    phase: '4',
    component: PhaseComplete,
    title: '회원가입 완료',
    subTitle: '',
  },
]);
const phase = ref('1');
const title = ref('본인인증');
const subTitle = ref('입력한 휴대폰 번호로 인증 후 회원가입이 진행됩니다. ');
const currentPhaseComponent = computed(() => {
  const phaseObject = phaseContainer.value.find(
    item => item.phase == phase.value,
  );
  return phaseObject.component;
});
const formData = reactive({
  phone: '',
  termsOfUse: false,
  personalInform: false,
  over14: false,
  pushInform: false,
  nickname: '',
  loginId: '',
  password: '',
  birth: '',
  gender: '',
});
const setPhase = data => {
  for (const key in data.data) {
    formData[key] = data.data[key];
  }
  if (data.nextPhase == '4') {
    //TODO 회원가입 async 함수 진행
    console.log('회원가입 함수 진행');
  }
  const phaseObject = phaseContainer.value.find(
    item => item.phase == data.nextPhase,
  );
  if (phaseObject) {
    phase.value = phaseObject.phase;
    title.value = phaseObject.title;
    subTitle.value = phaseObject.subTitle;
  }
};
</script>

<style lang="scss" scoped></style>
