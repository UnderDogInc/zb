<template>
  <div
      v-if="count > 0"
      class="pagination column"
  >
    <div class="pagination__pages">
      <button
          class="pagination__button reset"
          :class="{ active: modelValue === 1 }"
          type="button"
          :disabled="isDisabled || isFirstPage"
          @click="updateModelValue(1)"
          v-text="1"
      />
      <span v-if="visibleDotsLeft">...</span>
      <button
          v-for="page in pages"
          :key="page"
          class="pagination__button reset"
          :class="{ active: page === modelValue }"
          type="button"
          :disabled="page === modelValue || isDisabled"
          @click="updateModelValue(page)"
          v-text="page"
      />
      <span v-if="visibleDotsRight">...</span>
      <button
          v-if="count > 1"
          class="pagination__button reset"
          :class="{ active: count === modelValue }"
          :disabled="count === modelValue || isDisabled"
          type="button"
          @click="updateModelValue(count)"
          v-text="count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {IPagination} from "~/app/interface";

const emit = defineEmits(['update:modelValue'])


const props = withDefaults(defineProps<IPagination>(), {
  isDisabled: false
})

const isMobile = ref(false)

const isFirstPage = computed(() => props.modelValue === 1)

const visibleDots = computed(() => {
  if (isMobile.value) {
    return props.count > 6
  }
  return props.count > 7
})

const pageForVisibleDotsLeft = computed(() => (isMobile.value ? 3 : 4))
const visibleDotsLeft = computed(() => visibleDots.value && props.modelValue > pageForVisibleDotsLeft.value)

const pageForVisibleDotsRight = computed(() => (isMobile.value ? 2 : 3))
const visibleDotsRight = computed(
    () => visibleDots.value && props.modelValue < props.count - pageForVisibleDotsRight.value
)

const pageForStartPages = computed(() => (isMobile.value ? 4 : 5))

const pages = computed(() => {
  if (props.modelValue < pageForStartPages.value) {
    return getStartPages()
  }

  if (props.modelValue > props.count - 3) {
    return getEndPages()
  }

  return getMiddlePages()
})

function updateModelValue(num: number) {
  emit('update:modelValue', num)
}

function getStartPages() {
  return getStartPagesList().filter(between)
}
function getStartPagesList() {
  if (isMobile.value) {
    return [2, 3, 4]
  }
  return [2, 3, 4, 5, 6]
}

function getMiddlePages() {
  if (isMobile.value) {
    return [props.modelValue - 1, props.modelValue, props.modelValue + 1]
  }

  return [props.modelValue - 2, props.modelValue - 1, props.modelValue, props.modelValue + 1, props.modelValue + 2]
}

function getEndPages() {
  if (isMobile.value) {
    return [
      props.modelValue - 3,
      props.modelValue - 2,
      props.modelValue - 1,
      props.modelValue,
      props.modelValue + 1,
      props.modelValue + 2
    ]
        .filter(between)
        .slice(-3)
  }

  return [
    props.modelValue - 5,
    props.modelValue - 4,
    props.modelValue - 3,
    props.modelValue - 2,
    props.modelValue - 1,
    props.modelValue,
    props.modelValue + 1,
    props.modelValue + 2
  ]
      .filter(between)
      .slice(-5)
}

function between(page: number) {
  return page > 1 && page < props.count
}
</script>

<style lang="scss" scoped>
.pagination {

  &__pages {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__button {
    border: none;
    min-width: 20px;
    min-height: 20px;
    padding: 3px;
    font-weight: 600;
    color: var(--black-color);
    background: transparent;
    cursor: pointer;

    &:focus-visible,
    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }

    &:active {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }

    &:disabled {
      cursor: not-allowed;
      border-color: var(--dark-grey-color);
      color: var(--dark-grey-color);
    }

    &.active {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
}
</style>
