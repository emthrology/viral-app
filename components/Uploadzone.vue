<template>
  <div
    class="upload-area"
    @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave"
    @drop.prevent="handleDrop"
  >
    <span class="upload-icon">
      <img id="iconClick" :src="'/images/projectV/upload.svg'" alt="upload" />
    </span>
    <span class="upload-area-title">영상올리기</span>
    <span class="upload-area-description">
      이곳에 파일을 드래그해서 <br class="mob-br" />삽입하세요.
      <br />
      한 번에 하나의 파일만 <br class="mob-br" />업로드 가능합니다.
    </span>
    <!-- <input
      id="fileInput"
      type="file"
      style="display: none"
      @change="handleFileChange"
    /> -->
  </div>

  <div class="file-list">
    <!-- <h3>Selected Files:</h3> -->
    <ul>
      <li v-for="(file, index) in files" :key="index" class="upload-li">
        <img
          class="uploaded-icon"
          src="/images/hd-guide.svg"
          alt="휴지통 아이콘"
        />
        <span>
          {{ file.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emits = defineEmits(['fileChange']);
const isDragging = ref(false);
const files = ref([]);
// const fileInput = ref(null);

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = event => {
  isDragging.value = false;
  const droppedFiles = event.dataTransfer.files;
  files.value = [...droppedFiles];
  emits('fileChange', files.value[0]);
};

// const handleFileChange = () => {
//   const selectedFiles = fileInput.value.files;
//   files.value.push(...selectedFiles);
// };
</script>

<style scoped>
.upload-li {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.uploaded-icon {
  width: 20px;
  height: 20px;
}
</style>
