<script setup lang="ts">
import Logo from "~/shared/icons/Logo.vue"
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <router-link to="/" class="header__logo">
        <Logo />
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  padding: 2.5rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
}


.header__logo {
  height: 2.25rem;
}

.header__logo svg {
  height: 100%;
  width: auto;
}
</style>
