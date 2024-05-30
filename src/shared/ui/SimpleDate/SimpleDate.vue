<script setup lang="ts">
import { computed } from "vue";
import moment from 'moment';

const props = defineProps<{
  date: number
}>()

const day = computed(() => moment.unix(props.date).date())
const weekDay = computed(() => moment.unix(props.date).format('dddd'))
const year = computed(() => moment.unix(props.date).year())
</script>

<template>
  <div class="date-card">
    <div class="date-card__day">
      {{ day }}
    </div>

    <div class="date-card__details">
      <span class="date-card__weekday">
        {{ weekDay }}
      </span>

      <span class="date-card__year">
        {{ year }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.date-card {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--dark-grey-color);
}

.date-card__day {
  font-size: 2.5rem;
}

.date-card__details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.75rem;
}

.date-card__weekday,
.date-card__year {
  margin: 0;
}

@media screen and (max-width: 375px) {
  .date-card__details {
    flex-direction: row;
    gap: 3px;
    font-size: 14px;
    font-weight: 400;
  }

  .date-card__day {
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
