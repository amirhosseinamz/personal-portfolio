/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-300': '#011627',
      'primary-400': '#011221',
      'primary-450': '#010C15',
      'primary-500': '#01080E',
      'secondary-1': '#607B96',
      'secondary-2': '#3C9D93',
      'secondary-3': '#4D5BCE',
      'white': '#FFFFFF',
      'accent-1': '#FEA55F',
      'accent-2': '#43D9AD',
      'accent-3': '#E99287',
      'accent-4': '#C98BDF',
      'line-1': '#1E2D3D',
    }
  },
  plugins: [],
  darkMode: 'class',
}

