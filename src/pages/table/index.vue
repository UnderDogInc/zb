<template>
  <SearchWrapper>
    <template #header>
      <SimpleInput v-model="searchValue" placeholder="Давайте поищем" title="Это поиск по таблице"/>
    </template>
    <template #content>
      <SimpleTable :items-per-page="perPage" :page="currentPage" :search="searchValue" :headers="headers" :items="items">
        <template #item.picture="{ item }">
          <img :src="item.picture.medium" :title="`${item.name.first} ${item.name.last}`" :alt="item.name.first" />
        </template>
        <template #item.name="{ item }">
          {{item.name.first}} {{item.name.last}}
        </template>
        <template #item.gender="{ item }">
          {{item.gender}}
        </template>
        <template #item.location="{ item }">
          {{item.location.country}}
        </template>
        <template #item.dob="{ item }">
          {{ formatDate(item.dob.date) }}
        </template>
        <template #item.email="{ item }">
          {{ item.email }}
        </template>
        <template #item.phone="{ item }">
          {{item.phone}}
        </template>
        <template #pagination="{ pagination }">
          <SimplePagination :is-disabled="pagination" count="10" v-model="currentPage"/>
        </template>
      </SimpleTable>
    </template>
  </SearchWrapper>
</template>

<script setup>
import SearchWrapper from "./ui/SearchWrapper.vue";
import { SimpleInput } from "~/shared/ui/SimpleInput";
import {SimplePagination} from "~/shared/ui/SimplePagination";
import SimpleTable from "~/shared/ui/SimpleTable/SimpleTable.vue";
import {useStateTable} from "./model/useStateTable.ts";
import formatDate from '../../shared/utils/formatDate.ts'

const {
  items,
  currentPage,
  headers,
  searchValue,
  perPage
} = useStateTable()
</script>

