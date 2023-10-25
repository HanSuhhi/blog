<script setup lang="ts">
const { pathname } = useRequestURL();
const { routes, currentRoute } = useTerminalRoutes();

onMounted(() => {
  const index = routes.value.findIndex((item) => {
    if (!item) return pathname === "/";
    return pathname.includes(`/${item}`);
  });
  currentRoute.value = index === -1 ? 0 : index;
});
</script>

<template>
  <nuxt-layout name="terminal">
    <template #tabs>
      <template v-for="route, index of routes" :key="route">
        <terminal-tabs-item
          :current="currentRoute === index"
          :index="index"
          @click="currentRoute = index"
        >
          ~{{ getCurrentPath(route) }}
        </terminal-tabs-item>
      </template>
      <terminal-tabs-item class="terminal-tabs_add">
        +
      </terminal-tabs-item>
    </template>
    <nuxt-page />
    <copyright />
  </nuxt-layout>
</template>

<style scoped>
@layer layout {
  .terminal-tabs_add {
    --_width: 60px;

    width: var(--_width);
  }
}
</style>
