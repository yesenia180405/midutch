<script setup>
const themes = [
  { id: 1, title: "Games", icon: "/icons/gaming.svg" },
  { id: 2, title: "IRL", icon: "/icons/irl.svg" },
  { id: 3, title: "Music & DJs", icon: "/icons/music.svg" },
  { id: 4, title: "Creative", icon: "/icons/creative.svg" },
  { id: 5, title: "Esports", icon: "/icons/esports.svg" }
];
</script>
<template>
  <section class="text-white flex gap-6 mt-10">
    <div class=" flex w-full gap-5 mr-5">
    <div 
    v-for="theme in themes" :key="theme.id"
      class="flex w-full gap-3 pl-5 bg-theme text-3xl items-center font-semibold px-2 rounded-lg relative pr-28">
        <h2>{{ theme.title }}</h2>
        <img :src="theme.icon" alt="theme icon" class="h-24 w-24 absolute right-6 -top-3">
      </div>
    </div>
  </section>
</template>