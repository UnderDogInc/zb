<template>
  <div class="search-sidebar">
    <h2 class="search-sidebar__title">
      <slot name="title"/>
    </h2>
    <div class="search-sidebar__action">
      <slot name="action"/>
    </div>
    <span class="search-sidebar__subtitle">
      <slot name="subtitle"/>
    </span>
    <ul class="search-sidebar__list scroll-y">
      <slot name="list"/>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.search-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: start;

  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
    margin-bottom: 14px;
  }

  &__subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 22.4px;
    margin: 29px 0 18px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 18px;
    overflow-y: scroll;
    height: auto;
    max-height: 350px;
    padding: 5px 10px;
  }
}
</style>
