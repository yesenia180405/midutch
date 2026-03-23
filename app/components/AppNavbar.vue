<script setup>
</script>
<template>
  <nav class="flex justify-between bg-navbar text-white h-[3vw]">
    <div class="flex pt-3 gap-2 ml-6">
      <img src="/img/logo_twitch.svg" alt="icon" class="w-7 h-7 object-cover mt-1 mr-1"/>
      <h1 class="text-2xl">MIDUTCH</h1>
    </div>
    <div class="flex my-2">
      <input type="search" id="search" placeholder="Search" class="bg-navbar border w-[20vw] border-gray-500 text-white pl-2 pr-9 rounded-l-lg" />
      <div class="bg-input pr-2 rounded-r-lg">
        <img src="/img/search.svg" alt="Search Icon" class="invert h-8 pt-1 pl-1">
      </div>

    </div>
    <div class="flex gap-5 iems-center mr-6 justify-center my-2 font-semibold">
      <img src="/img/notification.svg" alt="notification" class="invert w-8"/>
      <button class="h-10 bg-input w-22 border rounded  border-gray-900">Log In</button>
      <button class="bg-blue-500 w-22 h-10 border border-blue-600 focus:border-blue-800 rounded ">Sing Up</button>
      <img src="/img/profile.svg" alt="Perfil" class=" w-8 invert">
    </div>
  </nav>
</template>