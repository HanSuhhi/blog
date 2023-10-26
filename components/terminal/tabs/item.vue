<script setup lang="ts">
const { current, index, deleteFunc } = defineProps<{
  current?: boolean
  index?: number
  deleteFunc?: ReturnType<typeof useTerminalRoutes>["delete_route_by_index"]
}>();

const isMainTabsItem = computed(() => !isUndefined(index));
</script>

<template>
  <a :data-current="current" class="tabs-item flex-center p-mini relative">
    <slot />
    <span v-if="isMainTabsItem" class="tabs-item_close flex-center" @click.stop="deleteFunc!(index!)">×</span>
  </a>
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

    &:first-of-type {
      border-top-left-radius: var(--border-radius);
    }

    &:last-of-type {
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
  }

  .tabs-item_close {
      --_size: 15px;
      --_border-radius: 2px;

      position: absolute;
      right: var(--small);

      width: var(--_size);
      height: var(--_size);

      font-size: var(--font-title);

      opacity: 0;
      border-radius: var(--_border-radius);

      transition: transform var(--transition-prop);

      &:hover {
        transform: scale(1.8);
       background-color: var(--gray-deep-2);
      }
    }
}
</style>
