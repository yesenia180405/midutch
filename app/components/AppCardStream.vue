<script setup>
const streams = [
  {
    id: "1",
    user_name: "Miduncy",
    game_name: "League of Legends",
    title: "¡Ranked hasta Challenger o me rayo el pelo!",
    viewer_count: 85420,
    thumbnail_url: "/img/stream.jpg",
    profile_image_url: "https://placehold.co/50x50",
    language: "es",
    is_mature: false
  },
  {
    id: "2",
    user_name: "Miduplay",
    game_name: "Minecraft",
    title: "Supervivencia día 1 - No me ayuda nadie",
    viewer_count: 62100,
    thumbnail_url: "/img/stream.jpg",
    profile_image_url: "https://placehold.co/50x50",
    language: "es",
    is_mature: false
  },
  {
    id: "3",
    user_name: "Midunxocas",
    game_name: "Fortnite",
    title: "Torneo con suscriptores - ¡Premios!",
    viewer_count: 41300,
    thumbnail_url: "/img/stream.jpg",
    profile_image_url: "#",
    language: "es",
    is_mature: false
  }
]
</script>
<template>
<section class="text-white  md:grid md:grid-cols-3 gap-14 py-6">
  <div v-for="stream in streams" :key="stream.id">
<img :src="stream.thumbnail_url" alt="Stream" class="w-full"/>

<section class="flex gap-3 my-5">
  <img src="/img/streamer.jpg" alt="streamer" class="h-10 w-10 rounded-full">
  <div class="">
    <p class="font-semibold">{{ stream.title }}</p>
    <p class="text-gray-300">{{ stream.user_name }}</p>
    <p class="text-gray-300">{{ stream.game_name }}</p>
  </div>
</section>

  </div>
</section>
</template>