<template>
  <article class="layout-home">
    <slot name="links" />
    <slot />
    <slot name="posts" />
  </article>
</template>

<style scoped>
@layer layout {
  .layout-home {
    display: flex;
    height: inherit;
  }
}
</style>
