<template>
  <section class="section-padding">
    <div class="q-mx-auto" style="max-width: 800px; padding: 0 24px">
      <h2 class="section-title">Education</h2>
      <div v-for="(edu, i) in education" :key="i" class="edu-item">
        <p class="edu-degree">{{ edu.degree }}</p>
        <p class="edu-institution">{{ edu.institution }} ({{ edu.abbreviation }})</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education } from 'src/data/content'
</script>

<style scoped lang="scss">
.edu-item {
  margin-bottom: 20px;
}

.edu-degree {
  font-size: 1.05rem;
  font-weight: 600;
  color: #2D3748;
  margin: 0 0 4px;
}

.edu-institution {
  font-size: 0.95rem;
  color: #718096;
  margin: 0;
}
</style>
