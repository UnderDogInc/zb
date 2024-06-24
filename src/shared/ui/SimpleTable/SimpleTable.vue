<template>
  <div class="table__wrapper">
    <table class="table">
      <thead class="table__header">
      <tr>
        <th
            v-for="col in headers"
            :key="col.name"
            @click="sortBy(col)"
        >
          {{ col.title }}
          <component v-if="col.sortable" :is="sortOrder === 1 && sortKey === col.name ? UpArrow : DownArrow"/>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in paginatedItems" :key="item.id">
        <td v-for="col in headers" :key="col.name">
          <div>
            <slot :name="`item.${col.name}`" :item="item">
              {{ getColumnData(item, col) }}
            </slot>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="pagination">
      <slot name="pagination" :pagination="stopPagination" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { UpArrow, DownArrow } from "~/shared/icons"
import { Item, Column } from "~/app/interface"

const props = defineProps<{
  items: Item[]
  page: number
  headers: Column[]
  itemsPerPage: number
  search: string
}>()

const router = useRouter();
const route = useRoute();
const sortKey = ref<string>(route.query.sortKey ? String(route.query.sortKey) : '');
const sortOrder = ref<number>(route.query.sortOrder ? parseInt(String(route.query.sortOrder)) : 1);
const getColumnData = (item: Item, col: Column) => item[col.name];

const stopPagination =computed(() => {
  return filteredItems.value.length <= props.itemsPerPage
})

watchEffect(() => {
  router.push({ query: { page: props.page, search: props.search, sortKey: sortKey.value, sortOrder: sortOrder.value } });
});

const filteredItems = computed(() => {

  const searchText = props.search.toLowerCase().trim();
  return props.items.filter((item) =>
      props.headers.some((col) => startsWithIgnoreCase(String(item[col.name]), searchText))
  ).sort((a, b) => {
    if (sortKey.value) {
      const valueA = a[sortKey.value];
      const valueB = b[sortKey.value];
      return sortOrder.value * (typeof valueA === 'string' ? valueA.localeCompare(valueB) : valueA - valueB);
    }
    return 0;
  });
});

const paginatedItems = computed(() => filteredItems.value.slice((props.page - 1) * props.itemsPerPage, props.page * props.itemsPerPage));

function startsWithIgnoreCase(text: string, search: string): boolean {
  return text.toLowerCase().startsWith(search);
}

const sortBy = (key: Column) => {
  sortKey.value = key.name;
  sortOrder.value = sortKey.value === key.name ? -sortOrder.value : 1;
};
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 15px;

  &__wrapper {
    width: 100%;
  }
}
th,
td {
  text-align: center;

  div {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
th {
  cursor: pointer;
  position: relative;
}

th::after {
  position: absolute;
  right: 2px;
  font: 24px bold monospace;
  top: 50%;
  transform: translateY(-50%);
}

th.sorted-by {
  background: var(--light-grey);
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
