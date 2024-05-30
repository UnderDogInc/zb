<template>
  <div class="badge">
    <slot />
  </div>
</template>

<style scoped>
.badge {
  padding: 5px 16px;
  font-size: 16px;
  border-radius: 16px;
  font-weight: 400;
  background-color: var(--sky-blue);
  max-width: min-content;
  white-space: nowrap;
}
</style>
