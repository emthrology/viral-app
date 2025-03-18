<template>
  <div class="pannel-box">
    <p class="time-limit">
      {{ getTimeWarn || props.warnText }}
      <span v-if="deleteButton" class="pannel-delete" @click="handleDelete">
        <img src="/images/delete-icon.svg" alt="닫기" />
      </span>
    </p>
    <div class="pannel-time">
      <span class="time-start">{{ formattedStartTime }}</span>
      <span class="time-end">{{ formattedEndTime }}</span>
    </div>
    <div class="pannel-range">
      <input
        id="start-range"
        v-model="startTime"
        class="start-range range-input"
        type="range"
        min="0"
        :max="duration"
      />
      <input
        id="end-range"
        v-model="endTime"
        class="end-range range-input"
        type="range"
        min="0"
        :max="duration"
      />
      <div class="progress-bar" :style="getProgressPercentage" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  warnText: {
    type: String,
    default: '3분 미만의 시간을 설정해 주세요.',
  },
  deleteButton: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 120,
  },
});
const startTime = ref(0);
const endTime = ref(30);
const formattedStartTime = computed(() => {
  const hours = Math.floor(startTime.value / 3600);
  const mins = Math.floor((startTime.value % 3600) / 60);
  const secs = startTime.value % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
});
//   const mins = Math.floor(startTime.value / 60);
//   const secs = startTime.value % 60;
//   return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
// });
const formattedEndTime = computed(() => {
  const hours = Math.floor(endTime.value / 3600);
  const mins = Math.floor((endTime.value % 3600) / 60);
  const secs = endTime.value % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
});
const getProgressPercentage = computed(() => {
  // progress bar 업데이트
  const percentStart = (startTime.value / props.duration) * 100;
  const percentEnd = 100 - (endTime.value / props.duration) * 100;
  return `left:${percentStart}%; right:${percentEnd}%`;
});

const getTimeWarn = computed(() => {
  if (
    endTime.value - startTime.value < 10 &&
    endTime.value - startTime.value > 0
  )
    return '영상길이가 최소 10초 이상이어야 합니다.';
  if (endTime.value < startTime.value)
    return '시작 시간이 종료 시간보다 빠를 수 없습니다.';
  else return '';
});
const updatable = ref(false);
watch(endTime, (value, oldValue) => {
  if (updatable.value) return;
  if (value < startTime.value) {
    updatable.value = true;
    endTime.value = oldValue;
    updatable.value = false;
  }
});
watch(startTime, (value, oldValue) => {
  if (updatable.value) return;
  if (value > endTime.value) {
    updatable.value = true;
    startTime.value = oldValue;
    updatable.value = false;
  }
});
const emits = defineEmits(['delete']);
const handleDelete = () => {
  emits('delete', props.id);
};
</script>

<style lang="scss" scoped></style>
