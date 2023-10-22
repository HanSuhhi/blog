<script setup lang="ts">
import { CapabilitySymbol } from "~/composables/provide-inject";

const { capabilities } = defineProps<{ capabilities: DisplayCapabilityList[] }>();

provide(CapabilitySymbol, capabilities);
</script>

<template>
  <capability-total />
  <capability-list />
</template>
