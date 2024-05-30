<template>
  <section class="hero__wrapper">
    <div class="container">
      <h1 class="hero__title">
        <slot name="title"/>
      </h1>
    </div>
  </section>
</template>

<style scoped>
.hero__wrapper {
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  background-image: url('public/images/hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.hero__title {
  color: var(--black-color);
  font-size: 5.6rem;
  line-height: 1.2;
  margin-bottom: 48px;
}

</style>
<script setup lang="ts">
</script>
