// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()]
  },
  css: ["~/assets/app.css"],
  app: {
    head: {
      title: "Tower Hufham — Portfolio Site",
      meta: [
        {name: "description", content: "Tower Hufham's portfolio website."}
      ],
      htmlAttrs: {
        lang: "en"
      },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg"}
      ]
    }
  },
  image: {
    format: ["webp"]
  }
})