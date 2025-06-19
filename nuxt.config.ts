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
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
        supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
        supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    } 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    'nuxt-toast',
    '@nuxthub/core',
  ],
  css: ['@/assets/css/main.css'],
   nitro: {
    compressPublicAssets: true,
  },
  
})