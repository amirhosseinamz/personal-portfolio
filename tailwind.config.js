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
        extend: {
            screens: {
                xs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
        colors: {
            'primary-100': '#1C2B3A',
            'primary-300': '#011627',
            'primary-400': '#011221',
            'primary-450': '#010C15',
            'primary-500': '#01080E',
            'secondary-1': '#607B96',
            'secondary-2': '#3C9D93',
            'secondary-3': '#4D5BCE',
            'white': '#FFFFFF',
            'light-100': '#E5E9F0',
            'accent-1': '#FEA55F',
            'accent-2': '#43D9AD',
            'accent-3': '#E99287',
            'accent-4': '#C98BDF',
            'line-1': '#1E2D3D',
            'transparent': 'transparent',
        }
    },
    plugins: [],
    darkMode: 'class',
}

