<script lang="ts" setup>
const icons = [
  "uil:github",
  "fa6-brands:bilibili"
];
</script>

<template>
  <div class="icon flex-column-center">
    <template v-for="icon of icons " :key="icon">
      <Icon class="link-icon mt-bm" :name="icon" />
    </template>
  </div>
</template>

<style scoped>
@layer page {
  .icon {
    --_size: 40px;
    --_color: var(--white, white);

    font-size: var(--_size);
    color: var(--_color);
  }
}
</style>
