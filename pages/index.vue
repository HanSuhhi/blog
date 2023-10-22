<script setup lang="ts">
const { pathname } = useRequestURL();
const { routes, currentRoute } = useTerminalRoutes();

onMounted(() => {
  const index = useFindIndex(routes.value, (item: string) => `/${item}` === pathname);
  currentRoute.value = index === -1 ? 0 : index;
});
</script>

<template>
  <nuxt-layout name="terminal">
    <template #tabs>
      <template v-for="route, index of routes" :key="route">
        <terminal-tabs-item tabs-item :current="currentRoute === index" :to="getCurrentPath(route)" @click="currentRoute = index">
          ~{{ getCurrentPath(route) }}
        </terminal-tabs-item>
      </template>
      <terminal-tabs-item class="terminal—add">
        +
      </terminal-tabs-item>
    </template>
    <nuxt-page />
    <copyright />
  </nuxt-layout>
</template>

<style scoped>
@layer layout {
  .terminal—add {
    --_width: 60px;

    width: var(--_width);
  }
}
</style>
