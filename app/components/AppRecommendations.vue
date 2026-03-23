<script setup>
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/outline';
const streamers = [
  { name: "Miduncy", theme: "Coding Live", viewers: "2.3K", img: "/img/streamer.jpg" },
  { name: "Miduxocas", theme: "Debbugging Sessions", viewers: "1.1K", img: "/img/streamer.jpg" },
  { name: "Midubai", theme: "Frontend Fun", viewers: "50K", img: "/img/streamer.jpg" },
  { name: "Miduplay", theme: "Backend Magic", viewers: "1.3K", img: "/img/streamer.jpg" },
  { name: "Miduxeneize", theme: "Furvo", viewers: "1.5K", img: "/img/streamer.jpg" },
  { name: "Miduelcapo", theme: "JavaScript World", viewers: "8.3K", img: "/img/streamer.jpg" },
]
</script>
<template>
  <section class="bg-base min-h-[93vh] w-[18vw] relative pt-10 ">
    <ArrowLeftEndOnRectangleIcon class="absolute w-6 h-6 text-white right-2" />
    <h2 class="text-white pl-5 font-medium">RECOMMENDED CHANELS</h2>

    <section class="flex flex-col text-white items relative">
      <div v-for="streamer in streamers" class="flex gap-3 my-3">
        <NuxtImg :src="streamer.img" alt="Foto Perfil" width="40" height="40" class="border rounded-full border-base ml-5" />
        <div>
          <h3 class="font-medium">{{ streamer.name }}</h3>
          <p>{{ streamer.theme }}</p>
        </div>
        <span class="absolute right-8">🔴 {{ streamer.viewers }}</span>
      </div>
    </section>
  </section>
</template>