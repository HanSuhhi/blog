<script setup lang="ts">
</script>

<template>
  <nuxt-layout name="home" class="home">
    <template #links>
      <home-links class="home-links mb-bm" />
    </template>
    <template #posts>
      <HomePosts class="home-posts" />
    </template>
    <HomeIntro class="home-intro" />
    <the-line class="home-line" />
    <copyright-label class="home-copyright" />
  </nuxt-layout>
</template>

<style scoped>
@layer layout {
  .home-links,
  .home-posts,
  .home-intro {
    height: inherit;
  }

  .home-line {
    position: absolute;
    inset: 0;
  }
}
</style>
