<script setup lang="ts">
const { showingCapabilities } = await useCapability();
</script>

<template>
  <template v-for="{ capability_name, capabilities } of showingCapabilities" :key="capability_name">
    <nuxt-layout name="system">
      <template #input>
        ls ./capabilities/{{ capability_name }}
      </template>
      <template #output>
        <capability :capabilities="capabilities" />
      </template>
    </nuxt-layout>
  </template>
  <nuxt-layout name="system" />
</template>
