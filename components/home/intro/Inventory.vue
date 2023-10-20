<script lang="ts" setup>
const { data: { body: inventory_data } } = await useInventory();
</script>

<template>
  <section class="intro-ls pseudo">
    <template v-for="[name, ...details] of inventory_data" :key="name">
      <inventory-part class="intro-ls_part" :list="details">
        {{ name }}
      </inventory-part>
    </template>
  </section>
</template>

<style scoped>
@layer page {
  .intro-ls {
    --_border-width: 60%;

    display: flex;
    height: var(--_inventory-height);

    &::before {
      height: var(--_border-width);
      border-left: var(--border);
      border-left-color: var(--_border-color);
      border-left-style: dashed;
    }

    &::after {
      --_diamond-size: var(--small);
      --_bg-color: var(--_border-color);

      top: var(--_border-width);
      transform: rotate(45deg) translateX(-50%);

      aspect-ratio: 1;
      width: var(--_diamond-size);

      background-color: var(--_bg-color);

    }

    .intro-ls_part {
      --_part-min-width: 200px;
      --_padding-x: var(--base-margin, 32px);
      --_padding-y: var(--small, 8px);

      width: var(--_part-width);
      min-width: var(--_part-min-width);
      padding: var(--_padding-y) var(--_padding-x);
    }
  }

}
</style>
