<script setup>
const { data } = await useFetch('/api/streams')
const streamers = computed(() => data.value || [])
const close = ref(false);
onMounted(() => {
  if (window.innerWidth < 1024) {
    close.value = true
  }
})
</script>
<template>
  <aside 
  class="bg-base-bg min-h-[93vh] relative pt-10 justify-start items-center flex flex-col"
    :class="close ? ' w-[9vw] lg:w-[4vw] ' : 'w-[8vw] lg:w-[18vw]'">

    <div class="lg:flex justify-around items-center mb-5 hidden px-3 w-full">
      <h2 v-if="!close" class="text-white font-medium ">RECOMMENDED CHANELS</h2>
      <img 
        src="/icons/collapse.svg" alt="Collapse icon" class="invert flex cursor-pointer transition-transform duration-200 hover:scale-110" 
        :class="close ? 'rotate-180' : ''" @click="close = !close"
>
    </div>

    <section class="hidden lg:flex flex-col text-white relative w-full">
      <div v-if="!close">
        <div v-for="streamer in streamers.slice(0, 9)" :key="streamer.name" class="flex gap-3 mb-5">
          <img :src="streamer.profile_image_url" alt="Foto Perfil" class=" rounded-full border-base-bg ml-5 h-9 w-9">
          <div class="flex flex-col pr-28 gap-1 w-full">
            <h3 class="font-medium">{{ streamer.user_name }}</h3>
            <p class="pr-2 truncate">{{ streamer.title }}</p>
          </div>
          <span class="absolute right-8 hidden custom:flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-red-600 inline-block"/>
            {{ streamer.viewer_count }}
          </span>
        </div>
      </div>

      <div v-else>
        <div v-for="streamer in streamers.slice(0, 8)" :key="streamer" class="flex justify-center items-center my-4">
          <img :src="streamer.profile_image_url" alt="Foto Perfil" class="rounded-full h-9 w-9 ">
        </div>
      </div>
    </section>

    <section class="lg:hidden flex flex-col items-center">
      <Icon name="heroicons:video-camera" class="invert mb-3" />
      <div v-for="streamer in streamers.slice(0, 8)" :key="streamer" class="flex gap-3 my-2 md:my-4 ">
        <img
         :src="streamer.profile_image_url" alt="Foto Perfil"
          class=" border rounded-full border-base mx-1 h-7 w-7 md:h-9 md:w-9">
      </div>
    </section>
  </aside>
</template>