<script lang="ts" setup>
const props = defineProps<{ capabilities: DisplayLiItem[] }>();

const one_chunk_max_length = 10;
</script>

<template>
  <div class="li-list">
    <template v-for="_capabilities, index of useChunk(props.capabilities, one_chunk_max_length)" :key="index">
      <ol
        class="ol-reset li-list_content"
        :style="{ '--_column-length': _capabilities.length }"
        :class="`li-list_${index}`"
      >
        <template
          v-for="[name, file_system, children_length, month, day, hour, minute, type] of _capabilities" :key="name"
        >
          <li
            :data-type="type"
            class="li-list_item mr-bm"
          >
            <span class="mr-small">{{ file_system }}</span>
            <span class="mr-small">{{ children_length }}</span>
            <span class="mr-small">root</span>
            <span class="mr-small">root</span>
            <span class="mr-small">{{ month }}</span>
            <span class="mr-small">{{ day }}</span>
            <span class="mr-small">{{ hour }}:{{ minute }}</span>
            <span>{{ name }}</span>
          </li>
        </template>
      </ol>
    </template>
  </div>
</template>

<style scoped>
@layer comp {
  .li-list_content {
    --_column-length: 0;
    --_column-max: 5;
    --_item-height: var(--_line-height);

    display: flex;
    flex-flow: column wrap;
    flex-direction: column;
    align-items: flex-start;

    height: calc(min(var(--_column-max), var(--_column-length)) * var(--_item-height));

    font-size: var(--_font-size);
    white-space: nowrap;

    .li-list_item {
      --_item-color: inherit;

      line-height: var(--_item-height);
      color: var(--_item-color);

      &[data-type="learning"] {
        --_item-color: var(--_learning-theme);
      }

      &[data-type="rusty"] {
        --_item-color: var(--_rusty-theme);
      }
    }

    &:not(:first-child) {
      margin-top: var(--small);
    }
  }

}
</style>
