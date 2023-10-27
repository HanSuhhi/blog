<script setup lang="ts">
const emits = defineEmits<Emit>();
interface Emit { (e: "isFinish"): void }

const duration = 2000;
const out_duration = duration + 500;

const progess = ref(0);
const output = useTransition(progess, {
  duration,
  transition: [0.55, 0, 0.1, 1]
});

onBeforeMount(() => progess.value = 10);

onNuxtReady(() => {
  progess.value = 100;
  setTimeout(emits.bind(null, "isFinish"), out_duration);
});

// slogan
const { one_slogan } = useSlogan();
const showSlogan = computed(() => {
  const slogan = one_slogan();
  return [slogan, slogan.length];
});
</script>

<template>
  <div class="loading flex-center">
    <div class="loading-slogan">
      {{ showSlogan[0] }}
    </div>
    <span class="loading-caret" />
    <div class="loading-number">
      {{ Math.floor(output) }}
    </div>
  </div>
</template>

<style scoped>
@layer comp {
  .loading {
    --_font-size: 44px;

    pointer-events: none;

    position: absolute;
    z-index: 999;
    inset: 0;

    background-color: var(--_bg-color);
    border-radius: var(--border-radius);

    .loading-number {
      position: absolute;
      right: var(--large);
      bottom: 0;
      font-size: 81px;
    }

    .loading-slogan {
      --_length: v-bind(showSlogan[1]);
      --_width: calc( var(--_length) * 1em);

      overflow: hidden;

      width: var(--_width);

      font-size: var(--_font-size);
      font-weight: bold;
      white-space: nowrap;

      border-right: 1px solid transparent;

      animation: width-extend 2s;
      animation-timing-function: var(--transition-timing-function);
    }

    .loading-caret {
      --_width: 4px;
      --_bg-color: var(--white-deep-2, white);

      width: var(--_width);
      height: calc( var(--_font-size) + 20px);
      margin-left: var(--small);

      background-color: var(--_bg-color);

      animation: blink-caret var(--flicker) infinite;
      animation-timing-function: var(--transition-timing-function);
    }

  }
}
</style>
