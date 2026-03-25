<script setup>
const streamers = [
  { name: "Miduncy", theme: "Coding Live", viewers: "2.3K", img: "/img/streamer.jpg" },
  { name: "Miduxocas", theme: "Debbugging Sessions", viewers: "1.1K", img: "/img/streamer.jpg" },
  { name: "Midubai", theme: "Frontend Fun", viewers: "50K", img: "/img/streamer.jpg" },
  { name: "Miduplay", theme: "Backend Magic", viewers: "1.3K", img: "/img/streamer.jpg" },
  { name: "Miduxeneize", theme: "Furvo", viewers: "1.5K", img: "/img/streamer.jpg" },
  { name: "Miduelcapo", theme: "JavaScript World", viewers: "8.3K", img: "/img/streamer.jpg" },
]
const close = ref(false);
onMounted(() => {
  if (window.innerWidth < 1024) {
    close.value = true
  }
})
</script>
<template>
  <aside class="bg-base-bg min-h-[93vh] relative pt-10 justify-start items-center flex flex-col" :class="close ? ' w-[9vw] lg:w-[4vw] ' : 'w-[8vw] lg:w-[18vw]'">

    <div class="lg:flex justify-around items-center mb-5 hidden px-3 w-full">
      <h2 v-if="!close" class="text-white font-medium ">RECOMMENDED CHANELS</h2>
      <img 
      src="/icons/collapse.svg" alt="Collapse icon" class="invert flex " :class="close ? 'rotate-180 invert' : ''"
        @click="close = !close">
    </div>

    <section class="hidden lg:flex flex-col text-white relative w-full">
      <div v-if="!close">
        <div v-for="streamer in streamers" :key="streamer.name" class="flex gap-3 my-3">
          <NuxtImg
           :src="streamer.img" alt="Foto Perfil"
            class=" rounded-full border-base-bg ml-5 h-9 w-9" />
          <div>
            <h3 class="font-medium">{{ streamer.name }}</h3>
            <p class="pr-2">{{ streamer.theme }}</p>
          </div>
          <span class="absolute right-8 custom:block hidden">🔴 {{ streamer.viewers }}</span>
        </div>
      </div>

      <div v-else>
        <div v-for="streamer in streamers" :key="streamer" class="flex justify-center items-center my-4">
          <NuxtImg 
          :src="streamer.img" alt="Foto Perfil"
            class="rounded-full h-9 w-9 " />
        </div>
      </div>
    </section>

    <section class="lg:hidden flex flex-col items-center">
      <Icon name="heroicons:video-camera" class="invert mb-3"/>
       <div v-for="streamer in streamers" :key="streamer" class="flex gap-3 my-2 md:my-4 ">
          <NuxtImg 
          :src="streamer.img" alt="Foto Perfil"
            class=" border rounded-full border-base mx-1 h-7 w-7 md:h-9 md:w-9" />
        </div>
    </section>
  </aside>
</template>