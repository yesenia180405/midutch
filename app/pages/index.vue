<script setup lang="ts">
const AsyncStreams = defineAsyncComponent(() =>
  import('@/components/AppStreams.vue')
)

const { data } = await useFetch('/api/streams')
const streams = computed(() => data.value || [])
</script>

<template>
  <section class="bg-base-bg pb-16">
    <AsyncStreams :streams="streams" :start-slice="0" :end-slice="4" />
    <AsyncStreams :streams="streams" :start-slice="8" :end-slice="12" />
    <AppCategories />
    <AppTheme />
    <AsyncStreams :streams="streams" :start-slice="16" :end-slice="20" />
    <AsyncStreams :streams="streams" :start-slice="24" :end-slice="28" />
  </section>
</template>