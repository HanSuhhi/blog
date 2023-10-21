<template>
  <article class="layout-terminal">
    <div class="layout-terminal_tabs flex-row-between">
      <slot name="tabs" />
    </div>
    <div class="layout-terminal_default">
      <slot />
    </div>
  </article>
</template>

<style scoped>
@layer layout {
  .layout-terminal {
    .layout-terminal_tabs {}
  }
}
</style>
