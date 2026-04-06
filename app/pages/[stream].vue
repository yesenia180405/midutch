<script setup lang="ts">
const route = useRoute();
const channel = route.params.stream; 
</script>

<template>
  <section class="flex h-screen">
    <!-- Video -->
    <div class="flex-1">
      <iframe
        :src="`https://player.twitch.tv/?channel=${channel}&parent=localhost&autoplay=true`"
        width="100%"
        height="100%"
        allowfullscreen
      />
    </div>

    <!-- Chat -->
    <div class="w-80">
      <iframe
        :src="`https://www.twitch.tv/embed/${channel}/chat?parent=localhost&darkpopout`"
        width="100%"
        height="100%"
      />
    </div>
  </section>
</template>