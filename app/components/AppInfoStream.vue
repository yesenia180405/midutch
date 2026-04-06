<script setup>
defineProps({
    user_name: String,
    game_name: String,
    title: String,
    viewer_count: Number,
})
</script>

<template>
    <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-56 bg-gray-900 rounded p-3 text-xs
            invisible opacity-0 group-hover:visible group-hover:opacity-100 
            transition-opacity duration-200 z-50 pointer-events-none">
        <div class="flex items-center gap-1 mb-1">
            <p class="font-bold text-white">{{ user_name }}</p>
            <span class="text-gray-400">·</span>
            <p class="text-gray-400 truncate">{{ game_name }}</p>
        </div>

        <p class="text-gray-300 truncate mb-2">{{ title }}</p>

        <div class="flex items-center gap-1">
            <span class="w-2 h-2 bg-red-500 rounded-full inline-block" />
            <p class="text-gray-300">En directo · {{ viewer_count }} espectadores</p>
        </div>

    </div>
</template>