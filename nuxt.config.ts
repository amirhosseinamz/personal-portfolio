import i18nConfig from "./i18n.config";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
    shim: false,
  },
  plugins: [{ src: "~/plugins/vue3-text-clamp.client.ts", mode: "client" }],
  modules: ["@nuxtjs/i18n"],
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap",
        },
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
      {
        code: "fa",
        iso: "fa-IR",
        name: "Persian",
        file: "fa.json",
        dir: "rtl",
      },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
    vueI18n: "./i18n.config.ts",
  },
  css: ["~/assets/sass/_main.scss", "highlight.js/styles/atom-one-dark.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    autoImport: true,
  },
});
