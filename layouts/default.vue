<template>
  <div class="default-background flex-center">
    <div class="default-background_main">
      <BackgroundNoise />
      <slot />
    </div>
  </div>
</template>

<style scoped>
@layer layout {
  .default-background {
    --_bg-main-color: var(--main-color-deep-1);
    --_bg-sub-color: var(--main-color-bright-1);

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(55deg, var(--_bg-sub-color), var(--_bg-main-color));

    .default-background_main {
      --_bg-mask-size: var(--base-margin);
      --_bg-color: var(--black-bright-2);
      --_main-box-padding: var(--base-margin);
      --_main-box-top: 5rem;

      width: stretch;
      height: stretch;
      margin: var(--_bg-mask-size);
      padding: var(--_main-box-padding);
      padding-top: var(--_main-box-top);
      padding-left: 0;

      background-color: var(--_bg-color);
      border-radius: var(--border-radius);
    }
  }
}
</style>
