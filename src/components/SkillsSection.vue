<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <section class="section">
    <h2>{{ content.skills.title }}</h2>
    <div v-for="g in content.skills.groups" :key="g.title" class="group">
      <h3>{{ g.title }}</h3>
      <p v-if="g.description" class="desc">{{ g.description }}</p>
      <a v-if="g.link" class="link" :href="g.link.href">{{ g.link.label }}</a>
      <ul class="tags">
        <li v-for="item in g.items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section { margin-bottom: 2.5rem; }
h2 { margin: 0 0 1rem; font-size: 1.4rem; color: var(--accent-2); }
.group { margin-bottom: 1.5rem; }
h3 { margin: 0 0 0.35rem; font-size: 1.1rem; }
.desc { margin: 0 0 0.5rem;  }
.link { display: inline-block; margin-bottom: 0.5rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; margin: 0; padding: 0; }
.tags li { padding: 0.2rem 0.75rem; border-radius: 999px; background: var(--surface0); }
</style>