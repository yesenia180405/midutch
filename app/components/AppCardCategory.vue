<script setup>
const props = defineProps({
  id: String,
  name: String,
  box_art_url: String,
  viewer_count: Number,
  tags: Array
})
const formatViews = useFormat()
</script>
<template>
  <section class="text-sm md:text-base">

    <img :src="props.box_art_url" alt="category" class="md:w-full">
    <div>
      <h3 class="font-semibold mt-2">{{ props.name }}</h3>
      <p class="text-gray-300 py-2">{{ formatViews.format(props.viewer_count) }} viewers</p>

      <section class="flex gap-2 flex-wrap">
        <div v-for="tag in tags.slice(0, 2)" :key="tag" class="text-xs md:text-sm">
          <p class="bg-tags rounded-2xl px-2 text-gray-400 font-semibold">{{ tag }}</p>
        </div>
      </section>
    </div>
  </section>
</template>