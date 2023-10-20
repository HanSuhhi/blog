<template>
  <section class="home-posts relative flex-column-center p-bm">
    <the-search />
    <home-posts-list class="home-posts_list" />
  </section>
</template>

<style scoped>
@layer page {
  .home-posts {
    --_border-color: var(--yellow-bright-2, yellow);
    --_bg-color: hsl(0deg 0% 100% / 10%);
    --_posts-width: 376px;

    top: calc(-1 * var(--_main-box-top));
    left: var(--_main-box-padding);

    width: var(--_posts-width);
    height: calc(100% + var(--_main-box-top) - var(--_main-box-padding));

    background-color: var(--_bg-color);
    border-left: var(--border-width) solid var(--_border-color);
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);

    .home-posts_list {
      overflow: auto;
      flex:1;
    }
  }
}
</style>
