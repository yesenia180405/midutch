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
  <section>
      <img :src="props.thumbnail_url" alt="Stream" class="w-full" />
      <section class="flex gap-3 my-5">
        <img src="/img/streamer.jpg" alt="streamer" class="h-10 w-10 rounded-full">
        <div>
          <p class="font-semibold">{{ props.title }}</p>
          <p class="text-gray-300">{{ props.user_name }}</p>
          <p class="text-gray-300">{{ props.game_name }}</p>
        </div>
      </section>
  </section>
</template>