<template>
  <section class="section-padding section-band">
    <div class="q-mx-auto" style="max-width: 800px; padding: 0 24px">
      <h2 class="section-title">Tech Stack</h2>
      <div v-for="group in techStack.groups" :key="group.label" class="q-mb-md">
        <p class="group-label">{{ group.label }}</p>
        <div class="q-gutter-sm">
          <q-chip
            v-for="item in group.items"
            :key="item"
            outline
            color="primary"
            :label="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { techStack } from 'src/data/content'
</script>

<style scoped lang="scss">
.group-label {
  font-weight: 600;
  color: #2D3748;
  margin-bottom: 8px;
  font-size: 0.95rem;
}
</style>
