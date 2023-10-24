// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/styles/index.css"
  ],
  app: {
    // baseURL: "/blog/",
    head: {
      style: [
        { innerHTML: "@layer base, utilities, config, comp, layout, page;" }
      ]
      // link: [
      //   { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // ]
    }
  },
  modules: [
    ["@nuxtjs/eslint-module", {
      lintOnStart: false,
      fix: true
    }],
    // ["@nuxtjs/stylelint-module", {
    //   fix: true
    // }],
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "nuxt-lodash",
    "nuxt-icon"
  ],
  vite: {
    vue: {
      script: {
        propsDestructure: true
      }
    }
  },
  typescript: {
    typeCheck: true
  },
  devServer: {
    port: 51714
  },
  googleFonts: {
    families: {
      "Fira Code": true,
      "Source Code Pro": true
    }
  }
});
