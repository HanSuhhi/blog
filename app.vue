<script setup lang="ts">
const loadingState = ref(true);

function finish_loading() {
  loadingState.value = false;
}
</script>

<template>
  <nuxt-layout>
    <transition>
      <loading v-if="loadingState" @is-finish="finish_loading" />
    </transition>
    <nuxt-page />
  </nuxt-layout>
</template>

<style scoped>
@layer layout {
  .app-loading {
    background-color: transparent;
  }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity var(--transition-prop);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
