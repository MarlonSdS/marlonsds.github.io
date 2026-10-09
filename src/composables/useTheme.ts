import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

function initialTheme(): Theme {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Estado no nível do módulo: todos os componentes compartilham o mesmo tema.
const theme = ref<Theme>(initialTheme())

watch(
  theme,
  (value) => {
    document.documentElement.dataset.theme = value
    localStorage.setItem('theme', value)
  },
  { immediate: true },
)

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
  return { theme, toggle }
}
