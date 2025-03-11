<template>
  <div :class="`${props.classes}`">
    <label :for="`${props.label}`">
      <input
        :id="`${props.label}`"
        type="checkbox"
        :checked="props.propChecked"
        @click="handleChange"
      />
      <span class="checkBox">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="20"
            height="20"
            rx="4"
            :fill="`${props.propChecked ? '#5228F4' : '#d3d3d3'}`"
          />
          <path
            d="M6 9.4L9 13L14 7"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      {{ props.title }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  propChecked: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['onCheck']);
const handleChange = () => {
  emit('onCheck');
};
</script>

<style lang="scss" scoped></style>
