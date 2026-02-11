<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-btn
      v-show="showBackToTop"
      fab
      icon="keyboard_arrow_up"
      color="primary"
      class="back-to-top"
      aria-label="Back to top"
      @click="scrollToTop"
    />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

function onScroll() {
  showBackToTop.value = window.scrollY > window.innerHeight
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped lang="scss">
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
}
</style>
