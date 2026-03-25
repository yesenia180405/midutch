import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    twitchClientId: process.env.TWITCH_CLIENT_ID,
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
  },
  
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/icon", "@pinia/nuxt", "@nuxt/eslint"],
});
