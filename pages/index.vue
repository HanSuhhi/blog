<script setup lang="ts">
</script>

<template>
  <NuxtLayout name="home" class="home">
    <template #links>
      <HomeLinks />
    </template>
    <HomeIntro />
    <template #posts>
      <HomePosts />
    </template>
  </NuxtLayout>
</template>

<style scoped>
@layer page {
  .home > * {
    height: inherit;
  }
}
</style>
