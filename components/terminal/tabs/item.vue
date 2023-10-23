<script setup lang="ts">
const { current } = defineProps<{
  current?: boolean
}>();
</script>

<template>
  <nuxt-link :data-current="current" class="tabs-item flex-center p-mini relative">
    <slot />
    <span class="tabs-item_close">×</span>
  </nuxt-link>
</template>

<style scoped>
@layer comp {
  .tabs-item {
    --_bg-color: var(--black-bright-1);
    --_brightness: 1;
    --_font: var(--font-body-small);
    --_color: var(--white-deep-2);

    width: stretch;

    font-size: var(--_font);
    color: var(--_color);

    background-color: var(--_bg-color);
    filter: brightness(var(--_brightness));

    transition: var(--transition-prop);

    &:not(:last-child) {
      border-right: 1px solid var(--gray-deep-2);
    }

    &:first-child {
      border-top-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
    }

    &:hover {
      --_brightness: 1.5;

      cursor: pointer;

      .tabs-item_close {
        opacity: 1;
      }
    }

    &[data-current = "true"] {
      --_brightness: 2;
    }

    .tabs-item_close {
      position: absolute;
      right: var(--small);

      font-size: var(--font-title);

      opacity: 0;

      transition: var(--transition-prop);

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
