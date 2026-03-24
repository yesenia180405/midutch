<template>
  <div class="flex flex-col h-screen">
    <AppNavbar />
    <div class="flex flex-1 overflow-hidden">
      <AppRecommendations />
      <main class="flex-1 overflow-y-auto">
        <slot />  
      </main>
    </div>
  </div>
</template>