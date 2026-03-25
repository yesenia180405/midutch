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
  is_mature: Boolean
})
</script>
<template>
  <section class="flex flex-col">
      <img :src="props.thumbnail_url" alt="Stream" class="w-full aspect-video object-cover ">
      <section class="flex gap-3 my-3">
        <img src="/img/streamer.jpg" alt="streamer" class="h-7 w-7 md:h-10 md:w-10 rounded-full ">
        <div class="flex flex-col gap-1 min-w-0">
          <p class="font-semibold text-xs sm:text-sm lg:text-base ">{{ props.title }}</p>
          <p class="text-gray-300 text-xs sm:text-sm lg:text-base truncate">{{ props.user_name }}</p>
          <p class="text-gray-300 text-xs sm:text-sm lg:text-base truncate">{{ props.game_name }}</p>
          <div class="flex gap-2 mt-1 flex-wrap">
            <p class="bg-tags rounded-2xl px-2 text-xs text-gray-400 font-semibold">{{ props.language==="es" ? "Español" : props.language }}</p>
            <p class="bg-tags rounded-2xl px-2 text-xs text-gray-400 font-semibold truncate">DropsActivados</p>
          </div>
        </div>
      </section>
  </section>
</template>