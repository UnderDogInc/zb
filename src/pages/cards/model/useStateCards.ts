import { ref, watch } from 'vue'
import { fetchCards } from './api.ts'
import { useRouter } from 'vue-router'
import { Routes } from '../../../app/providers/routes/routes.enum.ts'
import type {Card} from '~/app/interface/index.ts'

export function useStateCards() {
  const isLoading = ref(false)
  const page = ref(1)
  const cards = ref<Card[]>([])
  const totalPages = ref(0)
  const router = useRouter()

  watch(page, () => {
    fetchPageData()
  })

  async function fetchPageData(isInitial = false) {
    try {
      isLoading.value = true
      const { data } = await fetchCards(page.value)
      if (isInitial) {
        cards.value = data.items
        totalPages.value = data.nav.total
      } else {
        cards.value = [...cards.value, ...data.items]
      }
    } catch (error) {
      console.error('Что-то не так:', error)
    } finally {
      isLoading.value = false
    }
  }

  function goToPage(code:string) {
    router.push({ name: Routes.ARTICLE, params: { articleId: code } })
  }

  fetchPageData(true)

  return {
    isLoading,
    page,
    cards,
    totalPages,
    goToPage
  }
}
