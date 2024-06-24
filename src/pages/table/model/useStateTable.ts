import {reactive, ref, watchEffect} from "vue";
import {results} from './api.ts'

export function useStateTable() {
  const items = reactive(results.map((n, i) => Object.assign({ id: i + 1 }, n)))

  const currentPage = ref(1)
  const perPage = 20
  const headers = [
    { name: 'picture', title: 'Аватар' },
    { name: 'name', title: 'ФИО'},
    { name: 'gender', title: 'Пол', sortable: true },
    { name: 'location', title: 'Страна'},
    { name: 'dob', title: 'Дата рождения'},
    { name: 'email', title: 'Адрес электроной почты',  sortable: true },
    { name: 'phone', title: 'Телефон',  sortable: true  },
  ];
  const searchValue = ref('')

  watchEffect(() => {
    if (searchValue.value !== '') {
      currentPage.value = 1
    }
  })

  return {
    items,
    currentPage,
    headers,
    searchValue,
    perPage
  }
}
