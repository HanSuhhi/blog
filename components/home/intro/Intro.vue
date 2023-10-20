<template>
  <section class="home-intro flex-column-between">
    <home-intro-ls class="home-intro_ls" />
    <home-intro-inventory />
  </section>
</template>

<style scoped>
@layer page {
  .home-intro {
    --_border-color: var(--white-deep-2);
    --_ls-height: 60%;
    --_inventory-height: 35%;

    flex: 1;

    .home-intro_ls {
      overflow-x: clip;
      overflow-y: auto;
    }
  }
}
</style>
