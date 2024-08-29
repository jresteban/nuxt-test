// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    public: {
      bitlyToken: process.env.BITLY_TOKEN
    }
  },
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
      }
    },
  },

})