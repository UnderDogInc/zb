<template>
  <input type="text" v-model="value" class="input" :placeholder="props.placeholder">
</template>
<script setup>
import { computed, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Введите Id или имя'
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1.5px solid var(--light-grey);
  color: var(--dark-grey-color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
}
</style>
