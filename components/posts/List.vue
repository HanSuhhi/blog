<script lang="ts" setup>
const { data: posts } = await useAsyncData("posts", () => {
  return queryContent("/posts")
    .only(["title", "description", "tags", "created", "predict"])
    .sort({ created: -1 })
    .find();
});

const showPosts = computed(() => {
  let inLeftSide = false;
  let leftNum: number | undefined;
  return posts.value?.map((post, index) => {
    if (!index) return [post, 1] as const;
    if (!leftNum) {
      leftNum = 2;
      return [post, leftNum] as const;
    }
    const rightNum = inLeftSide ? 4 : 1;
    leftNum = undefined;
    inLeftSide = !inLeftSide;
    return [post, rightNum] as const;
  });
});
</script>

<template>
  <article class="posts-list">
    <template v-for="[post, grow] of showPosts" :key="post.title">
      <ContentRenderer :value="post">
        <posts-post class="posts-list_post" :style="`flex-grow:${grow};`" :post="post" />
      </ContentRenderer>
    </template>
  </article>
</template>

<style scoped>
@layer comp {
  .posts-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .posts-list_post {
      flex-basis: calc(100% / 3);

      &:first-child {
        flex-basis: 100%;
      }

      &:last-child {
        border-bottom: 0;
      }

      &:nth-child(even) {
        border-right: 1px dotted var(--border-color);
      }

      &:first-child,
      &:last-child {
        border-right: 0;
      }
    }
  }
}
</style>
