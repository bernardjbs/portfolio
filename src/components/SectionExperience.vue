<template>
  <section class="section-padding">
    <div class="q-mx-auto" style="max-width: 800px; padding: 0 24px">
      <h2 class="section-title">Experience</h2>
      <q-timeline color="primary">
        <q-timeline-entry
          v-for="(job, i) in experience"
          :key="i"
          :title="job.role"
          :subtitle="`${job.company} — ${job.period}`"
        >
          <ul class="exp-list">
            <li v-for="(point, j) in job.highlights" :key="j">{{ point }}</li>
          </ul>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience } from 'src/data/content'
</script>

<style scoped lang="scss">
.exp-list {
  padding-left: 20px;
  margin: 8px 0 0;

  li {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #4A5568;
    margin-bottom: 8px;
  }
}
</style>
