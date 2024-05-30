<template>
  <main class="cards-page">
    <Hero>
      <template #title>
        Новости
      </template>
    </Hero>
    <section class="cards-page__container container">
      <ul
        v-if="cards?.length"
        class="cards-page__list"
      >
        <li
          @click="goToPage(card.code)"
          v-for="card in cards"
          :key="card.code"
          class="cards-page__item"
        >
          <Card :card="card" />
        </li>
      </ul>
      <SimpleButton
        v-if="page < totalPages"
        class="cards-page__button"
        :is-loading="isLoading"
        @click="page++"
      >
        Загрузить ещё
      </SimpleButton>
    </section>
  </main>
</template>

<script setup >
import Card from './ui/Card.vue'
import {SimpleButton} from '~/shared/ui/simpleButton'
import {Hero} from '~/widgets/hero'
import {useStateCards} from "~/pages/cards/model/useStateCards.ts";
const {isLoading, page, cards, totalPages, goToPage} = useStateCards()
</script>

<style scoped>
.cards-page__container {
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

.cards-page__list {
  list-style: none;
  display: grid;
  gap: 64px 48px;
  align-items: stretch;
  padding-left: 0;
  margin-top: 0;
}

@media (min-width: 768px) {
  .cards-page__list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .cards-page__list {
    gap: 32px;
  }
}

@media (min-width: 1224px) {
  .cards-page__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.cards-page__button {
  margin: 0 auto;
  width: fit-content;
}
</style>


