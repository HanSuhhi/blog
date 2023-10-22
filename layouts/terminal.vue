<template>
  <div class="layout-terminal flex-column-start ">
    <article class="layout-terminal_tabs flex-row-between relative">
      <slot name="tabs" />
      <links />
    </article>
    <article class="layout-terminal_default mx-bs ">
      <slot />
    </article>
  </div>
</template>

<style scoped>
@layer layout {
  .layout-terminal {
    --_terminal-color: var(--main-color-bright-2);

    height: inherit;
    color: var(--_terminal-color);

    .layout-terminal_default {
      overflow-y: auto;
      flex: 1;
    }
  }
}
</style>
