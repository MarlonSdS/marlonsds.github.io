<script setup lang="ts">
import type { TimelineItem } from '../content/types'

defineProps<{ title: string; items: TimelineItem[] }>()
</script>

<template>
  <section class="section">
    <h2>{{ title }}</h2>
    <article v-for="item in items" :key="item.title + item.place" class="item">
      <h3>{{ item.title }}</h3>
      <p class="meta">{{ item.place }} — {{ item.period }}</p>
      <p v-if="item.description">{{ item.description }}</p>
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
  max-width: 65ch;
}
</style>
