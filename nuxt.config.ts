// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()]
  },
  css: ["~/assets/app.css"]
})