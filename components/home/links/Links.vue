<template>
  <section class="home-links flex-column-center">
    <home-links-icon name="uil:github" color="black" />
  </section>
</template>

<style scoped>
@layer page {
  .home-links {
    --_width: 5%;
    --_min-width: 40px;

    justify-content: flex-end;
    width: var(--_width);
    min-width: var(--_min-width);
  }
}
</style>
