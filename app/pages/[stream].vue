<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <section>{{ route.fullPath }}
  </section>
</template>