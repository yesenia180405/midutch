<script setup>
const props = defineProps({
  id: String,
  user_name: String,
  game_name: String,
  title: String,
  viewer_count: Number,
  thumbnail_url: String,
  profile_image_url: String,
  language: String,
  tags: Array,
  img:String
})
const loaded= ref(false)
</script>
<template>
  <section class="flex flex-col">
    <NuxtLink :to="user_name">
      <div class="relative">
        <div v-if="!loaded" class="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div class="w-8 h-8 border-4 border-gray-600 border-t-purple-500 rounded-full animate-spin" />
        </div>
      <img 
        :src="props.thumbnail_url" 
        alt="Stream" 
        @load="loaded=true"
        class="w-full aspect-video object-cover duration-300 hover:translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[-6.5px_6.5px_0px_rgb(145,70,255)]"> 
      </div>
  <section class="flex gap-3 my-3 tru">
      <img :src="props.img" alt="streamer" class="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full ">
      <div class="flex flex-col gap-1 min-w-0">
        <p class="font-semibold text-xs sm:text-sm lg:text-base truncate hover:text-hover-stream">{{ props.title }}</p>
        <p class="text-gray-300 text-xs sm:text-sm lg:text-base truncate">{{ props.user_name }}</p>
        <p class="text-gray-300 text-xs sm:text-sm lg:text-base truncate hover:text-hover-stream">{{ props.game_name }}</p>
        <div class="flex gap-2 mt-1"> 
          <p 
          v-for="tag in props.tags.slice(0, 2)" :key="tag"
            class="bg-tags hover:bg-tag-hover truncate rounded-2xl px-2 text-xs md:text-sm text-gray-400 font-semibold">
            {{ tag }}
          </p>
        </div>
      </div>
    </section>
  </NuxtLink>
  </section>
</template>