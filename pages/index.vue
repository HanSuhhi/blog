<script setup lang="ts">
const { routes, currentRoute } = useTerminalRoutes();
</script>

<template>
  <nuxt-layout name="terminal">
    <template #tabs>
      <template v-for="route, index of routes" :key="route">
        <tabs-item :current="currentRoute === index" @click="currentRoute = index">
          {{ route }}
        </tabs-item>
      </template>
    </template>
    <!-- <HomeIntro class="home-intro" />
    <the-line class="home-line" />
    <copyright-label class="home-copyright" /> -->
  </nuxt-layout>
</template>

<style scoped>
@layer layout {
  .home-line {
    position: absolute;
    inset: 0;
  }
}
</style>
