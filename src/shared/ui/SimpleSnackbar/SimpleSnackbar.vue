<template>
  <transition name="snackbar">
    <div class="snackbar" :style="{backgroundColor: props.color}" v-if="value" @click="closeSnackbar">
      <p>{{ props.message }}</p>
    </div>
  </transition>
</template>

<script setup>
import {computed, defineEmits, defineProps, onMounted, ref, watchEffect} from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  color: {
    type: String,
    default: 'var(--primary-color)'
  },
  message: {
    type: String,
    default: 'info'
  },
  timeout: {
    type: Number,
    default: 2000
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})

const timer = ref(null)

watchEffect(() => {
  if (value.value) {
    timer.value = setTimeout(() => {
      emit('update:modelValue', false)
    }, props.timeout)
  } else {
    clearTimeout(timer.value)
  }
})

function closeSnackbar() {
  clearTimeout(timer.value)
  emit('update:modelValue', false)
}
</script>

<style>
.snackbar {
  position: fixed;
  bottom: 15px;
  left: 15px;
  color: var(--white-color);
  min-width: 100px;
  font-size: 12px;
  padding: 0 10px;
  text-align: center;
  border-radius: 10px;
  z-index: 1;
}

.snackbar-enter-active,
.snackbar-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.snackbar-enter-from,
.snackbar-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.snackbar-enter-to,
.snackbar-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
