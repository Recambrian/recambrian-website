module.exports = {
    content: ['./components/**/*.{js,ts,jsx,tsx}'],
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
  