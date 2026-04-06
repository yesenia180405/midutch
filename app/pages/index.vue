<script setup lang="ts">
const AsyncStreams = defineAsyncComponent(() =>
  import('@/components/AppStreams.vue')
)
</script>

<template>
  <section class="bg-base-bg pb-16">
    <AsyncStreams :start-slice="0" :end-slice="4" />
    <AsyncStreams :start-slice="8" :end-slice="12" />
    <AppCategories />
    <AppTheme />
    <AsyncStreams :start-slice="16" :end-slice="20" />
    <AsyncStreams :start-slice="24" :end-slice="28" />
  </section>
</template>