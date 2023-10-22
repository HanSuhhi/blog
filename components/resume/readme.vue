<script setup lang="ts">
const helps = [
  ["Hey there! 👋 You look great! ", "mt-small"],
  ["Welcome to my blog, which is a simple imitation of the Linux system."],
  ["Type 'help' or '?' to see list of available commands."]

  // ["This blog 📑 has been open sourced at https://github.com/HanSuhhi/don-blog.", "mt-bs"],
  // ["Would you mind giving me a 🌟 star? I'd really appreciate it."],
];
</script>

<template>
  <terminal-output tag="h1" class="readme h-reset">
    小右 Don / Filine
    <img class="readme_badge absolute" src="~/assets/images/badge.png" alt="" srcset="">
  </terminal-output>
  <template v-for="[help, classes], index of helps" :key="index">
    <terminal-output :class="classes">
      {{ help }}
    </terminal-output>
  </template>
</template>

<style scoped>
@layer comp {
  .readme {
    --_size: 64px;

    width: fit-content;

    font-size: var(--_size);
    line-height: normal;
    color: transparent;
    white-space: nowrap;

    -webkit-text-stroke: 2px var(--_color);

    .readme_badge {
      --_badge-scale: 0.4;
      --_badge-top: -70%;
      --_badge-right: -15%;

      top: var(--_badge-top);
      right: var(--_badge-right);
      zoom: var(--_badge-scale);
      display: inline-block;
    }
  }
}
</style>
