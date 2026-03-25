<script setup>
const streams = [
  {
    id: "1",
    user_name: "Miduncy",
    game_name: "League of Legends",
    title: "¡Ranked hasta Challenger o me rayo el pelo!",
    viewer_count: 85420,
    thumbnail_url: "/img/stream.jpg",
    profile_image_url: "https://placehold.co/50x50",
    language: "es",
    is_mature: false
  },
  {
    id: "2",
    user_name: "Miduplay",
    game_name: "Minecraft",
    title: "Supervivencia día 1 - No me ayuda nadie",
    viewer_count: 62100,
    thumbnail_url: "/img/stream.jpg",
    profile_image_url: "https://placehold.co/50x50",
    language: "es",
    is_mature: false
  },
  {
    id: "3",
    user_name: "Midunxocas",
    game_name: "Fortnite",
    title: "Torneo con suscriptores - ¡Premios!",
    viewer_count: 41300,
    thumbnail_url: "/img/stream.jpg",
    profile_image_url: "#",
    language: "es",
    is_mature: false
  },
  {
    id: "4",
    user_name: "Miduncy",
    game_name: "League of Legends",
    title: "¡Ranked hasta Challenger o me rayo el pelo!",
    viewer_count: 85420,
    thumbnail_url: "/img/stream2.jpg",
    profile_image_url: "https://placehold.co/50x50",
    language: "es",
    is_mature: false
  },
  {
    id: "5",
    user_name: "Miduplay",
    game_name: "Minecraft",
    title: "Supervivencia día 1 - No me ayuda nadie",
    viewer_count: 62100,
    thumbnail_url: "/img/stream2.jpg",
    profile_image_url: "https://placehold.co/50x50",
    language: "es",
    is_mature: false
  },
  {
    id: "6 ",
    user_name: "Midunxocas",
    game_name: "Fortnite",
    title: "Torneo con suscriptores - ¡Premios!",
    viewer_count: 41300,
    thumbnail_url: "/img/stream2.jpg",
    profile_image_url: "#",
    language: "es",
    is_mature: false
  }
]
 
const showMore = ref(false);
</script>
<template>
  <section class="pb-8 text-white flex flex-col">
    <h2 class="pt-5 pl-2 font-semibold sm:text-base md:text-lg"> <span class="text-main-text">Live channels</span> we think you'll like
    </h2>

    <section class="grid grid-cols-2 md:grid-cols-3 px-5 gap-8 md:gap-14 py-6 pr-7 ">
      <div v-for="stream in showMore ? streams : streams.slice(0, 3)" :key="stream.id">
        <AppCardStream
          :id="stream.id" :user_name="stream.user_name" :game_name="stream.game_name"
          :title="stream.title" :viewer_count="stream.viewer_count" :thumbnail_url="stream.thumbnail_url"
          :profile_image_url="stream.profile_image_url" :language="stream.language" />
      </div>
    </section>

    <div class="flex  items-center gap-4 mt-4 ">
      <hr class="flex-1 border-gray-700">
      <button class="flex gap-3 items-center justify-center text-xs md:text-sm lg:text-base text-main-text" @click="showMore = !showMore">
        {{ showMore ? "Show less" : "Show more" }}
        <img src="/icons/down.svg" alt="icon" class="invert" :class="showMore ? 'rotate-180 ' : 'w-3 md:w-5 lg:w-6'">
      </button>
      <hr class="flex-1 border-gray-700">
    </div>

  </section>
</template>