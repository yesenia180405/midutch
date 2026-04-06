<script setup lang="ts">
const route = useRoute();
const channel = route.params.stream;
const loaded = ref(false);
</script>

<template>
  <section class="flex h-screen">
    <div class="flex-1 relative">
      
      <div v-if="!loaded" class="absolute inset-0 flex items-center justify-center bg-black">
        <p class="text-white text-2xl font-bold">Loading...</p>
      </div>

      <iframe
        :src="`https://player.twitch.tv/?channel=${channel}&parent=localhost&autoplay=true`"
        width="100%"
        height="100%"
        allowfullscreen
        @load="loaded = true"
      />
    </div>

    <div class="w-80">
      <iframe
        :src="`https://www.twitch.tv/embed/${channel}/chat?parent=localhost&darkpopout`"
        width="100%"
        height="100%"
      />
    </div>
  </section>
</template>