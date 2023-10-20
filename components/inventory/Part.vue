<script lang="ts" setup>
const { list } = defineProps<{
  list: string[]
}>();
</script>

<template>
  <div class="inventory-part">
    <h2 class="inventory-part_title h-reset">
      <slot />
    </h2>
    <ul class="ul-reset">
      <template v-for="item of list" :key="item">
        <li class="inventory-part_li">
          {{ item }}
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
@layer page {
  .inventory-part_title {
    --_size: var(--font-title-small);

    font-size: var(--_size);
    font-weight: bold;
  }

  .inventory-part_li {
    --_line-height: 24px;

    line-height: var(--_line-height);
    list-style: inside;

    &:first-child {
      --_margin-top: var(--small, 12px);

      margin-top: var(--_margin-top);
    }
  }
}
</style>
