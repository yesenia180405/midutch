<script setup>
const streams = [
  {
    id: "1",
    user_name: "Miduncy",
    game_name: "League of Legends",
    title: "¡Ranked hasta Challenger o me rayo el pelo!",
    viewer_count: 85420,
    thumbnail_url: "https://placehold.co/320x180",
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
    thumbnail_url: "https://placehold.co/320x180",
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
    thumbnail_url: "#",
    profile_image_url: "#",
    language: "es",
    is_mature: false
  }
]
</script>
<template>
<section>
  <div v-for="stream in streams" :key="stream.id">
<img :src="stream.thumbnail_url" alt="Stream">
<p>{{ stream.title }}</p>
<p>{{ stream.user_name }}</p>
<p>{{ stream.game_name }}</p>
<p>{{ languaje }}</p>
  </div>
</section>
</template>