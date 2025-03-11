<template>
  <div :class="`${props.classes}`">
    <span class="date-view">{{ props.date }}</span>
    <a href="#" class="template-edit template-100">
      <div class="templaete-inner">
        <div class="templaete-img">
          <img
            class="img-item"
            :src="`${props.templateImage}`"
            alt="지난 템플릿1"
          />
        </div>
      </div>
    </a>
    <div class="bottom-item">
      <div class="template-title">Dance battle</div>
      <Button classes="deletBtn" @click="handleDelete">
        <img src="/images/template/delet-btn.svg" alt="휴지통 아이콘" />
      </Button>
      <!-- <button class="deletBtn">
        <img src="/images/template/delet-btn.svg" alt="휴지통 아이콘" />
      </button> -->
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
  templateImage: {
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
