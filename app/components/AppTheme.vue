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
  <section class="text-white my-5 md:my-15">
    <div class="w-full overflow-x-auto scrollbar-hide">
      <div class="flex gap-5 py-4 px-2 w-full">
        <div 
          v-for="theme in themes" :key="theme.id"
         class="flex w-45 md:w-55 lg:w-65 gap-3 pl-5 bg-theme text-base md:text-xl lg:text-2xl items-center font-semibold rounded-lg relative pr-20 lg:pr-28 h-12 lg:h-16">
            <h2 class="whitespace-nowrap">{{ theme.title }}</h2>
            <img :src="theme.icon" alt="theme icon" class="h-14 w-14 md:h-17 md:w-17 shrink-0 lg:h-22 lg:w-22 absolute right-3 sm:right-0 md:-bottom-3">
        </div>
      </div>
    </div>
  </section>
</template>