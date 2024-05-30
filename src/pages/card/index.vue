<script lang='ts' setup>
import { useRoute } from "vue-router";
const route = useRoute()
</script>

<template>
  <section class="container card-page">
    <h1 class="card-page__title">{{ route.params.articleId }}</h1>
    <router-link class="card-page__link" to="/">Понятно, на главную</router-link>
  </section>
</template>

<style scoped>
.card-page {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-height: 600px;
}

.card-page__title {
  margin: 30px 0;
}

.card-page__link {
  color: var(--primary-color);
  text-decoration: underline;
  font-size: 16px;
}

.card-page__link:hover {
  opacity: 0.7;
}
</style>
