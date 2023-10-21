<script lang="ts" setup>
const placeholders = [
  "今天天气不错 ☁️"
];

const placeholder = useSample(placeholders);
</script>

<template>
  <div class="the-search flex-row-center pseudo-after double-border">
    <input class="the-search_input input-reset" type="text" :placeholder="placeholder">
    <span class="the-search_icon flex-center">🧐</span>
  </div>
</template>

<style scoped>
@layer comp {
  .the-search {
    --_width: 80%;
    --_height: 36px;
    --_padding-y: var(--mini, 4px);
    --_padding-x: var(--base-space, 16px);
    --_color: var(--white, white);

    width: var(--_width);
    height: var(--_height);
    padding: var(--_padding-y) var(--_padding-x);
    padding-right: 0;

    outline: var(--border);
    outline-color: var(--_color);

    &::after {
      --_db-top: 3px;
      --_db-left: 3px;
      --_db-border-color: var(--_color);
      --_db-filter-blur: 1px;
    }

    .the-search_input {
      flex: 1;
      color: var(--_color);
    }

    .the-search_icon {
      --_font-size: var(--font-title-main, 24px);

      transform: translateY(calc(-1 * var(--_padding-y)));

      aspect-ratio: 1;
      height: calc(100% + 2 * var(--_padding-y));

      font-size: var(--_font-size);

      border-color: var(--_color);
      border-left: var(--border);
    }
  }
}
</style>
