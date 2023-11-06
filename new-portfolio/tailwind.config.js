module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        'custom-dark': '#804dee',
        'custom-darker': '#111132',

      },
      screens: {
        'mdx': '850px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/about.png')",
        'about-pattern': "linear-gradient(180deg, #111132, #140959)",
        'gradient-custom': "url('/src/assets/bg.jpeg')",
        'stars-pattern': "url('/src/assets/stars.png')"
      }
    },
  },
  plugins: [],
}