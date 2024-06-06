<template>
  <header class="header container">
    <h1 class="header__logo">Жилфонд</h1>
    <span class="header__title">Пользователь</span>
  </header>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  margin-bottom: 26px;
  align-items: center;

  &__logo {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;
    text-align: left;
    color: var(--primary-color);
  }

  &__title {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;
    color: var(--black-color);

  }
}
</style>
