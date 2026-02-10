<template>
  <section class="section-padding">
    <div class="q-mx-auto" style="max-width: 800px; padding: 0 24px">
      <h2 class="section-title">About</h2>
      <p v-for="(line, i) in about.summary" :key="i" class="about-text">
        {{ line }}
      </p>
      <p class="about-location">
        <q-icon name="place" size="20px" class="q-mr-xs" />
        {{ about.location }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { about } from 'src/data/content'
</script>

<style scoped lang="scss">
.about-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4A5568;
  margin-bottom: 12px;
}

.about-location {
  color: #718096;
  font-size: 0.95rem;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
</style>
