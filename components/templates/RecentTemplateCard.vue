<template>
  <div :class="`${props.classes}`">
    <div class="title">
      {{ props.title }}<span class="date-view">{{ props.date }}</span>
    </div>
    <div class="template-box">
      <a href="#" class="template-edit template-100">
        <div class="templaete-inner">
          <div class="templaete-img">
            <img
              class="img-item"
              src="/images/template/recent-img.png"
              alt="최근 사용한 템플릿"
            />
          </div>
        </div>
      </a>
      <div class="bottom-item">
        <div class="template-title">Dance battle</div>
        <Button classes="deletBtn" @click="handleDelete">
          <img src="/images/template/delet-btn.svg" alt="휴지통 아이콘" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/common/Button.vue';
const props = defineProps({
  classes: {
    type: String,
    default: () => '',
  },
  title: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['onDelete']);
const handleDelete = () => emit('onDelete');
</script>

<style lang="scss" scoped></style>
