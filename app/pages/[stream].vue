<script setup lang="ts">
const route = useRoute();
const channel = route.params.stream;
const loaded = ref(false);
</script>

<template>
  <section class="flex flex-col lg:flex-row h-screen">
    
    <div class="flex-1 relative h-[50vh] lg:h-full">
      <div v-if="!loaded" class="absolute inset-0 flex items-center justify-center bg-black">
        <div class="w-8 h-8 border-4 border-gray-600 border-t-purple-500 rounded-full animate-spin" />
      </div>
      <iframe
        :src="`https://player.twitch.tv/?channel=${channel}&parent=midutch-gamma.vercel.app&autoplay=true`"
        width="100%"
        height="100%"
        allowfullscreen
        @load="loaded = true"
      />
    </div>

   
    <div class="w-full h-[50vh] lg:w-80 lg:h-full">
      <iframe
        :src="`https://www.twitch.tv/embed/${channel}/chat?parent=midutch-gamma.vercel.app&darkpopout`"
        width="100%"
        height="100%"
      />
    </div>

  </section>
</template>