import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Midutch | Live Streaming',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content:
            'Midutch is a live streaming platform inspired by Twitch. Discover channels, follow your favorite streamers and enjoy the best live content.',
        },
        { name: 'author', content: 'Your name' },
        { property: 'og:title', content: 'Midutch | Live Streaming' },
        {
          property: 'og:description',
          content:
            'Live streaming platform inspired by Twitch. Channels, categories and live content.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/icons/logo_twitch.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Midutch | Live Streaming' },
        {
          name: 'twitter:description',
          content: 'Live streaming platform inspired by Twitch.',
        },
      ]
    }
  },
  runtimeConfig: {
    twitchClientId: process.env.TWITCH_CLIENT_ID,
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
  },

  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/icon", "@pinia/nuxt", "@nuxt/eslint"],
});
