<template>
  <div class="inner">
    <div class="user-auth-wrap" :class="`${props.classes}`">
      <h3 class="main-title font-IBM">아이디 / 비밀번호 찾기</h3>
      <ul class="tab-view">
        <li
          :class="props.title == '아이디 찾기' ? 'tab-active' : 'tab-disb'"
          @click="routeTo('id')"
        >
          아이디 찾기
        </li>
        <li
          :class="props.title == '비밀번호 찾기' ? 'tab-active' : 'tab-disb'"
          @click="routeTo('password')"
        >
          비밀번호 찾기
        </li>
      </ul>

      <slot />
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const props = defineProps({
  classes: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});
const routeTo = query => {
  router.push(`/auth/find/${query}`);
};
</script>

<style lang="css" scoped>
.tab-disb:hover {
  color: #5228f4;
  cursor: pointer;
}
</style>
