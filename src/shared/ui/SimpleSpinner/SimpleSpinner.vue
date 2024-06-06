<template>
  <span class="loader"/>
</template>
<style lang="scss" scoped>
.loader {
  width: 24px;
  height: 24px;
  border: 5px solid var(--white-color);
  border-bottom-color: var(--primary-color);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
