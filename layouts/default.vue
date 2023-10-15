<template>
  <div class="default-background flex-center">
    <div class="default-background_main">
      1
    </div>
  </div>
</template>

<style scoped>
@layer page {
  .default-background {
    --_bg-main-color: var(--main-color-deep-1);
    --_bg-sub-color: var(--main-color-bright-1);

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(55deg, var(--_bg-sub-color), var(--_bg-main-color));

    .default-background_main {
      --_bg-mask-size: var(--normal);
      --_bg-color: var(--black-bright-2);

      width: stretch;
      height: stretch;
      margin: var(--_bg-mask-size);

      background-color: var(--_bg-color);
      border-radius: var(--border-radius);
    }
  }
}
</style>
