<template>
  <button
      class="button"
      :class="{ 'button--loading' : isLoading }"
      :disabled="isLoading"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isLoading: boolean;
}>()
</script>

<style scoped>
.button {
  background: transparent;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: ease-in 0.2s;
}

.button:hover {
  opacity: 0.7;
}

.button--loading {
  border-color: var(--dark-grey-color);
  color: var(--dark-grey-color);
  pointer-events: none;
}
</style>
