<template>
  <section class="search-wrapper container">
    <div class="search-wrapper__sidebar">
      <slot name="sidebar"/>
    </div>
    <div class="search-wrapper__content">
      <slot name="content"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  height: 100vh;
  max-height: 575px;
  box-shadow: 0 0 10px 0 #0000001a;
  border-radius: 10px;

  &__sidebar {
    min-width: 291px;
    flex-basis: 25%;
    padding: 27px 33px 0 15px;
    border-right: 1px solid var( --border-color);
  }

  &__content {
    width: 100%;
    padding: 30px 30px 30px 21px;
  }
}
</style>
