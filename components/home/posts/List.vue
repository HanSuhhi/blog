<script lang="ts" setup>
const { data: posts } = await useAsyncData("posts", () => {
  return queryContent("/posts")
    .only(["title", "description", "tags", "created", "predict"])
    .find();
});
</script>

<template>
  <article class="posts-list">
    <template v-for="post of posts" :key="post.title">
      <ContentRenderer :value="post">
        <posts-post class="posts-list_post mt" :post="post" />
      </ContentRenderer>
    </template>
  </article>
</template>

<style scoped>
@layer page {
  .posts-list {
    --_mt-size: var(--large);

    width: 100%;

    .posts-list_post {
      --_mt-size: 48px;

      &:first-child {
        --_mt-size: var(--large, 36px);
      }
    }
  }
}
</style>
