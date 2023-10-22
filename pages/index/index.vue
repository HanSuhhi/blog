<template>
  <nuxt-layout name="system">
    <template #input>
      cat ./readme.md
    </template>
    <template #output>
      <resume-readme />
    </template>
  </nuxt-layout>
  <nuxt-layout name="system" />
</template>
