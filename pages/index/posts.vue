<template>
  <section class="posts flex-column-center p-bs">
    <the-search class="mb-bs" />
    <posts-list class="posts_list" />
  </section>
</template>

<style scoped>
@layer page {
  .posts {
    --_border-color: var(--gray-bright-3);

    height: stretch;

    .posts_list {
      overflow: auto;
      flex:1;
    }
  }
}
</style>
