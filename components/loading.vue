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
</script>

<template>
  <div class="loading flex-center">
    <div class="loading-slogan">
      {{ one_slogan() }}
    </div>
    <div class="loading-number">
      {{ Math.floor(output) }}
    </div>
  </div>
</template>

<style scoped>
@layer comp {
  .loading {
    pointer-events: none;

    position: absolute;
    z-index: 999;
    inset: 0;

    background-color: var(--_bg-color);
    border-radius: var(--border-radius);
  }

  .loading-number {
    position: absolute;
    right: var(--large);
    bottom: 0;
    font-size: 81px;
  }

  .loading-slogan {
    font-size: 44px;
    font-weight: bold;
  }
}
</style>
