<script lang="ts" setup>
const one_chunk_max_length = 10;
const cababilities = getCapabilities();
</script>

<template>
  <div class="capability-list">
    <template v-for="_capabilities, index of useChunk(cababilities, one_chunk_max_length)" :key="index">
      <ol
        class="ol-reset capability-list_content"
        :style="{ '--_column-length': _capabilities.length }"
        :class="`capability-list_${index}`"
      >
        <template
          v-for="[name, file_system, children_length, month, day, hour, minute, type] of _capabilities" :key="name"
        >
          <li
            :data-type="type"
            class="capability-list_item mr-bs"
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
  .capability-list_content {
    --_column-length: 0;
    --_column-max: 5;
    --_item-height: var(--_line-height);

    display: flex;
    flex-flow: column wrap;
    flex-direction: column;
    align-items: flex-start;

    height: calc(min(var(--_column-max), var(--_column-length)) * var(--_item-height));

    white-space: nowrap;

    .capability-list_item {
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
