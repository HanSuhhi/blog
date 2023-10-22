<script setup lang="ts">
const { tag = "div" } = defineProps<{
  tag?: string
}>();
</script>

<template>
  <component :is="tag" class="post-tag mr-small px-bs border">
    <slot />
  </component>
</template>

<style scoped>
@layer comp {
  .post-tag {
    --_color: var(--white, white);
    --_border-color: var(--_color, white);

    color: var(--_color);
    filter: brightness(.7);

    &::after {
      --_db-outline-width: .5px;
      --_db-left: 1.5px;
      --_db-top: 1.5px;
      --_db-border-color: var(--_color);
    }
  }
}
</style>
