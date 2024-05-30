<script setup lang="ts">
import { computed } from "vue";
import Logo from '~/shared/icons/Logo.vue'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="container">
      <router-link to="/" class="footer__logo">
        <Logo />
      </router-link>

      <p class="footer__copyright">
        © alpha, {{ year }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 72px;
  padding: 4rem 0;
  background-color: var(--grey-color);
}

.footer__logo {
  height: 2.25rem;
}

.footer__logo svg {
  height: 100%;
  width: auto;
}

.footer__copyright {
  color: var(--light-blue);
  margin-top: 16px;
}
</style>
