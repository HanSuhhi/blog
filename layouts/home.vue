<template>
  <article class="layout-home">
    <slot name="links" />
    <slot />
    <slot name="posts" />
  </article>
</template>

<style scoped>
@layer page {
  .layout-home {
    display: flex;
    height: inherit;
  }
}
</style>
