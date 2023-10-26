<template>
  <div class="default-background flex-center">
    <div class="default-background_main relative">
      <BackgroundNoise />
      <slot />
    </div>
  </div>
</template>

<style scoped>
@layer layout {
  .default-background {
    --_bg-color: var(--black-bright-2);

    width: 100vw;
    height: 100vh;
    background-color: var(--_bg-color);

    .default-background_main {
      --_bg-mask-size: var(--base-space);
      --_main-box-padding: var(--base-space);
      --_border-main-color: var(--main-color-deep-2);
      --_border-sub-color: var(--main-color-bright-2);

      width: stretch;
      height: stretch;
      margin: var(--_bg-mask-size);

      background-image: linear-gradient(var(--_bg-color), var(--_bg-color)), linear-gradient(55deg, var(--_border-sub-color), var(--_border-main-color));
      background-clip: content-box, border-box;
      background-origin: border-box;
      border: solid 2px transparent;
      border-radius: var(--border-radius);

    }
  }
}
</style>
