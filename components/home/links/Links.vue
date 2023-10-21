<script lang="ts" setup>
const icons = [
  "uil:github",
  "fa6-brands:bilibili"
];
</script>

<template>
  <template v-for="icon of icons " :key="icon">
    <Icon class="link-icon mt-bm" :name="icon" />
  </template>
</template>

<style scoped>
@layer page {
  .link-icon {
    --_size: 40px;
    --_color: var(--white, white);

    font-size: var(--_size);
    color: var(--_color);
  }
}
</style>
