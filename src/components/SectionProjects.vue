<template>
  <section class="section-padding section-band">
    <div class="q-mx-auto" style="max-width: 800px; padding: 0 24px">
      <h2 class="section-title">Projects</h2>
      <ProjectCard
        v-for="project in projects"
        :key="project.subtitle"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from 'src/data/content'
import ProjectCard from './ProjectCard.vue'
</script>
