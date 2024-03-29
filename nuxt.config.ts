// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/plausible', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/input.css',
  },
  css: ['normalize.css/normalize.css', '@/assets/css/main.css'],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      'Tenor+Sans': [400],
      'Patrick Hand': [400],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  devtools: { enabled: true },
})
