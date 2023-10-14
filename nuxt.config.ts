// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    Bun.resolveSync("assets/styles/index.css", import.meta.dir)
  ],
  devServer: {
    port: 51714
  }
})
