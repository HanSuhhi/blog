<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { post } = defineProps<{ post: Pick<ParsedContent, string> }>();
</script>

<template>
  <section class="post flex-column-start p-bs">
    <header class="post-date">
      {{ post.created }}
    </header>
    <h3 class="h-reset post-title mt-mini">
      {{ post.title }}
    </h3>
    <p class="p-reset text-ellipsis post-description mt-small mb-mini ">
      {{ post.description }}
    </p>
    <footer class="post-footer flex-row-between">
      <ol class="ol-reset post-tags mt-small">
        <template v-for="tag of post.tags" :key="tag">
          <posts-tag tag="li" class="pseudo-after double-border">
            {{ tag }}
          </posts-tag>
        </template>
      </ol>
      <p class="p-reset post-predict">
        预计阅读时间 -
        <span class="post-predict_detail">{{ post.predict }}</span>
        分钟
      </p>
    </footer>
  </section>
</template>

<style scoped>
@layer comp {
  .post {
    --_size: var(--font-body, 18px);
    --_color: var(--main-color-bright-1, yellow);
    --_bg-color: hsl(0deg 0% 100% / 10%);

    border-bottom: 1px dotted var(--border-color);

    .post-date {
      --_size: var(--font-body-small, 14px);

      font-size: var(--_size);
      font-weight: bold;
      color: var(--_color);
    }

    .post-title {
      --_size: var(--font-title-main, 24px);
      --_color: var(--white, white);

      font-size: var(--_size);
      color: var(--_color);
    }

    .post-description {
      --_max-length: 5;
      --_color: var(--gray-bright-3, gray);
      --_size: var(--font-body, 24px);

      flex: 1;
      font-size: var(--_size);
      color: var(--_color);
    }

    .post-footer {
      align-items: flex-end;

      .post-tags {
        --_size: var(--font-body-small, 14px);
        --_db-top: 2.5px;

        display: flex;
        font-size: var(--_size);
        font-weight: bold;
      }

      .post-predict {
        --_size: var(--font-body-small, 12px);

        font-size: var(--_size);
      }
    }
  }
}
</style>
