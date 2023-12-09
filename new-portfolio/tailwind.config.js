module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
      '800': '800px',
    },
      colors: {
        primary: "#050816",
        'custom-orange': '#e8772e',
        'custom-darker': '#111132',

      },
      screens: {
        'mdx': '850px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/about.png')",
        'about-pattern': "linear-gradient(180deg, #030015, #160666)",
        'gradient-custom': "url('/src/assets/bg.jpeg')",
        'stars-pattern': "url('/src/assets/stars.png')"
      }
    },
  },
  plugins: [],
}