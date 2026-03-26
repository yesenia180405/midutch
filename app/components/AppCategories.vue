<script setup>
const categories = [
  {
    id: "21779",
    name: "League of Legends",
    box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/21779-200x267.jpg",
    viewer_count: 185420,
    tags: ["Español", "Ranked", "DropsActivados"]
  },
  {
    id: "509658",
    name: "Just Chatting",
    box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/509658-200x267.jpg",
    viewer_count: 312000,
    tags: ["Español", "18+", "Variety"]
  },
  { 
    id: "33214",
    name: "Fortnite",
    box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/33214-200x267.jpg",
    viewer_count: 95300,
    tags: ["Español", "Torneo", "DropsActivados"]
  },
  {
    id: "27471",
    name: "Minecraft",
    box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/27471-200x267.jpg",
    viewer_count: 74100,
    tags: ["Español", "Survival", "Mods"]
  },
  {
    id: "516575",
    name: "VALORANT",
    box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/516575-200x267.jpg",
    viewer_count: 120800,
    tags: ["Español", "Competitivo", "DropsActivados"]
  },
  {
    id: "32982",
    name: "Grand Theft Auto V",
    box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/32982-200x267.jpg",
    viewer_count: 210500,
    tags: ["Español", "Roleplay", "18+"]
  }
]
 
</script>
<template>
  <section class="text-white w-full px-5">
    <h2 class="pt-5 pl-2 font-semibold text-lg"> <span class="text-main-text">Categories</span> we think you'll like
      <span class="custom:hidden font-bold"> → </span>
    </h2>

    <section class="flex gap-6 mt-6 overflow-x-auto scrollbar-hide">
      <div v-for="category in categories" :key="category.id" class="min-w-30 md:w-full">
        <AppCardCategory 
          :id="category.id" :name="category.name" :box_art_url="category.box_art_url"
          :viewer_count="category.viewer_count" :tags="category.tags" />
      </div>
    </section>


  </section>
</template>