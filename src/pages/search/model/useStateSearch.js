import { useStore } from 'vuex';
import {computed, ref, watch, watchEffect} from 'vue';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import {value} from "lodash/seq.js";
export function useStateSearch () {
  const searchValue = ref('');
  const store = useStore();
  const activeUser = ref(null)
  const selectUser = (item) => {
    activeUser.value = item
  }
  const prettierArray = computed(() => (searchValue.value.trim()).split(',').map(item => item.trim()))
  const unicodeArray = computed(() => [...new Set(prettierArray.value.filter(item => item !== ''))])

  const userList = computed(() => store.getters.usersList)
  const loading = computed(() => store.getters.isLoading)
  const error = computed(() => store.getters.isError)
  const debouncedSearch = debounce(() => store.dispatch('search', unicodeArray.value), 500);
  const clearSearch = () => {
    store.dispatch('clearSearch')
    activeUser.value = null
    searchValue.value = '';
  }

  watch(unicodeArray,(newValues, oldValues) => {
    if (searchValue.value !== '' || isEqual(newValues, oldValues)) {
      debouncedSearch()
    }
  })
  watchEffect(() => {
    if (searchValue.value === '') {
      clearSearch()
    }
    if (error.value !== null) {
      return store.dispatch('setErrorAlert', 'Упс, что-то пошло не так')
    }

  })
  const limit = 2
  const displayedCount = ref(limit);
  const displayedUsers = computed(() => userList.value.slice(0, displayedCount.value));

  const loadMore = () => {
    displayedCount.value += limit;
  }

  return {
    searchValue,
    loading,
    selectUser,
    displayedUsers,
    activeUser,
    userList,
    displayedCount,
    loadMore,
    clearSearch
  }
}
