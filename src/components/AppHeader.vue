<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import { useTheme } from '../composables/useTheme'
import type { Locale } from '../content/types'

const { locale, content, setLocale } = useLocale()
const { theme, toggle } = useTheme()
const locales: Locale[] = ['pt', 'en']
</script>

<template>
  <header class="header">
    <!--Script de contagem de visualizações-->
    <script data-goatcounter="https://marlonsds.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
    <div class="group" role="group" :aria-label="content.ui.language">
      <button
        v-for="l in locales"
        :key="l"
        type="button"
        :aria-pressed="locale === l"
        @click="setLocale(l)"
      >
        {{ l.toUpperCase() }}
      </button>
    </div>
    <button type="button" class="theme" :aria-label="content.ui.theme" @click="toggle">
      {{ theme === 'light' ? '☾' : '☀' }}
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  padding: 1rem 1.25rem 0;
}
.group {
  display: flex;
  border: 1px solid var(--surface1);
  border-radius: 999px;
  overflow: hidden;
}
button {
  font: inherit;
  color: var(--text);
  background: transparent;
  border: 0;
  padding: 0.35rem 0.8rem;
  cursor: pointer;
}
.group button[aria-pressed='true'] {
  background: var(--accent);
  color: var(--base);
}
.theme {
  border: 1px solid var(--surface1);
  border-radius: 999px;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0;
}
</style>
