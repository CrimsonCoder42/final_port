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
        'custom-blackhole': '#030015',
        'custom-purple': '#160666',

      },
      screens: {
        'mdx': '850px'
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg, #030015, #160666)",
        'about-pattern': "linear-gradient(180deg, #030015, #160666)",
        'gradient-custom': "url('/src/assets/bg.jpeg')",
        'stars-pattern': "url('/src/assets/stars.png')"
      }
    },
  },
  plugins: [],
}