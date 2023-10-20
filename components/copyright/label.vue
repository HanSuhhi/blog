<script lang="ts" setup>
const text = ref();

const text_length = computed(() => {
  return text.value?.getBoundingClientRect()?.width || 0;
});
</script>

<template>
  <div ref="text" class="copyright-label px-small">
    © 2023, Don Copr.
  </div>
</template>

<style scoped>
@layer comp {
  .copyright-label {
    --_color: var(--blue-deep-2);
    --_deg: 6deg;
    --_font-size: var(--font-body, 14px);

    position: absolute;
    bottom: calc(v-bind(text_length) * 1px * sin(var(--_deg)));
    left: -2px;
    transform: rotate(var(--_deg));

    width: fit-content;

    font-size: var(--_font-size);

    background-color: var(--_color);

    .copyright-label_symbol {
      font-size: var(--font-title);
      font-weight: bold;
    }
  }
}
</style>
