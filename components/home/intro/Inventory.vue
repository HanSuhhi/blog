<template>
  <section class="intro-ls pseudo" />
</template>

<style scoped>
@layer page {
  .intro-ls {
    --_border-height: 60%;

    height: var(--_inventory-height);

    &::before {
      height: var(--_border-height);
      border-left: var(--border);
      border-left-color: var(--_border-color);
      border-left-style: dashed;
    }

    &::after {
      --_diamond-size: var(--small);
      --_bg-color: var(--_border-color);

      top: var(--_border-height);
      transform: rotate(45deg) translateX(-50%);

      aspect-ratio: 1;
      width: var(--_diamond-size);

      background-color: var(--_bg-color);

    }
  }

}
</style>
