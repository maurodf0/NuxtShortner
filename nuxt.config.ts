import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/tailwindcss', /*'@nuxtjs/supabase'*/],
  css: ['@/assets/css/main.css'],
   nitro: {
    compressPublicAssets: true,
  }
})