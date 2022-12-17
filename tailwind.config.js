/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  safelist : [
    {
      pattern: /(text|bg)-.*/,
      variants: ['lg', 'dark', 'dark:hover', 'hover', 'focus', 'lg:hover'],
  }
  ]
}
