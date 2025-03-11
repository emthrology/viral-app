<template>
  <Button
    classes="codeBtn focusBtn"
    :disabled="time != props.initialTime"
    @click="startTimer"
  >
    <template v-if="!codeSent"> 인증번호 전송 </template>
    <template v-else> 남은 시간: {{ formatTime(time) }} </template>
  </Button>
</template>

<script setup>
import Button from '~/components/common/Button.vue';
const props = defineProps({
  initialTime: {
    type: Number,
    default: () => 180,
  },
});
const emit = defineEmits(['requestCode']);
const codeSent = ref(false);
const timer = ref(null);
const time = ref(props.initialTime);
const startTimer = () => {
  emit('requestCode');
  codeSent.value = true;
  timer.value = setInterval(() => {
    if (time.value > 0) {
      time.value--;
    } else {
      clearInterval(timer.value);
      time.value = props.initialTime;
      codeSent.value = false;
    }
  }, 1000);
};
const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
};
</script>

<style lang="scss" scoped></style>
