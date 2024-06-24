<template>
  <div class="layout scroll-y">
    <AppHeader />
    <div class="layout__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { AppHeader } from "../widgets/common/AppHeader";
import {onMounted} from "vue";

onMounted(() => {
  const alertShown = document.cookie.split(';').some(c => {
    return c.trim().startsWith('alertShown=true');
  })

  if (!alertShown) {
    alert("Приношу извинения за алерт, я просил hr чтобы вы посмотрели readme");
    document.cookie = "alertShown=true; expires=" + new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
  }
})
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
