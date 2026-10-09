import { computed, ref, watch } from 'vue'
import { pt } from '../content/pt'
import { en } from '../content/en'
import type { Content, Locale } from '../content/types'

const contents: Record<Locale, Content> = { pt, en }

function initialLocale(): Locale {
  const saved = localStorage.getItem('locale')
  if (saved === 'pt' || saved === 'en') return saved
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

const locale = ref<Locale>(initialLocale())

watch(
  locale,
  (value) => {
    const c = contents[value]
    document.documentElement.lang = c.htmlLang
    document.title = `${c.name} — ${c.role}`
    localStorage.setItem('locale', value)
  },
  { immediate: true },
)

export function useLocale() {
  const content = computed(() => contents[locale.value])
  const setLocale = (value: Locale) => {
    locale.value = value
  }
  return { locale, content, setLocale }
}
