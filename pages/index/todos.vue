<script setup lang="ts">
const { data: { body: todo_data } } = await useTodo();
</script>

<template>
  <template v-for="[name, ...details] of todo_data" :key="name">
    <nuxt-layout name="system">
      <template #input>
        ls ./todos/{{ name }}
      </template>
      <template #output>
        <todo-part class="intro-ls_part" :list="details" />
      </template>
    </nuxt-layout>
  </template>
  <nuxt-layout name="system" />
</template>
