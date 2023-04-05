// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  css: ['normalize.css/normalize.css', '@/assets/css/main.css'],
  googleFonts: {
    families: {
      'Tenor+Sans': [400],
    },
  },
})
