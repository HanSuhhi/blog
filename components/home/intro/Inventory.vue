<script lang="ts" setup>
const { data: { body: inventory_data } } = await useInventory();
</script>

<template>
  <section class="intro-ls flex-row-around">
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

    display: flex;
    height: var(--_inventory-height);

    justify-content: space-around;

    .intro-ls_part {
      --_padding-x: var(--base-space, 32px);
      --_padding-y: var(--small, 8px);

    }
  }

}
</style>
