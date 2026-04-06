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
  <section class="text-sm md:text-base mt-2">

    <img :src="props.box_art_url" loading="lazy" alt="category" class="md:w-full duration-300 hover:translate-x-2 hover:-translate-y-2 hover:shadow-[-6.5px_6.5px_0px_rgb(145,70,255)]">
    <div>
      <h3 class="font-semibold mt-2 hover:text-hover-stream">{{ props.name }}</h3>
      <p class="text-gray-300 py-2">{{ formatViews.format(props.viewer_count) }} viewers</p>

      <section class="flex gap-2 flex-wrap">
        <div v-for="tag in tags.slice(0, 2)" :key="tag" class="text-xs md:text-sm truncate">
          <p class="bg-tags truncate hover:bg-tag-hover rounded-2xl px-2 text-gray-400 font-semibold">{{ tag }}</p>
        </div>
      </section>
    </div>
  </section>
</template>