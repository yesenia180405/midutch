<script setup>
</script>
<template>
  <nav class="flex justify-between items-center bg-navbar text-white px-3 md:px-6 py-2">
    
    <div class="flex gap-1 md:gap-2 items-center cursor-pointer"  @click="navigateTo('/')" >
      <img src="/icons/logo_twitch.svg" alt="icon" class="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 object-cover">
      <h1 class="text-sm sm:text-base md:text-2xl font-bold pl-1">MIDUTCH</h1>
      <img src="/icons/more.svg" alt="More Information" class="invert h-4 sm:h-5 md:h-6 ml-1 md:ml-4">
    </div>

    <div class="flex items-center">
      <input 
      id="search" type="search" placeholder="Search"
        class="bg-navbar border border-gray-500 text-white text-xs sm:text-sm md:text-base 
               w-[18vw] sm:w-[20vw] md:w-[22vw] 
               h-6 sm:h-7 md:h-9 
               pl-2 rounded-l-md" >
      <div class="bg-input rounded-r-md flex items-center px-1 md:px-2 h-6 sm:h-7 md:h-9">
        <img src="/icons/search.svg" alt="Search Icon" class="invert w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
      </div>
    </div>

    <div class="flex gap-2 md:gap-5 items-center font-semibold">
      <img src="/icons/notification.svg" alt="notification" class="invert w-4 sm:w-5 md:w-8">
      <button 
      class="bg-input border border-gray-900 rounded 
                     text-xs sm:text-sm md:text-base 
                     px-2 sm:px-3 md:px-4 
                     py-1 sm:py-1.5 md:py-2">Log In</button>
      <button 
      class="bg-blue-500 border border-blue-600 rounded 
                     text-xs sm:text-sm md:text-base 
                     px-2 sm:px-3 md:px-4 
                     py-1 sm:py-1.5 md:py-2">Sign Up</button>
      <img src="/icons/profile.svg" alt="Perfil" class="invert w-4 sm:w-5 md:w-8">
    </div>

  </nav>
</template>