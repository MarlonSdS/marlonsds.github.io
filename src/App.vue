<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import { useLocale } from './composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <AppHeader />
  <main class="page">
    <HeroSection />
    <TimelineSection :title="content.sections.experience" :items="content.experience" />
    <SkillsSection />
    <TimelineSection :title="content.sections.education" :items="content.education" />
  </main>
</template>

<style scoped>
.page {
  max-width: 56rem;
  margin: 0 auto;
  padding: 1rem 1.25rem 4rem;
}
</style>
