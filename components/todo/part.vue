<script lang="ts" setup>
const { list } = defineProps<{
  list: string[]
}>();
</script>

<template>
  <ol class="inventory-part ">
    <template v-for="item of list" :key="item">
      <li class="inventory-part_li">
        {{ item }}
      </li>
    </template>
  </ol>
</template>

<style scoped>
@layer page {
  .inventory-part_li {
    --_line-height: 24px;

    line-height: var(--_line-height);
  }
}
</style>
