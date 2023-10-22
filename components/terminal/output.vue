<script setup lang="ts">
const { tag = "div" } = defineProps<{
  tag?: string
}>();
</script>

<template>
  <component :is="tag" class="terminal-output relative">
    <slot />
  </component>
</template>

<style>
@layer comp {
  .terminal-output {
    line-height: var(--_line-height);
  }
}
</style>
