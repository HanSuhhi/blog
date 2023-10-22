<template>
  <div class="layout-system">
    <terminal-input class="layout-system_input my-bs">
      <slot name="input" />
    </terminal-input>
    <slot name="output" />
  </div>
</template>

<style scoped>
@layer layout {
  .layout-system {
    --_line-height: 24px;
    --_font-size: var(--font-body);
    --_learning-theme: var(--blue-bright-1);
    --_rusty-theme: var(--red-bright-2);
    --_color: rgb(235 219 178);

    font-weight: bolder;
    color: var(--_color);
    filter: brightness(.9);

    .layout-system_input {
      &:not(:first-child) {
        margin-top: 0;
      }
    }

  }
}
</style>
