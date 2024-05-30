<template>
  <div class="layout">
    <Header />
    <div class="layout__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Header } from '../widgets/header'
import { Footer } from '../widgets/footer'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout__content {
  flex: 1;
}
</style>
