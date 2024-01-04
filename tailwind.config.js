module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  safelist: [
    'text-red-600',
    {
      pattern: /(bg|text)-(indigo|red|green|blue)-(100|200|400|600|800)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
