<template>
  <header class="header container">
    <img title="Это лого, кликни на него" @click="clickHandler" class="header__logo" src="../../../app/images/DPD-logo.svg" alt="DPD Logo">
  </header>
</template>

<script setup lang="ts">
// думаю нет смысла это выносить ибо сделано по фану

const clickHandler = () => {
  const confirmed = confirm("Если согласитесь, то перейдете на сайт dpd.ru");
  if (confirmed) {
    window.open('https://dpd.ru/');
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  &__logo {
    margin: 0;
    display: block;
    max-width: 100px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }

  &__title {
    font-size: 2px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;
    color: var(--black-color);

  }
}
</style>
