<template>
  <div class="layout">
    <AppHeader />
    <div class="layout__content">
      <slot />
    </div>
    <SystemAlert/>
  </div>
</template>

<script setup>
import {AppHeader} from "../widgets/AppHeader";
import {SystemAlert} from "~/feature/SystemAlert";
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
