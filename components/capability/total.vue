<script lang="ts" setup>
const capabilities = getCapabilities();
</script>

<template>
  <terminal-output class="capability-total flex-center mb-mini">
    <p class="p-reset capability-total_num">
      total {{ capabilities.length }}
      <span class="ml-small"> ʕ•̫͡•ོʔ </span>
    </p>
    <capability-legend />
  </terminal-output>
</template>

<style scoped>
@layer comp {
  .capability-total {
    .capability-total_num {
      align-items: center;
    }
  }
}
</style>
