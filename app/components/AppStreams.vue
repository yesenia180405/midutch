<script setup>
const { data } = await useFetch('/api/streams')

const streams = computed(() => data.value || [])
const showMore = ref(false)

const props = defineProps({
  startSlice: Number,
  endSlice: Number,
})
</script>
<template>
  <section class="pb-8 text-white flex flex-col">
    <h2 class="pt-5 pl-2 font-semibold sm:text-base md:text-lg"> <span class="text-main-text">Live channels</span> we
      think you'll like
    </h2>

    <section class="grid grid-cols-2 md:grid-cols-4 px-3 gap-8 md:gap-14 py-6 pr-7 ">
      <div
        v-for="stream in showMore ? streams.slice(props.startSlice, (props.endSlice + 4)) : streams.slice(props.startSlice ?? 0, props.endSlice ?? 3)"
        :key="stream.id">
        <AppCardStream 
        :id="stream.id" :user_name="stream.user_name" :game_name="stream.game_name" :title="stream.title"
          :viewer_count="stream.viewer_count"
          :thumbnail_url="stream.thumbnail_url.replace('{width}', '400').replace('{height}', '225')"
          :profile_image_url="stream.profile_image_url" :language="stream.language" :tags="stream.tags"
          :img="stream.profile_image_url" />
      </div>
    </section>

    <div class="flex  items-center gap-4 mt-4 ">
      <hr class="flex-1 border-gray-700">
      <button 
      class="flex gap-3 p-1 px-5 items-center justify-center text-xs md:text-sm lg:text-base
       text-main-text cursor-pointer hover:bg-hover-icon hover:rounded-2xl font-semibold hover:text-white"
        @click="showMore = !showMore">
        {{ showMore ? "Show less" : "Show more" }}
        <img src="/icons/down.svg" alt="icon" :class="showMore ? 'rotate-180 ' : 'w-3 md:w-5 lg:w-6'">
      </button>
      <hr class="flex-1 border-gray-700">
    </div>

  </section>
</template>