<template>
  <q-card flat bordered class="project-card">
    <q-card-section>
      <div class="text-h6 project-title">{{ project.title }}</div>
      <div class="text-caption text-grey-7 q-mb-sm">{{ project.subtitle }}</div>
      <p class="project-desc">{{ project.description }}</p>

      <div class="q-gutter-xs q-mb-md">
        <q-chip
          v-for="badge in project.techBadges"
          :key="badge"
          dense
          outline
          color="primary"
          size="sm"
          :label="badge"
        />
      </div>

      <div class="diagram-scroll q-mb-md">
        <component :is="diagramComp" />
      </div>

      <div class="text-subtitle2 q-mb-xs" style="color: #2D3748">Key Highlights</div>
      <ul class="highlight-list">
        <li v-for="(h, i) in project.highlights" :key="i">{{ h }}</li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import type { Project } from 'src/data/content'

const props = defineProps<{ project: Project }>()

const diagramComp = computed(() => {
  return defineAsyncComponent(
    () => import(`../assets/diagrams/${props.project.diagramComponent}.vue`)
  )
})
</script>

<style scoped lang="scss">
.project-card {
  border-radius: 12px;
  margin-bottom: 24px;
}

.project-title {
  color: #2D3748;
  font-weight: 700;
}

.project-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4A5568;
}

.highlight-list {
  padding-left: 20px;
  margin: 0;

  @media (max-width: $breakpoint-sm-max) {
    padding-left: 16px;
  }

  li {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #4A5568;
    margin-bottom: 6px;

    @media (max-width: $breakpoint-sm-max) {
      font-size: 0.85rem;
    }
  }
}
</style>
