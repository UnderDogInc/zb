<template>
  <section class="table-wrapper container">
    <div class="table-wrapper__header">
      <slot name="header"/>
    </div>
    <div class="table-wrapper__content">
      <slot name="content"/>
    </div>
    <div class="table-wrapper__footer">
      <slot name="footer"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.table-wrapper {
  padding: 10px;
  box-shadow: 0 0 10px 0 #0000001a;
  border-radius: 10px;

  &__content {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px 30px 30px 21px;
  }
}
</style>
<script setup lang="ts">
</script>
