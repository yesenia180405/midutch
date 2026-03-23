<script setup>
import { MagnifyingGlassIcon, UserIcon, UsersIcon } from '@heroicons/vue/24/outline';
</script>
<template>
  <nav class="flex justify-between bg-navbar text-white h-[3vw]">
    <div class="flex pt-3 gap-2 ml-6">
      <NuxtImg src="#" alt="icon" />
      <h1 class="text-2xl">MIDUTCH</h1>
    </div>
    <div class="flex my-2 relative">
      <input type="search" id="search" placeholder="Search" class="bg-navbar border w-[20vw] border-gray-400 text-white pl-2 pr-9 rounded" />
      <MagnifyingGlassIcon
        class="absolute bg-input right-0 top-1/2 -translate-y-1/2 w-12 px-3 h-full text-white pointer-events-none" />
    </div>
    <div class="flex gap-5 iems-center mr-6 justify-center my-2 font-semibold">
      <Icon name="mdi:crown" class="text-white mt-2" size="25"/>
      <button class="h-10 bg-input w-22 border rounded border-gray-900">Log In</button>
      <button class="bg-blue-500 w-22 h-10 border border-blue-600 focus:border-blue-800 rounded ">Sing Up</button>
      <UserIcon class="w-6 h-6 mt-2 text-white" />
    </div>
  </nav>
</template>