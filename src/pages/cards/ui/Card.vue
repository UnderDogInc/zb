<template>
  <div class="card">
    <div
      v-if="card.image?.length"
      class="card__image"
      :style="`background-image: url(${card.image})`"
    />
    <div
      class="card__info"
      :class="card?.image === '' ? 'card-card__info--with-image' : ''"
    >
      <div class="card__summary">
        <AppDateCard :date="card.date" />

        <h3 class="card__title">
          {{ card.name }}
        </h3>
        <p v-html="card.previewText" class="card__preview-text"/>
      </div>
      <AppTag v-if="card.type?.value">{{ card.type.value }}</AppTag>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppTag from "~/shared/ui/simpleBadge/SimpleBadge.vue";
import AppDateCard from "~/shared/ui/SimpleDate/SimpleDate.vue";

defineProps<{
  card
}>()
</script>

<style scoped>
.card {
  cursor: pointer;
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  height: 100%;
  text-decoration: none;
}

.card__image {
  min-height: 15rem;
  height: 15rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.card-card__info--with-image {
  border-top-color: var(--primary-color) !important;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

@media screen and (max-width: 375px) {
  .card__image {
    display: none;
  }
}

.card__info {
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--primary-color);
  border-top-color: #fff;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

@media screen and (max-width: 375px) {
  .card__info {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-top-color: var(--primary-color);
  }
}

.card__info--with-image {
  border-top-color: var(--primary-color);
  border-radius: 1rem;
}

.card__summary {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 16px;
}

.card__title {
  margin: 0;
  font-size: 22px;
  color: var(--primary-color);
}

.card__preview-text {
  margin: 0;
  font-size: 1.125rem;
}
</style>
