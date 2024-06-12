import i18nConfig from './i18n.config';
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    legacy: false,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
        dir: 'ltr'
      },
      {
        code: 'fa',
        iso: 'fa-IR',
        name: 'Persian',
        file: 'fa.json',
        dir: 'rtl'
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    vueI18n: './i18n.config.ts'
  },
  css: ['~/assets/sass/_main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: [
    '@nuxtjs/style-resources',
  ],
})
