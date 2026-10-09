<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
const photo = `${import.meta.env.BASE_URL}face.jpeg` // troque por sua foto em public/
</script>

<template>
  <section class="hero">
    <img class="photo" :src="photo" :alt="content.name" width="240" height="240" />
    <div>
      <h1>{{ content.name }}</h1>
      <p class="meta">{{ content.role }}</p>
      <p class="meta">{{ content.location }}</p>
      <p class="bio">{{ content.bio }}</p>
      <ul class="contacts">
        <li v-for="c in content.contacts" :key="c.label">
          <span>{{ c.label }}</span>
          <a :href="c.href" target="_blank" rel="noopener noreferrer">
            {{ c.value }}
          </a>
        </li>
      </ul>
      <a class="button" :href="content.resume.href" target="_blank" rel="noopener noreferrer">
        {{ content.resume.label }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 2rem;
  align-items: start;
  padding: 2rem 0 3rem;
}
.photo {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 1rem;
  border: 2px solid var(--accent);
  background: var(--surface0);
}
h1 {
  margin: 0 0 0.25rem;
  font-size: 2rem;
  line-height: 1.2;
}
.meta {
  margin: 0;
  color: var(--subtext);
}
.bio {
  max-width: 60ch;
  margin: 1rem 0;
}
.contacts {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: grid;
  gap: 0.25rem;
  max-width: 100%;
}
.contacts li {
  display: flex;
  gap: 0.75rem;
}
.contacts li a {
  min-width: 0;
  overflow-wrap: anywhere;
}
.contacts span {
  min-width: 5.5rem;
  color: var(--subtext);
}
.button {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--accent);
  color: var(--base);
  text-decoration: none;
  font-weight: 600;
}
@media (max-width: 40rem) {
  .hero {
    grid-template-columns: 1fr;
  }
  .photo {
    max-width: 12rem;
  }
}
</style>
