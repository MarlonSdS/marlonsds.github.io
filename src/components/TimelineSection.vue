<script setup lang="ts">
import { useLocale } from '../composables/useLocale';
import type { TimelineItem } from '../content/types'

defineProps<{ title: string; items: TimelineItem[] }>()
const { content } = useLocale()
</script>

<template>
  <section class="section">
    <h2>{{ title }}</h2>
    <article v-for="item in items" :key="item.title + item.place" class="item">
      <h3>{{ item.title }}</h3>
      <p class="meta">{{ item.place }} — {{ item.period }}</p>
      <p v-if="item.description">{{ item.description }}</p>
      <details v-if="item.image" class="media">
        <summary>{{ content.ui.image }}</summary>
        <img :src="item.image.src" :alt="item.image.alt" loading="lazy" />
      </details>
    </article>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 2.5rem;
}
h2 {
  margin: 0 0 1rem;
  font-size: 1.4rem;
  color: var(--accent-2);
}
.item {
  border-left: 3px solid var(--surface1);
  padding-left: 1rem;
  margin-bottom: 1.25rem;
}
h3 {
  margin: 0;
  font-size: 1.1rem;
}
.meta {
  margin: 0.15rem 0 0.5rem;
  color: var(--subtext);
}
p {
  margin: 0;
  max-width: 56rem;
}
.media { margin-top: 0.75rem; }
.media summary { cursor: pointer; color: var(--accent); width: fit-content; }
.media img {
  display: block;
  max-width: 100%;
  height: auto;
  margin-top: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid var(--surface1);
}
</style>
