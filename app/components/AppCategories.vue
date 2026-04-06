<script setup>
const {data} = await useFetch("/api/categories");
const categories = computed(()=> data.value ?? [])
 
</script>
<template>
  <section class="text-white w-full px-5">
    <h2 class="pt-5 pl-2 font-semibold text-lg"> <span class="text-main-text">Categories</span> we think you'll like
      <span class="custom:hidden font-bold"> → </span>
    </h2>

    <section class="flex gap-6 mt-6 overflow-x-auto scrollbar-hide  ">
      <div v-for="category in categories" :key="category.id" class="min-w-30 md:w-full">
        <AppCardCategory 
          :id="category.id" :name="category.name" :box_art_url="category.box_art_url"
          :viewer_count="category.viewer_count" :tags="category.tags" />
      </div>
    </section>


  </section>
</template>