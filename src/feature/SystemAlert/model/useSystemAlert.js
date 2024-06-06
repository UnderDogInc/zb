import {computed, ref} from "vue";
import { useStore } from 'vuex';

export function useSystemAlert () {
  const store = useStore()
  const alert = computed(() => store.getters.getAlert)
  const hide = () => store.dispatch('hideAlert')

  return {
    alert,
    hide
  }
}
