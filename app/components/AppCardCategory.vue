<script setup>
const props = defineProps({
  id: String,
  name: String,
  box_art_url: String,
  viewer_count: Number,
  tags: Array
})
</script>
<template>
  <section>
    <img :src="props.box_art_url" alt="category" class="w-full">
    <div>
      <h3 class="font-semibold mt-2">{{ props.name }}</h3>
      <p class="text-gray-300 py-2">{{ props.viewer_count }} viewers</p>

      <section class="flex gap-2">
        <div v-for="tag in tags.slice(0, 2)" :key="tag" class="text-sm">
          <p class="bg-tags rounded-2xl px-2 text-gray-400 font-semibold">{{ tag }}</p>
        </div>
      </section>
    </div>
  </section>
</template>