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
  background-image: url('https://cdn.discordapp.com/attachments/1207605839649832960/1245694876033744927/hero.jpg?ex=6659af42&is=66585dc2&hm=f13e48b3b6a87ed3671326d318c8f78a8a2b0788edb884e7d9e1624314a23cb1&');
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
