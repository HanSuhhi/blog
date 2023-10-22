<script lang="ts" setup>
const icons = [
  "uil:github",
  "fa6-brands:bilibili"
];
</script>

<template>
  <ol class="links ol-reset flex-center">
    <li v-for="icon of icons " :key="icon" class="links-link flex-center">
      <Icon class="links-link_icon" :name="icon" />
    </li>
  </ol>
</template>

<style scoped>
@layer comp {
  .links {
    --_bg-color: var(--gray-deep-2);
    --_size: var(--font-title-small);
    --_padding: var(--mini);
    --_height: calc(var(--_size) + 2 * var(--_padding));

    position: absolute;
    top: 100%;
    right: 0;

    box-sizing: border-box;
    aspect-ratio: 1;
    height: var(--_height);

    color: var(--_color);

    background-color: var(--_bg-color);

    .links-link {
      cursor: pointer;
      height: var(--_height);
      padding: 0 var(--_padding);

      .links-link_icon {
        font-size: var(--_size);
        color: var(--_color);
      }
    }
  }
}
</style>
